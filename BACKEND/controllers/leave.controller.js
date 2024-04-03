const Employee = require("../modules/employee.model");
const DeletedEmployee = require("../modules/deleted_employee.model");
const Leave = require("../modules/leave.model");
const EmployeeLeaveCount = require("../modules/employee_leave_count.model");


//  Get all employees leaves (employee manager)
const getLeaves = async (req, res) => {
    try {
      const leave = await Leave.find({});
      res.status(200).json(leave);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  
  // Get an leave by ID
  const getOneLeave = async (req, res) => {
    try {
      const { id } = req.params;
      const leave = await Leave.findById(id);
      
      if (!leave) {
        return res.status(404).json({ message: "Employee cannot find" });
      }
  
      res.status(200).json(leave);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };




  // Request for leave(employee)

  const requestLeave = async (req, res) => {
    try {
      const leave = await Leave.create(req.body);
      res.status(200).json(leave);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



// Mark leave by employee Manager
const markLeave = async (req, res) => {
   
  try {

      const { id } = req.params;
      const {reason} = req.body.reason;

      // const eid = req.body.eid;
      const eid = await Leave.findOne({eid:req.body.eid});

      if (!eid) {
        return res.status(404).json({ message: 'employee not found' });
      }

      const medical = await EmployeeLeaveCount.findOne(eid);
      const casual = await EmployeeLeaveCount.findOne(eid);
      const emergency = await EmployeeLeaveCount.findOne(eid);

     
      switch (reason) {
        case "medical":
          if (medical > 0) {
            medical--;
          } else {
            return res.status(404).json({ message: 'No medical leaves available' });
          }
          break;
        case "casual":
          if (casual > 0) {
            casual--;
          } else {
            return res.status(404).json({ message: 'No casual leaves available' });
          }
          break;
        case "emergency":
          if (emergency > 0) {
            emergency--;
          } else {
            return res.status(404).json({ message: 'No emergency leaves available' });
          }
          break;
        default:
          return res.status(400).json({ message: 'Invalid reason provided' });
      }
      
      const updatedLeaveCount = await EmployeeLeaveCount.findOneAndUpdate({eid:req.body.eid}, { medical, casual, emergency }, { new: true });


      const leave = await Leave.findOneAndUpdate({ eid: eid }, req.body, { new: true });

  
      if (!leave) {
        return res.status(404).json({ message: "Leave not found" });
      }
  
      const updatedLeave = await Leave.findOne({ eid: eid });

      res.status(200).json(updatedLeave);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };






    // View leave by employee
    const viewLeave = async (req, res) => {
        try {
          const { id } = req.params;
          // Find all leave documents where the 'eid' field matches the provided ID
          const leave = await Leave.find({ eid: id });
          
          if (!leave || leave.length === 0) {
            return res.status(404).json({ message: "Cannot find leave" });
          }
      
          res.status(200).json(leave);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };
      
  //delete leave by employee or manager

  const deleteLeave = async (req, res) => {
    try {
      const { _id } = req.params; // Assuming you send the leave entry ID in the request parameters
  
      // Find the leave entry based on the MongoDB default _id
      const existingLeave = await Leave.findById(_id);
  
      if (!existingLeave) {
        return res.status(404).json({ message: 'Leave entry not found' });
      }
  
      // Delete the leave entry
      await existingLeave.remove();
  
      return res.status(200).json({ message: 'Leave entry deleted successfully' });
    } catch (error) {
      console.error('Error deleting leave:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

      // Delete all the leaves entry

  const deleteAllLeaves = async (req, res) => {
    try {
      // Delete all leave documents (assuming you have a Leave model/schema)
      await Leave.deleteMany({});
      res.status(200).json({ message: "All leaves deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  module.exports = {
    getLeaves,
    getOneLeave,
    requestLeave,
    markLeave,
    viewLeave,
    deleteLeave,
    deleteAllLeaves,
 
  };
  