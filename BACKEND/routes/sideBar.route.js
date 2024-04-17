const router = require('express').Router();
const {displaySideBar} = require('../controllers/sideBar.controller');


router.get('/:id', displayOneComplaint)