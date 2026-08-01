/**
 * Home page FAQ copy — studio-level questions, deliberately distinct from the
 * city-scoped sets under locations/ and the transactional set on /contact, so
 * no FAQPage answer text is duplicated across URLs. Feeds both <FaqSection />
 * and the FAQPage JSON-LD, so keep questions/answers plain text.
 */
export const FAQS: { question: string; answer: string }[] = [
  {
    question: "What kind of interior design firm is Sarvian Design Group?",
    answer:
      "A full-service luxury interior design studio based in Fort Lauderdale, Florida. Full-service means we carry a project from the first space plan through finishes, custom millwork, procurement, and final installation rather than handing it off midway. Most of our work is residential, alongside select commercial and community projects.",
  },
  {
    question: "Which areas of South Florida do you serve?",
    answer:
      "Our studio is in Fort Lauderdale and most of our work sits between Palm Beach and Miami. Locally that means Las Olas, Harbor Beach, Rio Vista, and Coral Ridge, and along the coast Boca Raton, Delray Beach, Palm Beach, Golden Beach, Bal Harbour, and Aventura. We stay close enough to be on site through construction and installation rather than managing from a distance.",
  },
  {
    question: "What does full-service interior design actually include?",
    answer:
      "Space planning, finish and material palettes, lighting plans, 3D renderings, custom furnishings and built-ins, procurement, art and styling, and final installation. It also includes the coordination nobody sees: working with your architect, contractor, and trades so the design intent survives the job site.",
  },
  {
    question: "Do I need an interior decorator or an interior designer?",
    answer:
      "An interior decorator works within the room you already have, choosing furnishings, palettes, and styling. An interior designer changes the room itself through space planning, renovation, and coordination with your architect and contractor. We work as designers, though the furnishing and styling side is included rather than treated as someone else's job.",
  },
  {
    question: "What does it cost to hire an interior designer?",
    answer:
      "Scope drives it, and we prefer to be direct about that. Furnishing a single room is a different investment than a full renovation or a new construction interior, so each project is quoted after an initial consultation and you receive a detailed fee proposal before any work begins. We would rather have the budget conversation early than discover a mismatch at procurement.",
  },
  {
    question: "How long does an interior design project take?",
    answer:
      "Furnishings-led projects usually run four to eight months from concept to installation. Renovations and new builds follow the construction schedule, commonly twelve to twenty-four months. Custom pieces carry the longest lead times, so we place those orders early and install in one pass rather than in stages.",
  },
  {
    question: "Do you take on commercial or community projects?",
    answer:
      "Yes, selectively. Alongside our residential work, the studio is leading the renovation of The Shul of Bal Harbour, where the sanctuary's bronze, stone, and millwork were drawn and specified in-house. We take on commercial, hospitality, and community projects where the scope suits a full-service approach.",
  },
  {
    question: "Will you work with my architect and contractor?",
    answer:
      "Yes. On new construction we prefer to join early, while the plans are still moving, because interiors resolved alongside the architecture avoid the compromises that appear when the two are reconciled after framing. On renovations we coordinate closely with your contractor, or introduce builders and trades we have worked with for years.",
  },
  {
    question: "Do you design single rooms, or only whole homes?",
    answer:
      "Both. A kitchen, a primary suite, or a bath can be its own engagement, and it runs the same process as a whole-home project, scaled to fit. You are not asked to take on a larger scope than the one you came for.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send the contact form with a few details about the space, the scope you have in mind, and your timing. We will follow up to talk through fit and next steps, and schedule a consultation where it makes sense.",
  },
];
