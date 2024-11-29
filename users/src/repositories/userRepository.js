const { getUserById, createOrUpdateUser } = require('./userRepository.model');

// Get user details
const fetchUserDetails = async (userId) => {
    const user = await getUserById(userId);
    if (!user) throw new Error('User not found');
    return user;
};

// Save or update user
const saveUser = async (userId, data) => {
    return await createOrUpdateUser(userId, data);
};

module.exports = {
    fetchUserDetails,
    saveUser,
};
