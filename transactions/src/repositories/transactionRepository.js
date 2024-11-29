const { createTransaction, getTransactionsByUserId } = require('./transactionRepository.model');

// Log a transaction
const logTransaction = async (transactionData) => {
    return await createTransaction(transactionData);
};

// Fetch transaction history for a user
const fetchTransactionHistory = async (userId) => {
    return await getTransactionsByUserId(userId);
};

module.exports = {
    logTransaction,
    fetchTransactionHistory,
};
