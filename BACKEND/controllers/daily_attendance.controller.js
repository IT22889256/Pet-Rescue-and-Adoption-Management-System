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
  

  //create a function to get the current date for attendance marking
  function getCurrentDate() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  }

// Mark attendance  
//3rd new version
// const markAttendance =async (req, res) => {
//   const selectedEmployeeDetails = req.body;

//   try {
//     const attendances = selectedEmployeeDetails.map((employee) => ({
//       eid: employee.eid,
//       firstName: employee.firstName,
//       jobRole: employee.jobRole,
//     }));

//     const result = await Attendance.insertMany(attendances);
//     res.status(201).json({ message: "Attendance marked successfully.", data: result });
//   } catch (error) {
//     console.error("Failed to mark attendance:", error);
//     res.status(500).json({ message: "Failed to mark attendance. Please try again." });
//   }
// }

// const markAttendance = async (req, res) => {
//   const selectedEmployeeDetails = req.body;
//   const currentDate = getCurrentDate();

//   try {
//     const attendances = selectedEmployeeDetails.map(async (employee) => {
//       const existingAttendance = await Attendance.findOne({ eid: employee.eid, date: currentDate });
//       if (!existingAttendance) {
//         return {
//           eid: employee.eid,
//           date: currentDate,
//           firstName: employee.firstName,
//           jobRole: employee.jobRole,
//         };
//       }
//       return existingAttendance;
//     });

//     const results = await Promise.all(attendances); // Wait for all attendances to be processed
//     const filteredResults = results.filter(attendance => attendance !== null); // Filter out existing attendances

//     const insertedAttendances = await Attendance.insertMany(filteredResults);
//     res.status(201).json({ message: "Attendance marked successfully.", data: insertedAttendances });
//   } catch (error) {
//     console.error("Failed to mark attendance:", error);
//     res.status(500).json({ message: "Failed to mark attendance. Please try again." });
//   }
// }


const markAttendance = async (req, res) => {
  const selectedEmployeeDetails = req.body;
  const currentDate = getCurrentDate();

  try {
    const attendances = selectedEmployeeDetails.map(async (employee) => {
      const existingAttendance = await Attendance.findOne({ eid: employee.eid, date: currentDate });
      if (existingAttendance) {
        // Handle duplicate employee for attendance (e.g., log a warning or return an error)
        console.warn(`Duplicate attendance for employee ${employee.eid} on ${currentDate}`);
        return null; // Skip inserting this employee's attendance
      }
      return {
        eid: employee.eid,
        date: currentDate,
        firstName: employee.firstName,
        jobRole: employee.jobRole,
      };
    });

    const results = await Promise.all(attendances);
    const filteredResults = results.filter(attendance => attendance !== null); // Filter out skipped attendances

    const insertedAttendances = await Attendance.insertMany(filteredResults);
    res.status(201).json({ message: "Attendance marked successfully.", data: insertedAttendances });
  } catch (error) {
    console.error("Failed to mark attendance:", error);
    res.status(500).json({ message: "Failed to mark attendance. Please try again." });
  }
}







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