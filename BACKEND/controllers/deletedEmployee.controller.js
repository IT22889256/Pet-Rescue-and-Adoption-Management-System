
const DeletedEmployee = require("../modules/deleted_employee.model");



//  Get all deleted employees
const getDeletedEmployees = async (req, res) => {
    try {
      const Deletedemployee = await DeletedEmployee.find({});
      res.status(200).json(Deletedemployee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  



module.exports = {
    getDeletedEmployees,
  
  };