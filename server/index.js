const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const events = [
  {
    id: "1",
    title: "Neon Music Festival",
    category: "Concert",
    date: { month: "Aug", day: "12" },
    location: "Central Park, NY",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Innovators Summit",
    category: "Tech",
    date: { month: "Sep", day: "15" },
    location: "Convention Center",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1540575861501-7ce05b4d1ef3?q=80&w=1000&auto=format&fit=crop"
  }
];

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.get('/api/events', (req, res) => {
  res.json(events);
});

app.get('/api/events/:id', (req, res) => {
  const event = events.find(e => e.id === req.params.id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
