const asyncHandler = require("express-async-handler");
const User = require("../modules/user.model");
const Employee = require("../modules/employee.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/sendEmail");

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
const createEmployee = asyncHandler(async (req, res, next) => {
  console.log("employee", req.body);
  const { firstName, middleName, email, nic, eid, jobRole, phoneNumber } =
    req.body;
  const fullName = firstName + " " + middleName;
  const generatedPassword = Math.random().toString(36).slice(-8);

  try {
    const eidExists = await Employee.findOne({ eid });

    if (eidExists.status === "approved") {
      res.status(400).json({ message: "Employee has already been registered" });
    } else if (eidExists.status === "denied") {
      res.status(400).json({ message: "Employee has been denied" });
    } else {
      const employee = await Employee.findOneAndUpdate(
        { eid },
        { status: "approved" }
      );

      const message = `
        <h2>Hello ${fullName}</h2>
        <h3>Congratulations!!!</h3>
        <p>Now You are an Employee of ResQ.</p>
        <p>Here is your login credentials,</p>
        <p>Email : <h3>${email}</h3></p>
        <p>Password : <h3>${generatedPassword}</h3></p>
        <p>Click the link below to login</p>
        <a href="http://localhost:3001/log-in">www.ResQ.com</a>
        <p>ResQ Team</p>
      `;
      const subject = "Employee Registration";
      const send_to = email;
      const sent_from = process.env.EMAIL_USER;

      try {
        await sendEmail(subject, message, send_to, sent_from);
        res.status(200).json({ success: true, message: "Email Sent" });
      } catch (error) {
        res.status(500);
        throw new Error("Email not sent, please try again");
      }

      console.log("Employee", generatedPassword);

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(generatedPassword, salt);

      const userExists = await User.findOne({ email });

      if (userExists) {
        const user = await User.findOneAndUpdate(
          { email },
          {
            role: "employee",
            roletype: "employee",
            jobRole: jobRole,
            password: hashedPassword,
            nic: nic,
            phone: phoneNumber,
          }
        );

        if (!user) {
          res.status(400);
          throw new Error("Could not update user role to employee");
        }
      } else {
        const user = await User.create({
          name: fullName,
          email: email,
          password: generatedPassword,
          role: "employee",
          eid: eid,
          roletype: "employee",
          jobRole: jobRole,
          nic: nic,
          phone: phoneNumber,
        });

        if (!user) {
          res.status(400);
          throw new Error("Could not create employee in user collection");
        }
      }

      if (employee) {
        const { _id, name, email, role, eid, roletype, nic, jobRole, status } =
          employee;
        res.status(201).json({
          _id,
          name,
          email,
          role,
          eid,
          roletype,
          jobRole,
          status,
          nic,
        });
      } else {
        res.status(400);
        throw new Error("Could not create employee");
      }
    }
  } catch (err) {
    next(err);
  }
});
module.exports = { createUser, createEmployee };
