const SpecificNeedDonation = require('../modules/specificneeddonation.model');
const Counter = require('../modules/counter.model');

//display all specific need donations

const displaySpecificNeedDonations = async(req, res) => {
    try{
        const specificNeedDonations = await SpecificNeedDonation.find({});
        res.status(200).json(specificNeedDonations);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

//create specific need donation
const addSpecificNeedDonation = async (req, res) => {

    try {
        const counter = await Counter.findByIdAndUpdate(
          { _id: 'snid' },
          { $inc: { seq: 1 } },
          { new: true, upsert: true }
        );
      
        const snid = 'SND' + String(counter.seq).padStart(3, '0');
        // Create new employee using employeeId and request body
        
        const specificneeddonation = await SpecificNeedDonation.create({ ...req.body, snid: snid });
  
        res.status(200).json(specificneeddonation);
    }catch(error) {
        res.status(500).json({message: error.message});
    }

}

//Edit a specific need donation
const editSpecificNeedDonation = async(req, res) => {
    try{
        const {id} = req.params;
        const specificNeedDonationData =  await SpecificNeedDonation.findByIdAndUpdate(id, req.body);
        if(!specificNeedDonationData) {
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
        const specificNeedDonationData = await SpecificNeedDonation.findById(id);
        if(!specificNeedDonationData) {
            return res.status(404).json({message: "Specific Need Donation not found"});
        }
        res.status(200).json(specificNeedDonationData);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

  //delete a specific need donation

const deleteSpecificNeedDonation = async(req, res) => {
    try{
        const {id} = req.params;
        const specificNeedDonationData = await SpecificNeedDonation.findByIdAndDelete(id);
        if(!specificNeedDonationData) {
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
