const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const complaintSchema = new Schema({

    userName: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Complaint = mongoose.model("complaint", complaintSchema);

export default Complaint;