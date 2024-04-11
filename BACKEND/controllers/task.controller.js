const Task = require('../modules/task.model')

//display all Tasks

const displayTask= async(req, res) => {
    try{
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

//create Tasks
const addTask = async (req, res) => {

    try {
        Task.create(req.body)
        .then(task => res.json(task))
        .catch(err => res.json(err))
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}


//edit tasks

const editTask = async(req, res) => {
    try{
        const {id} = req.params;
        const task =  await Task.findByIdAndUpdate(id, req.body);

        if(!task) {
            return res.status(404).json({message: "Task not found"});
        }

        const updateTask = await Task.findById(id);
        res.status(200).json(updateTask);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}



//display Tasks

const displayOneTask = async(req, res) => {
    try{
        const {id} = req.params;
        const task = await Task.findById(id);
        if(!task) {
            return res.status(404).json({message: "Task not found"});
        }
        res.status(200).json(task);

    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

//delete Tasks

// const deletePet = async(req, res) => {
//     try{
//         const {id} = req.params;
//         const pet = await Pet.findByIdAndDelete(id);
//         if(!pet) {
//             return res.status(404).json({message: "Complaint not found"});
//         }
//         res.status(200).json({message: "Comaplint deleted successfully"});

//     }catch(error) {
//         res.status(500).json({message: error.message});
//     }
// }

module.exports = {
    displayTask,
    addTask,
    editTask,
    displayOneTask,
    // deletePet
}

