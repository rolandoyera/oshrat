"use client";
import { useState, useEffect } from "react";
import { PlusIcon, ChevronRight } from "lucide-react";
import Image from "next/image";
import Container from "./ui/Container";
import ScrollReveal from "./ui/ScrollReveal";

interface AccordionPanel {
  title: string;
  content: string;
  image: string;
  alt: string;
}
interface AccordionProps {
  panels?: AccordionPanel[];
  className?: string;
}

type Phase = "idle" | "closing" | "opening";

const OUT_MS = 220; // content fade out
const PANEL_MS = 500; // panel size transition (width on desktop, height on mobile)

const OurApproachSection: React.FC<AccordionProps> = ({
  panels: customPanels,
}) => {
  const [activePanel, setActivePanel] = useState<number | null>(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [pendingPanel, setPendingPanel] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);

  const openPanel = (index: number) => {
    if (locked || index === activePanel) return;
    setPendingPanel(index);
    setPhase("closing");
    setLocked(true);
  };

  useEffect(() => {
    if (phase !== "closing") return;
    const t1 = setTimeout(() => {
      setActivePanel(pendingPanel);
      setPhase("opening");
      const t2 = setTimeout(() => {
        setPhase("idle");
        setLocked(false);
      }, PANEL_MS);
      return () => clearTimeout(t2);
    }, OUT_MS);
    return () => clearTimeout(t1);
  }, [phase, pendingPanel]);

  const defaultPanels: AccordionPanel[] = [
    {
      title: "Discovery and Vision",
      content:
        "We begin with a collaboration to understand goals, lifestyle, and budget, then walk the site to assess opportunities. We discuss aesthetic direction, indoor–outdoor flow, and functional needs for every space. You'll receive a concise project brief outlining scope, priorities, mood references, timelines, and options for phasing.",
      image: "/assets/swatch-2.jpg",
      alt: "Samples of marble, wood and fabrics for a home design project.",
    },
    {
      title: "Concept Design Presentation",
      content:
        "We translate the brief into preliminary floor plans, furniture layouts, and massing/elevation studies, supported by mood boards, materials, and early renderings. You'll see how architecture and interiors work together—spatial flow, focal moments, and a draft finishes palette. We review alternatives and align on a preferred concept and palette direction.",
      image: "/assets/drawing.jpg",
      alt: "Image of a sketch transitioning into a realistic architectural rendering.",
    },
    {
      title: "Refinement and Approval",
      content:
        "Using your feedback as our guide, we refine the design and bring every detail into focus. From custom millwork and lighting plans to furnishings, materials, fixtures, and finishes, each element is thoughtfully considered and coordinated. We work closely with consultants and contractors, align decisions with your budget and timeline, and ensure everything comes together as a cohesive vision. The result is a fully developed design ready to move into implementation.",
      image: "/assets/fabric-review-snapshot.jpg",
      alt: "Designer reviewing fabric samples with a client during a consultation.",
    },
    {
      title: "Procurement and Oversight",
      content:
        "We manage specifications, quoting, and purchase orders; track lead times, fabrication, and quality control; and coordinate warehousing, delivery, and installations. On site, we liaise with contractors and trades, and monitor progress against schedule to protect design intent. You'll receive clear updates and proactive issue-resolution throughout.",
      image: "/assets/furniture-delivery.jpg",
      alt: "Image of a couch in a large warehouse getting ready for delivery.",
    },
    {
      title: "Staging and Delivery",
      content:
        "We oversee the final installation, styling, and finishing touches to ensure the home feels cohesive, comfortable, and ready to be enjoyed from day one. Before project completion, we carefully review the space, address any remaining details, and ensure the finished result reflects the design we set out to achieve.",
      image: "/assets/bedroom-reno-install.jpg",
      alt: "Two workers carefully adding finishing touches to a bedroom design project.",
    },
  ];

  const panels = customPanels || defaultPanels;

  return (
    <div className="bg-cream-300 py-12 lg:py-40">
      <Container className="flex flex-col">
        <ScrollReveal
          direction="left"
          threshold={0.3}
          className="w-full flex items-center justify-center">
          <h2 className="text-[clamp(2rem,1.23rem+5.11vw,4.5rem)] font-normal text-balance tracking-tight uppercase text-center leading-tight">
            Our Methodology
          </h2>
        </ScrollReveal>

        {/* DESKTOP/TABLET: sideways accordion */}
        <ScrollReveal direction="right" threshold={0.3} delay={300}>
          <div className="hidden lg:flex h-[700px] overflow-hidden w-full mt-12">
            {panels.map((panel, index) => {
              const isActive = activePanel === index;
              const isClosingThis = isActive && phase === "closing";
              const showContent = isActive && phase !== "closing";

              return (
                <div
                  key={index}
                  className={`transition-all duration-[${PANEL_MS}ms] ease-in-out overflow-hidden flex mr-1 rounded border border-black/10 bg-white/60 ${
                    isActive ? "flex-1" : "w-16"
                  }`}>
                  {/* Vertical tab */}
                  <button
                    onClick={() => openPanel(index)}
                    disabled={locked}
                    className={`w-16 h-full focus:outline-none transition-colors duration-200 flex items-center justify-center cursor-pointer border-0 shrink-0 tracking-wider relative disabled:cursor-not-allowed ${
                      isActive ? "bg-accent" : "bg-taupe-800"
                    }`}
                    aria-expanded={isActive}
                    aria-controls={`panel-desktop-${index}`}>
                    <span
                      className={`font-medium -rotate-90 whitespace-nowrap text-lg tracking-wider ${
                        isActive ? "text-white" : "text-cream-200"
                      }`}>
                      {panel.title}
                    </span>
                    {!isActive && (
                      <PlusIcon
                        className="w-4 h-4 text-cream-200 absolute bottom-4"
                        aria-hidden="true"
                      />
                    )}
                  </button>

                  {/* Content */}
                  <div
                    id={`panel-desktop-${index}`}
                    aria-hidden={!isActive}
                    inert={!isActive}
                    className={`flex-1 text-foreground flex flex-col items-center py-6 overflow-hidden transition-all duration-[${PANEL_MS}ms] ease-in-out  ${
                      showContent
                        ? "opacity-100"
                        : isClosingThis
                          ? "opacity-100"
                          : "opacity-0 w-0 px-0"
                    }`}>
                    <div
                      className={`transition-all ease-out aspect-16/8.5 overflow-hidden px-4 xl:px-6  ${
                        showContent
                          ? "opacity-100 translate-y-0 duration-700 delay-300"
                          : "opacity-0 -translate-y-8 duration-200"
                      }`}>
                      <Image
                        src={panel.image}
                        alt={panel.alt}
                        width={1000}
                        height={280}
                        quality={90}
                      />
                    </div>
                    <div
                      className={`mt-5 transition-all ease-out text-center ${
                        showContent
                          ? "opacity-100 translate-y-0 duration-700 delay-300"
                          : "opacity-0 translate-y-8 duration-200"
                      }`}>
                      <p className="text-[20px]! text-center mx-auto px-12">
                        {panel.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* MOBILE: vertical accordion */}
        <div className="lg:hidden w-11/12 mx-auto mt-8 space-y-1">
          {panels.map((panel, index) => {
            const isActive = activePanel === index;
            const isClosingThis = isActive && phase === "closing";
            const showContent = isActive && phase !== "closing";

            // Keep height expanded while closing so content can fade out smoothly
            const expanded = isActive || isClosingThis;

            return (
              <div
                key={index}
                className="rounded border border-black/10 overflow-hidden bg-white/60">
                <button
                  onClick={() => openPanel(index)}
                  disabled={locked}
                  className={`w-full flex items-center justify-between px-4 py-3 transition-colors duration-[${PANEL_MS}ms] ${
                    isActive ? "bg-accent" : "bg-taupe-800"
                  }`}
                  aria-expanded={isActive}
                  aria-controls={`panel-mobile-${index}`}>
                  <span
                    className={`text-sm! font-medium! ${isActive ? "text-white" : "text-cream-200"}`}>
                    {panel.title}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-[${PANEL_MS}ms] text-white ${isActive ? "rotate-90" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {/* Height animation via CSS grid rows (0fr -> 1fr) */}
                <div
                  id={`panel-mobile-${index}`}
                  aria-hidden={!isActive}
                  inert={!isActive}
                  className={`grid transition-[grid-template-rows] duration-[${PANEL_MS}ms] ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="min-h-0 overflow-hidden">
                    {/* Content fade/slide */}
                    <div
                      className={`px-4 py-3 transition-all ease-out ${
                        showContent
                          ? "opacity-100 translate-y-0 duration-700 delay-150"
                          : "opacity-0 translate-y-2 duration-200"
                      }`}>
                      <div className="relative w-full aspect-video mb-3">
                        <Image
                          src={panel.image}
                          alt={panel.title}
                          fill
                          quality={90}
                          sizes="50vw"
                          className="object-cover rounded"
                        />
                      </div>
                      <p className="text-base leading-relaxed text-foreground">
                        {panel.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default OurApproachSection;
