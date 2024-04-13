import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from "axios";

export default function EmployeesRequests() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/EmployeeManager/employees").then((res) => {
      console.log(res);
      setEmployees(res.data);
    });
  }, []);

  return (
    <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Employees Requests</strong>

      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
          <thead className="bg-[#c1c3c558]">
            <tr>
              <th>EMP ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>NIC</th>
              <th>Access Status</th>
              <th>phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          {
            <tbody>
              {employees.map((employee) => (
                <tr
                  className="h-12 border-b-2 border-[#c1c3c558] text-center"
                  key={employee._id}
                >
                  <td>{employee.eid}</td>
                  <td>{employee.firstName}</td>

                  <td>{employee.email}</td>
                  <td>{employee.nic}</td>

                  {employee.status === "pending" ? (
                    <td className="text-red-700">{employee.status}</td>
                  ) : (
                    <td className="text-green-700">{employee.status}</td>
                  )}

                  <td>{employee.phoneNumber}</td>

                  {employee.status === "pending" ? (
                    <td>
                      <Link
                        to={`/userManager/employees/viewEmployee/${employee._id}`}
                        className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 "
                      >
                        Create Employee
                      </Link>
                    </td>
                  ) : (
                    <td></td>
                  )}
                </tr>
              ))}
            </tbody>
          }
        </table>
      </div>
    </div>
  );
}
