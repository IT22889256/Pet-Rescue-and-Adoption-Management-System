const mongoose = require("mongoose");

const AttendanceSchema = mongoose.Schema(
  {
    eid: {
      type: String,
      required: false,
      unique: true,
    },

  },
  {
    timestamps: true,
  }
);



const Attendance = mongoose.model("Attendance", AttendanceSchema);

module.exports = Attendance;
