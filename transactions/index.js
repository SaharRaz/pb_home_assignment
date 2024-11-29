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
        console.log('Transactions Service: MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};
connectDB();

// Transaction schema
const transactionSchema = new mongoose.Schema({
    from: String,
    to: String,
    amount: Number,
    date: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

// API to handle money transfer
app.post('/transactions', async (req, res) => {
    const { from, to, amount } = req.body;

    try {
        // Save transaction
        const transaction = new Transaction({ from, to, amount });
        await transaction.save();

        // Emit notification logic would go here
        res.json({ message: 'Transaction successful', transaction });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Transactions Service running on port ${PORT}`));
