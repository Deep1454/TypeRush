const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use authentication and user routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Start server
const PORT = process.env.PORT || 2222;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
