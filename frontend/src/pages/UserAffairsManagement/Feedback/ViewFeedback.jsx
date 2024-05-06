import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPetHealth } from "../../../lib/helpers/petManager/petHealthStatus";
import axios from "axios";

export default function ViewFeedback() {
  const [feedback, setFeedback] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/userAffairsManager/feedback/getFeedback/${id}`
      )
      .then((res) => {
        setFeedback(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // return (
  // 		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
  // 			<strong className="text-gray-700 font-medium">Pet Profiles</strong>
  // 			<div className="border-x border-gray-200 rounded-sm mt-3">
  // 				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
  // 					<thead className="bg-[#c1c3c558]" >
  // 						<tr>
  // 						<th>Feedback ID</th>
  // 							<th>User Id</th>
  // 							<th>Email</th>
  // 							<th>Message</th>
  // 							<th>Action</th>
  // 						</tr>
  // 					</thead>
  // 						<tbody>
  // 						<tr className='border-b-2 border-[#c1c3c558] text-center'>
  // 						<td>
  // 									{feedback._id}
  // 								</td >
  // 								<td>
  // 									{feedback.user_id}
  // 								</td>
  // 								 <td>
  // 									{feedback.email}
  // 								</td>
  // 								<td>
  // 									{feedback.reason}
  // 								</td>
  // 							</tr>

  // 					</tbody>

  // 				</table>
  // 			</div>
  // 		</div>
  // 	)
  // }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-blue-100">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">
            Pet Details
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="mt-3 flex text-xs justify-center">
              <img
                className="object-cover h-60 w-60 m-5 rounded-full"
                src={feedback.pet_image}
                alt="profile_Image"
              />
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Feedback ID</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {feedback._id}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">User Id</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {feedback.user_id}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {feedback.email}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Message</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {feedback.reason}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
