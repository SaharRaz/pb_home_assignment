const express = require('express');
const { initializeGroup, fetchGroupDetails, addMember } = require('../repositories/groupRepository');
const { validateSchema } = require('../systems/middleware/validateSchema.middleware');
const router = express.Router();

// Create a new group
router.post('/', validateSchema, async (req, res) => {
    try {
        const group = await initializeGroup(req.body);
        res.json(group);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Get group details
router.get('/:id', async (req, res) => {
    try {
        const group = await fetchGroupDetails(req.params.id);
        res.json(group);
    } catch (err) {
        res.status(404).send(err.message);
    }
});

// Add a user to a group
router.put('/:id/members', async (req, res) => {
    try {
        const { userId } = req.body;
        const group = await addMember(req.params.id, userId);
        res.json(group);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
