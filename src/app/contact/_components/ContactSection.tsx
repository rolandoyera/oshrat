"use client";

import { useState, useEffect, useRef } from "react";
import DoubleBorder from "@/components/ui/DoubleBorder";
import Input from "@/components/ui/Input";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { trackAdsConversion, trackEvent } from "@/lib/gtag";
import { SITE } from "@/lib/site";
import { Turnstile } from "@marsidev/react-turnstile";
import InstagramIcon from "@/components/icons/InstagramIcon";
import MailIcon from "@/components/icons/MailIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const ContactSchema = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name"),
  lastName: z.string().trim().optional(),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .refine(
      (v) => v.replace(/\D/g, "").length >= 10,
      "Enter a valid 10-digit phone number",
    ),
  message: z
    .string()
    .trim()
    .max(200, "Please keep it under 200 characters")
    .optional(),
  nickname_confirm: z.string().optional(),
  ts: z.number().optional(),
});

type ContactValues = z.infer<typeof ContactSchema>;

/**
 * The contact info + inquiry form + social row. Shared by the navbar contact
 * drawer and the /contact page — analytics labels differ per surface.
 */
export default function ContactSection({
  formType,
  linkLocation,
}: {
  /** GA4 `form_type` for form_start / contact_form_submit (e.g. "navbar_drawer"). */
  formType: string;
  /** GA4 `link_location` for email/phone clicks; socials get `${linkLocation}_social`. */
  linkLocation: string;
}) {
  const [isMsgFocused, setIsMsgFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const hasStartedFormRef = useRef(false);

  // Fires once per mount (the drawer remounts this on each open) so GA4 can
  // separate "opened but never touched the form" from "started, then abandoned".
  const handleFormStart = () => {
    if (hasStartedFormRef.current) return;
    hasStartedFormRef.current = true;
    trackEvent("form_start", { form_type: formType });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      nickname_confirm: "",
      ts: Date.now(),
    },
  });

  // Mounts fresh per surface (drawer open / page navigation); initialize the
  // ts parameter to Date.now() on mount.
  useEffect(() => {
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      nickname_confirm: "",
      ts: Date.now(),
    });
  }, [reset]);

  const handleFormSubmit = async (data: ContactValues) => {
    if (!turnstileToken) {
      setSubmitError("Please wait for the verification to finish.");
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "contact",
          turnstileToken,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setIsSent(true);

      trackEvent("contact_form_submit", { form_type: formType });
      trackAdsConversion();

      setTimeout(() => {
        setIsSent(false);
      }, 5000);
      reset();
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSent) {
    return (
      <div className="px-8 py-20 flex-1 flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-2">
          <Check className="w-8 h-8 text-accent" />
        </div>
        <p className="text-3xl font-light text-taupe-800">Message Sent</p>
        <p className="text-base text-taupe-600 max-w-sm leading-relaxed">
          Thank you for reaching out. We will contact you soon to discuss your
          vision.
        </p>
      </div>
    );
  }

  return (
    <div className="px-8 lg:px-0 py-10 flex-1 overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-24 xl:gap-80">
        {/* Left Section: Branding & Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p>
              From grand architectural concepts to the finest custom interior
              details, we craft spaces with precision and purpose. Let's start a
              conversation about your vision.
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-border/30">
            <div>
              <p className="uppercase tracking-wider font-semibold mb-1">
                General Inquiries
              </p>
              <a
                href={`mailto:${SITE.email}`}
                onClick={() =>
                  trackEvent("email_click", { link_location: linkLocation })
                }
                className="text-sm font-sans font-medium text-accent hover:underline">
                {SITE.email}
              </a>
            </div>
            <div>
              <p className="uppercase tracking-wider font-semibold mb-1">
                Call Us
              </p>
              <a
                href={`tel:${SITE.phone}`}
                onClick={() =>
                  trackEvent("phone_click", { link_location: linkLocation })
                }
                className="text-sm font-sans font-medium text-accent hover:underline">
                {SITE.phoneDisplay}
              </a>
            </div>
            <div>
              <div>
                <p className="uppercase tracking-wider font-semibold mb-2">
                  Follow Us
                </p>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram (opens in a new tab)"
                  className="text-foreground icon">
                  <InstagramIcon size={30} color="currentColor" />
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Send email to ${SITE.email} (opens in a new tab)`}
                  onClick={() =>
                    trackEvent("email_click", { link_location: "footer" })
                  }
                  className="text-foreground icon">
                  <MailIcon size={32} color="currentColor" />
                </a>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Chat on WhatsApp with ${SITE.whatsappDisplay} (opens in a new tab)`}
                  onClick={() =>
                    trackEvent("whatsapp_click", { link_location: "footer" })
                  }
                  className="text-foreground icon">
                  <WhatsAppIcon size={26} color="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="space-y-8">
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            onFocusCapture={handleFormStart}
            className="space-y-6">
            <input
              type="text"
              tabIndex={-1}
              autoComplete="new-password"
              aria-hidden="true"
              className="absolute -left-2499.75 top-auto h-px w-px overflow-hidden"
              {...register("nickname_confirm")}
            />

            <input type="hidden" {...register("ts", { valueAsNumber: true })} />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Input
                  placeholder="First Name *"
                  autoComplete="given-name"
                  aria-invalid={!!errors.firstName || undefined}
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-600 font-semibold pl-2">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <Input
                placeholder="Last Name"
                autoComplete="family-name"
                {...register("lastName")}
              />
            </div>

            <div>
              <Input
                placeholder="Your Email *"
                type="email"
                aria-invalid={!!errors.email || undefined}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 font-semibold pl-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Input
                placeholder="Contact number *"
                type="tel"
                aria-invalid={!!errors.phone || undefined}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600 font-semibold pl-2">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="relative w-full">
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                maxLength={200}
                aria-invalid={!!errors.message || undefined}
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
              {errors.message && (
                <p className="mt-1 text-xs text-red-600 font-semibold pl-2">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={setTurnstileToken}
              onExpire={() => setTurnstileToken(null)}
              onError={() => setTurnstileToken(null)}
              options={{ size: "flexible" }}
            />

            {submitError && (
              <p className="text-sm text-red-600 font-medium">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded text-cream-100 bg-accent hover:bg-taupe-800 text-lg font-medium uppercase focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent hover:cursor-pointer hover:shadow hover:shadow-black/20 hover:-translate-y-0.5 transition-all duration-275 ease-[cubic-bezier(.6,.2,.1,1)] disabled:opacity-55 mt-8">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
