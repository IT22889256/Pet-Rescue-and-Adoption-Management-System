const Common = require('../modules/common.model')

const displayTask= async(req, res) => {
    try{
        const commons = await Common.find({});
        res.status(200).json(commons);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

const editTask = async(req, res) => {
    try{
        const {id} = req.params;
        const common =  await Common.findByIdAndUpdate(id, req.body);

        if(!common) {
            return res.status(404).json({message: "common not found"});
        }

        const updateCommon = await Common.findById(id);
        res.status(200).json(updateCommon);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const displayOneTask = async(req, res) => {
    try{
        const {id} = req.params;
        const common = await Common.findById(id);
        if(!common) {
            return res.status(404).json({message: "common not found"});
        }
        res.status(200).json(common);

    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    displayTask,
    editTask,
    displayOneTask,
}
