import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getPetHealth } from "../../../lib/helpers/petManager/petHealthStatus";
import axios from "axios";

export default function ViewIssueAndConcern() {
  const navigate = useNavigate();
  const Accept = (e) => {
    const data = {
      issuesandconcerns_status: "Accept",
    };

    console.log("result");
    axios
      .put(
        `http://localhost:3000/userAffairsManager/issueandconcern/updateIssueAndConcern/${id}`,
        data
      )
      .then((result) => {
        alert("updated");
        console.log(result);
        navigate(`/UserAffairsManager/handleIssuesConcerns`);
      })
      .catch((err) => console.log(err));
  };

  const Reject = (e) => {
    const data = {
      issuesandconcerns_status: "Reject",
    };

    console.log("result");
    axios
      .put(
        `http://localhost:3000/userAffairsManager/issueandconcern/updateIssueAndConcern/${id}`,
        data
      )
      .then((result) => {
        alert("updated");
        console.log(result);
        navigate(`/UserAffairsManager/handleIssuesConcerns`);
      })
      .catch((err) => console.log(err));
  };

  const [issueandconcern, setIssueAndConcern] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/userAffairsManager/issueandconcern/getIssueAndConcern/${id}`
      )
      .then((res) => {
        setIssueAndConcern(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">
              Technical Issues And Adoption Related Concerns
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="mt-3 flex text-xs justify-center">
                <img
                  className="object-cover h-60 w-60 m-5 rounded-full"
                  src={issueandconcern.imgUrl}
                  alt="profile_Image"
                />
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg text-black-500 font-medium">User ID</dt>
                <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">
                  {issueandconcern.user_id}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-black-500">
                  Issue/Concern ID
                </dt>
                <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">
                  {issueandconcern.issuesandconcernsId}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-black-500">Email</dt>
                <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">
                  {issueandconcern.email}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium text-black-500">Message</dt>
                <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">
                  {issueandconcern.message}
                </dd>
              </div>

              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 justify-center">
                {issueandconcern.issuesandconcerns_status === "Waiting" && (
                  <>
                    <Link
                      onClick={Accept}
                      to={`/userAffairsManager/issueandconcern/${issueandconcern._id}`}
                      className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 "
                    >
                      Accept
                    </Link>
                    <Link
                      onClick={Reject}
                      to={`/userAffairsManager/issueandconcern/${issueandconcern._id}`}
                      className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 "
                    >
                      Recject
                    </Link>
                  </>
                )}

                {issueandconcern.issuesandconcerns_status === "Accept" && (
                  <td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
                    <div>{issueandconcern.issuesandconcerns_status}</div>
                  </td>
                )}
                {issueandconcern.issuesandconcerns_status === "Reject" && (
                  <td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
                    <div>{issueandconcern.issuesandconcerns_status}</div>
                  </td>
                )}
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
