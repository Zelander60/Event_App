// Fichier de configuration pour les tâches cron
const cron = require('node-cron');

// Tâche cron qui s'exécute toutes les minutes
cron.schedule('* * * * *', () => {
  console.log('Exécution de la tâche cron toutes les minutes');
});

// Vous pouvez ajouter d'autres tâches cron ici
