const order = require("../modules/order.model");

// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const displaysuppliers= async(req, res) => {
  try{
      const suppliers = await Suppliers.find({});
      res.status(200).json(supplier);
  }catch(error) {
      res.status(500).json({message: error.message});
  }
}

const getsuppliers = async (req, res) => {
  try {
    const { id } = req.params;
    
    const suppliers = await Suppliers.findById(id);
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createsuppliers = async (req, res) => {
  try {
    const suppliers = await Suppliers.create(req.body);
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }s
};


//display One item

const displayOnesuppliers= async(req, res) => {
  try{
      const {id} = req.params;
      const suppliers = await Suppliers.findById(id);
      if(!suppliers) {
          return res.status(404).json({message: "suppliers not found"});
      }
      res.status(200).json(suppliers);

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
const updatesuppliers = async (req, res) => {
  try {
    const { id } = req.params;

    const suppliers = await suppliers.findByIdAndUpdate(id, req.body);

    if (!suppliers) {
      return res.status(404).json({ message: "suppliers not found" });
    }

    const updatedsuppliers = await suppliers.findById(id);
    res.status(200).json(updatedsuppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletesuppliers = async (req, res) => {
  try {
    const { id } = req.params;

    const suppliers = await Suppliers.findByIdAndDelete(id);

    if (!suppliers) {
      return res.status(404).json({ message: "suppliers not found" });
    }

    res.status(200).json({ message: "suppliers deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  displaysuppliers,
  getsuppliers,
  createsuppliers,
  updatesuppliers,
  deletesuppliers,
  displayOnesuppliers
};
