const mongoose = require("mongoose");

const LeaveSchema = mongoose.Schema(
  {
    eid: {
      type: String,
      //required: false,
      //unique: true,
    },

    reason: {
        type: String,
        enum: ['medical', 'casual', 'emergency'], // Enum field with values 'medical', 'casual', 'emergency'
      },


    startDate: {
      type: Date,
     // required: false,
    },

    endDate: {
        type: Date,
        //required: false,
        },

    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'], // Enum field with values 'pending', 'accepted', 'rejected'
        default: 'pending' // Default value set to 'pending'
      }

  },
  {
    timestamps: true,
  }
);



const Leave = mongoose.model("Leave", LeaveSchema);

module.exports = Leave;
