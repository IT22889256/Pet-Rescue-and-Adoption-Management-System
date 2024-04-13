const Employee = require("../modules/employee.model");
const Leave = require("../modules/leave.model");
const EmployeeLeaveCount = require("../modules/employeeLeaveCount.model");
const { SendMail } = require('../controllers/email.controller');
const Counter = require('../modules/counter.model');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Replace with your SMTP server host
  port: 587, // Replace with your SMTP server port (may vary)
  secure: false, // Adjust if using TLS or SSL
  auth: {
    user: process.env.NODEJS_GMAIL_APP_USER,   // your email address
    pass: process.env.NODEJS_GMAIL_APP_PASSWORD, // your password     // Replace with your email password (consider using app passwords)
  }
});


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

      const counter = await Counter.findByIdAndUpdate(
        { _id: 'leaverequestId' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );

      const leaveRequestId = 'LR' + String(counter.seq).padStart(3, '0');


      const leave = await Leave.create({...req.body,leaveID: leaveRequestId});
      res.status(200).json(leave);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



  const acceptLeave = async (req, res) => {
    try {
      const { id } = req.params;
  
      const employeeLeave = await Leave.findById(id);
      if (!employeeLeave) {
        return res.status(404).json({ message: 'Employee leave not found' });
      }
  
      const reason = employeeLeave.reason;
      const status = employeeLeave.status;
      const eid = employeeLeave.eid;
      const days = employeeLeave.days;
     // const employeeEmail = employeeLeave.email; // Retrieve employee email
  
      const LeaveCount = await EmployeeLeaveCount.findOne({ eid });
      if (!LeaveCount) {
        return res.status(404).json({ message: 'Employee leave count not found' });
      }
  
      let medical = LeaveCount.medical;
      let casual = LeaveCount.casual;
      let emergency = LeaveCount.emergency;
      let employeeEmail = LeaveCount.email;
  
      if (reason === 'medical') {
        if (medical > 0 && medical >= days) {
          medical -= days;
        } else {
          return res.status(404).json({ message: 'Insufficient medical leaves' });
        }
      } else if (reason === 'casual') {
        if (casual > 0 && casual >= days) {
          casual -= days;
        } else {
          return res.status(404).json({ message: 'Insufficient casual leaves' });
        }
      } else if (reason === 'emergency') {
        if (emergency > 0 && emergency >= days) {
          emergency -= days;
        } else {
          return res.status(404).json({ message: 'Insufficient emergency leaves' });
        }
      }
  
      const updatedLeaveCount = await EmployeeLeaveCount.findOneAndUpdate(
        { eid },
        { medical, casual, emergency },
        { new: true }
      );
  
      const leave = await Leave.findOneAndUpdate({ eid }, { status: 'accepted' }, { new: true });
      if (!leave) {
        return res.status(404).json({ message: 'Leave update failed' });
      }
  
      const updatedleave = await Leave.findOne({ eid });
  
      // Prepare email data 
      const emailData = {
        from: 'Pet Rescue Management System <projectforitp@gmail.com>',  // Replace with sender email
        to: `${employeeEmail}`, // Use retrieved employee email
        subject: 'Leave Request Accepted',
        html: `<!DOCTYPE html>
        <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
        background-color: #f5f5f5; /* Light gray background */
      }
      p {
        margin-bottom: 15px;
        color: #333; /* Dark gray text */
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        margin-bottom: 5px;
        color: #666; /* Lighter gray for list items */
      }
      .highlight {
        color: #007bff; /* Blue for highlighted text */
      }
      
      h1 {
        color: #2e6da4; /* Darker blue for headings */
        margin-bottom: 10px;
      }
      .regards {
        font-style: italic;
        color: #999; /* Lighter gray for regards */
      }
    </style>
  </head>
  <body>
    <h1>Leave Request Accepted</h1>  <p>Dear Employee,</p>
    <p>This email confirms that your leave request for <span class="highlight">${days}</span> days of <span class="highlight">${reason}</span> leave has been approved.</p>
    <p>Your updated leave count is:</p>
    <ul>
      <li>Medical Leave: ${medical} days</li>
      <li>Casual Leave: ${casual} days</li>
      <li>Emergency Leave: ${emergency} days</li>
    </ul>
    <p class="regards">Regards,</p>
    <p>Employee Management System</p>
  </body>
</html>`
      };
  
      // Send email notification upon leave acceptance (ensure response is not sent before)
      await transporter.sendMail(emailData); // Use await to wait for email sending
  
      res.status(200).json({ message: 'Leave accepted and email sent', updatedleave });
    } catch (error) {
      console.error(error);
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
  