// Modèle de l'événement
const mongoose = require('mongoose');

// Schéma de l'événement
const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Création du modèle Event
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
