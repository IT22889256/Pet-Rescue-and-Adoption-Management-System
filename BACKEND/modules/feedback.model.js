const mongoose = require("mongoose");

const FeedbackSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: [true, "Please enter name"],
    },

    email: {
      type: String,
      required: [true, "Please enter email"],
     
    },

    reason: {
      type: String,
      required: [true, "Please enter feedback "],
    
    },

    status: {
      type:String,
    }

  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;