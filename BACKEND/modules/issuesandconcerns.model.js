const mongoose = require("mongoose");

const IssuesAndConcernsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      //required: [true, "Please enter name"],
    },

    email: {
      type: String,
     // required: [true, "Please enter email"],
     
    },

    issuesandconcerns: {
      type: String,
     // required: [true, "Please enter adoption related concerns or technical issues"],
    
    },

    issuesandconcerns_status: {
      type: String,
    // required: [true, ""],

    }

  },
  {
    timestamps: true,
  }
);

const IssuesAndConcerns = mongoose.model("IssuesAndConcerns", IssuesAndConcernsSchema);

module.exports = IssuesAndConcerns;
