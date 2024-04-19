import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { add } from "date-fns";

export default function ViewEmployee() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("Employee", employee);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/EmployeeManager/employees/${id}`)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleCreateEmployee = () => {
    axios
      .post("http://localhost:3000/userManager/employee/create-employee", {
        firstName: employee.firstName,
        middleName: employee.middleName,
        lastName: employee.lastName,
        email: employee.email,
        jobRole: employee.jobRole,
        password: "password",
        nic: employee.nic,
        recruitedDate: employee.recruitedDate,
        birthday: employee.birthday,
        eid: employee.eid,
        roletype: "employee",
        address: employee.address,
        city: employee.city,
        postalCode: employee.postalCode,
        phoneNumber: employee.phoneNumber,
        maritalStatus: employee.maritalStatus,
        availability: employee.availability,
      })
      .then(() => {
        alert("Employee created");
        navigate("/EmployeeManager/ManageEmployees");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      axios
        .put(
          `http://localhost:3000/EmployeeManager/employees/DeleteEmployee/${id}`
        )
        .then(() => {
          alert("Employee deleted");
          navigate("/EmployeeManager/ManageEmployees");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">
            Create Employee Profile
          </h3>
        </div>
        <div className="mt-3 flex text-xs justify-center">
          <img
            className="object-cover h-60 w-60 m-5 rounded-full"
            src="https://i.ibb.co/713YjHp/pexels-emrah-ayvali-1981111.jpg"
            alt="profile_Image"
          />
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-lg text-black-500 font-bold">Employee ID</dt>
              <dd className="mt-1 text-base text-gray-900 sm:col-span-2">
                {employee.eid}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {employee.email}
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {employee.firstName}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">NIC</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {employee.nic}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Job Role</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {employee.jobRole}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Phone Number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {employee.phoneNumber}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <button
                  onClick={handleCreateEmployee}
                  className="bg-blue-500 text-white py-3 px-8 rounded hover:bg-blue-700 text-xs text-gray-400 ml-1"
                >
                  Create Employee
                </button>
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white py-3 px-8 rounded hover:bg-red-700 text-xs text-gray-400 ml-7    "
                >
                  Remove
                </button>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
