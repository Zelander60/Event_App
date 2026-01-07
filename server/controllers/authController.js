// Fichier de contrôleur pour l'authentification
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const twilio = require('twilio');
const { OAuth2Client } = require('google-auth-library');
const emailService = require('../services/emailService');

// Initialisation du client Google OAuth2
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Fonction pour générer un token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Fonction pour l'enregistrement d'un nouvel utilisateur
exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'Cet utilisateur existe déjà' });
    }

    // Créer un nouvel utilisateur
    const user = await User.create({
      username,
      email,
      password,
    });

    if (user) {
      // Envoyer un e-mail de bienvenue
      await emailService.sendWelcomeEmail(user);

      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Données utilisateur invalides' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

// Fonction pour la vérification du code OTP
exports.verifyOtp = async (req, res) => {
  const { phoneNumber, code } = req.body;

  // Initialisation du client Twilio
  const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  try {
    // Vérifier le code OTP
    const verification_check = await twilioClient.verify.v2.services(process.env.TWILIO_VERIFY_SID)
      .verificationChecks
      .create({ to: phoneNumber, code: code });

    if (verification_check.status === 'approved') {
      // Mettre à jour le statut de vérification de l'utilisateur
      await User.findOneAndUpdate({ phoneNumber }, { isVerified: true });
      res.status(200).json({ message: 'Numéro de téléphone vérifié' });
    } else {
      res.status(400).json({ message: 'Code de vérification invalide' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

// Fonction pour la connexion d'un utilisateur
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Email ou mot de passe invalide' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

// Fonction pour l'authentification avec Google
exports.googleAuth = async (req, res) => {
  const { tokenId } = req.body;

  try {
    // Vérifier le token d'identification Google
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { name, email, sub } = ticket.getPayload();

    // Vérifier si l'utilisateur existe déjà
    let user = await User.findOne({ email });

    if (!user) {
      // Créer un nouvel utilisateur s'il n'existe pas
      user = await User.create({
        username: name,
        email,
        googleId: sub,
      });
    }

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

// Fonction pour la vérification du numéro de téléphone
exports.verifyPhone = async (req, res) => {
  const { phoneNumber } = req.body;

  // Initialisation du client Twilio
  const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  try {
    // Envoyer un code de vérification par SMS
    const verification = await twilioClient.verify.v2.services(process.env.TWILIO_VERIFY_SID)
      .verifications
      .create({ to: phoneNumber, channel: 'sms' });

    res.status(200).json({ message: 'Code de vérification envoyé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};
