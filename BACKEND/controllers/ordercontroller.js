const Order = require("../modules/order.model");
const Counter = require('../modules/counter.model');
// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const displayorder= async(req, res) => {
  try{
      const order = await Order.find({});
      res.status(200).json(order);
  }catch(error) {
      res.status(500).json({message: error.message});
  }
}

const getorder = async (req, res) => {
  try {
    const { id } = req.params;
    
    const order = await Order.findById(id);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createorder = async (req, res) => {
  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'oid' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
  
    const oid = 'OID' + String(counter.seq).padStart(3, '0');
    // Create new employee using employeeId and request body
    
    const order = await Order.create({ ...req.body, oid: oid });

    res.status(200).json(Order);

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//display One item

const displayOneorder= async(req, res) => {
  try{
      const {id} = req.params;
      const order = await Order.findById(id);
      if(!order) {
          return res.status(404).json({message: "order not found"});
      }
      res.status(200).json(order);

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
const updateorder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findByIdAndUpdate(id, req.body);

    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }

    const updatedorder = await Order.findById(id);
    res.status(200).json(updatedorder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteorder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findByIdAndDelete(id);

    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }

    res.status(200).json({ message: "order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  displayorder,
  getorder,
  createorder,
  updateorder,
  deleteorder,
  displayOneorder
};
