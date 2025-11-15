import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, email, service } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Callback Request`,
      text: `
New Callback Request:

Name: ${name}
Phone: ${phone}
Email: ${email}
Service Interested: ${service}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("CALLBACK EMAIL ERROR:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
