const { createNotification, getNotificationsByUserId } = require('./notificationRepository.model');

// Send a notification
const sendNotification = async (notificationData) => {
    return await createNotification(notificationData);
};

// Fetch all notifications for a user
const fetchNotifications = async (userId) => {
    return await getNotificationsByUserId(userId);
};

module.exports = {
    sendNotification,
    fetchNotifications,
};
