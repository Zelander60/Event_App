// Importer les dépendances
const nodemailer = require('nodemailer');

// Fonction pour envoyer un email
const sendEmail = async (options) => {
  // Créer un transporteur
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Définir les options de l'email
  const mailOptions = {
    from: 'EventFlow <no-reply@eventflow.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html: '<b>Hello world?</b>' // Vous pouvez également envoyer du HTML
  };

  // Envoyer l'email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
