# Documentation de l'API EventFlow

Cette documentation décrit les points d'accès (endpoints) de l'API du serveur EventFlow.

## Authentification

Toutes les routes d'authentification sont préfixées par `/api/users`.

### `POST /register`

- **Description**: Enregistre un nouvel utilisateur.
- **Accès**: Public
- **Corps de la requête**:
  ```json
  {
    "nom": "Votre Nom",
    "email": "votre.email@example.com",
    "motDePasse": "votreMotDePasse"
  }
  ```
- **Réponse en cas de succès**:
  ```json
  {
    "_id": "userId",
    "nom": "Votre Nom",
    "email": "votre.email@example.com",
    "token": "JWT_TOKEN"
  }
  ```

### `POST /login`

- **Description**: Connecte un utilisateur existant.
- **Accès**: Public
- **Corps de la requête**:
  ```json
  {
    "email": "votre.email@example.com",
    "motDePasse": "votreMotDePasse"
  }
  ```
- **Réponse en cas de succès**:
  ```json
  {
    "_id": "userId",
    "nom": "Votre Nom",
    "email": "votre.email@example.com",
    "token": "JWT_TOKEN"
  }
  ```

### `POST /google`

- **Description**: Authentifie un utilisateur via son compte Google.
- **Accès**: Public
- **Corps de la requête**:
  ```json
  {
    "token": "GOOGLE_ID_TOKEN"
  }
  ```
- **Réponse en cas de succès**:
  ```json
  {
    "_id": "userId",
    "nom": "Nom Google",
    "email": "email.google@example.com",
    "token": "JWT_TOKEN"
  }
  ```

### `POST /send-verification-code`

- **Description**: Envoie un code de vérification par SMS au numéro de téléphone de l'utilisateur.
- **Accès**: Privé (nécessite un token JWT)
- **En-têtes**: `Authorization: Bearer VOTRE_JWT_TOKEN`
- **Corps de la requête**:
  ```json
  {
    "telephone": "+33612345678"
  }
  ```

### `POST /verify-phone`

- **Description**: Vérifie le code de vérification SMS.
- **Accès**: Privé (nécessite un token JWT)
- **En-têtes**: `Authorization: Bearer VOTRE_JWT_TOKEN`
- **Corps de la requête**:
  ```json
  {
    "code": "123456"
  }
  ```

## Événements

Toutes les routes d'événements sont préfixées par `/api/events`.

### `GET /`

- **Description**: Récupère la liste de tous les événements.
- **Accès**: Public

### `POST /`

- **Description**: Crée un nouvel événement.
- **Accès**: Privé (rôle `organisateur` requis)
- **En-têtes**: `Authorization: Bearer VOTRE_JWT_TOKEN`
- **Corps de la requête**:
  ```json
  {
    "titre": "Titre de l'événement",
    "description": "Description de l'événement",
    "date": "2024-12-31T23:00:00.000Z",
    "lieu": "Lieu de l'événement",
    "images": ["http://lien/image1.jpg", "http://lien/image2.jpg"]
  }
  ```

### `GET /:id`

- **Description**: Récupère les détails d'un événement spécifique.
- **Accès**: Public

### `PUT /:id`

- **Description**: Met à jour un événement existant.
- **Accès**: Privé (rôle `organisateur` requis, doit être le créateur de l'événement)
- **En-têtes**: `Authorization: Bearer VOTRE_JWT_TOKEN`
- **Corps de la requête**: Mêmes champs que pour la création.

### `DELETE /:id`

- **Description**: Supprime un événement.
- **Accès**: Privé (rôle `organisateur` requis, doit être le créateur de l'événement)
- **En-têtes**: `Authorization: Bearer VOTRE_JWT_TOKEN`

### `POST /:id/reviews`

- **Description**: Ajoute un avis à un événement.
- **Accès**: Privé (nécessite un token JWT)
- **En-têtes**: `Authorization: Bearer VOTRE_JWT_TOKEN`
- **Corps de la requête**:
  ```json
  {
    "note": 5,
    "commentaire": "Super événement !"
  }
  ```

## Communication en temps réel (Socket.IO)

- **`joinRoom`**: Événement à émettre pour rejoindre une salle de chat spécifique à un événement.
  - **Payload**: `eventId` (l'ID de l'événement)
- **`chatMessage`**: Événement à émettre pour envoyer un message dans une salle.
  - **Payload**: `{ roomId: eventId, message: "Votre message" }`
- **`message`**: Événement à écouter pour recevoir les messages du chat en temps réel.
  - **Payload**: `"Le message reçu"`
