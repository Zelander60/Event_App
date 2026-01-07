// Fichier de contrôleur pour les événements
const Event = require('../models/Event');
const Review = require('../models/Review');
const User = require('../models/User');

// @desc    Créer un nouvel événement
// @route   POST /api/events
// @access  Privé
exports.createEvent = async (req, res) => {
  const { name, description, date, location, images } = req.body;

  try {
    const event = new Event({
      name,
      description,
      date,
      location,
      images,
      organizer: req.user._id,
    });

    const createdEvent = await event.save();
    res.status(201).json(createdEvent);
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

// @desc    Récupérer tous les événements
// @route   GET /api/events
// @access  Public
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({}).populate('organizer', 'username');
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

// @desc    Récupérer un événement par son ID
// @route   GET /api/events/:id
// @access  Public
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate('organizer', 'username')
      .populate('reviews');

    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: 'Événement non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

// @desc    Mettre à jour un événement
// @route   PUT /api/events/:id
// @access  Privé
exports.updateEvent = async (req, res) => {
  const { name, description, date, location, images } = req.body;

  try {
    const event = await Event.findById(req.params.id);

    if (event) {
      // Vérifier que l'utilisateur est bien l'organisateur de l'événement
      if (event.organizer.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Non autorisé' });
      }

      event.name = name || event.name;
      event.description = description || event.description;
      event.date = date || event.date;
      event.location = location || event.location;
      event.images = images || event.images;

      const updatedEvent = await event.save();
      res.json(updatedEvent);
    } else {
      res.status(404).json({ message: 'Événement non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

// @desc    Supprimer un événement
// @route   DELETE /api/events/:id
// @access  Privé
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (event) {
      // Vérifier que l'utilisateur est bien l'organisateur de l'événement
      if (event.organizer.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Non autorisé' });
      }

      await event.deleteOne();
      res.json({ message: 'Événement supprimé' });
    } else {
      res.status(404).json({ message: 'Événement non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

// @desc    Créer un nouvel avis sur un événement
// @route   POST /api/events/:id/reviews
// @access  Privé
exports.createEventReview = async (req, res) => {
  const { rating, content } = req.body;

  try {
    const event = await Event.findById(req.params.id);

    if (event) {
      // Vérifier si l'utilisateur a déjà laissé un avis
      const alreadyReviewed = event.reviews.find(
        (r) => r.author.toString() === req.user._id.toString()
      );

      if (alreadyReviewed) {
        return res.status(400).json({ message: 'Vous avez déjà laissé un avis' });
      }

      const review = new Review({
        rating,
        content,
        author: req.user._id,
        event: req.params.id,
      });

      await review.save();

      event.reviews.push(review);
      await event.save();

      res.status(201).json({ message: 'Avis ajouté' });
    } else {
      res.status(404).json({ message: 'Événement non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};
