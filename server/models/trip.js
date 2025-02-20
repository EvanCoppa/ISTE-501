const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Rider' },
    location: {
        address: String,
        coordinates: {
            lat: Number,
            lon: Number
        }
    },
    tripDate: Date,
    status: String
});

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;
