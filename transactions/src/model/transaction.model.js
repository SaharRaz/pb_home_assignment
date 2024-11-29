const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    from: { type: String, required: true }, // User ID of sender
    to: { type: String, required: true }, // User ID of receiver
    amount: { type: Number, required: true }, // Amount of money transferred
    date: { type: Date, default: Date.now }, // Transaction timestamp
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
