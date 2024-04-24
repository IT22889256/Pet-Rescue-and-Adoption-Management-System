// routes/financialRoutes.js
const express = require('express');
const router = express.Router();
const financialController = require('../controllers/financial.controller');

// Route to get the budget
router.get('/budget', financialController.getBudget);

module.exports = router;
