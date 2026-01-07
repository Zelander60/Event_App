// Fichier de configuration pour l'envoi d'e-mails
const nodemailer = require('nodemailer');

// Création du transporteur Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // utilisateur
    pass: process.env.EMAIL_PASS, // mot de passe
  },
});

module.exports = transporter;
