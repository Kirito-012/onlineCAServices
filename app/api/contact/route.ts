export const runtime = "nodejs";
import nodemailer from "nodemailer";

export async function POST(req: { json: () => PromiseLike<{ name: any; email: any; phone: any; service: any; message: any; }> | { name: any; email: any; phone: any; service: any; message: any; }; }) {
  try {
    const { name, email, phone, service, message } = await req.json();

    // Correct Gmail SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,         // TLS
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "New Contact Form Message",
      html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>User Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service Interested In:</strong> ${service || "Not selected"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json(
      { success: true, msg: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT EMAIL ERROR:", error);
    return Response.json(
      { success: false, msg: "Failed to send message" },
      { status: 500 }
    );
  }
}

