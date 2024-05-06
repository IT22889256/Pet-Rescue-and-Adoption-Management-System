const requestfunds = require("../modules/requestFunds.model");
const Counter = require('../modules/counter.model');
// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const displayrequest= async(req, res) => {
  try{
      const request = await requestfunds.find({});
      res.status(200).json(request);
  }catch(error) {
      res.status(500).json({message: error.message});
  }
}

const getrequest = async (req, res) => {
  try {
    const { id } = req.params;
    
    const request = await requestfunds.findById(id);
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createrequest = async (req, res) => {
  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'requestId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
  
    const requestId = 'RID' + String(counter.seq).padStart(3, '0');
    // Create new employee using employeeId and request body
    
    const request = await requestfunds.create({ ...req.body, requestId: requestId });

    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//display One item

const displayOnerequest= async(req, res) => {
  try{
      const {id} = req.params;
      const request = await requestfunds.findById(id);
      if(!request) {
          return res.status(404).json({message: "request not found"});
      }
      res.status(200).json(request);

  }catch (error) {
      res.status(500).json({message: error.message});
  }
}
// const createProduct = async (req, res) => {

//   try {
//       // await Pet.create(req.body);
//       // res.json("Add");
//       // res.status(200).json(pet);
//       Product.create(req.body)
//       .then(product => res.json(product))
//       .catch(err => res.json(err))
//   }catch(error) {
//       res.status(500).json({message: error.message});
//   }
// }
const updaterequest = async (req, res) => {
  try {
    const { id } = req.params;

    const request = await requestfunds.findByIdAndUpdate(id, req.body);

    if (!request) {
      return res.status(404).json({ message: "request not found" });
    }

    const updatedrequest = await requestfunds.findById(id);
    res.status(200).json(updatedrequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleterequest = async (req, res) => {
  try {
    const { id } = req.params;

    const request = await requestfunds.findByIdAndDelete(id);

    if (!request) {
      return res.status(404).json({ message: "request not found" });
    }

    res.status(200).json({ message: "request deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  displayrequest,
  getrequest,
  createrequest,
  updaterequest,
  deleterequest,
  displayOnerequest
};
