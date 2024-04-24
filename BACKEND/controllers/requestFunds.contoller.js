const requestFuns = require('../modules/requestFunds.model');


//create request
const createRequest = async(req, res) => {
    try {
        requestFuns.create(req.body)
        .then(request => res.json(request))
        .catch(err => res.json(err))
    }catch(error) {
        res.status(500).json({message: error.message});
    }

}

//display all requests
const getAllRequests = async(req, res) => {
    try{
        const requests = await requestFuns.find({});
        res.status(200).json(requests);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

//display One request
const getRequestById = async(req, res) => {
    try{
        const {id} = req.params;
        const requestData = await requestFuns.findById(id);
        if(!requestData) {
            return res.status(404).json({message: "Request not found"});
        }
        res.status(200).json(requestData);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Edit a request
const updateRequest = async(req, res) => {
    try{
        const {id} = req.params;
        const requestData =  await requestFuns.findByIdAndUpdate(id
            , req.body);
        if(!requestData) {
            return res.status(404).json({message: "Request not found"});
        }
        const updateRequest = await requestFuns.findById(id);
        res.status(200).json(updateRequest);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

//delete a request
const deleteRequest = async(req, res) => {
    try{
        const {id} = req.params;
        const requestData = await requestFuns.findByIdAndDelete(id);
        if(!requestData) {
            return res.status(404).json({message: "Request not found"});
        }
        res.status(200).json({message: "Request deleted successfully"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {createRequest, getAllRequests, getRequestById, updateRequest, deleteRequest};


