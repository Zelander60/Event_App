// Importer les dépendances
const http = require('http');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const initSocket = require('./services/socket');
require('./services/cronJobs'); // Démarrer les tâches cron

// Charger les variables d'environnement
dotenv.config();

// Se connecter à la base de données
connectDB();

// Initialiser l'application Express
const app = express();
const server = http.createServer(app);

// Initialiser Socket.IO
const io = initSocket(server);

// Activer CORS
app.use(cors());

// Middleware pour parser le JSON
app.use(express.json());

// Routes de l'application
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

app.get('/', (req, res) => {
  res.send('API EventFlow est en cours d\'exécution...');
});

// Gérer les erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Quelque chose s\'est mal passé !');
});

// Définir le port
const PORT = process.env.PORT || 5000;

// Démarrer le serveur
server.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
