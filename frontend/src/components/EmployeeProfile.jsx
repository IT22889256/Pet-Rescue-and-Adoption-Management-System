import React from 'react'
import pro from '../image/profile.jpg'

export default function EmployeeProfile() {
  return (
    <div>
    <div className="inline-flex gap-1 table-auto">
        <div>
          <div className="inline-flex h-[22rem] bg-white p-4 rounded-sm border border-gray-200 w-full">
              <div className="mt-3 flex-1 text-xs">
                <img className='"object-cover h-60 w-50' src={pro} alt='profile_Image'/>
              </div>
              <div className='flex-col'>
                <div className='flex-row mr-5'>
                <div className="sm:col-span-1">
                      <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                        Emplyee ID
                      </label>
                      <div className="mt-2">
                      <input
                          type="text"
                          name="request_id"
                          id="request-id"
                                            // value={}
                                            // onChange={(e) => setReqId(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      </div>
                      </div>
                </div>                
              </div>
          </div>
        </div>
    </div>
    <div className="flex flex-col gap-1">
      <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Request</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="bg-[#f3f3f3] w-full text-gray-700 h-48 ">
          <thead className="bg-[#c1c3c558]">
            <tr>
              <th>Request ID</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      </div>
  </div>
  </div>
  )
}
