
const express = require('express');
const router = express.Router();
const { SendMail } = require('../controllers/email.controller');


// Send an email
router.post('/', SendMail);



module.exports = router;