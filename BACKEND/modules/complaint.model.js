const mongoose = require('mongoose');

const ComplaintSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
});

const Complaint = mongoose.model("Complaint", ComplaintSchema);

module.exports = Complaint;