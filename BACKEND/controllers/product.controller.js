const Product = require("../modules/product.model");
const Counter = require('../modules/counter.model');

// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const displayProducts= async(req, res) => {
  try{
      const products = await Product.find({});
      res.status(200).json(products);
  }catch(error) {
      res.status(500).json({message: error.message});
  }
}

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'pid' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
  
    const pid = 'PID' + String(counter.seq).padStart(3, '0');
    // Create new employee using employeeId and request body
    
    const product = await Product.create({ ...req.body, pid: pid });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//display One item

const displayOneProduct= async(req, res) => {
  try{
      const {id} = req.params;
      const product = await Product.findById(id);
      if(!product) {
          return res.status(404).json({message: "Product not found"});
      }
      res.status(200).json(product);

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
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  displayProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
