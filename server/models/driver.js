const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    name: String,
    vehicleType: String,
    phoneNumber: String,
    availability: Boolean
});

const Driver = mongoose.model('Driver', driverSchema);
module.exports = Driver;
