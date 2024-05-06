const SponserPet = require('../modules/sponserpet.model');
const SponserDonation = require('../modules/sponsordonation.model');
const Counter = require('../modules/counter.model');
//display all sponsor donations
const displaySponsorDonations = async (req, res) => {
  try {
    const sponsorDonations = await SponserDonation.find({});
    res.status(200).json(sponsorDonations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create sponsor donation
const addSponsorDonation=async(req,res)=>{

    try {
        const counter = await Counter.findByIdAndUpdate(
          { _id: 'spid' },
          { $inc: { seq: 1 } },
          { new: true, upsert: true }
        );
      
        const spid = 'SPID' + String(counter.seq).padStart(3, '0');
        // Create new employee using employeeId and request body
        
        const sponseredPet = await SponserDonation.create({ ...req.body, spid: spid });
  
        res.status(200).json(sponseredPet);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

//Edit a sponsor donation
const editSponsorDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const sponsorDonationData = await SponserDonation.findByIdAndUpdate(
      id,
      req.body
    );
    if (!sponsorDonationData) {
      return res.status(404).json({ message: "Sponsor Donation not found" });
    }
    const updateSponsorDonation = await SponserDonation.findById(id);
    res.status(200).json(updateSponsorDonation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//display One Sponsor Donation
const displayOneSponsorDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const sponsorDonationData = await SponserDonation.findById(id);
    if (!sponsorDonationData) {
      return res.status(404).json({ message: "Sponsor Donation not found" });
    }
    res.status(200).json(sponsorDonationData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a sponsor donation
const deleteSponsorDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const sponsorDonationData = await SponserDonation.findByIdAndDelete(id);
    if (!sponsorDonationData) {
      return res.status(404).json({ message: "Sponsor Donation not found" });
    }
    res.status(200).json({ message: "Sponsor Donation deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  displaySponsorDonations,
  addSponsorDonation,
  editSponsorDonation,
  displayOneSponsorDonation,
  deleteSponsorDonation,
};
