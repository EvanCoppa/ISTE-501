const mongoose = require('mongoose');

const riderSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    specialNeeds: String
});

const Rider = mongoose.model('Rider', riderSchema);
module.exports = Rider;
