import { createTransport } from 'nodemailer';
require('dotenv').config();

const sendMail = async (name, email, message) => {
  const transporter = createTransport({
    // host: process.env.EMAIL_HOST,
    // port: process.env.EMAIL_PORT,
    // secure: false,
    service : 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'sufiyanmuhammad511@gmail.com',
    subject: 'New Message from Contact Form',
    html: `
      <h3>You have a new contact form submission:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};

export default sendMail;
