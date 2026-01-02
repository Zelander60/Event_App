// Importer les dépendances
const cron = require('node-cron');

// Planifier une tâche pour s'exécuter tous les jours à minuit
cron.schedule('0 0 * * *', () => {
  console.log('Exécution de la tâche cron quotidienne à minuit.');
  // Ajoutez ici la logique de votre tâche cron, par exemple :
  // - Envoyer des emails de résumé
  // - Nettoyer les données anciennes
  // - etc.
});
