const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    to: { type: String, required: true }, // User ID of recipient
    message: { type: String, required: true }, // Notification message
    read: { type: Boolean, default: false }, // Read/unread status
    date: { type: Date, default: Date.now }, // Notification timestamp
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
