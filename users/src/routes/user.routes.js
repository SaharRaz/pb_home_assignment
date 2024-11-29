const express = require('express');
const { fetchUserDetails, saveUser } = require('../repositories/userRepository');
const { validateSchema } = require('../systems/middleware/validateSchema.middleware');
const router = express.Router();

// Get user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await fetchUserDetails(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(404).send(err.message);
    }
});

// Create or update user
router.post('/:id', validateSchema, async (req, res) => {
    try {
        const user = await saveUser(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
