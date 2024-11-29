const express = require('express');
require('dotenv').config();

const app = express();

// Mock notification logic
const sendNotification = (to, amount) => {
    console.log(`Notification sent: ${to} received $${amount}`);
};

app.post('/notify', (req, res) => {
    const { to, amount } = req.body;
    sendNotification(to, amount);
    res.json({ message: 'Notification sent successfully' });
});

// Start server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Notifications Service running on port ${PORT}`));
