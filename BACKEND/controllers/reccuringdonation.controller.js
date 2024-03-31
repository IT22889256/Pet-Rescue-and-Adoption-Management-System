const reccuringDonation = require('../modules/reccuringdonation.model');

//display all reccuring donations
const displayReccuringDonations = async(req, res) => {
    try{
        const reccuringDonations = await reccuringDonation.find({});
        res.status(200).json(reccuringDonations);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

//create reccuring donation
const addReccuringDonation = async (req, res) => {

    try {
        reccuringDonation.create(req.body)
        .then(reccuringDonation => res.json(reccuringDonation))
        .catch(err => res.json(err))
    }catch(error) {
        res.status(500).json({message: error.message});
    }

}

//Edit a reccuring donation
const editReccuringDonation = async(req, res) => {
    try{
        const {id} = req.params;
        const reccuringDonation =  await reccuringDonation.findByIdAndUpdate(id, req.body);   
        if(!reccuringDonation) {
            return res.status(404).json({message: "Reccuring Donation not found"});
        }
        const updateReccuringDonation = await reccuringDonation.findById(id);
        res.status(200).json(updateReccuringDonation);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

//display One Reccuring Donation
const displayOneReccuringDonation = async(req, res) => {
    try{
        const {id} = req.params;
        const reccuringDonation = await reccuringDonation.findById(id);
        if(!reccuringDonation) {
            return res.status(404).json({message: "Reccuring Donation not found"});
        }
        res.status(200).json(reccuringDonation);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

//delete a reccuring donation

const deleteReccuringDonation = async(req, res) => {
    try{
        const {id} = req.params;
        const reccuringDonation = await reccuringDonation.findByIdAndDelete(id);
        if(!reccuringDonation) {
            return res.status(404).json({message: "Reccuring Donation not found"});
        }

        res.status(200).json({message: "Reccuring Donation deleted successfully"});

    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {displayReccuringDonations, addReccuringDonation, editReccuringDonation, displayOneReccuringDonation, deleteReccuringDonation};