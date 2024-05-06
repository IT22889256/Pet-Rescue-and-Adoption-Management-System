const mongoose = require("mongoose");

const FeedbackSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },

    feedbackId: {
      type: String,
      required: true,
    },

    feedbackId: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
    },

    reason: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
