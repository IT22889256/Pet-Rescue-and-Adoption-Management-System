const express = require("express");
const Feedback = require("../modules/feedback.model.js");
const router = express.Router();
const {getImages, getImage, createImage, updateImage, deleteImage} = require('../controllers/gallery.controller.js');

//display all 
router.get('/gallery', getImages);

//display one
router.get("/gallery/getImage/:id", getImage);

//create 
router.post("/gallery/createImage", createImage);

// update 
router.put("/gallery/updateImage/:id", updateImage);

// delete a feedback
router.delete("/gallery/deleteImage/:id", deleteImage);

module.exports = router;
