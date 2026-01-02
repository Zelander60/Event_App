// Importer les dépendances
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Middleware de protection
const protect = async (req, res, next) => {
  let token;

  // Vérifier si le token est dans les en-têtes
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Extraire le token
      token = req.headers.authorization.split(' ')[1];

      // Vérifier le token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Trouver l'utilisateur par ID et l'attacher à la requête
      req.user = await User.findById(decoded.id).select('-motDePasse');

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Non autorisé, le token a échoué.' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Non autorisé, pas de token.' });
  }
};

module.exports = { protect };
