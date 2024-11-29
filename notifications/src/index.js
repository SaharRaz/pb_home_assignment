const express = require('express');
const connectDB = require('./systems/dbConnection');
const notificationRoutes = require('./routes/notification.routes');
const { port } = require('./config');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/notifications', notificationRoutes);

// Start server
app.listen(port, () => {
    console.log(`Notifications service running on port ${port}`);
});
