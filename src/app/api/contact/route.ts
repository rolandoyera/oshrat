import { NextResponse } from "next/server";
import { z } from "zod";
import { createWebsiteLead } from "@/lib/server/create-website-lead";

const Schema = z.object({
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
  projectType: z.string().optional(),
  source: z.string().optional(),
  ts: z.number().optional(),
});

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character]!,
  );
}

export const runtime = "nodejs";

export async function POST(req: Request) {
  const requestId = crypto.randomUUID();
  const log = (...args: unknown[]) =>
    console.log(`[contact:${requestId}]`, ...args);

  try {
    log("request received");

    let body: unknown;
    try {
      body = await req.json();
      log("JSON body parsed");
    } catch (error) {
      log(
        "JSON parse failed",
        error instanceof Error
          ? { message: error.message, stack: error.stack }
          : { error },
      );
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const parsed = Schema.safeParse(body);
    if (!parsed.success) {
      log("Zod validation failed", {
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path.join("."),
          code: issue.code,
        })),
      });
      return NextResponse.json({ ok: false }, { status: 422 });
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
      projectType,
      source,
      ts,
    } = parsed.data;

    const now = Date.now();
    log("validation ok", {
      namePresent: Boolean(firstName),
      emailDomain: email.includes("@") ? email.split("@")[1] : null,
      phonePresent: Boolean(phone),
      projectType: projectType ?? null,
      source: source ?? null,
      honeypotPresent: company !== undefined,
      honeypotLength: company?.length ?? 0,
      tsType: typeof ts,
      elapsedFromTs: typeof ts === "number" ? now - ts : null,
    });

    if (company?.trim()) {
      log("honeypot filled — silently returning ok (behavior unchanged)");
      return NextResponse.json({ ok: true });
    }
    log("honeypot skipped");

    const elapsedFromTs = typeof ts === "number" ? Date.now() - ts : null;

    if (elapsedFromTs === null) {
      console.warn(`[contact:${requestId}] timestamp missing or invalid`, {
        tsType: typeof ts,
      });
    }

    if (elapsedFromTs !== null && elapsedFromTs < 0) {
      console.warn(`[contact:${requestId}] client timestamp is in the future`, {
        elapsedFromTs,
      });
    }

    const suspiciouslyFast =
      elapsedFromTs !== null &&
      elapsedFromTs >= 0 &&
      elapsedFromTs < 1200;

    if (suspiciouslyFast) {
      console.warn(
        `[contact:${requestId}] suspiciously fast submission allowed`,
        {
          elapsedFromTs,
          thresholdMs: 1200,
        },
      );
    }

    log("before CRM lead creation");
    let leadId: string;
    try {
      ({ leadId } = await createWebsiteLead({
        firstName,
        lastName,
        email,
        phone,
        message,
        projectType,
        source,
      }));
      log("CRM lead creation success", { leadId });
    } catch (error) {
      log(
        "CRM lead creation failed",
        error instanceof Error
          ? { message: error.message, stack: error.stack }
          : { error },
      );
      throw error;
    }

    const isContact = source === "contact";
    const senderName = isContact
      ? "Website Contact Form"
      : "Website Project Form";
    const subjectLine = isContact
      ? "New Website Inquiry — Sarvian Design"
      : "New Project Inquiry — Sarvian Design";
    const leadLabel = isContact ? "contact lead" : "project lead";

    try {
      log("before Brevo send");
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY!,
        },
        body: JSON.stringify({
          sender: { email: "hello@sarviandg.com", name: senderName },
          to: [
            { email: "rolysemail@gmail.com" },
            { email: "osh@sarviandg.com" },
          ],
          replyTo: {
            email: "osh@sarviandg.com",
            name: "Oshrat Rothschild",
          },
          subject: subjectLine,
          textContent: `You've received a ${leadLabel} from SDG website\n\nLead ID: ${leadId}\nFirst Name: ${firstName}\nLast Name: ${lastName ?? ""}\nEmail: ${email}\nPhone: ${phone ?? ""}${projectType ? `\nProject Type: ${projectType}` : ""}${message ? `\n\nMessage:\n${message}` : ""}`,
          htmlContent: `
            <p style="font-family:Arial,sans-serif;font-size:16px;margin-bottom:20px;">
              <strong>You've received a ${leadLabel} from SDG website</strong>
            </p>
            <table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6">
              <tr><td><strong>Lead ID:</strong></td><td>${leadId}</td></tr>
              <tr><td><strong>First Name:</strong></td><td>${escapeHtml(firstName)}</td></tr>
              <tr><td><strong>Last Name:</strong></td><td>${escapeHtml(lastName ?? "")}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${escapeHtml(email)}</td></tr>
              <tr><td><strong>Phone:</strong></td><td>${escapeHtml(phone ?? "")}</td></tr>
              ${projectType ? `<tr><td><strong>Project Type:</strong></td><td>${escapeHtml(projectType)}</td></tr>` : ""}
              ${message ? `<tr><td valign="top"><strong>Message:</strong></td><td>${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>` : ""}
            </table>
          `,
        }),
      });

      if (!response.ok) {
        log("Brevo failure", { leadId, status: response.status });
        console.error("Brevo API error after lead creation:", {
          requestId,
          leadId,
          status: response.status,
          error: await response.text(),
        });
      } else {
        log("Brevo success", { leadId, status: response.status });
      }
    } catch (error) {
      log(
        "Brevo request failed",
        error instanceof Error
          ? { leadId, message: error.message, stack: error.stack }
          : { leadId, error },
      );
      console.error("Brevo request failed after lead creation:", {
        requestId,
        leadId,
        error,
      });
    }

    log("final response returned", { ok: true, leadId });
    return NextResponse.json({ ok: true, leadId });
  } catch (error) {
    log(
      "fatal error — final response returned",
      error instanceof Error
        ? { message: error.message, stack: error.stack }
        : { error },
    );
    console.error("Contact submission error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
