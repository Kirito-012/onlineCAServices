export const runtime = "nodejs";
import nodemailer from "nodemailer";

export async function POST(req: { json: () => PromiseLike<{ name: any; phone: any; email: any; service: any; }> | { name: any; phone: any; email: any; service: any; }; }) {
  try {
    const { name, phone, email, service } = await req.json();

    // Gmail SMTP (Correct Setup — Port 587)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // TLS
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
      subject: `New Callback Request`,
      html: `
        <h2>New Callback Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Interested:</strong> ${service}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("CALLBACK EMAIL ERROR:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
