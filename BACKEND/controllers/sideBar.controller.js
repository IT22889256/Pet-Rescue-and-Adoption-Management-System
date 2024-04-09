
const SideBar = require('../modules/sideBar.module')

const displaySideBar = async(req, res) => {
    try{
        const {id} = req.params;
        const sideBar = await SideBar.findById(id);
        if(!sideBar) {
            return res.status(404).json({message: "sideBar not found"});
        }
        res.status(200).json(sideBar);

    }catch (error) {
        res.status(500).json({message: error.message});
    }
}
module.exports = {
    displaySideBar,
}

