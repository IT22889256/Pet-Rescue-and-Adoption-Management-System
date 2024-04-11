const express = require("express");
const JobRole = require("../modules/jobRole.model.js");
const router = express.Router();
const { getJobRoles, getJobRole, createJobRole, updateJobRole, deleteJobRole,getJobRoleByJobId,updateJobRoleByJobId } = require('../controllers/jobRole.controller.js');


// get all job roles
router.get('/', getJobRoles);

// get a job role
router.get("/:id", getJobRole);

// create a job role
router.post("/", createJobRole);

// update a job role
router.put("/:id", updateJobRole);

// delete a job role
router.delete("/:id", deleteJobRole);

// get job role by job id
router.get("/getByJobId/:jobId", getJobRoleByJobId);

// update job role by job id
router.put("/updateByJobId/:jobId", updateJobRoleByJobId);


module.exports = router;
