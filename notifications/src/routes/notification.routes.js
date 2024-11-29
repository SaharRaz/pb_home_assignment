const express = require('express');
const { sendNotification, fetchNotifications } = require('../repositories/notificationRepository');
const { validateSchema } = require('../systems/middleware/validateSchema.middleware');
const router = express.Router();

// Fetch all notifications for a user
router.get('/:userId', async (req, res) => {
    try {
        const notifications = await fetchNotifications(req.params.userId);
        res.json(notifications);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Send a new notification
router.post('/', validateSchema, async (req, res) => {
    try {
        const notification = await sendNotification(req.body);
        res.json(notification);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
