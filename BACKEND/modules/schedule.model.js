const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema(

    {

        Transport_Type: {
            type: String,
            required: [true],
        },

        Number_of_Pets: {
            type: Number,
            required: [true],
        },

        Location: {
            type: String,
            required: [true],
        },

        Driver: {
            type: String,
            required: [true],
        },

        Vet_nary_Doctor: {
            type: String,
            required: [true],
        },

        Staff_Member: {
            type: String,
            required: [true],
        },
        schedule_status: {
            type: String,
            default:'Pending' ,
          },
    },
        {
            timestamps: true
        }

    );

    const Schedule = mongoose.model("Schedule", ScheduleSchema);
    module.exports = Schedule;