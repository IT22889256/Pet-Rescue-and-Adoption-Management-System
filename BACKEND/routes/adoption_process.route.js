const express = require("express");
const AdoptionProcess = require("../modules/adoption_process.model.js");
const router = express.Router();
const { getAdoptionProcesses, getAdoptionProcess, createAdoptionProcess, updateAdoptionProcess, deleteAdoptionProcess } = require('../controllers/adoption_process.controller.js');

router.get('/adoptionProcess', getAdoptionProcesses);
// router.get("/:id", getAdoption);

// create an adoption
router.post("/adoptionProcess/createAdoptionProcess", createAdoptionProcess);

//view an adoption
router.get("/adoptionProfile/viewAdoptionProcess/:id", getAdoptionProcess)

// update an adoption
router.put("/adoptionProfile/editAdoptionProcess/:id", updateAdoptionProcess);

// delete an adoption
router.delete("/adoptionProfile/deleteAdoptionProcess/:id", deleteAdoptionProcess);

module.exports = router;
