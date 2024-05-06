const Supplier = require("../modules/supplier.model");
const Counter = require('../modules/counter.model');

// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const displaysupplier= async(req, res) => {
  try{
      const supplier = await Supplier.find({});
      res.status(200).json(supplier);
  }catch(error) {
      res.status(500).json({message: error.message});
  }
}

const getsupplier = async (req, res) => {
  try {
    const { id } = req.params;
    
    const supplier = await Supplier.findById(id);
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createsupplier = async (req, res) => {
  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'sid' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
  
    const sid = 'SID' + String(counter.seq).padStart(3, '0');
    // Create new employee using employeeId and request body
    
    const supplier = await Supplier.create({ ...req.body, sid: sid });

    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//display One item

const displayOnesupplier= async(req, res) => {
  try{
      const {id} = req.params;
      const supplier = await Supplier.findById(id);
      if(!supplier) {
          return res.status(404).json({message: "supplier not found"});
      }
      res.status(200).json(supplier);

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
const updatesupplier = async (req, res) => {
  try {
    const { id } = req.params;

    const supplier = await Supplier.findByIdAndUpdate(id, req.body);

    if (!supplier) {
      return res.status(404).json({ message: "supplier not found" });
    }

    const updatedsupplier = await Supplier.findById(id);
    res.status(200).json(updatedsupplier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletesupplier = async (req, res) => {
  try {
    const { id } = req.params;

    const supplier = await Supplier.findByIdAndDelete(id);

    if (!supplier) {
      return res.status(404).json({ message: "supplier not found" });
    }

    res.status(200).json({ message: "supplier deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  displaysupplier,
  getsupplier,
  createsupplier,
  updatesupplier,
  deletesupplier,
  displayOnesupplier
};
