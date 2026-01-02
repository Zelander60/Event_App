// Importer les dépendances
const socketIo = require('socket.io');

// Fonction pour initialiser Socket.IO
const initSocket = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: '*', // Remplacez par l'URL de votre client React Native
      methods: ['GET', 'POST'],
    },
  });

  // Gérer les connexions des clients
  io.on('connection', (socket) => {
    console.log('Un utilisateur s\'est connecté.');

    // Rejoindre une salle (par exemple, une salle par événement)
    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
      console.log(`Un utilisateur a rejoint la salle : ${roomId}`);
    });

    // Gérer les messages de chat
    socket.on('chatMessage', ({ roomId, message }) => {
      // Diffuser le message à tous les clients dans la salle
      io.to(roomId).emit('message', message);
    });

    // Gérer la déconnexion
    socket.on('disconnect', () => {
      console.log('Un utilisateur s\'est déconnecté.');
    });
  });

  return io;
};

module.exports = initSocket;
