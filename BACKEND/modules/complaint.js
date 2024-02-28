const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const complaintSchema = new Schema({
    
});

const Complaint = mongoose.model("complaint", complaintSchema);

export default Complaint;