const Employee = require("../modules/employee.model");
const DeletedEmployee = require("../modules/deleted_employee.model");
//const Attendance = require("../modules/daily_attendance.model");
const EmployeeLeaveCount = require("../modules/employeeLeaveCount.model");



//  Get all employees
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Get an employee by mongoID
const getEmployee = async (req, res) => {
    try {
      const { id } = req.params;
      const employee = await Employee.findById(id);
      
      if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
      }
  
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  // Get an employee by employee ID
const getEmployeeByEmployeeId = async (req, res) => {
    try {
        const { eid } = req.params;
        const employee = await Employee.findOne({ eid });

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Create an employee by employee manager
const createEmployee = async (req, res) => {
  try {

    const employee = await Employee.create(req.body);

    const employeeLeaveCount = await EmployeeLeaveCount.create({
      eid: employee.eid,
      
    });

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Update an employee by mongo ID
const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findByIdAndUpdate(id, req.body);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const updatedEmployee = await Employee.findById(id);
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Update an employee by employee ID
const updateEmployeeByEmployeeId = async (req, res) => {
    try {
      const { eid } = req.params;
  
      const employee = await Employee.findOneAndUpdate({ eid }, req.body, { new: true });

  
      if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
      }
  
      const updatedEmployee = await Employee.findOne({ eid });
      res.status(200).json(updatedEmployee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



  
// Delete an employee
// const deleteEmployee = async (req, res) => {
//   try {
//     // Find the employee document by ID
//     const {id} = req.params;
//     const employee = await Employee.findById({id});
//     console.log(employee);
//     if (!employee) {
//       return res.status(404).send('Employee not found');
//     }

//     // Create a new document in DeletedEmployee collection
//     const deletedEmployee = await DeletedEmployee.create({
//       eid: employee.eid,
//       nic: employee.nic,
//       firstName: employee.firstName,
//       middleName: employee.middleName,
//       lastName: employee.lastName,
//       birthday: employee.birthday,
//       address: employee.address,
//       city: employee.city,
//       postalCode: employee.postalCode,
//       phoneNumber: employee.phoneNumber,
//       email: employee.email,
//       maritalStatus: employee.maritalStatus,
//       ReasonForDelete: req.body.ReasonForDelete
//     }); // Copy the employee data

//     // Delete the original employee document
//     await Employee.deleteOne({ eid: req.body.eid });

//     res.send('Employee data transferred and deleted successfully');
//   } catch (error) {
//     console.error('Error deleting employee:', error);
//     res.status(500).send('Internal Server Error');
//   }
// };



//delete an employee after click the conformed button,
//but actually not deleting, change the availability

const DeleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findByIdAndUpdate(id, req.body);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const updatedEmployee = await Employee.findById(id);
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





module.exports = {
  getEmployees,
  getEmployee,
  getEmployeeByEmployeeId,
  createEmployee,
  updateEmployee,
  updateEmployeeByEmployeeId,
  DeleteEmployee,
 
};
