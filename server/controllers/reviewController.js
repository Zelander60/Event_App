// Fichier de contrôleur pour les avis
const Review = require('../models/Review');

// @desc    Récupérer un avis par son ID
// @route   GET /api/reviews/:id
// @access  Public
exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate('author', 'username')
      .populate('event', 'name');

    if (review) {
      res.json(review);
    } else {
      res.status(404).json({ message: 'Avis non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

// @desc    Mettre à jour un avis
// @route   PUT /api/reviews/:id
// @access  Privé
exports.updateReview = async (req, res) => {
  const { rating, content } = req.body;

  try {
    const review = await Review.findById(req.params.id);

    if (review) {
      // Vérifier que l'utilisateur est bien l'auteur de l'avis
      if (review.author.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Non autorisé' });
      }

      review.rating = rating || review.rating;
      review.content = content || review.content;

      const updatedReview = await review.save();
      res.json(updatedReview);
    } else {
      res.status(404).json({ message: 'Avis non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};

// @desc    Supprimer un avis
// @route   DELETE /api/reviews/:id
// @access  Privé
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (review) {
      // Vérifier que l'utilisateur est bien l'auteur de l'avis
      if (review.author.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Non autorisé' });
      }

      await review.deleteOne();
      res.json({ message: 'Avis supprimé' });
    } else {
      res.status(404).json({ message: 'Avis non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur du serveur' });
  }
};
