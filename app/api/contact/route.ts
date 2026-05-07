import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: process.env.SENDER_EMAIL!,
      to: process.env.RECEIVER_EMAIL!,
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,

      html: `
        <div style="font-family:sans-serif;padding:20px">
          <h2>New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>

          <div style="padding:12px;background:#f4f4f4;border-radius:8px">
            ${message}
          </div>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}