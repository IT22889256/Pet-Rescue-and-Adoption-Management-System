const mongoose = require("mongoose");

const IssuesAndConcernsSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true 
    },
    issuesandconcernsId: {
      type: String,
      required: true 
    },
    email: {
      type: String,
      required: true      
    },

    message: {
      type: String,
      required: true     
    },

    issuesandconcerns_status: {
      type: String,
      required: true 
    },
    
    imgUrl:{
      type: String, 
    }

  },
  {
    timestamps: true,
  }
);

const IssuesAndConcerns = mongoose.model("IssuesAndConcerns", IssuesAndConcernsSchema);

module.exports = IssuesAndConcerns;
