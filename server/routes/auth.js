// Fichier de routes pour l'authentification
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route pour l'enregistrement d'un nouvel utilisateur
router.post('/register', authController.register);

// Route pour la connexion d'un utilisateur
router.post('/login', authController.login);

// Route pour l'authentification avec Google
router.post('/google', authController.googleAuth);

// Route pour la vérification du numéro de téléphone
router.post('/verify-phone', authController.verifyPhone);

// Route pour la vérification du code OTP
router.post('/verify-otp', authController.verifyOtp);

module.exports = router;
