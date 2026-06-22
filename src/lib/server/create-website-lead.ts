import "server-only";

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
  const activityRef = db.collection("activities").doc();
  const now = Date.now();
  const label = [input.firstName, input.lastName]
    .filter(Boolean)
    .join(" ")
    .trim();
  const normalizedProjectType = input.projectType?.toLowerCase();
  const propertyType =
    normalizedProjectType && CRM_PROPERTY_TYPES.has(normalizedProjectType)
      ? normalizedProjectType
      : undefined;
  const sourceDetail =
    input.source === "contact"
      ? "Website contact form"
      : "Website project form";

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
    ...(input.message ? { notes: input.message } : {}),
    createdBy: WEBSITE_ACTOR,
    updatedBy: WEBSITE_ACTOR,
    createdAt: now,
    updatedAt: now,
    lastActivityAt: now,
  };

  const activity = {
    id: activityRef.id,
    organizationId,
    type: "lead_created",
    channel: "website",
    importance: "high",
    actor: WEBSITE_ACTOR,
    source: { type: "lead", id: leadRef.id, label },
    entity: { type: "lead", id: leadRef.id, label },
    visibility: "internal",
    metadata: { channel: "website", sourceDetail },
    createdAt: now,
  };

  const batch = db.batch();
  batch.set(leadRef, lead);
  batch.set(activityRef, activity);
  await batch.commit();

  return { leadId: leadRef.id, activityId: activityRef.id };
}
