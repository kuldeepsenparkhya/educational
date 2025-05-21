import transporter from "../config/mailer.js";

export const sendEmail = async ({ name, email, message }) => {
  const mailOptions = {
    from: process.env.SMPT_EMAIL_FROM,
    to: process.env.SMPT_EMAIL_FROM,
    subject: `New Contact Form Submission from ${name}`,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Contact Form Submission</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f9f9f9;
          margin: 0; padding: 0;
        }
        .container {
          max-width: 600px;
          background-color: #ffffff;
          margin: 30px auto;
          padding: 20px 30px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          color: #333333;
        }
        h2 {
          color: #004aad;
          border-bottom: 2px solid #004aad;
          padding-bottom: 8px;
          margin-bottom: 20px;
        }
        p {
          font-size: 16px;
          line-height: 1.5;
          margin: 10px 0;
        }
        .label {
          font-weight: 600;
          color: #555555;
        }
        .footer {
          margin-top: 30px;
          font-size: 12px;
          color: #999999;
          text-align: center;
          border-top: 1px solid #eeeeee;
          padding-top: 15px;
        }
        @media (max-width: 620px) {
          .container {
            margin: 15px;
            padding: 15px 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>📩 New Contact Form Submission</h2>
        <p><span class="label">Name:</span> ${name}</p>
        <p><span class="label">Email:</span> <a href="mailto:${email}" style="color:#004aad;text-decoration:none;">${email}</a></p>
        <p><span class="label">Message:</span></p>
        <p style="white-space: pre-line; background:#f1f1f1; padding:15px; border-radius:5px;">${message}</p>
        <div class="footer">
          This email was generated automatically from your website contact form.
        </div>
      </div>
    </body>
    </html>
    `,
  };

  await transporter.sendMail(mailOptions);
};
