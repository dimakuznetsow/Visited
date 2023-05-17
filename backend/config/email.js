const nodemailer = require("nodemailer");

const transporter = () => {
  return nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "dfdacb982c38c7",
      pass: "b771ea3d6a5177",
    },
  });
};

module.exports = transporter();
