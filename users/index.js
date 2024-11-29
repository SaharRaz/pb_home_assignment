const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Users Service: MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};
connectDB();

// User schema
const userSchema = new mongoose.Schema({
    name: String,
    balance: { type: Number, default: 0 },
});

const User = mongoose.model('User', userSchema);

// API to fetch user details
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API to update balance
app.put('/users/:id/balance', async (req, res) => {
    try {
        const { amount } = req.body;
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        user.balance += amount;
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Users Service running on port ${PORT}`));
