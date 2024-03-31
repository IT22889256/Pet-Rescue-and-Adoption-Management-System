const specificNeedDonation = require('../modules/specificneeddonation.model');

//display all specific need donations

const displaySpecificNeedDonations = async(req, res) => {
    try{
        const specificNeedDonations = await specificNeedDonation.find({});
        res.status(200).json(specificNeedDonations);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

//create specific need donation
const addSpecificNeedDonation = async (req, res) => {

    try {
        specificNeedDonation.create(req.body)
        .then(specificNeedDonation => res.json(specificNeedDonation))
        .catch(err => res.json(err))
    }catch(error) {
        res.status(500).json({message: error.message});
    }

}

//Edit a specific need donation
const editSpecificNeedDonation = async(req, res) => {
    try{
        const {id} = req.params;
        const specificNeedDonation =  await specificNeedDonation.findByIdAndUpdate(id, req.body);
        if(!specificNeedDonation) {
            return res.status(404).json({message: "Specific Need Donation not found"});
        }
        const updateSpecificNeedDonation = await specificNeedDonation.findById(id);
        res.status(200).json(updateSpecificNeedDonation);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

//display One Specific Need Donation
const displayOneSpecificNeedDonation = async(req, res) => {
    try{
        const {id} = req.params;
        const specificNeedDonation = await specificNeedDonation.findById(id);
        if(!specificNeedDonation) {
            return res.status(404).json({message: "Specific Need Donation not found"});
        }
        res.status(200).json(specificNeedDonation);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

  //delete a specific need donation

const deleteSpecificNeedDonation = async(req, res) => {
    try{
        const {id} = req.params;
        const specificNeedDonation = await specificNeedDonation.findByIdAndDelete(id);
        if(!specificNeedDonation) {
            return res.status(404).json({message: "Specific Need Donation not found"});
        }
        res.status(200).json({message: "Specific Need Donation deleted successfully"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {displaySpecificNeedDonations, addSpecificNeedDonation, editSpecificNeedDonation, displayOneSpecificNeedDonation, deleteSpecificNeedDonation};
// Path: routes/specificneeddonation.route.js
