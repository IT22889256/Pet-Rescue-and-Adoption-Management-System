const express = require("express");
const Adoption = require("../modules/pet_adoption.model.js");
const router = express.Router();
const {
  getAdoptions,
  getAdoption,
  getMyAdoptions,
  createAdoption,
  updateAdoption,
  deleteAdoption,
} = require("../controllers/pet_adoption.controller.js");

router.get("/", getAdoptions);
// router.get("/:id", getAdoption);

//het my adoption requests
router.get("/my/:email", getMyAdoptions);

// create an adoption
router.post("/adoptionProfile/createRequest", createAdoption);

//view an adoption
router.get("/adoptionProfile/viewRequest/:id", getAdoption);

// update an adoption
router.put("/adoptionProfile/editRequest/:id", updateAdoption);

// delete an adoption
router.delete("/adoptionProfile/deleteRequest/:id", deleteAdoption);

module.exports = router;
