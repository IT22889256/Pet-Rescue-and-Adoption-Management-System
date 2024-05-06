import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from "axios";

export default function Adoption() {
  const [adopters, setAdopters] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/adoptionManager").then((res) => {
      console.log(res);
      setAdopters(res.data);
    });
  }, []);


  return (
    <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Adoption Profiles</strong>
      <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
        <Link
          to="/adoptionManager/adoptionRequest/CreateRequest"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Adoption Request
        </Link>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
          <thead className="bg-[#c1c3c558]">
            <tr>
              <th>Adoption ID</th>
              <th>NIC</th>
              <th>Name</th>
              <th>Pet Type</th>
              <th>pet Name</th>
              <th>Action</th>
            </tr>
          </thead>
          {
            <tbody>
              {adopters.map((adopter) => (
                <tr
                  className="border-b-2 border-[#c1c3c558] text-center"
                  key={adopter.adoption_id}
                >
                  <td>{adopter.adoption_id}</td>
                  <td>{adopter.adopter_nic}</td>
                  <td>{adopter.adopter_name}</td>
                  <td>{adopter.adopter_pettype}</td>
                  <td>{adopter.adopter_petname}</td>
                  <td>
                    <Link
                      to={`/adoptionManager/adoptionRequest/viewRequest/${adopter._id}`}
                      className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 "
                    >
                      View
                    </Link>

                    <Link
                      to={`/adoptionManager/adoptionRequest/editRequest/${adopter._id}`}
                      className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 "
                    >
                      Edit
                    </Link>

                    <Link
                      to={`/adoptionManager/adoptionRequest/deleteRequest/${adopter._id}`}
                      className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 "
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          }
        </table>
      </div>
    </div>
  );

}
// {pets.map((pets)=>(
// 	<>
// 		<tr key={pets.id}>
// 			<td>{pets.request_id}</td>
// 			<td>{pets.task_id}</td>
// 			<td>{pets.pet_name}</td>
// 			<td>{pets.pet_type}</td>
// 			<td>{pets.health_status}</td>
// 		</tr>
// 	</>

// ))}

/*
<th>typeOfPet</th>
<th>petName</th>
<th>message</th>
<th>status</th>*/
