"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Button from "./ui/Button";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import Input from "./ui/Input";
import DoubleBorder from "./ui/DoubleBorder";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { trackAdsConversion, trackEvent } from "@/lib/gtag";
import { SITE } from "@/lib/site";
import { Turnstile } from "@marsidev/react-turnstile";

type Ctx = {
  /** `source` labels the lead in GA4 and the CRM (defaults to "project"). */
  open: (source?: string) => void;
  close: () => void;
  toggle: () => void;
};

const ContactModalContext = createContext<Ctx | null>(null);

export const useProjectModal = () => {
  const ctx = useContext(ContactModalContext);
  if (!ctx)
    throw new Error("useProjectModal must be used within ContactModalProvider");
  return ctx;
};

export default function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("project");
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const openFn = useCallback((nextSource = "project") => {
    setSource(nextSource);
    setOpen(true);
  }, []);
  // Deep link: ?project=true auto-opens the modal (e.g. landing page for ads).
  // Read from window instead of useSearchParams so the provider doesn't need a
  // Suspense boundary; the param is stripped so reloads don't re-trigger it.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("project") !== "true") return;
    openFn();
    params.delete("project");
    const qs = params.toString();
    window.history.replaceState(
      null,
      "",
      window.location.pathname + (qs ? `?${qs}` : "") + window.location.hash,
    );
  }, [openFn]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const value = useMemo(
    () => ({ open: openFn, close, toggle }),
    [openFn, close, toggle],
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      {open && <ContactModal onClose={close} source={source} />}
    </ContactModalContext.Provider>
  );
}

/* -------------------- Modal -------------------- */

const ContactSchema = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name"),
  lastName: z.string().trim().optional(),
  phone: z
    .string()
    .trim()
    .min(1, "Phone is required")
    .refine(
      (v) => v.replace(/\D/g, "").length >= 10, // at least 10 digits
      "Enter a valid phone number",
    ),
  email: z.string().email("Enter a valid email"),
  nickname_confirm: z.string().optional(),
  projectType: z.enum(
    [
      "Residential",
      "Commercial",
      "Hospitality",
      "Office",
      "Other",
    ],
    {
      message: "Please select a project type",
    },
  ),
  message: z
    .string()
    .trim()
    .max(200, "Please keep it under 200 characters")
    .optional(),
  ts: z.number().optional(),
});
type ContactValues = z.infer<typeof ContactSchema>;

function ContactModal({
  onClose,
  source,
}: {
  onClose: () => void;
  source: string;
}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      nickname_confirm: "",
      projectType: "" as any,
      message: "",
      ts: Date.now(),
    },
  });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [isSelectFocused, setIsSelectFocused] = useState(false);
  const [isMsgFocused, setIsMsgFocused] = useState(false);
  const closeTimer = React.useRef<number | null>(null);
  const hasStartedFormRef = React.useRef(false);

  // Fires once per modal open (modal mounts fresh each time) so GA4 can
  // separate "opened but never touched the form" from "started, then abandoned".
  const handleFormStart = () => {
    if (hasStartedFormRef.current) return;
    hasStartedFormRef.current = true;
    trackEvent("form_start", { form_type: "modal", source });
  };

  // clean up timer if modal unmounts/closes early
  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const onSubmit = async (data: ContactValues) => {
    setSubmitError(null);
    if (!turnstileToken) {
      trackEvent("contact_form_error", {
        form_type: "modal",
        source,
        reason: "turnstile_pending",
      });
      setSubmitError("Please wait for the verification to finish.");
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source,
          turnstileToken,
        }),
      });
      if (!res.ok) {
        trackEvent("contact_form_error", {
          form_type: "modal",
          source,
          reason: "server",
          status: res.status,
        });
        setSubmitError("Something went wrong. Please try again.");
        return;
      }
      reset();
      setSent(true);

      // Track successful project modal form submission in GA4
      trackEvent("project_form_submit", { form_type: "modal", source });
      trackAdsConversion();

      closeTimer.current = window.setTimeout(() => {
        setSent(false);
        onClose();
      }, 4800);
    } catch {
      trackEvent("contact_form_error", {
        form_type: "modal",
        source,
        reason: "network",
      });
      setSubmitError("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      className="fixed inset-0 z-100 flex items-center justify-center">
      {/* Backdrop with dark + blur */}
      <button
        aria-label="Close contact form"
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Panel */}
      <div
        className="relative mx-4 w-full md:max-w-175 rounded bg-transparent shadow-2xl transition-all duration-200 animate-in fade-in zoom-in-95 flex flex-col overflow-hidden p-0"
        onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full px-2 py-1 text-sm text-gray-500 hover:bg-accent hover:text-white cursor-pointer z-10 transition-colors duration-200"
          aria-label="Close">
          ✕
        </button>

        {/* HEADER SECTION */}
        <div className="border-b border-border/20 px-8 pt-8 pb-5 bg-card rounded-t">
          <h3
            id="contact-title"
            className="text-[28px] font-medium tracking-[-0.012em] text-foreground mb-0">
            {sent ? "Message Sent" : "Let’s talk about your project"}
          </h3>
          <p className="text-[18px] text-foreground/75 font-light">
            {sent
              ? "Thank you for reaching out."
              : "Share a few details and we’ll reach out shortly."}
          </p>
        </div>

        {/* MIDDLE CONTENT SECTION */}
        <div className="px-8 pt-10 pb-14 overflow-y-auto max-h-[60vh] flex-1 bg-card">
          {sent ? (
            <div className="py-8 text-center" aria-live="assertive">
              <CheckCircle2 className="mx-auto h-16 w-16 text-brand stroke-[1.5]" />
              <h2 className="mt-6 text-[22px] font-medium tracking-tight text-foreground">
                We’ll reach out shortly
              </h2>
              <p className="mt-2 text-[16px] text-foreground/80 max-w-sm mx-auto font-light leading-relaxed">
                Thanks—your message is on its way. We’ll contact you soon to
                discuss your vision.
              </p>
              <Button onClick={onClose} className="mt-8 w-full md:w-48 mx-auto">
                Close now
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              onFocusCapture={handleFormStart}
              noValidate
              className="space-y-8 max-w-125 mx-auto">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="new-password"
                aria-hidden="true"
                className="absolute -left-2499.75 top-auto h-px w-px overflow-hidden"
                {...register("nickname_confirm")}
              />

              <input
                type="hidden"
                value={Date.now()}
                {...register("ts", { valueAsNumber: true })}
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="sr-only">
                    First name
                  </label>
                  <Input
                    id="firstName"
                    autoComplete="given-name"
                    placeholder="First Name *"
                    aria-invalid={!!errors.firstName || undefined}
                    aria-describedby={
                      errors.firstName ? "first-name-error" : undefined
                    }
                    className="w-full"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p
                      id="first-name-error"
                      className="mt-1 text-sm text-destructive">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">
                    Last name
                  </label>
                  <Input
                    id="lastName"
                    autoComplete="family-name"
                    placeholder="Last Name"
                    className="w-full"
                    {...register("lastName")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone || undefined}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  placeholder="Contact number *"
                  className="w-full"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email || undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="Your Email *"
                  className="w-full"
                  {...register("email")}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mt-11">
                <label htmlFor="projectType" className="sr-only">
                  Project Type
                </label>
                <Controller
                  control={control}
                  name="projectType"
                  render={({ field }) => (
                    <div className="relative w-full">
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        onOpenChange={setIsSelectFocused}>
                        <SelectTrigger
                          id="projectType"
                          aria-invalid={!!errors.projectType || undefined}
                          aria-describedby={
                            errors.projectType
                              ? "project-type-error"
                              : undefined
                          }
                          className="w-full flex h-11 items-center justify-between bg-transparent! border-none px-2 py-2 text-base text-taupe-800 focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0 outline-none shadow-none cursor-pointer">
                          <SelectValue placeholder="Select a Project Type *" />
                        </SelectTrigger>
                        <SelectContent
                          position="popper"
                          className="z-200 bg-card border border-border/30 text-taupe-800">
                          <SelectItem
                            value="Residential"
                            className="cursor-pointer">
                            Residential
                          </SelectItem>
                          <SelectItem
                            value="Commercial"
                            className="cursor-pointer">
                            Commercial
                          </SelectItem>
                          <SelectItem
                            value="Hospitality"
                            className="cursor-pointer">
                            Hospitality
                          </SelectItem>
                          <SelectItem value="Office" className="cursor-pointer">
                            Office
                          </SelectItem>
                          <SelectItem value="Other" className="cursor-pointer">
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <DoubleBorder
                        left="left-0"
                        borderColor={
                          isSelectFocused ? "bg-accent" : "bg-border/30"
                        }
                        className="transition-all duration-300"
                      />
                    </div>
                  )}
                />
                {errors.projectType && (
                  <p
                    id="project-type-error"
                    className="mt-1 text-sm text-destructive">
                    {errors.projectType.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <div className="relative w-full">
                  <textarea
                    id="message"
                    rows={4}
                    maxLength={200}
                    placeholder="Tell us about your project (optional)"
                    aria-invalid={!!errors.message || undefined}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className="flex w-full bg-transparent border-none px-2 py-2 text-base placeholder:text-taupe-400 placeholder:font-light focus-visible:outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50 text-taupe-800 resize-none animate-none"
                    onFocus={() => setIsMsgFocused(true)}
                    {...register("message", {
                      onBlur: () => setIsMsgFocused(false),
                    })}
                  />
                  <DoubleBorder
                    left="left-0"
                    borderColor={isMsgFocused ? "bg-accent" : "bg-border/30"}
                    className="transition-all duration-300"
                  />
                </div>
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-sm text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={setTurnstileToken}
                onExpire={() => setTurnstileToken(null)}
                // A blocked/broken widget never reaches the API, so this GA4
                // event is the only visibility into that failure mode.
                onError={() => {
                  trackEvent("turnstile_error", { form_type: "modal", source });
                  setTurnstileToken(null);
                }}
                options={{ size: "flexible" }}
              />

              {submitError && (
                <p className="text-sm text-brand" aria-live="polite">
                  {submitError}
                </p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 w-full md:w-80 disabled:opacity-60 mx-auto">
                {isSubmitting ? "Sending…" : "Submit"}
              </Button>
            </form>
          )}
        </div>

        {/* FOOTER SECTION */}
        <div className="border-t border-border/20 bg-taupe-900 py-4 px-8 text-center rounded-b">
          <p className="text-[16px] font-semibold tracking-wider text-muted mb-0">
            Sarvian Design Group
          </p>
          <p>
            <a
              href={`tel:${SITE.phone}`}
              onClick={() =>
                trackEvent("phone_click", { link_location: "project_modal" })
              }
              className="underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm font-mono text-[16px] text-accent"
              aria-label={`Call Sarvian Design Group at ${SITE.phoneDisplay}`}>
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
