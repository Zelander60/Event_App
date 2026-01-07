// Fichier de routes pour les avis
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware'); // Middleware de protection

// Route pour récupérer un avis par son ID
router.get('/:id', reviewController.getReviewById);

// Route pour mettre à jour un avis (protégée)
router.put('/:id', protect, reviewController.updateReview);

// Route pour supprimer un avis (protégée)
router.delete('/:id', protect, reviewController.deleteReview);

module.exports = router;
