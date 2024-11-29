require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/notifications',
    port: process.env.PORT || 3002,
};