const express = require('express');
const router = express.Router();
const Sample = require('../models/Sample');

// API to filter data by time range
router.get('/data', async (req, res) => {
    const { startTime, endTime, frequency } = req.query;
    try {
        // Your logic to filter data based on time range
        // Sample.find({ timestamp: { $gte: startTime, $lte: endTime }});
        res.json({ message: 'Filtered data fetched successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
