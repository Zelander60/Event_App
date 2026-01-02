// Importer les dépendances
const Event = require('../models/eventModel');

// @desc    Créer un nouvel événement
// @route   POST /api/events
// @access  Private/Organisateur
const createEvent = async (req, res) => {
  const { titre, description, date, lieu, images } = req.body;

  try {
    const event = new Event({
      titre,
      description,
      date,
      lieu,
      images,
      organisateur: req.user._id,
    });

    const createdEvent = await event.save();
    res.status(201).json(createdEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Récupérer tous les événements
// @route   GET /api/events
// @access  Public
const getEvents = async (req, res) => {
  try {
    const events = await Event.find({}).populate('organisateur', 'nom email');
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Récupérer un événement par ID
// @route   GET /api/events/:id
// @access  Public
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('organisateur', 'nom email').populate('avis.auteur', 'nom');
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: 'Événement non trouvé.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Mettre à jour un événement
// @route   PUT /api/events/:id
// @access  Private/Organisateur
const updateEvent = async (req, res) => {
  const { titre, description, date, lieu, images } = req.body;

  try {
    const event = await Event.findById(req.params.id);

    if (event) {
      // Vérifier si l'utilisateur est l'organisateur de l'événement
      if (event.organisateur.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Non autorisé.' });
      }

      event.titre = titre;
      event.description = description;
      event.date = date;
      event.lieu = lieu;
      event.images = images;

      const updatedEvent = await event.save();
      res.json(updatedEvent);
    } else {
      res.status(404).json({ message: 'Événement non trouvé.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Supprimer un événement
// @route   DELETE /api/events/:id
// @access  Private/Organisateur
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (event) {
      // Vérifier si l'utilisateur est l'organisateur de l'événement
      if (event.organisateur.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Non autorisé.' });
      }

      await Event.findByIdAndDelete(req.params.id);
      res.json({ message: 'Événement supprimé.' });
    } else {
      res.status(404).json({ message: 'Événement non trouvé.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Ajouter un avis à un événement
// @route   POST /api/events/:id/reviews
// @access  Private
const createEventReview = async (req, res) => {
  const { note, commentaire } = req.body;

  try {
    const event = await Event.findById(req.params.id);

    if (event) {
      const alreadyReviewed = event.avis.find(
        (r) => r.auteur.toString() === req.user._id.toString()
      );

      if (alreadyReviewed) {
        return res.status(400).json({ message: 'Vous avez déjà commenté cet événement.' });
      }

      const review = {
        nom: req.user.nom,
        note: Number(note),
        commentaire,
        auteur: req.user._id,
      };

      event.avis.push(review);

      await event.save();
      res.status(201).json({ message: 'Avis ajouté.' });
    } else {
      res.status(404).json({ message: 'Événement non trouvé.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  createEventReview,
};
