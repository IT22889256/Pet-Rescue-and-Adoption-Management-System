const Supplier = require("../modules/supplier.model");

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
      const request = await request.find({});
      res.status(200).json(request);
  }catch(error) {
      res.status(500).json({message: error.message});
  }
}

const getrequest = async (req, res) => {
  try {
    const { id } = req.params;
    
    const request = await request.findById(id);
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createrequest = async (req, res) => {
  try {
    const request = await request.create(req.body);
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//display One item

const displayOnerequest= async(req, res) => {
  try{
      const {id} = req.params;
      const request = await request.findById(id);
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

    const request = await request.findByIdAndUpdate(id, req.body);

    if (!request) {
      return res.status(404).json({ message: "request not found" });
    }

    const updatedrequest = await request.findById(id);
    res.status(200).json(updatedrequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleterequest = async (req, res) => {
  try {
    const { id } = req.params;

    const request = await request.findByIdAndDelete(id);

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
