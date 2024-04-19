const Pet = require('../modules/pet.model')
const Counter = require('../modules/counter.model');
//display all pet profiles

const displayPets= async(req, res) => {
    try{
        const pets = await Pet.find({});
        res.status(200).json(pets);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}
// //create pet profile
// const addPet = async (req, res) => {
//     try {
        
//         // await Pet.create(req.body);
//         // res.json("Add");
//         // res.status(200).json(pet);
//         Pet.create(req.body)
//         .then(pet => res.json(pet))
//         .catch(err => res.json(err))
//     }catch(error) {
//         res.status(500).json({message: error.message});
//     }
// }

const addPet = async (req, res) => {
    try {
      const counter = await Counter.findByIdAndUpdate(
        { _id: 'petId' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );
    
      const petId = 'PET' + String(counter.seq).padStart(3, '0');
      // Create new employee using employeeId and request body
      
      const pet = await Pet.create({ ...req.body, pet_id: petId });

      res.status(200).json(pet);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    
    };
    

//Edit a pet profile
const editPet = async(req, res) => {
    try{
        const {id} = req.params;
        const pet =  await Pet.findByIdAndUpdate(id, req.body);

        if(!pet) {
            return res.status(404).json({message: "Pet not found"});
        }

        const updatePet = await Pet.findById(id);
        res.status(200).json(updatePet);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

//display One Pet
const displayOnePet = async(req, res) => {
    try{
        const {id} = req.params;
        const pet = await Pet.findById(id);
        if(!pet) {
            return res.status(404).json({message: "Pet not found"});
        }
        res.status(200).json(pet);

    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

//delete a pet

const deletePet = async(req, res) => {
    try{
        const {id} = req.params;
        const pet = await Pet.findByIdAndDelete(id);
        if(!pet) {
            return res.status(404).json({message: "Complaint not found"});
        }
        res.status(200).json({message: "Comaplint deleted successfully"});

    }catch(error) {
        res.status(500).json({message: error.message});
    }
}
module.exports = {
    displayPets,
    addPet,
    editPet,
    displayOnePet,
    deletePet
}

