const Employee = require("../modules/employee.model");
//const Attendance = require("../modules/daily_attendance.model");
const EmployeeLeaveCount = require("../modules/employeeLeaveCount.model");
const Counter = require('../modules/counter.model');



//  Get all employees
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({ availability: 'available'});
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
// const createEmployee = async (req, res) => {
//   try {

//     const employee = await Employee.create(req.body);

   
//     const employeeLeaveCount = await EmployeeLeaveCount.create({
//       eid: employee.eid,
//       email: employee.email,
      
//     });

//     res.status(200).json(employee);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

//new feature auto incriment id for employee create
const createEmployee = async (req, res) => {
try {
  const counter = await Counter.findByIdAndUpdate(
    { _id: 'employeeId' },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );

  const employeeId = 'EMP' + String(counter.seq).padStart(3, '0');
  // Create new employee using employeeId and request body
  
  const employee = await Employee.create({ ...req.body, eid: employeeId });

  const employeeLeaveCount = await EmployeeLeaveCount.create({ eid: employee.eid ,email: employee.email });

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



  



//delete an employee after click the conformed button,
//but actually not deleting, change the availability

const DeleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the employee by ID and update the availability field
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { availability: 'unavailable' }, // Set the availability to 'unavailable'
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
  getEmployees,
  getEmployee,
  getEmployeeByEmployeeId,
  createEmployee,
  updateEmployee,
  updateEmployeeByEmployeeId,
  DeleteEmployee,
  
 
};
