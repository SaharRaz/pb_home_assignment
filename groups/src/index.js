const express = require('express');
const connectDB = require('./systems/dbConnection');
const groupRoutes = require('./routes/group.routes');
const { port } = require('./config');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/groups', groupRoutes);

// Start server
app.listen(port, () => {
    console.log(`Groups service running on port ${port}`);
});
