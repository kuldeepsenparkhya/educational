import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMPT_EMAIL_HOST,
  port: process.env.SMTP_EMAIL_PORT,
  secure:false,
  auth: {
    user: process.env.SMPT_EMAIL_USER,
    pass: process.env.SMPT_EMAIL_PASSWORD,
  },
});

export default transporter;

