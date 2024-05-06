import React, { useEffect, useState } from "react";

function JobRoleAvailability() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/EmployeeManager/jobRole/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setValues(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle error here, e.g., set a default value for values
      });
  }, []);

  return (
    <div>
      <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        {values.map((opts, i) => (
          <option key={i}>{opts.jobRole}</option>
        ))}
      </select>
    </div>
  );
}

export default JobRoleAvailability;
