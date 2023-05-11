import nodemailer from "nodemailer";

export type EmailData = {
  email: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.AUTH_USER, // generated ethereal user
    pass: process.env.AUTH_PASS, // generated ethereal password
  },
});

export async function sendEmail({ subject, email, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER, // 해당 이메일로 보내는 것
    subject: `[BLOG] ${subject}`,
    from: email, // 다른 이메일을 써도 내 이메일로 가는 것
    html: /* html */ `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p>보낸사람: ${email}</p>
    `,
  };

  return transporter.sendMail(mailData);
}
