const Donation = require('../modules/donation.model');

//display all donations
const displayDonations = async(req, res) => {
    try{
        const donations = await Donation.find({});
        res.status(200).json(donations);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

//create donation
const addDonation = async (req, res) => {

    try {
        Donation.create(req.body)
        .then(donation => res.json(donation))
        .catch(err => res.json(err))
    }catch(error) {
        res.status(500).json({message: error.message});
    }

}

//Edit a donation
const editDonation = async(req, res) => {
    try{
        const {id} = req.params;
        const donationData =  await Donation.findByIdAndUpdate(id, req.body);
        if(!donationData) {
            return res.status(404).json({message: "Donation not found"});
        }
        const updateDonation = await Donation.findById(id);
        res.status(200).json(updateDonation);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

//display One Donation
const displayOneDonation = async(req, res) => {
    try{
        const {id} = req.params;
        const donationData = await Donation.findById(id);
        if(!donationData) {
            return res.status(404).json({message: "Donation not found"});
        }
        res.status(200).json(donationData);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

//delete a donation

const deleteDonation = async(req, res) => {
    try{
        const {id} = req.params;
        const donation = await Donation.findByIdAndDelete(id);
        if(!donation) {
            return res.status(404).json({message: "Donation not found"});
        }

        res.status(200).json({message: "Donation deleted successfully"});

    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {displayDonations, addDonation, editDonation, displayOneDonation, deleteDonation};
