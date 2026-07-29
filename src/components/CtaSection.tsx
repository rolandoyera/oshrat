import { SITE } from "@/lib/site";
import Container from "./ui/Container";
import ArrowButton from "./ui/ArrowButton";
import ProjectButton from "./ui/ProjectButton";
import { TextEffect } from "./motion-primitives/text-effect";
import InstagramIcon from "./icons/InstagramIcon";
import MailIcon from "./icons/MailIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function CtaSection({
  heading,
  location = "services_cta",
  formSource = "services_email_studio",
  ctaLabel = "Request Consultation",
  background = "bg-cream-200",
  foreground = "text-foreground",
}: {
  /** Overrides the headline, rendered as `${plain} ${accent}.` with the accent in serif gold. */
  heading?: { plain: string; accent: string };
  location?: string;
  formSource?: string;
  /** Label of the primary (project form) button. */
  ctaLabel?: string;
  /** Tailwind background class for the section. */
  background?: string;
  /** Tailwind text-color class for the body copy. */
  foreground?: string;
}) {
  return (
    <section className={`${background} py-24 lg:py-50`}>
      <Container className="flex flex-col items-center text-center">
        <TextEffect
          as="p"
          preset="fade-in-blur"
          speedReveal={5}
          speedSegment={0.3}
          inView
          className="eyebrow">
          Ready to start?
        </TextEffect>
        <h2 className="text-4xl font-normal tracking-tight text-balance lg:text-7xl">
          {heading ? (
            <span className="block">
              <TextEffect
                as="span"
                preset="fade-in-blur"
                speedReveal={5}
                speedSegment={0.3}
                inView
                className="inline">
                {heading.plain}
              </TextEffect>
              <TextEffect
                as="span"
                preset="fade-in-blur"
                speedReveal={5}
                speedSegment={0.3}
                inView
                delay={0.35}
                className="font-serif text-accent text-[1.6em] leading-none ml-2 inline-block">
                {heading.accent}
              </TextEffect>
              .
            </span>
          ) : (
            <>
              <TextEffect
                as="span"
                preset="fade-in-blur"
                speedReveal={5}
                speedSegment={0.3}
                inView
                className="block">
                Let&apos;s design
              </TextEffect>
              <span className="block">
                <TextEffect
                  as="span"
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}
                  inView
                  delay={0.2}
                  className="inline">
                  something
                </TextEffect>{" "}
                <TextEffect
                  as="span"
                  preset="fade-in-blur"
                  speedReveal={5}
                  speedSegment={0.3}
                  inView
                  delay={0.35}
                  className="font-serif text-accent text-[1.6em] leading-none ml-2 inline-block">
                  beautiful
                </TextEffect>
                .
              </span>
            </>
          )}
        </h2>
        <TextEffect
          as="p"
          preset="fade-in-blur"
          speedReveal={5}
          speedSegment={0.3}
          inView
          delay={0.2}
          className={`mt-6 max-w-2xl ${foreground}`}>
          Tell us about your home and how you want to live in it. We&apos;ll
          walk you through scope, timeline, and the right way to begin.
        </TextEffect>

        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          <ProjectButton
            location={location}
            formSource={formSource}
            className="w-full sm:w-auto justify-center">
            {ctaLabel}
          </ProjectButton>
          <ArrowButton
            href={`tel:${SITE.phone}`}
            variant="secondary"
            className="w-full sm:w-auto justify-center">
            {SITE.phoneDisplay}
          </ArrowButton>
        </div>

        <div
          className={`mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm ${foreground}`}>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram (opens in a new tab)"
            className="icon">
            <InstagramIcon size={30} color="currentColor" />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Send email to Sarvian Design Group (opens in a new tab)"
            className="icon">
            <MailIcon size={34} color="currentColor" />
          </a>
          <a
            href={SITE.whatsappUrl}
            aria-label="Call or text Sarvian Design Group"
            className="icon">
            <WhatsAppIcon size={28} color="currentColor" />
          </a>
        </div>
      </Container>
    </section>
  );
}
