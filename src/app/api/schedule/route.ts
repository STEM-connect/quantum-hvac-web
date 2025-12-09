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

    // Validation
    if (!name || !email || !phone || !service) {
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
      subject: `New Service Appointment Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Service Appointment Request</h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Name:</strong></td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Phone:</strong></td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Service:</strong></td><td style="padding: 8px 0;">${service}</td></tr>
            ${preferredDate ? `<tr><td style="padding: 8px 0; color: #4b5563;"><strong>Preferred Date:</strong></td><td style="padding: 8px 0;">${preferredDate}</td></tr>` : ''}
            ${preferredTime ? `<tr><td style="padding: 8px 0; color: #4b5563;"><strong>Preferred Time:</strong></td><td style="padding: 8px 0;">${preferredTime}</td></tr>` : ''}
            ${address ? `<tr><td style="padding: 8px 0; color: #4b5563;"><strong>Address:</strong></td><td style="padding: 8px 0;">${address}</td></tr>` : ''}
          </table>

          ${message ? `
          <div style="margin-top: 24px;">
            <h3 style="color: #1f2937;">Additional Information:</h3>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px;">
              <p style="margin: 0; color: #4b5563; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          ` : ''}

          <div style="margin-top: 24px; padding: 16px; background-color: #eff6ff; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af;"><strong>Action Required:</strong> Please contact the customer within 24 hours to confirm the appointment.</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Service Appointment Request Received - Quantum HVAC System Inc.",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for scheduling with us!</h2>
          <p>Hi ${name},</p>
          <p>We've received your service appointment request${preferredDate && preferredTime ? ` for ${preferredDate} during ${preferredTime}` : ''}.</p>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 24px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">What happens next?</h3>
            <ol style="color: #4b5563; line-height: 1.8;">
              <li>Our scheduling team will review your request</li>
              <li>We'll contact you within 24 hours to confirm the appointment</li>
              <li>You'll receive a confirmation with all the details</li>
              <li>Our technician will arrive on time and ready to help</li>
            </ol>
          </div>

          <div style="background-color: #eff6ff; padding: 16px; border-left: 4px solid #2563eb; margin: 24px 0;">
            <p style="margin: 0; color: #1e40af;"><strong>Need immediate assistance?</strong><br>
            Call us at <a href="tel:6477041780" style="color: #2563eb;">(647) 704-1780</a></p>
          </div>

          <h3 style="color: #1f2937;">Your Appointment Request</h3>
          <p style="color: #4b5563;"><strong>Service:</strong> ${service}</p>
          ${preferredDate ? `<p style="color: #4b5563;"><strong>Preferred Date:</strong> ${preferredDate}</p>` : ''}
          ${preferredTime ? `<p style="color: #4b5563;"><strong>Preferred Time:</strong> ${preferredTime}</p>` : ''}

          <p style="margin-top: 32px; color: #4b5563;">Best regards,<br>
          <strong>Quantum HVAC System Inc.</strong><br>
          (647) 704-1780<br>
          info@quantumhvac.com</p>
        </div>
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
