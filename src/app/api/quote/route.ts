import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, propertyType, message } = body;

    // Send email to business
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vivekjitsandhu@gmail.com",
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Quote Request Received - Quantum HVAC System Inc.",
      html: `
        <h2>Thank you for your quote request!</h2>
        <p>Hi ${name},</p>
        <p>We've received your quote request and will get back to you within 24 hours.</p>
        <p>If you need immediate assistance, please call us at 647-704-1780.</p>
        <p>Best regards,<br>Quantum HVAC System Inc.</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully",
    });
  } catch (error) {
    console.error("Error sending quote request:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send quote request" },
      { status: 500 },
    );
  }
}
