import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // 1) Parse JSON from body
    const body = await request.json();
    const data = body;

    // 2) (Optional) Honeypot check
    if (data.botField && data.botField.length > 0) {
      return NextResponse.json({ error: "No bots allowed!" }, { status: 400 });
    }

    // 3) (Optional) reCAPTCHA validation
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      return NextResponse.json(
        { error: "Missing reCAPTCHA secret" },
        { status: 500 }
      );
    }
    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${data.recaptchaToken}`;
    const recaptchaRes = await fetch(verifyURL, { method: "POST" });
    const recaptchaJson = await recaptchaRes.json();
    if (!recaptchaJson.success) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // 4) Configure Nodemailer - with skip-certificate-check
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // "smtp.gmail.com"
      port: Number(process.env.SMTP_PORT), // 587
      secure: false, // use TLS/STARTTLS
      auth: {
        user: process.env.SMTP_USER, // "cn.ng1983@gmail.com"
        pass: process.env.SMTP_PASS, // your 16-char app password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 5) Prepare the email
    const mailOptions = {
      from: '"Website Contact" <no-reply@example.com>',
      to: "your-email@example.com",
      subject: `New message from ${data.firstName} ${data.lastName}`,
      text: `
        Name:     ${data.firstName} ${data.lastName}
        Company:  ${data.company ?? ""}
        Email:    ${data.email}
        Country:  ${data.country ?? ""}
        Phone:    ${data.phoneNumber ?? ""}
        Agreed:   ${data.agreed}

        Message:
        ${data.message}
      `,
      html: `
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Company:</strong> ${data.company ?? ""}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Country:</strong> ${data.country ?? ""}</p>
        <p><strong>Phone:</strong> ${data.phoneNumber ?? ""}</p>
        <p><strong>Agreed to policy?</strong> ${data.agreed ? "Yes" : "No"}</p>
        <h4>Message</h4>
        <p>${data.message}</p>
      `,
    };

    // 6) Send the email
    await transporter.sendMail(mailOptions);

    // 7) Return success
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}
