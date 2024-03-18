const Complaint = require('../modules/complaint.model');

//display all complaints

const displayComplaints = async(req, res) => {
    try{
        const complains = await Complaint.find({});
        res.status(200).json(complains);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}


//create complaints
const addComplaint = async (req, res) => {

    try {
        const complain = await Complaint.create(req.body);
        res.json("Add");
        // res.status(200).json(complain);
    }catch(error) {
        res.status(500).json({message: error.message});
    }

}


//update a complaint

const updateComplaint = async(req, res) => {
    try{
        const {id} = req.params;
        const complain =  await Complaint.findByIdAndUpdate(id, req.body);

        if(!complain) {
            return res.status(404).json({message: "Complaint not found"});
        }

        const updateComplaint = await Complaint.findById(id);
        res.status(200).json(updateComplaint);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

//delete a complaint

const deleteComplaint = async(req, res) => {
    try{
        const {id} = req.params;
        const complain = await Complaint.findByIdAndDelete(id);
        if(!complain) {
            return res.status(404).json({message: "Complaint not found"});
        }

        res.status(200).json({message: "Comaplint deleted successfully"});

    }catch(error) {
        res.status(500).json({message: error.message});
    }
}


//display One Complaint

const displayOneComplaint = async(req, res) => {
    try{
        const {id} = req.params;
        const complain = await Complaint.findById(id);
        if(!complain) {
            return res.status(404).json({message: "Complaint not found"});
        }
        res.status(200).json(complain);

    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    addComplaint,
    displayComplaints,
    updateComplaint,
    deleteComplaint,
    displayOneComplaint
}

