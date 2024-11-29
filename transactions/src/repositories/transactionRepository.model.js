const Transaction = require('../models/transaction.model');

// Create a new transaction
const createTransaction = async (transactionData) => {
    try {
        const newTransaction = new Transaction(transactionData);
        return await newTransaction.save();
    } catch (err) {
        throw new Error(`Error creating transaction: ${err.message}`);
    }
};

// Fetch transactions for a specific user
const getTransactionsByUserId = async (userId) => {
    try {
        return await Transaction.find({ $or: [{ from: userId }, { to: userId }] });
    } catch (err) {
        throw new Error(`Error fetching transactions for user ${userId}: ${err.message}`);
    }
};

module.exports = {
    createTransaction,
    getTransactionsByUserId,
};
