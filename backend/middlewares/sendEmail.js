const nodeMailer = require("nodemailer");
require("dotenv").config();
const sendEmail = async (options) => {
  // Looking to send emails in production? Check out our Email API/SMTP product!
  const transporter = nodeMailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.EMAIL_USER, // Add your Mailtrap username here
      pass: process.env.EMAIL_PASS, // Add your Mailtrap password here
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
//nodemailer use krke email send krne k liye yeh function bnaya hai
/**
 * isse use krne k liye pehle nodemailer install krna hoga
 * npm install nodemailer
 * transporter k liye host, port, auth k object me user or pass dalna hoga
 * mailOptions me from, to, subject, text dalna hoga
 * transporter.sendMail(mailOptions) se email send hojaiga
 *
 *
 */
