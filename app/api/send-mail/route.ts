import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, address, interest } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Form" <${process.env.MAIL_USER}>`,
      to: "tuhinbanerjee0231@gmail.com",
      subject: "New Form Submission",
      html: `
        <p><b>First Name:</b> ${firstName}</p>
        <p><b>Last Name:</b> ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Interest:</b> ${interest}</p>
      `,
    });

    return Response.json({ message: "Email sent successfully!" });
  } catch (error) {
    return Response.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
