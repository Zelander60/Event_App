// Importer les dépendances
const express = require('express');
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  createEventReview,
} = require('../controllers/eventController');
const { protect } = require('../middlewares/authMiddleware');
const { isOrganizer } = require('../middlewares/roleMiddleware');

// Créer le routeur
const router = express.Router();

// Définir les routes
router.route('/').get(getEvents).post(protect, isOrganizer, createEvent);
router.route('/:id').get(getEventById).put(protect, isOrganizer, updateEvent).delete(protect, isOrganizer, deleteEvent);
router.route('/:id/reviews').post(protect, createEventReview);

// Exporter le routeur
module.exports = router;
