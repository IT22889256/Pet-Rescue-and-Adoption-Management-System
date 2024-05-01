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




  
  
// Get an attendance by ID
  const ViewOneAttendance = async (req, res) => {
    try {
      const { id } = req.params;
      
     const employee = await Employee.findById(id);

     if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
     const EID = employee.eid;
   
      const leavecount = await EmployeeLeaveCount.findOne({ eid: EID }); // Check employees leave

      //res.status(200).json(attendance,leavecount);
      res.status(200).json(leavecount);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  

  //create a function to get the current date for attendance marking
  function getCurrentDate() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  }



//mark attendance
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




//view daily attendance by date
const getAttendanceByDate = async (req, res) => {
  try {
    const { date } = req.query; // Extract date from query string
    const formattedDate = new Date(date).toISOString().slice(0, 10); // Format date for MongoDB query

    const employees = await Employee.find({
      attendance: { $elemMatch: { date: formattedDate } } // Efficiently filter employees with attendance on the specified date
    });

    const attendanceData = employees.map((employee) => {
      const attendanceRecord = employee.attendance.find((record) => record.date === formattedDate);
      return {
        employeeId: employee._id,
        name: employee.name,
        attendance: attendanceRecord ? attendanceRecord.status : 'Absent', // Provide default value (Absent) if no record found
      };
    });

    res.json({ attendance: attendanceData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving attendance data' });
  }
};


//view today marked attendance
const getTodaysAttendance = async (req, res) => {
  const currentDate = getCurrentDate();

  try {
    const attendances = await Attendance.find({ date: currentDate });
    res.status(200).json({ message: "Attendance records for today retrieved successfully.", data: attendances });
  } catch (error) {
    console.error("Failed to retrieve attendance records for today:", error);
    res.status(500).json({ message: "Failed to retrieve attendance records for today. Please try again." });
  }
}

// Helper function to get the current date
function getCurrentDate() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
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
    getTodaysAttendance,
    ViewOneAttendance,
    getAttendanceByDate,
    getEmployeeAttendanceDays,
    deleteAttendance,
  
  };