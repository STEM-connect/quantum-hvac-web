import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 },
      );
    }

    // Send email to business
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vivekjitsandhu@gmail.com",
      subject: `New Contact Form Submission${subject ? `: ${subject}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Contact Form Submission</h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Name:</strong></td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #4b5563;"><strong>Phone:</strong></td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>` : ''}
            ${subject ? `<tr><td style="padding: 8px 0; color: #4b5563;"><strong>Subject:</strong></td><td style="padding: 8px 0;">${subject}</td></tr>` : ''}
          </table>

          <div style="margin-top: 24px;">
            <h3 style="color: #1f2937;">Message:</h3>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px;">
              <p style="margin: 0; color: #4b5563; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="margin-top: 24px; padding: 16px; background-color: #eff6ff; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af;"><strong>Action Required:</strong> Please respond to this inquiry as soon as possible.</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "We Received Your Message - Quantum HVAC System Inc.",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for contacting us!</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and our team will get back to you as soon as possible, typically within 24 hours.</p>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 24px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Your Message:</h3>
            <p style="color: #4b5563; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="background-color: #eff6ff; padding: 16px; border-left: 4px solid #2563eb; margin: 24px 0;">
            <p style="margin: 0; color: #1e40af;"><strong>Need immediate assistance?</strong><br>
            Call us at <a href="tel:6477041780" style="color: #2563eb;">(647) 704-1780</a><br>
            Available Monday-Friday: 7 AM - 6 PM<br>
            Saturday: 8 AM - 4 PM<br>
            Emergency Service: 24/7</p>
          </div>

          <p style="margin-top: 32px; color: #4b5563;">Best regards,<br>
          <strong>Quantum HVAC System Inc.</strong><br>
          (647) 704-1780<br>
          info@quantumhvac.com</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error sending contact form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 },
    );
  }
}
