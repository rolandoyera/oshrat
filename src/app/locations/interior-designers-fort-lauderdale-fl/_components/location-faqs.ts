/**
 * Shared FAQ copy for the location landing pages. Only two things vary by
 * location: the city name (interpolated into questions/answers) and the
 * neighborhoods answer (each page describes its own areas). Everything else
 * is deliberately identical across pages. Feeds both <FaqSection /> and the
 * FAQPage JSON-LD, so keep questions/answers plain text.
 */
export function buildLocationFaqs({
  city,
  neighborhoodsAnswer,
}: {
  /** Display name used in copy, e.g. "Fort Lauderdale". */
  city: string;
  /** Full answer to "Which {city} neighborhoods do you work in?" */
  neighborhoodsAnswer: string;
}): { question: string; answer: string }[] {
  return [
    {
      question: `What does it cost to hire an interior designer in ${city}?`,
      answer:
        "It depends on scope, and we believe in being direct about it. A single-space project like a kitchen or primary suite is a different investment than a full home renovation or new construction interior, so every engagement is quoted per project after an initial consultation. We provide a detailed fee proposal before any work begins, so there are no surprises at install.",
    },
    {
      question: `Which ${city} neighborhoods do you work in?`,
      answer: neighborhoodsAnswer,
    },
    {
      question:
        "Do you offer interior design consulting, or only full-service projects?",
      answer:
        "Both. Our interior design consulting engagements suit clients who want expert direction on layout, palette, and sourcing while managing execution themselves. Full-service work, the majority of our studio, carries a project from space planning through procurement, custom furnishings, and installation with a single point of accountability.",
    },
    {
      question: "Do I need an interior decorator or an interior designer?",
      answer:
        "An interior decorator works with what a room already is: furnishings, palettes, styling. An interior designer works with what it could be: space planning, renovations, and coordination with your architect and contractor. Sarvian is a full-service interior design studio, so both live under one roof, with turnkey projects carried from structural space planning to the final styled shelf.",
    },
    {
      question:
        "Do you work with my architect and contractor, or bring your own team?",
      answer: `Either. On new construction we prefer to join alongside your architect early, so the interior and the architecture are resolved together rather than negotiated later. For renovations we coordinate closely with your contractor, or introduce trusted builders and trades we've worked with across ${city} when you need them.`,
    },
    {
      question: "How long does a full home project take?",
      answer:
        "A furnishings-focused project typically runs four to eight months from concept to install; full renovations and new builds run with the construction schedule, usually twelve to twenty-four months. Lead times on custom pieces are the honest constraint, so we sequence orders early and the home installs in one coherent reveal, not in pieces.",
    },
    {
      question: `What makes Sarvian different from other interior design firms in ${city}?`,
      answer:
        "Restraint, mostly. We don't design to a house style or a coastal formula. Each project is drawn from the architecture, the light, and the way you actually live. Every piece is specified before fabrication begins, and the principal who starts your project is the one who finishes it.",
    },
    {
      question: "Do you offer consultations?",
      answer:
        "Yes. We offer consultations for most projects, though availability can vary by scope, location, and schedule. Reach out through the contact form and we'll let you know what's possible.",
    },
    {
      question: "Can you help with custom furniture or built-ins?",
      answer:
        "Yes. Sarvian Design Group can assist with custom design elements such as built-ins, lighting, furniture pieces, and other details that may require drawings, specifications, or coordination with fabricators.",
    },
  ];
}
