const Employee = require("../modules/employee.model");
const Leave = require("../modules/leave.model");
const EmployeeLeaveCount = require("../modules/employeeLeaveCount.model");


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




  // Request for leave by (employee)

  const requestLeave = async (req, res) => {
    try {
      const leave = await Leave.create(req.body);
      res.status(200).json(leave);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



// Mark leave by employee Manager
const acceptLeave = async (req, res) => {
   
  try {

      const { id } = req.params;


      const employeeLeave = await Leave.findById(id);

      if (!employeeLeave) {
        return res.status(404).json({ message: 'employee not found' });
      }

      const reason = employeeLeave.reason;
      const status = employeeLeave.status;
      const eid = employeeLeave.eid;
      const days = employeeLeave.days;

     
      const LeaveCount = await EmployeeLeaveCount.findOne({eid:eid});
      
      let medical = LeaveCount.medical;
      let casual = LeaveCount.casual;
      let emergency = LeaveCount.emergency;

     
      
if(reason === 'medical'){
  if(medical > 0 && medical >= days){
    medical--;
  }else{
    return res.status(404).json({ message: 'No medical leaves available' });
  }
}

if(reason === 'casual'){
  if(casual > 0 && casual >= days){
    casual--;
  }else{
    return res.status(404).json({ message: 'No casual leaves available' });
  }

}

if(reason === 'emergency'){
  if(emergency > 0 && emergency >= days){
    emergency--;
  }else{
    return res.status(404).json({ message: 'No emergency leaves available' });
  }
}


      const updatedLeaveCount = await EmployeeLeaveCount.findOneAndUpdate({eid:eid}, { medical, casual, emergency }, { new: true });


      const leave = await Leave.findOneAndUpdate({ eid: eid }, {status:'accepted'}, { new: true });

  
      if (!leave) {
        return res.status(404).json({ message: "Leave not found" });
      }
  
      const updatedleave = await Leave.findOne({ eid: eid });

      res.status(200).json(updatedleave);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



//reject leave by employee manager

const rejectLeave = async (req, res) => {
  try {
    const { id } = req.params; 

    
    const rejectedLeave = await Leave.findByIdAndUpdate(id, {status:'rejected'}, { new: true });

    
    if (!rejectedLeave) {
      return res.status(404).json({ message: "Leave not found" });
    }

    
    res.status(200).json(rejectedLeave);
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
};






      
  //delete leave by employee or manager

  const deleteLeave = async (req, res) => {
    try {
      const { id } = req.params; // Assuming you send the leave entry ID in the request parameters
  
      // Find the leave entry
      const leaveEntry = await Leave.findByIdAndDelete(id);
  
      if (!leaveEntry) {
        return res.status(404).json({ message: 'Leave entry not found' });
      }
  
  
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
    acceptLeave,
    deleteLeave,
    deleteAllLeaves,
    rejectLeave,
 
  };
  