import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      service,
      preferredDate,
      preferredTime,
      address,
      message,
    } = body;

    // Send email to business
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vivekjitsandhu@gmail.com",
      subject: `New Service Appointment Request from ${name}`,
      html: `
        <h2>New Service Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Additional Information:</strong> ${message}</p>
      `,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject:
        "Service Appointment Request Received - Quantum HVAC System Inc.",
      html: `
        <h2>Thank you for scheduling with us!</h2>
        <p>Hi ${name},</p>
        <p>We've received your service appointment request for ${preferredDate} during ${preferredTime}.</p>
        <p>Our team will contact you within 24 hours to confirm your appointment.</p>
        <p>If you need immediate assistance, please call us at 647-704-1780.</p>
        <p>Best regards,<br>Quantum HVAC System Inc.</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Service appointment request sent successfully",
    });
  } catch (error) {
    console.error("Error sending service appointment request:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send service appointment request" },
      { status: 500 },
    );
  }
}
