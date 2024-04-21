const Employee = require("../modules/employee.model");
const Attendance = require("../modules/daily_attendance.model");
const Leave = require("../modules/leave.model");
const EmployeeLeaveCount = require("../modules/employeeLeaveCount.model");




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
  //for today
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
  const ViewOneAttendance = async (req, res) => {
    try {
      const { id } = req.params;
      
     const employee = await Employee.findById(id);
     const EID = employee.eid;
      //const attendance = await Attendance.findOne(employee.eid);
      //console.log(attendance)
      // const attendance = await Attendance.findById(id);
      
      // if (!attendance) {
      //   return res.status(404).json({ message: "Employee is Absent" });
      // }

      const leavecount = await EmployeeLeaveCount.findOne({ eid: EID }); // Check employees leave

  
    
      //res.status(200).json(attendance,leavecount);
      res.status(200).json(leavecount);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  


//Mark attendance
//old version
  // const markAttendance = async (req, res) => {
  //   try {
  //     const attendance = await Attendance.create(req.body);
  //     res.status(200).json(attendance);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // };

//mark attendance
//new version
// const markAttendance = async (req, res) => {
// try {
//   const { userId, date } = req.body;

//   // Check if attendance for the user on the specified date already exists
//   let attendance = await Attendance.findOne({ userId, date });

//   if (attendance) {
//     // If attendance already exists for the user on this date, update it
//     attendance = await Attendance.findOneAndUpdate(
//       { userId, date },
//       { $set: req.body }, // Update the attendance data with the new request body
//       { new: true } // Return the updated document
//     );
//   } else {
//     // If attendance doesn't exist, create a new attendance record
//     attendance = await Attendance.create(req.body);
//   }

//   res.status(200).json(attendance);
// } catch (error) {
//   res.status(500).json({ message: error.message });
// }
// };
  

//2nd new version
const markAttendance = async (req, res) => {
  try {
    const { userId } = req.body;
    
    // Get the current timestamp
    const currentDate = new Date();

    // Calculate the start and end of the current day
    const startOfDay = new Date(currentDate);
    startOfDay.setHours(0, 0, 0, 0); // Set to the beginning of the day
    const endOfDay = new Date(currentDate);
    endOfDay.setHours(23, 59, 59, 999); // Set to the end of the day

    // Check if attendance for the user on the current date already exists
    let attendance = await Attendance.findOne({ 
      userId, 
      date: { 
        $gte: startOfDay,
        $lt: endOfDay
      }
    });

    if (attendance) {
      // If attendance already exists for the user on this date, update it
      attendance = await Attendance.findOneAndUpdate(
        { userId, date: { $gte: startOfDay, $lt: endOfDay } },
        { $set: req.body }, // Update the attendance data with the new request body
        { new: true } // Return the updated document
      );
    } else {
      // If attendance doesn't exist, create a new attendance record
      attendance = await Attendance.create({ ...req.body, date: currentDate });
    }

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
  

  // Get the total number of days an employee has attended
  const getEmployeeAttendanceDays = async (req, res) => {
    try {
      const { id } = req.params;
  
     
      const employee = await Employee.findById(id);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      const empid = employee.eid;
  
      const attendanceDays = await Attendance.aggregate([
        { $match: { eid: empid } },
        {
          $group: {
            _id: { eid: '$eid', day: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } } },
            count: { $sum: 1 }
          }
        },
        {
          $group: {
            _id: '$_id.eid',
            totalAttendanceDays: { $sum: 1 }
          }
        }
      ]);
      if (attendanceDays.length > 0) {
        return res.json(attendanceDays[0].totalAttendanceDays);
        
      } else {
        return res.json(0);
      }
    } catch (error) {
      console.error(error); // Log the error for debugging
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  
module.exports = {

    getForAttendance,
    markAttendance,
    getAllAttendance,
    ViewOneAttendance,
    getEmployeeAttendanceDays,
    deleteAttendance,
  
  };