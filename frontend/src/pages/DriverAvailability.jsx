import React, { useEffect, useState } from "react";

function DriverAvailability() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/EmployeeManager/employees")
      .then((data) => data.json())
      .then((val) => setValues(val));
  }, []);

  console.log(values, "values");

  return (
    <div>
      <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        {values
          .filter(
            (employee) =>
              employee.jobRole === "driver" && employee.availability === "available"
          )
          .map((opts, i) => (
            <option key={i}>{opts.firstName}</option>
          ))}
      </select>
    </div>
  );
}

export default DriverAvailability;
