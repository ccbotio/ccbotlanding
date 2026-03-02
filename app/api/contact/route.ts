import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Send to team
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "CC Bot <noreply@ccbot.io>",
      to: process.env.CONTACT_EMAIL || "contact@ccbot.io",
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e4d4ec;">
          <div style="background: linear-gradient(135deg, #2a1845, #4a2d6b); padding: 32px; text-align: center;">
            <h1 style="color: #F3FF97; margin: 0; font-size: 20px; letter-spacing: 1px;">CC Bot Wallet</h1>
            <p style="color: rgba(213,165,227,0.8); margin: 8px 0 0; font-size: 13px;">New Contact Form Submission</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e6f5; color: #9d8da5; font-size: 13px; width: 100px; vertical-align: top;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e6f5; color: #0f172a; font-size: 14px;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e6f5; color: #9d8da5; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e6f5; color: #0f172a; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #5e2d79;">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e6f5; color: #9d8da5; font-size: 13px; vertical-align: top;">Subject</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e6f5; color: #0f172a; font-size: 14px;">${escapeHtml(subject)}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #9d8da5; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #0f172a; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</td>
              </tr>
            </table>
          </div>
          <div style="background: #faf6fc; padding: 20px 32px; text-align: center; border-top: 1px solid #e4d4ec;">
            <p style="color: #9d8da5; font-size: 12px; margin: 0;">This email was sent from the CC Bot Wallet contact form.</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to sender
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "CC Bot <noreply@ccbot.io>",
      to: email,
      subject: `Re: ${subject}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e4d4ec;">
          <div style="background: linear-gradient(135deg, #2a1845, #4a2d6b); padding: 32px; text-align: center;">
            <h1 style="color: #F3FF97; margin: 0; font-size: 20px; letter-spacing: 1px;">CC Bot Wallet</h1>
          </div>
          <div style="padding: 32px;">
            <p style="color: #0f172a; font-size: 15px; margin: 0 0 16px;">Hi ${escapeHtml(name)},</p>
            <p style="color: #475569; font-size: 14px; line-height: 1.7; margin: 0 0 16px;">
              Thank you for reaching out. We have received your message and our team will get back to you within 24 hours.
            </p>
            <p style="color: #475569; font-size: 14px; line-height: 1.7; margin: 0 0 24px;">
              In the meantime, feel free to explore our resources:
            </p>
            <div style="text-align: center; margin: 24px 0;">
              <a href="https://t.me/ccbotwallet_bot" style="display: inline-block; background: #F3FF97; color: #0f172a; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 14px;">Open CC Bot Wallet</a>
            </div>
            <p style="color: #475569; font-size: 14px; line-height: 1.7; margin: 0;">
              Best regards,<br/>
              <strong style="color: #0f172a;">CC Bot Wallet Team</strong>
            </p>
          </div>
          <div style="background: #faf6fc; padding: 20px 32px; text-align: center; border-top: 1px solid #e4d4ec;">
            <p style="color: #9d8da5; font-size: 12px; margin: 0 0 8px;">
              <a href="https://t.me/ccbotwalletchat" style="color: #5e2d79; text-decoration: none;">Community</a> &nbsp;&middot;&nbsp;
              <a href="https://x.com/ccbotio" style="color: #5e2d79; text-decoration: none;">X (Twitter)</a> &nbsp;&middot;&nbsp;
              <a href="https://github.com/ccbotio" style="color: #5e2d79; text-decoration: none;">GitHub</a>
            </p>
            <p style="color: #9d8da5; font-size: 11px; margin: 0;">&copy; ${new Date().getFullYear()} CC Bot Wallet. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
