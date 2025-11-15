import nodemailer from "nodemailer";

console.log("ENV USER:", process.env.GMAIL_USER);
console.log("ENV PASS:", process.env.GMAIL_PASS);

export async function POST(req: Request) {
  try {
    const { name, email, phone, date, message } = await req.json();

    // Transporter: Gmail se mail bhejne ke liye
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Mail ka content
    const mailOptions = {
      from: process.env.GMAIL_USER,        // sender
      to: process.env.GMAIL_USER,          // receiver (same CA email)
      subject: "New Appointment Request",
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>User Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Message:</strong> ${message || "No message provided"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json(
      { success: true, msg: "Appointment request sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json(
      { success: false, msg: "Failed to send appointment request" },
      { status: 500 }
    );
  }
}
