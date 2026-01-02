// Importer les dépendances
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const twilio = require('twilio');

// Initialiser le client Google
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Initialiser le client Twilio
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Fonction pour générer un token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Enregistrer un nouvel utilisateur
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
  const { nom, email, motDePasse } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'Cet utilisateur existe déjà.' });
    }

    const user = await User.create({
      nom,
      email,
      motDePasse,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        nom: user.nom,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Données utilisateur invalides.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Authentifier un utilisateur
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, motDePasse } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(motDePasse))) {
      res.json({
        _id: user._id,
        nom: user.nom,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Email ou mot de passe invalide.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Authentification Google
// @route   POST /api/users/google
// @access  Public
const googleAuth = async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { name, email, sub } = ticket.getPayload();

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        googleId: sub,
        nom: name,
        email: email,
        motDePasse: sub, // Utiliser le sub comme mot de passe par défaut
      });
    }

    res.json({
      _id: user._id,
      nom: user.nom,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur d\'authentification Google.' });
  }
};

// @desc    Envoyer le code de vérification par SMS
// @route   POST /api/users/send-verification-code
// @access  Private
const sendVerificationCode = async (req, res) => {
  const { telephone } = req.body;
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }

    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    const verificationExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    user.telephone = telephone;
    user.telephoneVerificationCode = verificationCode;
    user.telephoneVerificationExpires = verificationExpires;
    await user.save();

    await twilioClient.messages.create({
      body: `Votre code de vérification EventFlow est : ${verificationCode}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: telephone,
    });

    res.status(200).json({ message: 'Code de vérification envoyé.' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'envoi du code de vérification.' });
  }
};

// @desc    Vérifier le code SMS
// @route   POST /api/users/verify-phone
// @access  Private
const verifyPhone = async (req, res) => {
  const { code } = req.body;
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }

    if (user.telephoneVerificationCode === code && user.telephoneVerificationExpires > new Date()) {
      user.telephoneVerifie = true;
      user.telephoneVerificationCode = undefined;
      user.telephoneVerificationExpires = undefined;
      await user.save();
      res.status(200).json({ message: 'Numéro de téléphone vérifié avec succès.' });
    } else {
      res.status(400).json({ message: 'Code de vérification invalide ou expiré.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la vérification du téléphone.' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  googleAuth,
  sendVerificationCode,
  verifyPhone,
};
