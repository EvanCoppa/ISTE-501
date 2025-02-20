const express = require('express');
const Trip = require('../models/trip');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const router = express.Router();

// Get a specific trip by ID with aggregated driver and customer data
router.get('/:id', async (req, res) => {
    try {
        const tripId = req.params.id;

        const trip = await Trip.aggregate([
            {
                $match: { _id: ObjectId(tripId) }
            },
            {
                $lookup: {
                    from: 'drivers',
                    localField: 'driver',
                    foreignField: '_id',
                    as: 'driverDetails'
                }
            },
            {
                $lookup: {
                    from: 'riders',
                    localField: 'customer',
                    foreignField: '_id',
                    as: 'customerDetails'
                }
            },
            {
                $unwind: '$driverDetails'
            },
            {
                $unwind: '$customerDetails'
            }
        ]);

        if (trip.length === 0) {
            return res.status(404).json({ error: 'Trip not found' });
        }

        res.json({ trip: trip[0] });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching trip' });
    }
});

// Get all trips with aggregated driver and customer data
router.get('/', async (req, res) => {
    try {
        const trips = await Trip.aggregate([
            {
                $lookup: {
                    from: 'drivers',
                    localField: 'driver',
                    foreignField: '_id',
                    as: 'driverDetails'
                }
            },
            {
                $lookup: {
                    from: 'riders',
                    localField: 'customer',
                    foreignField: '_id',
                    as: 'customerDetails'
                }
            },
            {
                $unwind: '$driverDetails'
            },
            {
                $unwind: '$customerDetails'
            }
        ]);

        res.json({ trips });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching trips' });
    }
});

module.exports = router;
