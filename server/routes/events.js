// Fichier de routes pour les événements
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware'); // Middleware de protection

// Route pour créer un nouvel événement (protégée)
router.post('/', protect, eventController.createEvent);

// Route pour récupérer tous les événements
router.get('/', eventController.getEvents);

// Route pour récupérer un événement par son ID
router.get('/:id', eventController.getEventById);

// Route pour mettre à jour un événement (protégée)
router.put('/:id', protect, eventController.updateEvent);

// Route pour supprimer un événement (protégée)
router.delete('/:id', protect, eventController.deleteEvent);

// Route pour ajouter un avis à un événement (protégée)
router.post('/:id/reviews', protect, eventController.createEventReview);

module.exports = router;
