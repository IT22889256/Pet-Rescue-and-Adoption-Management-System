const JobRole = require("../modules/jobRole.model");


// get all job roles
const getJobRoles = async (req, res) => {
  try {
    const jobRoles = await JobRole.find({});
    res.status(200).json(jobRoles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// get a job role
const getJobRole = async (req, res) => {
  try {
    const { id } = req.params;
    const jobRole = await JobRole.findById(id);
    res.status(200).json(jobRole);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// create a job role
const createJobRole = async (req, res) => {
  try {
    const jobRole = await JobRole.create(req.body);
    res.status(200).json(jobRole);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// update a job role
const updateJobRole = async (req, res) => {
  try {
    const { id } = req.params;

    const jobRole = await JobRole.findByIdAndUpdate(id, req.body);

    if (!jobRole) {
      return res.status(404).json({ message: "Job role not found" });
    }

    const updatedJobRole = await JobRole.findById(id);
    res.status(200).json(updatedJobRole);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// delete a job role
const deleteJobRole = async (req, res) => {
  try {
    const { id } = req.params;

    const jobRole = await JobRole.findByIdAndDelete(id);

    if (!jobRole) {
      return res.status(404).json({ message: "Job role not found" });
    }

    res.status(200).json({ message: "Job role deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// get job role by job id
const getJobRoleByJobId = async (req, res) => {
  try {
      const { jobId } = req.params;
      const jobRole = await JobRole.findOne({ jobId });

      if (!jobRole) {
          return res.status(404).json({ message: "Job role not found" });
      }

      res.status(200).json(jobRole);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};



// update job role by job id
const updateJobRoleByJobId = async (req, res) => {
  try {
    const { jobId } = req.params;

    const jobRole = await JobRole.findOneAndUpdate({ jobId }, req.body, { new: true });

    if (!jobRole) {
      return res.status(404).json({ message: "Job role not found" });
    }

    const updatedJobRole = await JobRole.findOne({ jobId });
    res.status(200).json(updatedJobRole);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};







module.exports = {
  getJobRoles,
  getJobRole,
  createJobRole,
  updateJobRole,
  deleteJobRole,
  getJobRoleByJobId,
  updateJobRoleByJobId,
};
