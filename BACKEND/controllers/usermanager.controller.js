const asyncHandler = require("express-async-handler");
const User = require("../modules/user.model");
const Allemployee = require("../modules/allemployees.model");
const Employee = require("../modules/employee.model");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// create User
const createUser = asyncHandler(async (req, res, next) => {
  console.log("manager", req.body);
  const { name, email, password, role, phoneNumber, roletype, bio } = req.body; // Make sure to include 'role' if it's being sent from the front end
  try {
    // Validation
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please fill in the name and email");
    }
    if (password.length < 6) {
      res.status(400);
      throw new Error("Password must be up to 6 characters");
    }
    // Check if user email already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("Email has already been registered");
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password,
      role,

      roletype,
      phone: phoneNumber,
      bio,
    });

    //   Generate Token
    const token = generateToken(user._id, user.role); // Include the user role here

    // Send HTTP-only cookie
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });

    if (user) {
      const { _id, name, email, photo, phone, role, roletype, bio } = user;
      res.status(201).json({
        _id,
        name,
        email,
        photo,
        phone,
        role,
        roletype,
        bio,
        token,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }

    //res.send("Register User");
  } catch (err) {
    next(err);
  }
});

// create Employee
// const createEmployee = asyncHandler(async (req, res, next) => {
//   console.log("employee", req.body);
//   const {
//     firstName,
//     email,
//     password,
//     nic,
//     eid,
//     roletype,
//     jobRole,
//     recruitedDate,
//     birthday,
//     address,
//     city,
//     postalCode,
//     phoneNumber,
//     maritalStatus,
//   } = req.body; // Make sure to include 'role' if it's being sent from the front end
//   try {
//     // Validation
//     if (!firstName || !email || !password) {
//       res.status(400);
//       throw new Error("Please fill in the name, email and password");
//     }
//     if (password.length < 6) {
//       res.status(400);
//       throw new Error("Password must be up to 6 characters");
//     }
//     // Check if user email already exists
//     const employeeExists = await Allemployee.findOne({ eid });
//     if (employeeExists) {
//       res.status(400);
//       throw new Error("Employee has already been registered");
//     }

//     // Create new employee
//     const employee = await Allemployee.create({
//       name: firstName,
//       email,
//       password,
//       role: "employee",
//       eid,
//       roletype: roletype,
//       nic,
//       jobRole,
//       recruitedDate,
//       birthday,
//       address,
//       city,
//       postalCode,
//       phoneNumber,
//       maritalStatus,
//     });

//     // Create new employee
//     const user = await User.create({
//       name: firstName,
//       email: email,
//       password: password,
//       role: "employee",
//       eid: eid,
//       roletype: "employee",
//       nic: nic,
//       phone: phoneNumber,
//     });

//     //delete employee request
//     const employeeRequest = await Employee.findOneAndDelete({ eid });

//     //   Generate Token
//     const token = generateToken(employee._id, employee.role); // Include the user role here

//     // Send HTTP-only cookie
//     res.cookie("token", token, {
//       path: "/",
//       httpOnly: true,
//       expires: new Date(Date.now() + 1000 * 86400), // 1 day
//       sameSite: "none",
//       secure: true,
//     });

//     if (employee) {
//       const { _id, name, email, role, eid, roletype, nic } = employee;
//       res.status(201).json({
//         _id,
//         name,
//         email,
//         role,
//         eid,
//         roletype,
//         nic,
//         token,
//       });
//     } else {
//       res.status(400);
//       throw new Error("Invalid employee data");
//     }
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = { createUser };
