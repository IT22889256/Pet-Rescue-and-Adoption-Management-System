const sponsorDonation = require('../modules/sponsordonation.model');

//display all sponsor donations
const displaySponsorDonations = async(req, res) => {
    try{
        const sponsorDonations = await sponsorDonation.find({});
        res.status(200).json(sponsorDonations);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

//create sponsor donation
const addSponsorDonation = async (req, res) => {

    try {
        sponsorDonation.create(req.body)
        .then(sponsorDonation => res.json(sponsorDonation))
        .catch(err => res.json(err))
    }catch(error) {
        res.status(500).json({message: error.message});
    }

}

//Edit a sponsor donation
const editSponsorDonation = async(req, res) => {
    try{
        const {id} = req.params;
        const sponsorDonation =  await sponsor
        .findById
        .findById

        (id, req.body);
        if(!sponsorDonation) {
            return res.status(404).json({message: "Sponsor Donation not found"});
        }
        const updateSponsorDonation = await sponsorDonation.findById(id);
        res.status(200).json(updateSponsorDonation);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

//display One Sponsor Donation

const displayOneSponsorDonation = async(req, res) => {
    try{
        const {id} = req.params;
        const sponsorDonation = await sponsorDonation.findById(id);
        if(!sponsorDonation) {
            return res.status(404).json({message: "Sponsor Donation not found"});
        }
        res.status(200).json(sponsorDonation);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

//delete a sponsor donation

const deleteSponsorDonation = async(req, res) => {
    try{
        const {id} = req.params;
        const sponsorDonation = await sponsorDonation.findByIdAndDelete(id);
        if(!sponsorDonation) {
            return res.status(404).json({message: "Sponsor Donation not found"});
        }
        res.status(200).json({message: "Sponsor Donation deleted successfully"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    displaySponsorDonations,
    addSponsorDonation,
    editSponsorDonation,
    displayOneSponsorDonation,
    deleteSponsorDonation
} 