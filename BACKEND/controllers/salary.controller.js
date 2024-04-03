const Salary = require("../modules/salary.model");
const JobRoles = require("../modules/jobRole.model");
const Employee = require("../modules/employee.model");




// get all salaries
const getSalaries = async (req, res) => {
  try {
    const salaries = await Salary.find({});
    res.status(200).json(salaries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// get a salary
const getSalary = async (req, res) => {
  try {
    const { id } = req.params;
    const salary = await Salary.findById(id);
    res.status(200).json(salary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// create a salary
// const createSalary = async (req, res) => {
//   try {
//     const salary = await Salary.create(req.body);
//     res.status(200).json(salary);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


//new one
// const createSalary = async (req, res) => {
//   try {

//     const { otHours, bonus, jobId ,eid} = req.body; // Assuming you send these in the request body
//     // Fetch the job role details for the employee
//     const jobrole = await JobRole.findOne({ jobId: req.body.jobId }); // Adjust this based on your actual data
    
//     if (!jobrole) {
//       return res.status(404).json({ message: 'Job role not found' });
//     }

//     // Calculate basic salary (already provided)
//     const basicSalary = jobrole.basicSalary;
//     const otRates = jobrole.otRates;
   

//     // Calculate overtime pay
//     const overtimePay = otHours * otRates;

//     // Calculate total salary
//     const totalSalary = basicSalary + overtimePay + bonus;
// 6
//     // Create a new salary entry in the database
//     const newSalary = new Salary({
//       eid:eid,
//       basicSalary: basicSalary,
//       otHours: otHours,
//       jobId: jobId,
//       otRates: otRates,
//       totalOT: overtimePay,
//       totalSalary: totalSalary,
//       bonus: bonus,
//     });

//     // Save the salary entry
//     await newSalary.save();

//     return res.status(201).json({ message: 'Salary created successfully', newSalary });
//   } catch (error) {
//     console.error('Error creating salary:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };

//test create
const createSalary = async (req, res) => {
  try {

    const { otHours, bonus,eid} = req.body; // Assuming you send these in the request body
    // Fetch the job role details for the employee
    const {jobRole} = await Employee.findOne({ eid: req.body.eid});
    const {firstName} = await Employee.findOne({ eid : req.body.eid});
    
    console.log(jobRole);

    const jobRoleData = await JobRoles.findOne({ jobRole : jobRole}); // Adjust this based on your actual data
    
    if (!jobRoleData) {
      return res.status(404).json({ message: 'Job role not found' });
    }

    // Calculate basic salary (already provided)
    const basicSalary = jobRoleData.basicSalary;
    const otRates = jobRoleData.otRates;
   

    // Calculate overtime pay
    const overtimePay = otHours * otRates;

    // Calculate total salary
    const totalSalary = basicSalary + overtimePay + bonus;

    // Create a new salary entry in the database
    const newSalary = new Salary({
      eid:eid,
      basicSalary: basicSalary,
      otHours: otHours,
      otRates: otRates,
      totalOT: overtimePay,
      totalSalary: totalSalary,
      bonus: bonus,
      firstName:firstName,
    });

    // Save the salary entry
    await newSalary.save();

    return res.status(201).json({ message: 'Salary created successfully', newSalary });
  } catch (error) {
    console.error('Error creating salary:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


//end of new one
// update a salary old one
// const updateSalary = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const salary = await Salary.findByIdAndUpdate(id, req.body);

//     if (!salary) {
//       return res.status(404).json({ message: "Salary not found" });
//     }

//     const updatedSalary = await Salary.findById(id);
//     res.status(200).json(updatedSalary);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


//update salary


// const updateSalary = async (req, res) => {
//   try {
//     const { otHours, bonus, jobId, eid } = req.body; // Assuming you send these in the request body

//     // Fetch the existing salary entry by employee ID (eid)
//     const existingSalary = await Salary.findOne({ eid }); // Adjust this based on your actual data

//     if (!existingSalary) {
//       return res.status(404).json({ message: 'Salary entry not found' });
//     }

//     // Fetch the job role details for the employee
//     const jobrole = await JobRole.findOne({ jobId }); // Adjust this based on your actual data

//     if (!jobrole) {
//       return res.status(404).json({ message: 'Job role not found' });
//     }

//     // Calculate basic salary (already provided)
//     const basicSalary = jobrole.basicSalary;
//     const otRates = jobrole.otRates;

//     // Calculate overtime pay
//     const overtimePay = otHours * otRates;

//     // Calculate total salary
//     const totalSalary = basicSalary + overtimePay + bonus;

//     // Update the existing salary entry
//     existingSalary.otHours = otHours;
//     existingSalary.totalOT = overtimePay;
//     existingSalary.totalSalary = totalSalary;
//     existingSalary.bonus = bonus;

//     // Save the updated salary entry
//     await existingSalary.save();

//     return res.status(200).json({ message: 'Salary updated successfully', updatedSalary: existingSalary });
//   } catch (error) {
//     console.error('Error updating salary:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };

const updateSalary = async (req, res) => {
  try {
    const { otHours, bonus, eid } = req.body; // Assuming you send these in the request body

    // Fetch the existing salary entry for the employee
    const existingSalary = await Salary.findOne({ eid: eid }); // Adjust this based on your actual data

    if (!existingSalary) {
      return res.status(404).json({ message: 'Salary entry not found' });
    }

    // Fetch the job role details for the employee
    const { jobRole } = await Employee.findOne({ eid: req.body.eid }); // Adjust this based on your actual data

    const jobRoleData = await JobRoles.findOne({ jobRole: jobRole }); // Adjust this based on your actual data

    if (!jobRoleData) {
      return res.status(404).json({ message: 'Job role not found' });
    }

    // Calculate basic salary (already provided)
    const basicSalary = jobRoleData.basicSalary;
    const otRates = jobRoleData.otRates;

    // Calculate overtime pay
    const overtimePay = otHours * otRates;

    // Calculate total salary
    const totalSalary = basicSalary + overtimePay + bonus;

    // Update the existing salary entry
    existingSalary.basicSalary = basicSalary;
    existingSalary.otHours = otHours;
    existingSalary.otRates = otRates;
    existingSalary.totalOT = overtimePay;
    existingSalary.totalSalary = totalSalary;
    existingSalary.bonus = bonus;

    // Save the updated salary entry
    await existingSalary.save();

    return res.status(200).json({ message: 'Salary updated successfully', updatedSalary: existingSalary });
  } catch (error) {
    console.error('Error updating salary:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};




// delete a salary old one
// const deleteSalary = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const salary = await Salary.findByIdAndDelete(id);

//     if (!salary) {
//       return res.status(404).json({ message: "Salary not found" });
//     }

//     res.status(200).json({ message: "Salary deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


//delete a salary new one
const deleteSalary = async (req, res) => {
  try {
    const {id} = req.params;
    
    // Find the salary entry based on the MongoDB default _id
    const existingSalary = await Salary.findById(id);

    if (!existingSalary) {
      return res.status(404).json({ message: 'Salary entry not found' });
    }

    // Delete the salary entry
    await existingSalary.deleteOne();

    return res.status(200).json({ message: 'Salary entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting salary:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};







module.exports = {
  getSalaries,
  getSalary,
  createSalary,
  updateSalary,
  deleteSalary,
};
