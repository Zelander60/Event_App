// Importer les dépendances
const express = require('express');
const {
  registerUser,
  loginUser,
  googleAuth,
  sendVerificationCode,
  verifyPhone,
} = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

// Créer le routeur
const router = express.Router();

// Définir les routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/google', googleAuth);
router.post('/send-verification-code', protect, sendVerificationCode);
router.post('/verify-phone', protect, verifyPhone);

// Exporter le routeur
module.exports = router;
