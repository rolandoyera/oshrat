// Single source of truth for the studio's public contact details.
// Update here and every surface follows: Footer, ContactDrawerContent,
// ProjectModalProvider, theme demo, JSON-LD, contact emails.
export const SITE = {
  name: "SARVIAN DESIGN GROUP",
  slogan: "design & architecture",
  email: "osh@sarviandg.com",
  /** E.164, for tel: links and JSON-LD. */
  phone: "+19544444803",
  phoneDisplay: "(954) 444-4803",
  whatsappUrl: "https://wa.me/16466394147",
  whatsappDisplay: "+1 (646) 639-4147",
  instagramUrl: "https://www.instagram.com/sarviandesigngroup/",
  instagramHandle: "@sarviandesigngroup",
} as const;
