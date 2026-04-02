'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendEmailParams {
  name: string
  email: string
}

export async function sendWaitlistEmail({ name, email }: SendEmailParams) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'idearchy.tech <hello@idearchy.tech>',
      to: [email],
      subject: "You're on the list. 🔶",
      html: buildEmailHTML(name),
    })

    if (error) {
      console.error('[Resend] Email send error:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (err) {
    console.error('[Resend] Unexpected error:', err)
    return { success: false, error: err }
  }
}

function buildEmailHTML(name: string): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>You're on the waitlist — idearchy.tech</title>
  </head>
  <body style="margin:0;padding:0;background-color:#fafafa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
    <div style="max-width:560px;margin:48px auto;background:#ffffff;border:1px solid #e5e5e5;">

      <!-- Header bar -->
      <div style="background:#0a0a0a;padding:32px 40px;">
        <p style="color:#fafafa;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 8px;">
          Knowledge Infrastructure
        </p>
        <h1 style="color:#fafafa;font-size:26px;font-weight:900;margin:0;letter-spacing:-0.02em;">
          idearchy<span style="color:#ff3300;">.</span>tech
        </h1>
      </div>

      <!-- Accent line -->
      <div style="height:3px;background:#ff3300;"></div>

      <!-- Body -->
      <div style="padding:40px;">
        <p style="color:#0a0a0a;font-size:16px;line-height:1.7;margin:0 0 20px;">
          Hey ${name} —
        </p>
        <p style="color:#0a0a0a;font-size:16px;line-height:1.7;margin:0 0 20px;">
          You're on the list. We'll reach out as soon as your early access spot opens up.
        </p>
        <p style="color:#666;font-size:15px;line-height:1.7;margin:0 0 32px;">
          What we're building: an AI-powered knowledge infrastructure that turns your scattered
          documents, notes, and bookmarks into an intelligent system you can actually talk to.
          No more filing. No more searching. Just thinking.
        </p>

        <!-- CTA -->
        <div style="margin:32px 0;">
          <a href="https://idearchy.tech"
             style="display:inline-block;background:#ff3300;color:#ffffff;text-decoration:none;
                    font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;
                    padding:14px 28px;">
            VISIT IDEARCHY.TECH →
          </a>
        </div>

        <p style="color:#999;font-size:13px;line-height:1.6;margin:0;">
          Questions? Just reply to this email — we read every message.<br />
          <strong style="color:#666;">The idearchy team</strong>
        </p>
      </div>

      <!-- Footer -->
      <div style="background:#fafafa;border-top:1px solid #e5e5e5;padding:20px 40px;">
        <p style="color:#bbb;font-size:11px;margin:0;letter-spacing:0.05em;">
          You're receiving this because you joined the waitlist at idearchy.tech.<br />
          © ${new Date().getFullYear()} idearchy.tech. All rights reserved.
        </p>
      </div>
    </div>
  </body>
</html>`
}
