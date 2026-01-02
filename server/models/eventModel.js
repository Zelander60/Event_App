// Importer Mongoose
const mongoose = require('mongoose');

// Définir le schéma de l'événement
const eventSchema = new mongoose.Schema({
  // Titre de l'événement
  titre: {
    type: String,
    required: [true, 'Le titre est requis.'],
    trim: true,
  },
  // Description de l'événement
  description: {
    type: String,
    required: [true, 'La description est requise.'],
  },
  // Date de l'événement
  date: {
    type: Date,
    required: [true, 'La date est requise.'],
  },
  // Lieu de l'événement
  lieu: {
    type: String,
    required: [true, 'Le lieu est requis.'],
  },
  // Liens vers les images de l'événement
  images: [
    {
      type: String,
      trim: true,
    },
  ],
  // Organisateur de l'événement
  organisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // Participants à l'événement
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  // Avis sur l'événement
  avis: [
    {
      auteur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      note: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },
      commentaire: {
        type: String,
        required: true,
      },
      creeLe: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  // Date de création de l'événement
  creeLe: {
    type: Date,
    default: Date.now,
  },
});

// Créer et exporter le modèle Event
const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
