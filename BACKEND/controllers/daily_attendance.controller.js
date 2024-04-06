const Employee = require("../modules/employee.model");
const Attendance = require("../modules/daily_attendance.model");
const Leave = require("../modules/leave.model");




// Get all employees for attendance
const getForAttendance = async (req, res) => {
    try {
      // Fetch only name and id from the collection
    const employees = await Employee.find({ availability: 'available'},'eid firstName jobRole');
      
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).send('Error fetching employee data');
    }
  };


  // Get all attendance
  const getAllAttendance = async (req, res) => {
    try {

      const today = new Date(); // Current date
      today.setHours(0, 0, 0, 0); // Set time to midnight

      const attendance = await Attendance.find({ createdAt: { $gte: today }});
      
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
  


//Mark attendance

  const markAttendance = async (req, res) => {
    try {
      const attendance = await Attendance.create(req.body);
      res.status(200).json(attendance);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  



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