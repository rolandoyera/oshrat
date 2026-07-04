import "server-only";

import { Timestamp } from "firebase-admin/firestore";

import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";

// This site's identity, stamped onto every lead it originates. The CRM dashboard
// is multi-tenant and displays whatever name travels with the record, so the
// origin must be declared here (by the originating site), never inferred there.
const WEBSITE_ACTOR = {
  type: "system" as const,
  id: "website",
  name: "sarviandg.com",
};

const CRM_PROPERTY_TYPES = new Set([
  "residential",
  "commercial",
  "hospitality",
  "multifamily",
  "retail",
  "office",
  "other",
]);

type WebsiteLeadInput = {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  message?: string;
  projectType?: string;
  source?: string;
};

function requireOrganizationId() {
  const organizationId = process.env.WEBSITE_LEAD_ORGANIZATION_ID;
  if (!organizationId) {
    throw new Error(
      "Missing required environment variable: WEBSITE_LEAD_ORGANIZATION_ID",
    );
  }
  return organizationId;
}

export async function createWebsiteLead(input: WebsiteLeadInput) {
  const db = getFirebaseAdminDb();
  const organizationId = requireOrganizationId();
  const leadRef = db.collection("leads").doc();
  const now = Date.now();
  const normalizedProjectType = input.projectType?.toLowerCase();
  const propertyType =
    normalizedProjectType && CRM_PROPERTY_TYPES.has(normalizedProjectType)
      ? normalizedProjectType
      : undefined;
  // Human-readable lead origin shown in the CRM. Known sources get a distinct
  // label; anything unmapped falls back to the generic project-form label.
  const SOURCE_DETAIL: Record<string, string> = {
    contact: "Website contact form",
    project: "Website project form",
    services_email_studio: "Website — Services page (Email the studio)",
  };
  const sourceDetail =
    (input.source && SOURCE_DETAIL[input.source]) || "Website project form";
  // Customer's verbatim message → customerComments (read-only on the CRM,
  // kept separate from the team's internal `notes`). Capped to guard against spam.
  const customerComments = input.message?.trim().slice(0, 200) || undefined;

  const lead = {
    uid: leadRef.id,
    organizationId,
    isCompany: false,
    stage: "new",
    firstName: input.firstName,
    ...(input.lastName ? { lastName: input.lastName } : {}),
    email: input.email,
    ...(input.phone ? { phone: input.phone } : {}),
    source: "website",
    sourceDetail,
    ...(propertyType ? { propertyType } : {}),
    ...(customerComments ? { customerComments } : {}),
    createdBy: WEBSITE_ACTOR,
    updatedBy: WEBSITE_ACTOR,
    createdAt: now,
    updatedAt: now,
    lastActivityAt: now,
  };

  await leadRef.set(lead);

  // CRM bell notification. Shape mirrors AppNotification in the dashboard repo
  // (apps/dashboard/src/lib/types.ts) — no shared package, synced MANUALLY.
  // Best-effort: a notification failure never fails the lead intake.
  try {
    const notificationRef = db.collection("notifications").doc();
    await notificationRef.set({
      notificationId: notificationRef.id,
      organizationId,
      type: "lead_created",
      audience: "org",
      title: "New website lead",
      body: `${[input.firstName, input.lastName].filter(Boolean).join(" ")} — ${sourceDetail}`,
      href: `/dashboard/leads/${leadRef.id}`,
      actor: WEBSITE_ACTOR,
      readBy: [],
      dismissedBy: [],
      createdAt: now,
      // Firestore TTL field (~60 days) — must be a real Timestamp.
      expireAt: Timestamp.fromMillis(now + 60 * 86_400_000),
    });
  } catch (error) {
    console.error("Failed to write lead notification:", error);
  }

  return { leadId: leadRef.id };
}
