const Feedback = require("../modules/feedback.model");
const Counter = require("../modules/counter.model");

const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({});
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findById(id);
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFeedback = async (req, res) => {
  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "feedbackId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    const feedbackId = "FB" + String(counter.seq).padStart(3, "0");

    const feedback = await Feedback.create({
      ...req.body,
      feedbackId: feedbackId,
    });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFeedback = async (req, res) => {
  try {
    const { id } = req.params;

    const feedback = await Feedback.findByIdAndUpdate(id, req.body);

    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    const updatedFeedback = await Feedback.findById(id);
    res.status(200).json(updatedFeedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;

    const feedback = await Feedback.findByIdAndDelete(id);

    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }

    res.status(200).json({ message: "Feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFeedbacks,
  getFeedback,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
