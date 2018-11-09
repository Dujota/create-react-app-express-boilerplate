const router = require('express').Router();
// models
const resourceRoutes = require('./resource');

// Model Resource routes
router.use('/resource', resourceRoutes);

module.exports = router;
