/**
 * FAQ copy for the Fort Lauderdale landing page. Every other city now has its
 * own `_components/Faqs.ts` with copy written for that market, so this is the
 * only page still using the builder. Every question interpolates `city` on
 * purpose: the question text renders as an <h3> and lands in the FAQPage
 * JSON-LD, so it is the cheapest place to repeat the target phrase.
 * Feeds both <FaqSection /> and the JSON-LD, so keep everything plain text.
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
        `Scope drives it, and we would rather be specific than vague. A kitchen or a primary suite sits in a different range than a whole-house renovation on the isles or the interiors for a new build, so each engagement is priced individually after a consultation. The fee proposal is detailed and it arrives before any design work starts, which is how ${city} projects avoid surprises at installation.`,
    },
    {
      question: `Which ${city} neighborhoods do you work in?`,
      answer: neighborhoodsAnswer,
    },
    {
      question: `Do you offer interior design consulting in ${city}, or only full-service projects?`,
      answer:
        "Both. Our interior design consulting engagements suit clients who want expert direction on layout, palette, and sourcing while managing execution themselves. Full-service work, the majority of our studio, carries a project from space planning through procurement, custom furnishings, and installation with a single point of accountability.",
    },
    {
      question: `Do I need an interior decorator or an interior designer in ${city}?`,
      answer:
        "An interior decorator works with what a room already is: furnishings, palettes, styling. An interior designer works with what it could be: space planning, renovations, and coordination with your architect and contractor. Sarvian is a full-service interior design studio, so both live under one roof, with turnkey projects carried from structural space planning to the final styled shelf.",
    },
    {
      question: `Do your ${city} interior designers work with my architect and contractor?`,
      answer: `Either. On new construction we prefer to join alongside your architect early, so the interior and the architecture are resolved together rather than negotiated later. For renovations we coordinate closely with your contractor, or introduce trusted builders and trades we've worked with across ${city} when you need them.`,
    },
    {
      question: `How long does a full home interior design project in ${city} take?`,
      answer:
        "A furnishings-focused project typically runs four to eight months from concept to install; full renovations and new builds run with the construction schedule, usually twelve to twenty-four months. Lead times on custom pieces are the honest constraint, so we sequence orders early and the home installs in one coherent reveal, not in pieces.",
    },
    {
      question: `What makes Sarvian different from other interior design firms in ${city}?`,
      answer:
        "Restraint, mostly. We don't design to a house style or a coastal formula. Each project is drawn from the architecture, the light, and the way you actually live. Every piece is specified before fabrication begins, and the principal who starts your project is the one who finishes it.",
    },
    {
      question: `Do you offer consultations for ${city} projects?`,
      answer:
        `Yes, for most ${city} projects, though availability moves with scope and the calendar. Send the contact form with a few details about the property and we will tell you what we can take on and when.`,
    },
    {
      question: `Can your ${city} interior design firm help with custom furniture or built-ins?`,
      answer:
        "Yes. Built-ins, lighting, case goods, and other made-to-order pieces are drawn and specified in house, then built by fabricators we work with across Broward County. On the older waterfront houses, where almost nothing is truly square, custom is usually the only way to get a clean line.",
    },
  ];
}
