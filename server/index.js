const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Placeholder routes
app.post('/api/auth/login', (req, res) => {
  res.json({ message: 'Login endpoint placeholder' });
});

app.get('/api/events', (req, res) => {
  res.json({ events: [], message: 'Events list placeholder' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
