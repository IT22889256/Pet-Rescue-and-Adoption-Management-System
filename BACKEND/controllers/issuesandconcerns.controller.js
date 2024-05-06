const IssuesAndConcerns = require("../modules/issuesandconcerns.model")
const Counter = require('../modules/counter.model');


const getIssuesAndConcerns = async (req, res) => {
  try {
    const issuesandconcerns = await IssuesAndConcerns.find({});
    res.status(200).json(issuesandconcerns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getIssueAndConcern = async (req, res) => {
  try {
    const { id } = req.params;
    const issueandconcern = await IssuesAndConcerns.findById(id);
    res.status(200).json(issueandconcern);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createIssuesAndConcerns = async (req, res) => {
  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'IssueandConcernId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
  
    const IssueandConcernId = 'IC' + String(counter.seq).padStart(3, '0');
    const issueandconcern = await IssuesAndConcerns.create({...req.body,issuesandconcernsId:IssueandConcernId});
    res.status(200).json(issueandconcern);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateIssueAndConcern= async (req, res) => {
  try {
    const { id } = req.params;

    const issueandconcern = await IssuesAndConcerns.findByIdAndUpdate(id, req.body);

    if (!issueandconcern) {
      return res.status(404).json({ message: "Issue or concern is not found" });
    }

    const updatedIssueAndConcern = await IssuesAndConcerns.findById(id);
    res.status(200).json(updatedIssueAndConcern);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteIssueAndConcern = async (req, res) => {
  try {
    const { id } = req.params;

    const issueandconcern = await IssuesAndConcerns.findByIdAndDelete(id);

    if (!issueandconcern) {
      return res.status(404).json({ message: "Issue or concern is not found" });
    }

    res.status(200).json({ message: "Issue or concern is deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getIssuesAndConcerns,
  getIssueAndConcern,
  createIssuesAndConcerns,
  updateIssueAndConcern,
  deleteIssueAndConcern,
};
