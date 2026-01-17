// routes/analyze.js
const express = require('express');
const router = express.Router();
const analytics = require('../services/analytics');

// Optional: Simple token-based auth middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token !== process.env.ADMIN_TOKEN) {
    return res.status(403).json({ success: false, message: 'Forbidden' });
  }
  next();
};

// Apply middleware to all routes
router.use(authMiddleware);

// Get dashboard data
router.get('/dashboard', async (req, res) => {
  const data = await analytics.getDashboardData();
  res.json(data);
});

// Export CSV
router.get('/csv', async (req, res) => {
  const csvData = await analytics.exportCSV();
  res.header('Content-Type', 'text/csv');
  res.attachment('analytics.csv');
  res.send(csvData);
});

module.exports = router;