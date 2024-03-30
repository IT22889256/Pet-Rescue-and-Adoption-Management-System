const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema(

    {

        Vehicle_Serial_No: {
            type: String,
            required: [true],
        },

        Vehicle_Model: {
            type: String,
            required: [true],
        },

        Plate_Number: {
            type: String,
            required: [true],
        },

        Year_Manufactured: {
            type: String,
            required: [true],
        },

        Vehicle_Color: {
            type: String,
            required: [true],
        },

        Engine_Number: {
            type: String,
            required: [true],
        },

        Chassis_Number: {
            type: String,
            required: [true],
        },
    
    },
        {
            timestamps: true
        }

    );

    const Vehicle = mongoose.model("Vehicle", VehicleSchema);
    module.exports = Vehicle;