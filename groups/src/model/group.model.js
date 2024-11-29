const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Group name
    members: [{ type: String, required: true }], // Array of user IDs
    balance: { type: Number, default: 0 }, // Group balance
    createdAt: { type: Date, default: Date.now }, // Creation timestamp
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
