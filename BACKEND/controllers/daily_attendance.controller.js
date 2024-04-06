const Employee = require("../modules/employee.model");
const Attendance = require("../modules/daily_attendance.model");
const Leave = require("../modules/leave.model");




// Get all employees for attendance
const getForAttendance = async (req, res) => {
    try {
      // Fetch only name and id from the collection
      const employees = await Employee.find({},'eid firstName jobRole');
      
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).send('Error fetching employee data');
    }
  };


  // Get all attendance
  const getAllAttendance = async (req, res) => {
    try {
      const attendance = await Attendance.find({});
      res.status(200).json(attendance);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  
// Get an attendance by ID
  const getOneAttendance = async (req, res) => {
    try {
      const { id } = req.params;
      const attendance = await Attendance.findById(id);
      
      if (!attendance) {
        return res.status(404).json({ message: "Employee is Absent" });
      }
  
      res.status(200).json(attendance);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// Mark attendance
  // const markAttendance = async (req, res) => {
  //   try {
  //     const attendance = await Attendance.create(req.body);
  //     res.status(200).json(attendance);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // };

  //new feature mark attendance
 
const markAttendance = async (req, res) => {
  const currentDate = new Date();
  try {
    const { eid } = req.body; // Assuming you have employee ID and attendance date in the request body

    // Fetch the employee's leave details
    const leave = await Leave.findOne({ eid }); // Adjust based on your actual data field

    if (leave && moment(leave.endDate).isAfter(moment(currentDate))) {
      // Employee is on vacation
      return res.status(400).json({ message: "Cannot mark attendance, employee is on vacation" });
    }

      try {
      const attendance = await Attendance.create(req.body);
      res.status(200).json(attendance);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

    res.status(200).json({ message: "Attendance marked successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




  //update attendance

  // const updateAttendance = async (req, res) => {
  //   const currentDate = new Date();
  //   try {
  //     const { eid } = req.body; // Assuming you have employee ID in the request body
  
  //     // Fetch the employee's leave details
  //     const leave = await Leave.findOne({ eid }); // Adjust based on your actual data field
  
  //     if (leave && moment(leave.endDate).isAfter(moment(currentDate))) {
  //       // Employee is on vacation
  //       return res.status(400).json({ message: "Cannot mark attendance, employee is on vacation" });
  //     }
  
  //     try {
        
  //       const employee = await Employee.findOneAndUpdate({ eid }, req.body);
  
  //       if (!employee) {
  //         return res.status(404).json({ message: "Employee not found" });
  //       }
    
  //       const updatedEmployee = await Employee.findOne({ eid });
  //       res.status(200).json(updatedEmployee);
  //     } catch (error) {
  //       res.status(500).json({ message: error.message });
  //     }
  
  //     res.status(200).json({ message: "Attendance updated successfully" });
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // };
  


// Delete an attendance
  const deleteAttendance = async (req, res) => {
    try {
      const { id } = req.params;
  
      const attendance = await Attendance.findByIdAndDelete(id);
  
      if (!attendance) {
        return res.status(404).json({ message: "Attendance not found" });
      }
  
      res.status(200).json({ message: "Attendance deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  
  
module.exports = {

    getForAttendance,
    markAttendance,
    getAllAttendance,
    getOneAttendance,
    deleteAttendance,
    //updateAttendance,
  
  };