const express = require("express");
const Feedback = require("../modules/feedback.model.js");
const router = express.Router();
const {getFeedbacks, getFeedback, createFeedback, updateFeedback, deleteFeedback} = require('../controllers/feedback.controller.js');

//display all feedback
router.get('/feedback', getFeedbacks);

//display one feedback
router.get("/feedback/getFeedback/:id", getFeedback);

//create a feedback
router.post("/feedback/createFeedback", createFeedback);

// update a feedback
router.put("/feedback/updateFeedback/:id", updateFeedback);

// delete a feedback
router.delete("/feedback/deleteFeedback/:id", deleteFeedback);

module.exports = router;
