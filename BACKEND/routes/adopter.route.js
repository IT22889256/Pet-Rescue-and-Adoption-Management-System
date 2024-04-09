const express = require("express");
const router = express.Router();
const {
  createAdopterRequest,
  getAdopterRequests,
  getOneAdopterRequest,
  updateAdopterRequest,
  deleteAopterRequest,
  acceptAdopterRequest,
} = require("../controllers/adopter.controller");

//Adopter Requests Routes
router.post("/create-adopter-request", createAdopterRequest);
router.get("/adopter-requests", getAdopterRequests);
router.get("/adopter-request/:id", getOneAdopterRequest);
router.put("/update-adopter-request/:id", updateAdopterRequest);
router.delete("/delete-adopter-request/:id", deleteAopterRequest);
router.post("/accept-adopter-request/:id", acceptAdopterRequest);

module.exports = router;
