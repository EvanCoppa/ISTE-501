const express = require('express');
const Driver = require('../models/driver');

const router = express.Router();

// Get all drivers
router.get('/', async (req, res) => {
    try {
        const drivers = await Driver.find();
        res.json({ drivers });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching drivers' });
    }
});

module.exports = router;
