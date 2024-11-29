const Group = require('../models/group.model');

// Create a new group
const createGroup = async (groupData) => {
    try {
        const newGroup = new Group(groupData);
        return await newGroup.save();
    } catch (err) {
        throw new Error(`Error creating group: ${err.message}`);
    }
};

// Fetch a group by ID
const getGroupById = async (groupId) => {
    try {
        return await Group.findById(groupId);
    } catch (err) {
        throw new Error(`Error fetching group with ID ${groupId}: ${err.message}`);
    }
};

// Add a member to a group
const addMemberToGroup = async (groupId, userId) => {
    try {
        return await Group.findByIdAndUpdate(
            groupId,
            { $addToSet: { members: userId } },
            { new: true }
        );
    } catch (err) {
        throw new Error(`Error adding member to group: ${err.message}`);
    }
};

module.exports = {
    createGroup,
    getGroupById,
    addMemberToGroup,
};
