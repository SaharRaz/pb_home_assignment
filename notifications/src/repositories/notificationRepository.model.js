const Notification = require('../models/notification.model');

// Create a new notification
const createNotification = async (notificationData) => {
    try {
        const newNotification = new Notification(notificationData);
        return await newNotification.save();
    } catch (err) {
        throw new Error(`Error creating notification: ${err.message}`);
    }
};

// Fetch notifications for a specific user
const getNotificationsByUserId = async (userId) => {
    try {
        return await Notification.find({ to: userId });
    } catch (err) {
        throw new Error(`Error fetching notifications for user ${userId}: ${err.message}`);
    }
};

module.exports = {
    createNotification,
    getNotificationsByUserId,
};
