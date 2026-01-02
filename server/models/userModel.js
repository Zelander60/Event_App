// Importer Mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Définir le schéma de l'utilisateur
const userSchema = new mongoose.Schema({
  // Nom de l'utilisateur
  nom: {
    type: String,
    required: [true, 'Le nom est requis.'],
    trim: true,
  },
  // Email de l'utilisateur
  email: {
    type: String,
    required: [true, 'L\'email est requis.'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Veuillez entrer une adresse email valide.'],
  },
  // Mot de passe de l'utilisateur
  motDePasse: {
    type: String,
    required: [true, 'Le mot de passe est requis.'],
    minlength: [6, 'Le mot de passe doit contenir au moins 6 caractères.'],
  },
  // Rôle de l'utilisateur (par défaut : 'participant')
  role: {
    type: String,
    enum: ['participant', 'organisateur', 'admin'],
    default: 'participant',
  },
  // Numéro de téléphone de l'utilisateur
  telephone: {
    type: String,
    trim: true,
  },
  // Indique si le numéro de téléphone est vérifié
  telephoneVerifie: {
    type: Boolean,
    default: false,
  },
  // Code de vérification du téléphone
  telephoneVerificationCode: {
    type: String,
  },
  // Date d'expiration du code de vérification
  telephoneVerificationExpires: {
    type: Date,
  },
  // ID Google de l'utilisateur pour l'authentification Google
  googleId: {
    type: String,
  },
  // Date de création du compte
  creeLe: {
    type: Date,
    default: Date.now,
  },
});

// Middleware pour crypter le mot de passe avant de sauvegarder
userSchema.pre('save', async function (next) {
  if (!this.isModified('motDePasse')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.motDePasse = await bcrypt.hash(this.motDePasse, salt);
  next();
});

// Méthode pour comparer les mots de passe
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.motDePasse);
};

// Créer et exporter le modèle User
const User = mongoose.model('User', userSchema);
module.exports = User;
