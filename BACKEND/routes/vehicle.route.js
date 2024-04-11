const express = require('express');
const Vehicle = require('../modules/vehicle.model.js');
const router = express.Router();
const {getVehicles, getVehicle, createVehicle, updateVehicle, deleteVehicle} = require('../controllers/vehicle.controller.js');



//get all vehicles
router.get("/", getVehicles); 

//get vehicle by id
router.get('/:id', getVehicle);

//create vehicle
router.post("/", createVehicle); 

//update vehicle
router.put("/:id", updateVehicle);

//delete vehicle
router.delete("/:id", deleteVehicle);

module.exports = router;