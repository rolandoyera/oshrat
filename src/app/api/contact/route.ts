import { NextResponse } from "next/server";
import { z } from "zod";
import { createWebsiteLead } from "@/lib/server/create-website-lead";

const Schema = z.object({
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  nickname_confirm: z.string().optional(),
  message: z.string().max(200).optional(),
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

// Branded lead-notification email — mirrors the CRM's contract email
// (buildContractEmailHtml): table layout with INLINE styles only (Gmail/Outlook
// strip <style> blocks), dark logo on a tinted page, white content card, muted
// footer. Keep this visually in sync with that template.
const BRAND_PAGE_BG = "#F0E9DB";
const BRAND_ACCENT = "#A37F51";
const BRAND_FONT = "Arial, Helvetica, sans-serif";
const BRAND_LOGO_URL = "https://www.sarviandg.com/logo-s.png";
const BRAND_COMPANY = "Sarvian Design Group";

function buildLeadEmailHtml(args: {
  heading: string;
  intro: string;
  leadId: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  projectType?: string;
  message?: string;
}): string {
  const year = new Date().getFullYear();
  const fullName = `${args.firstName} ${args.lastName ?? ""}`.trim();

  const row = (label: string, valueHtml: string) => `
                  <tr>
                    <td valign="top" style="padding:6px 16px 6px 0;font-family:${BRAND_FONT};font-size:14px;line-height:1.6;font-weight:bold;color:#1F1B16;white-space:nowrap;">${label}</td>
                    <td valign="top" style="padding:6px 0;font-family:${BRAND_FONT};font-size:14px;line-height:1.6;color:#3A352E;">${valueHtml}</td>
                  </tr>`;

  const rows = [
    row("Name", escapeHtml(fullName)),
    row(
      "Email",
      `<a href="mailto:${escapeHtml(args.email)}" style="color:${BRAND_ACCENT};text-decoration:underline;">${escapeHtml(args.email)}</a>`,
    ),
    args.phone
      ? row(
          "Phone",
          `<a href="tel:${args.phone.replace(/[^\d+]/g, "")}" style="color:${BRAND_ACCENT};text-decoration:underline;">${escapeHtml(args.phone)}</a>`,
        )
      : "",
    args.projectType ? row("Project Type", escapeHtml(args.projectType)) : "",
    args.message
      ? row("Message", escapeHtml(args.message).replace(/\n/g, "<br>"))
      : "",
  ].join("");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:${BRAND_PAGE_BG};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND_PAGE_BG};">
      <tr>
        <td align="center" style="padding:12px 16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;">
            <tr>
              <td align="center" style="padding:8px;"><img src="${BRAND_LOGO_URL}" alt="${BRAND_COMPANY}" height="96" style="display:block;border:0;outline:none;text-decoration:none;height:96px;width:auto;margin:0 auto;" /></td>
            </tr>
            <tr>
              <td style="background-color:#FFFFFF;border-radius:8px;padding:40px;">
                <h1 style="margin:0 0 24px;font-family:${BRAND_FONT};font-size:30px;line-height:1.2;font-weight:bold;color:#1F1B16;">${args.heading}</h1>
                <p style="margin:0 0 24px;font-family:${BRAND_FONT};font-size:16px;line-height:1.6;color:#3A352E;">${args.intro}</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 8px;font-family:${BRAND_FONT};font-size:13px;line-height:1.6;color:#8A8174;">
                <p style="margin:0 0 8px;">Lead ID: ${escapeHtml(args.leadId)}</p>
                <p style="margin:0;">&copy; ${year} ${BRAND_COMPANY}. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
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
      nickname_confirm,
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
      honeypotPresent: nickname_confirm !== undefined,
      honeypotLength: nickname_confirm?.length ?? 0,
      tsType: typeof ts,
      elapsedFromTs: typeof ts === "number" ? now - ts : null,
    });

    if (nickname_confirm) {
      console.warn(`[contact:${requestId}] honeypot filled but allowed`, {
        honeypot: "nickname_confirm",
        honeypotLength: nickname_confirm.length,
      });
    }

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
    const heading = isContact ? "New website inquiry." : "New project inquiry.";
    const intro = `You've received a ${leadLabel} from the ${BRAND_COMPANY} website.`;

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
          htmlContent: buildLeadEmailHtml({
            heading,
            intro,
            leadId,
            firstName,
            lastName,
            email,
            phone,
            projectType,
            message,
          }),
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
