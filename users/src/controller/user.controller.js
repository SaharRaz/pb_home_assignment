import User from '../model/user.model.js';

const userController = {
    // Create a new user
    async createUser(data) {
        const user = new User(data);
        return await user.save();
    },

    // Retrieve all users
    async getAllUsers() {
        return await User.find();
    },

    // Find a user by ID
    async getUserById(userId) {
        return await User.findById(userId);
    },
};

export default userController;
