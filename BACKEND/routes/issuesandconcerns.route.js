const express = require("express");

const router = express.Router();
const {getIssuesAndConcerns, getIssueAndConcern, createIssuesAndConcerns, updateIssueAndConcern, deleteIssueAndConcern} = require('../controllers/issuesandconcerns.controller.js');

//display all issues & concerns
router.get('/issueandconcern', getIssuesAndConcerns);

//display one issue & concern
router.get("/issueandconcern/getIssueAndConcern/:id", getIssueAndConcern);

//create a issue & concern
router.post("/issueandconcern/createIssueAndConcern", createIssuesAndConcerns);

// update a issue & concern
router.put("/issueandconcern/updateIssueAndConcern/:id", updateIssueAndConcern);

// delete a issue & concern
router.delete("/issueandconcern/deleteIssueAndConcern/:id", deleteIssueAndConcern);

module.exports = router;
