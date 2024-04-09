const Requests = require('../modules/requests.model')

//display all Rescue Request

const displayrequests= async(req, res) => {
    try{
        const requests = await requests.find({});
        res.status(200).json(requests);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}
//create  Requests
const createrequests = async (req, res) => {

    try {
        // await Pet.create(req.body);
        // res.json("Add");
        // res.status(200).json(pet);
        requests.create(req.body)
        .then(requests => res.json(requests))
        .catch(err => res.json(err))
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

//Edit a Request
const editrequests = async(req, res) => {
    try{
        const {id} = req.params;
        const requests=  await requests.findByIdAndUpdate(id, req.body);

        if(!requests) {
            return res.status(404).json({message: "Requests not found"});
        }

        const updaterequests= await requests.findById(id);
        res.status(200).json(updaterequests);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}



//display One Rescue Request

const displayOnerequests = async(req, res) => {
    try{
        const {id} = req.params;
        const requests = await requests.findById(id);
        if(!requests) {
            return res.status(404).json({message: " Request not found"});
        }
        res.status(200).json(requests);

    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
  displayrequests,
  createrequests,
  editrequests,
 
  displayOnerequests,
  
}

