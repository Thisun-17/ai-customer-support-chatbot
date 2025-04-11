const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('AI Customer Support Chatbot API is running!');
});

// Set port
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});