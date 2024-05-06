import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from "axios";

export default function IssuesAndConcerns() {
  const [issuesandconcerns, setissuesandconcerns] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/userAffairsManager/issueandconcern")
      .then((res) => {
        console.log(res);
        setissuesandconcerns(res.data);
      });
  }, []);

  return (
    <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">
        Details Of Adoption Related Concerns & Technical Issues
      </strong>
      <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
        <Link
          to="/UserAffairsManager/IssuesAndConcerns/CreateIssuesAndConcerns"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Technical Issue or Adoption Concern{" "}
        </Link>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
          <thead className="bg-[#c1c3c558]">
            <tr>
              <th>Issue or Concern ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          {
            <tbody>
              {issuesandconcerns.map((issueandconcern) => (
                <tr
                  className="border-b-2 border-[#c1c3c558] text-center"
                  key={issueandconcern._id}
                >
                  <td>{issueandconcern._id}</td>
                  <td>{issueandconcern.name}</td>
                  <td>{issueandconcern.email}</td>

                  <td>
                    <Link
                      to={`/UserAffairsManager/IssuesAndConcerns/ViewIssuesAndConcerns/${issueandconcern._id}`}
                      className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 "
                    >
                      View
                    </Link>

                    <Link
                      to={`/UserAffairsManager/IssuesAndConcerns/EditIssuesAndConcerns/${issueandconcern._id}`}
                      className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 "
                    >
                      Edit
                    </Link>

                    <Link
                      to={`/UserAffairsManager/IssuesAndConcerns/RemoveIssuesAndConcerns/${issueandconcern._id}`}
                      className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 "
                    >
                      Remove
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
