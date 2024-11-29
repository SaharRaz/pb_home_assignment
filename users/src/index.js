const express = require('express');
const connectDB = require('./systems/dbConnection');
const userRoutes = require('./routes/user.routes');
const { port } = require('./config');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/users', userRoutes);

// Start server
app.listen(port, () => {
    console.log(`Users service running on port ${port}`);
});