import React from 'react'
import pro from '../image/profile.jpg'

export default function EmployeeProfile() {
  return (
    <div>
    <div className="inline-flex gap-1 table-auto">
        <div>
          <div className="inline-flex h-[22rem] bg-white p-4 rounded-sm border border-gray-200">
              <div className="mt-3 flex-1 text-xs">
                <img className='"object-cover h-60 w-50' src={pro} alt='profile_Image'/>
              </div>
              <div className='flex-col'>
                <div className='flex-row mr-5'>
                  <h1>name</h1>
                  <h1>name</h1>
                </div>
              </div>
              <div className='flex-col'>
                <div className='flex-row'>
                  <h1>name</h1>
                  <h1>name</h1>
                </div>
              </div>
              <div className='flex-col'>
                <div className='flex-row'>
                  <h1>name</h1>
                  <h1>name</h1>
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
