import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface User {
  name: string;
  email: string;
}

export async function POST(request: NextRequest) {
  const { user, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_FROM,
      pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD,
    },
  });

  let mailContent = getMailContent(message, user);
  let subject = "AXONYX: Consultation Required";

  let mailOptions = {
    from: `<${user.email}>`,
    to: "fahadghaffar.awan@gmail.com",
    subject,
    text: mailContent,
  };

  try {
    let info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}

/**
 * Function to get mail content
 * @params {string} message
 * @params {string} user
 * @returns {string} content
 */
const getMailContent = (message: string, user: User) => {
  return `
          ${message}
  
          \n\n\n
          Sender Details \n
          Name: ${user.name}
          Email: ${user.email}
        `;
};
