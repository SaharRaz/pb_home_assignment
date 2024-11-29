const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Group schema
const groupSchema = new mongoose.Schema({
    name: String,
    members: [String],
    balance: { type: Number, default: 0 },
});

const Group = mongoose.model('Group', groupSchema);

// APIs for groups would go here
// e.g., Add members, update balance

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`Groups Service running on port ${PORT}`));
