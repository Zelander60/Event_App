// Middleware pour vérifier si l'utilisateur est un organisateur
const isOrganizer = (req, res, next) => {
    if (req.user && req.user.role === 'organisateur') {
      next();
    } else {
      res.status(401).json({ message: 'Non autorisé, rôle organisateur requis.' });
    }
  };

  // Middleware pour vérifier si l'utilisateur est un administrateur
  const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(401).json({ message: 'Non autorisé, rôle administrateur requis.' });
    }
  };

  module.exports = { isOrganizer, isAdmin };
