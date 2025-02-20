const express = require('express');
const Rider = require('../models/rider');

const router = express.Router();

// Get all clients (customers)
router.get('/', async (req, res) => {
    try {
        const clients = await Rider.find();
        res.json({ clients });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching clients' });
    }
});

module.exports = router;
