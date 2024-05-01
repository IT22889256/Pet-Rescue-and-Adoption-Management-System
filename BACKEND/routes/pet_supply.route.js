const express = require("express");
const Supply = require("../modules/pet_supply.model.js");
const router = express.Router();
const { getSupplies, getSupply, createSupply, updateSupply, deleteSupply } = require('../controllers/pet_supply.controller.js');

router.get('/supplyRequest', getSupplies);
// router.get("/:id", getAdoption);

// create an adoption
router.post("/supplyRequest/createSupplyRequest", createSupply);

//view an adoption
router.get("/supplyRequest/viewSupplyRequest/:id", getSupply)

// update an adoption
router.put("/supplyRequest/editSupplyRequest/:id", updateSupply);

// delete an adoption
router.delete("/supplyRequest/deleteSupplyRequest/:id", deleteSupply);


module.exports = router;
