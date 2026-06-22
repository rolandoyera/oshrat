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
  try {
    const parsed = Schema.safeParse(await req.json());
    if (!parsed.success) {
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

    if (company?.trim()) {
      return NextResponse.json({ ok: true });
    }

    if (!ts || Date.now() - ts < 1200) {
      return NextResponse.json({ ok: true });
    }

    const { leadId } = await createWebsiteLead({
      firstName,
      lastName,
      email,
      phone,
      message,
      projectType,
      source,
    });

    const isContact = source === "contact";
    const senderName = isContact
      ? "Website Contact Form"
      : "Website Project Form";
    const subjectLine = isContact
      ? "New Website Inquiry — Sarvian Design"
      : "New Project Inquiry — Sarvian Design";
    const leadLabel = isContact ? "contact lead" : "project lead";

    try {
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
        console.error("Brevo API error after lead creation:", {
          leadId,
          status: response.status,
          error: await response.text(),
        });
      }
    } catch (error) {
      console.error("Brevo request failed after lead creation:", {
        leadId,
        error,
      });
    }

    return NextResponse.json({ ok: true, leadId });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
