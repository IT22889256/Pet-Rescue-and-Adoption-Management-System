const EmployeeLeaveCount = require("../modules/employeeLeaveCount.model");


//special induwara automated feature for reset employee leave count every 1st month

const resetEmployeeLeaveCount = async (req, res) => {
    try {
      
      // Your default leave values (modify as needed)
      const defaultLeaveValues = {
        medical: 4,
        casual: 3,
        emergency: 2,
      };
  
      // Update all existing leave documents with default values
      await EmployeeLeaveCount.updateMany({}, defaultLeaveValues);
  
      res.status(200).json({ message: 'EmployeeLeaveCount collection reset successfully.' });
    } catch (error) {
      res.status(500).json({ message: `Error resetting EmployeeLeaveCount collection:` });
     
    }
  };
  
  module.exports = {
    resetEmployeeLeaveCount,
  };
  