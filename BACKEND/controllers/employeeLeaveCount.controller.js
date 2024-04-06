const EmployeeLeaveCount = require("../modules/employeeLeaveCount.model");


//get leave count by id

 const viewLeaveCount = async (req, res) => {
  try {
    const { id } = req.params;
    const leaveCount = await EmployeeLeaveCount.findById(id);
    
    if (!leaveCount) {
      return res.status(404).json({ message: "Employee cannot find" });
    }

    res.status(200).json(leaveCount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



//special automated feature for reset employee leave count every 31st midnight

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
    viewLeaveCount,
  };
  