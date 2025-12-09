import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      serviceType,
      serviceDetails,
      propertyType,
      propertySize,
      location,
      currentEquipment,
      timeline,
      budgetRange,
      additionalNotes,
      firstName,
      lastName,
      email,
      phone,
      preferredContact,
      bestTimeToContact,
    } = body;

    // Validation
    if (!serviceType || !serviceDetails || !propertyType || !location || !timeline || !firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    const fullName = `${firstName} ${lastName}`;

    // Send detailed email to business
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vivekjitsandhu@gmail.com",
      subject: `New Quote Request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Quote Request</h2>

          <h3 style="color: #1f2937; margin-top: 24px;">Service Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Service Type:</strong></td><td style="padding: 8px 0;">${serviceType}</td></tr>
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Services Needed:</strong></td><td style="padding: 8px 0;">${Array.isArray(serviceDetails) ? serviceDetails.join(', ') : serviceDetails}</td></tr>
          </table>

          <h3 style="color: #1f2937; margin-top: 24px;">Property Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Property Type:</strong></td><td style="padding: 8px 0;">${propertyType}</td></tr>
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Location:</strong></td><td style="padding: 8px 0;">${location}</td></tr>
            ${propertySize ? `<tr><td style="padding: 8px 0; color: #4b5563;"><strong>Property Size:</strong></td><td style="padding: 8px 0;">${propertySize} sq ft</td></tr>` : ''}
            ${currentEquipment ? `<tr><td style="padding: 8px 0; color: #4b5563;"><strong>Current Equipment:</strong></td><td style="padding: 8px 0;">${currentEquipment}</td></tr>` : ''}
          </table>

          <h3 style="color: #1f2937; margin-top: 24px;">Project Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Timeline:</strong></td><td style="padding: 8px 0;">${timeline}</td></tr>
            ${budgetRange ? `<tr><td style="padding: 8px 0; color: #4b5563;"><strong>Budget Range:</strong></td><td style="padding: 8px 0;">${budgetRange}</td></tr>` : ''}
            ${additionalNotes ? `<tr><td style="padding: 8px 0; color: #4b5563; vertical-align: top;"><strong>Additional Notes:</strong></td><td style="padding: 8px 0;">${additionalNotes}</td></tr>` : ''}
          </table>

          <h3 style="color: #1f2937; margin-top: 24px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Name:</strong></td><td style="padding: 8px 0;">${fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Phone:</strong></td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Preferred Contact:</strong></td><td style="padding: 8px 0;">${preferredContact}</td></tr>
            <tr><td style="padding: 8px 0; color: #4b5563;"><strong>Best Time:</strong></td><td style="padding: 8px 0;">${bestTimeToContact}</td></tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background-color: #eff6ff; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af;"><strong>Action Required:</strong> Please respond to this quote request within 24 hours.</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Quote Request Received - Quantum HVAC System Inc.",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for your quote request!</h2>
          <p>Hi ${firstName},</p>
          <p>We've received your detailed quote request and our team is already reviewing it.</p>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 24px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">What happens next?</h3>
            <ol style="color: #4b5563; line-height: 1.8;">
              <li>Our team reviews your request within 2 hours</li>
              <li>We prepare a detailed quote based on your specific needs</li>
              <li>You'll receive your customized quote via email within 24 hours</li>
              <li>One of our specialists will follow up to discuss any details</li>
            </ol>
          </div>

          <div style="background-color: #eff6ff; padding: 16px; border-left: 4px solid #2563eb; margin: 24px 0;">
            <p style="margin: 0; color: #1e40af;"><strong>Need immediate assistance?</strong><br>
            Call us at <a href="tel:6477041780" style="color: #2563eb;">(647) 704-1780</a></p>
          </div>

          <h3 style="color: #1f2937;">Your Request Summary</h3>
          <p style="color: #4b5563;"><strong>Service Type:</strong> ${serviceType}</p>
          <p style="color: #4b5563;"><strong>Property Type:</strong> ${propertyType}</p>
          <p style="color: #4b5563;"><strong>Location:</strong> ${location}</p>
          <p style="color: #4b5563;"><strong>Timeline:</strong> ${timeline}</p>

          <p style="margin-top: 32px; color: #4b5563;">Best regards,<br>
          <strong>Quantum HVAC System Inc.</strong><br>
          (647) 704-1780<br>
          info@quantumhvac.com</p>
        </div>
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
