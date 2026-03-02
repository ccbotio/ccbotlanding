import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const { username, email } = await req.json();

    if (!username || !email) {
      return NextResponse.json(
        { error: "Username and email are required." },
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

    const cleanUsername = username.replace(/^@/, "").trim();
    if (!cleanUsername) {
      return NextResponse.json(
        { error: "Invalid username." },
        { status: 400 }
      );
    }

    // Check if already registered
    const { data: existing } = await supabase
      .from("waitlist")
      .select("id")
      .or(`email.eq.${email},username.eq.${cleanUsername}`)
      .limit(1);

    if (existing && existing.length > 0) {
      return NextResponse.json(
        { error: "You're already on the waitlist!" },
        { status: 409 }
      );
    }

    // Insert into waitlist
    const { error } = await supabase.from("waitlist").insert({
      username: cleanUsername,
      email: email.toLowerCase(),
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to join waitlist. Please try again." },
        { status: 500 }
      );
    }

    // Send confirmation email
    try {
      await resend.emails.send({
        from: process.env.EMAIL_FROM || "CC Bot <noreply@ccbot.io>",
        to: email,
        subject: "Welcome to the CC Bot Wallet Waitlist!",
        html: `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f7f0fa; border-radius: 16px; overflow: hidden;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #F3FF97, #D5A5E3, #5e2d79); padding: 36px 32px; text-align: center;">
              <h1 style="color: #0f172a; margin: 0; font-size: 24px; font-weight: 700;">CC Bot Wallet</h1>
              <p style="color: #5e2d79; margin: 6px 0 0; font-size: 13px;">Self-Custodial Wallet on Telegram</p>
              <!-- Social Links -->
              <div style="margin-top: 16px;">
                <a href="https://t.me/ccbotwalletchat" style="display: inline-block; background: #5e2d79; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 20px; margin: 0 4px;">Telegram</a>
                <a href="https://x.com/ccbotio" style="display: inline-block; background: #5e2d79; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 20px; margin: 0 4px;">X (Twitter)</a>
              </div>
            </div>

            <!-- Body -->
            <div style="padding: 40px 32px; background: #ffffff;">
              <h2 style="color: #5e2d79; font-size: 22px; margin: 0 0 8px; font-weight: 600;">You're on the list!</h2>
              <p style="color: #9d8da5; font-size: 13px; margin: 0 0 24px;">@${escapeHtml(cleanUsername)}, your spot is secured.</p>

              <div style="background: #f7f0fa; border-left: 3px solid #D5A5E3; border-radius: 8px; padding: 20px; margin-bottom: 28px;">
                <p style="color: #475569; font-size: 14px; line-height: 1.7; margin: 0;">
                  We'll notify you as soon as CC Bot Wallet is ready to launch.
                </p>
              </div>

              <h3 style="color: #5e2d79; font-size: 15px; margin: 0 0 16px; font-weight: 600;">What's next?</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 16px 10px 0; vertical-align: top; width: 32px;">
                    <div style="width: 28px; height: 28px; background: #F3FF97; border-radius: 50%; text-align: center; line-height: 28px; font-size: 13px; font-weight: 700; color: #5e2d79;">1</div>
                  </td>
                  <td style="padding: 10px 0; color: #475569; font-size: 14px; line-height: 1.5;">
                    <strong style="color: #0f172a;">Stay tuned</strong> for launch updates.
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px 10px 0; vertical-align: top;">
                    <div style="width: 28px; height: 28px; background: #D5A5E3; border-radius: 50%; text-align: center; line-height: 28px; font-size: 13px; font-weight: 700; color: #ffffff;">2</div>
                  </td>
                  <td style="padding: 10px 0; color: #475569; font-size: 14px; line-height: 1.5;">
                    <strong style="color: #0f172a;">Join our community</strong> on Telegram.
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px 10px 0; vertical-align: top;">
                    <div style="width: 28px; height: 28px; background: #5e2d79; border-radius: 50%; text-align: center; line-height: 28px; font-size: 13px; font-weight: 700; color: #ffffff;">3</div>
                  </td>
                  <td style="padding: 10px 0; color: #475569; font-size: 14px; line-height: 1.5;">
                    <strong style="color: #0f172a;">Get early access</strong> and exclusive perks.
                  </td>
                </tr>
              </table>

              <!-- CTA Buttons -->
              <div style="text-align: center; margin: 32px 0 12px;">
                <a href="https://t.me/ccbotwalletchat" style="display: inline-block; background: #F3FF97; color: #0f172a; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 14px;">Join Community Chat</a>
              </div>
              <div style="text-align: center;">
                <a href="https://t.me/ccbotwallet" style="display: inline-block; background: transparent; color: #5e2d79; padding: 10px 28px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 13px; border: 1.5px solid #D5A5E3;">Follow Announcements</a>
              </div>
            </div>

            <!-- Footer -->
            <div style="padding: 20px 32px; text-align: center; background: #f7f0fa;">
              <p style="color: #9d8da5; font-size: 11px; margin: 0;">&copy; ${new Date().getFullYear()} CC Bot Wallet. All rights reserved.</p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Waitlist confirmation email error:", emailError);
      // Don't fail the waitlist signup if email fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
