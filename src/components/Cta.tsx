import { SITE } from "@/lib/site";
import InstagramIcon from "@/components/icons/InstagramIcon";
import MailIcon from "@/components/icons/MailIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ProjectButton from "@/components/ui/ProjectButton";
import ArrowButton from "@/components/ui/ArrowButton";
import Container from "@/components/ui/Container";
import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";

export default function Cta() {
  return (
    <section
      data-dup-ignore
      className="relative overflow-hidden py-20 lg:py-50">
      <Image
        src="/projects/sdg-bedroom-remodel-armoire-7.jpg"
        alt="Interior design background image"
        fill
        quality={50}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-[2px]" />
      <Container className="relative z-20 flex flex-col items-center text-center">
        <ScrollReveal>
          <p className="eyebrow mb-4">Ready to start?</p>
          <h2 className="text-4xl font-normal tracking-tight text-balance text-white lg:text-7xl">
            <span className="block">Let&apos;s design</span>
            <span className="block">
              <span className="inline">something</span>{" "}
              <span className="font-serif italic text-accent leading-none ml-2 inline-block">
                beautiful
              </span>
              .
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-white">
            Request a no-obligation consultation. Tell us about your home and
            how you want to live in it.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <ProjectButton
              location="ready_to_start"
              className="w-full sm:w-auto justify-center">
              Request Consultation
            </ProjectButton>
            <ArrowButton
              href={`tel:${SITE.phone}`}
              variant="secondary"
              className="w-full sm:w-auto justify-center">
              {SITE.phoneDisplay}
            </ArrowButton>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (opens in a new tab)"
              className="text-white hover:text-accent hover:scale-110 transition-all duration-200 ease-in-out flex items-center justify-center">
              <InstagramIcon size={30} color="currentColor" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Send email to Sarvian Design Group (opens in a new tab)"
              className="text-white hover:text-accent hover:scale-110 transition-all duration-200 ease-in-out flex items-center justify-center">
              <MailIcon size={34} color="currentColor" />
            </a>
            <a
              href={SITE.whatsappUrl}
              aria-label="Call or text Sarvian Design Group"
              className="text-white hover:text-accent hover:scale-110 transition-all duration-200 ease-in-out flex items-center justify-center">
              <WhatsAppIcon size={28} color="currentColor" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
