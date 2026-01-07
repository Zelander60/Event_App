// Fichier principal du serveur
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require("socket.io");
require('./config/cron');

// Configuration de dotenv pour charger les variables d'environnement
dotenv.config();

// Initialisation de l'application Express
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // A ajuster pour la production
    methods: ["GET", "POST"]
  }
});

// Middleware pour parser le JSON
app.use(express.json());

// Middleware pour gérer les requêtes CORS
app.use(cors());

// Importer les fichiers de routes
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const reviewRoutes = require('./routes/reviews');

// Route de base pour tester le serveur
app.get('/', (req, res) => {
  res.send('Le serveur est en marche !');
});

// Utiliser les fichiers de routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/reviews', reviewRoutes);

// Port d'écoute du serveur
const PORT = process.env.PORT || 5000;

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connecté à la base de données MongoDB');
  // Démarrage du serveur une fois la connexion à la base de données établie
  server.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
  });
})
.catch((error) => {
  console.error('Erreur de connexion à la base de données :', error);
});

// Logique Socket.IO
io.on('connection', (socket) => {
  console.log('Un utilisateur est connecté');

  // Gérer les nouveaux avis
  socket.on('new_review', (review) => {
    // Diffuser le nouvel avis à tous les clients
    io.emit('review_update', review);
  });

  // Gérer la déconnexion
  socket.on('disconnect', () => {
    console.log('Un utilisateur est déconnecté');
  });
});
