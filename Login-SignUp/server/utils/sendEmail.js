const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  try {
    // Create transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change to your email provider
      auth: {
        user: process.env.EMAIL_USER,      // Your email address
        pass: process.env.EMAIL_PASSWORD,  // Your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email sending failed');
  }
};

module.exports = sendEmail;
