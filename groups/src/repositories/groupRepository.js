const { createGroup, getGroupById, addMemberToGroup } = require('./groupRepository.model');

// Create a new group
const initializeGroup = async (groupData) => {
    return await createGroup(groupData);
};

// Get group details
const fetchGroupDetails = async (groupId) => {
    const group = await getGroupById(groupId);
    if (!group) throw new Error('Group not found');
    return group;
};

// Add a user to a group
const addMember = async (groupId, userId) => {
    return await addMemberToGroup(groupId, userId);
};

module.exports = {
    initializeGroup,
    fetchGroupDetails,
    addMember,
};
