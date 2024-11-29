const User = require('../models/user.model');

// Fetch user by ID
const getUserById = async (id) => {
    try {
        return await User.findById(id);
    } catch (err) {
        throw new Error(`Error fetching user with ID ${id}: ${err.message}`);
    }
};

// Create or update user
const createOrUpdateUser = async (userId, userData) => {
    try {
        return await User.findByIdAndUpdate(userId, userData, { new: true, upsert: true });
    } catch (err) {
        throw new Error(`Error creating/updating user with ID ${userId}: ${err.message}`);
    }
};

module.exports = {
    getUserById,
    createOrUpdateUser,
};
