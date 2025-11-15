import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // owner ka same email
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
