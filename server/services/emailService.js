// Fichier de service pour l'envoi d'e-mails
const transporter = require('../config/email');

// Fonction pour envoyer un e-mail de bienvenue
exports.sendWelcomeEmail = async (user) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: user.email,
    subject: 'Bienvenue sur notre application !',
    html: `<h1>Bonjour ${user.username},</h1><p>Nous sommes ravis de vous accueillir sur notre application.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('E-mail de bienvenue envoyé à', user.email);
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail de bienvenue :', error);
  }
};
