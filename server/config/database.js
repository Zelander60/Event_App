// Importer Mongoose
const mongoose = require('mongoose');

// Fonction de connexion à la base de données
const connectDB = async () => {
  try {
    // Tenter de se connecter à MongoDB
    await mongoose.connect(process.env.MONGO_URI);

    // Afficher un message de succès si la connexion est réussie
    console.log('MongoDB connecté avec succès.');
  } catch (error) {
    // Afficher un message d'erreur si la connexion échoue
    console.error('Erreur de connexion à MongoDB:', error.message);
    // Quitter le processus avec un code d'erreur
    process.exit(1);
  }
};

// Exporter la fonction de connexion
module.exports = connectDB;
