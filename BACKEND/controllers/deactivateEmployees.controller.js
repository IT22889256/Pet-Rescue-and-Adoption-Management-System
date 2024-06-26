
const Employee = require("../modules/employee.model");
//const Attendance = require("../modules/daily_attendance.model");
const EmployeeLeaveCount = require("../modules/employeeLeaveCount.model");





//view deactivated employees

const GetUnavailableEmployees = async (req, res) => {
    try {
      // Find all employees with availability set to 'active'
      const deactiveEmployees = await Employee.find({ availability: 'unavailable' });
  
      if (deactiveEmployees.length === 0) {
        return res.status(404).json({ message: "No unavailable employees found" });
      }
  
      res.status(200).json(deactiveEmployees);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  //get an unavailable employee
  const GetUnavailableEmployeeById = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the employee by ID and availability set to 'unavailable'
      const unavailableEmployee = await Employee.findOne({
        _id: id,
        availability: 'unavailable',
      });
  
      if (!unavailableEmployee) {
        return res.status(404).json({ message: "No unavailable employee found" });
      }
  
      res.status(200).json(unavailableEmployee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  


  const ActivateEmployee = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the employee by ID and update the availability field
      const updatedEmployee = await Employee.findByIdAndUpdate(
        id,
        { availability: 'available' }, // Set the availability to 'unavailable'
        { new: true } // Return the updated employee object
      );
  
      if (!updatedEmployee) {
        return res.status(404).json({ message: "Employee not found" });
      }
  
      res.status(200).json(updatedEmployee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };







module.exports = {
    
    GetUnavailableEmployees,
    GetUnavailableEmployeeById,
    ActivateEmployee,
   
  };
  