import { Fragment } from "react";
import Link from "next/link";
import Container from "./ui/Container";
import ScrollReveal from "./ui/ScrollReveal";
import ArrowButton from "./ui/ArrowButton";
import { SERVICES } from "./ServicesSection";

export default function ServicesBridge() {
  return (
    <section className="bg-cream-200 py-24 lg:py-32">
      <Container size="lg">
        <ScrollReveal direction="up" threshold={0.3} className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
            What We Do
          </p>
          <h2 className="mt-4 text-[clamp(2rem,1.23rem+5.11vw,4.5rem)] font-normal tracking-tight leading-tight">
            Our Services
          </h2>
          <p className="mx-auto mt-6 max-w-[75ch] text-balance text-foreground/85">
            Seven ways we take a home from{" "}
            <em className="text-accent">first sketch to final styling</em> —
            explore the full scope of the studio's work. Whether you need a
            single room reimagined or a full home built from the ground up, each
            service is designed to work independently or as part of a larger
            vision. Below, find the right starting point for your project.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200} threshold={0.1}>
          <div className="mx-auto mt-12 max-w-[1200px] lg:mt-16">
            <hr className="etched-line" />
            {SERVICES.map((service) => (
              <Fragment key={service.index}>
                <Link
                  href="/services"
                  className="group grid grid-cols-[2.5rem_1fr_1.25rem] items-center gap-4 px-3 py-5 transition duration-250 ease-[cubic-bezier(.6,.2,.1,1)] hover:translate-x-3 md:grid-cols-[3.5rem_1fr_auto_1.5rem] md:gap-8 md:px-4 md:py-7">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
                    {service.index}
                  </span>
                  <span>
                    {/* lg:leading-9 keeps the row height an integer (text-3xl ×
                      leading-tight = 37.5px) so the 1px row borders land on
                      whole pixels and render uniformly. */}
                    <span className="block text-2xl font-normal leading-tight tracking-tight text-foreground lg:text-3xl lg:leading-9">
                      {service.title}
                    </span>
                    <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-accent font-bold md:hidden">
                      <span className="mr-1.5">•</span>
                      {service.category}
                    </span>
                  </span>
                  <span className="hidden whitespace-nowrap text-xs uppercase tracking-[0.2em] text-accent font-bold md:block">
                    <span className="mr-1.5">•</span>
                    {service.category}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 justify-self-end text-foreground/60 transition-all duration-250 ease-[cubic-bezier(.6,.2,.1,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    aria-hidden="true">
                    <path d="M5 19L19 5M19 5H8M19 5V16" />
                  </svg>
                </Link>
                <hr className="etched-line" />
              </Fragment>
            ))}
          </div>

          <div className="mt-12 flex justify-center lg:mt-16">
            <ArrowButton href="/services" variant="secondary">
              Explore All Services
            </ArrowButton>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
