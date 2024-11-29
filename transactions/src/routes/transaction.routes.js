const express = require('express');
const { logTransaction, fetchTransactionHistory } = require('../repositories/transactionRepository');
const { validateSchema } = require('../systems/middleware/validateSchema.middleware');
const router = express.Router();

// Fetch all transactions for a user
router.get('/:userId', async (req, res) => {
    try {
        const transactions = await fetchTransactionHistory(req.params.userId);
        res.json(transactions);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Log a new transaction
router.post('/', validateSchema, async (req, res) => {
    try {
        const transaction = await logTransaction(req.body);
        res.json(transaction);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
