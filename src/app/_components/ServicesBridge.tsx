import { Fragment } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ArrowButton from "@/components/ui/ArrowButton";
import { SERVICES } from "../services/_components/ServicesSection";

export default function ServicesBridge() {
  return (
    <Container className="grid grid-cols-1 gap-16 xl:grid-cols-2">
      <ScrollReveal direction="left">
        <p className="eyebrow">What We Do</p>
        <h2 className="h1">Our Services</h2>
        <p>
          Sarvian Design Group stands out for its wide range of services
          tailored to meet the diverse needs of clients. Our approach is rooted
          in customization, ensuring each project reflects the client’s vision.
        </p>
        <p>
          A standout offering is our space planning expertise. This involves
          optimizing layouts to improve functionality and flow within homes and
          businesses. Clients benefit from our meticulous attention to detail in
          each aspect of design.
        </p>
        <p>
          We also provide color consultations, which are pivotal in setting the
          mood and style of a space. Whether aiming for a calming ambiance or
          vibrant energy, our expert advice ensures the perfect palette.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={200}>
        <div className="mx-auto max-w-300">
          <hr className="etched-line" />
          {SERVICES.map((service) => (
            <Fragment key={service.index}>
              <Link
                href="/services"
                className="group grid grid-cols-[2.5rem_1fr_1.25rem] items-center gap-4 px-3 py-5 transition duration-250 ease-[cubic-bezier(.6,.2,.1,1)] hover:translate-x-3 md:grid-cols-[3.5rem_1fr_auto_1.5rem] md:gap-8 md:px-4 md:py-7"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
                  {service.index}
                </span>
                <span>
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
                  aria-hidden="true"
                >
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
  );
}
