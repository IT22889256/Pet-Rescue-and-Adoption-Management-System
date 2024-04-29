const express = require("express");
// const Supply = require("../modules/messagesmodel.js");
const router = express.Router();
// getSupplies,
// getSupply,
// createSupply,
// updateSupply,
// deleteSupply,
const { getSupplies, getSupply, createSupply, updateSupply, deleteSupply,acceptmessages,rejectmessages } = require('../controllers/pet_supply.controller');

router.get('/messages', getSupplies);
// router.get("/:id", getAdoption);

// create an adoption
router.post("/messages/createmessages", getSupply);

//view an adoption
router.get("/messages/viewmessages/:id", createSupply)

// update an adoption
router.put("/messages/editmessages/:id", updateSupply);

// delete an adoption
router.delete("/messages/deletemessages/:id", deleteSupply);


module.exports = router;
