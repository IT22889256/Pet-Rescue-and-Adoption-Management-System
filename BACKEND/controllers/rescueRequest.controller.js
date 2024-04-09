const RescueRequest = require('../modules/rescueRequest.model')

//display all Rescue Request

const displayRescueRequests= async(req, res) => {
    try{
        const rescueRequests = await RescueRequest.find({});
        res.status(200).json(rescueRequests);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}
//create Rescue Request
const createRescueRequest = async (req, res) => {

    try {
        // await Pet.create(req.body);
        // res.json("Add");
        // res.status(200).json(pet);
        RescueRequest.create(req.body)
        .then(rescueRequest => res.json(rescueRequest))
        .catch(err => res.json(err))
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

//Edit a Rescue Request
const editRescueRequest = async(req, res) => {
    try{
        const {id} = req.params;
        const rescueRequest =  await RescueRequest.findByIdAndUpdate(id, req.body);

        if(!rescueRequest) {
            return res.status(404).json({message: "Rescue Request not found"});
        }

        const updateRescueRequest= await RescueRequest.findById(id);
        res.status(200).json(updateRescueRequest);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

//accept a Rescue Request
const acceptRescueRequest = async(req, res) => {
    try{
        const {id} = req.params;
        const rescueRequest =  await RescueRequest.findByIdAndUpdate(id, req.body);

        if(!rescueRequest) {
            return res.status(404).json({message: "Rescue Request not found"});
        }

        const updateRescueRequest= await RescueRequest.findById(id);
        res.status(200).json(updateRescueRequest);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}


//display One Rescue Request

const displayOneRescueRequest = async(req, res) => {
    try{
        const {id} = req.params;
        const rescueRequest = await RescueRequest.findById(id);
        if(!rescueRequest) {
            return res.status(404).json({message: "Rescue Request not found"});
        }
        res.status(200).json(rescueRequest);

    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

//delete a Rescue Request

const rejectRescueRequest= async(req, res) => {
    try{
        const {id} = req.params;
        const rescueRequest = await RescueRequest.findByIdAndDelete(id);
        if(!rescueRequest) {
            return res.status(404).json({message: "Rescue Request not found"});
        }
        res.status(200).json({message: "Rescue Request deleted successfully"});

    }catch(error) {
        res.status(500).json({message: error.message});
    }
}
module.exports = {
    displayRescueRequests,
    createRescueRequest,
    editRescueRequest,
    displayOneRescueRequest,
    rejectRescueRequest,
    acceptRescueRequest
}

