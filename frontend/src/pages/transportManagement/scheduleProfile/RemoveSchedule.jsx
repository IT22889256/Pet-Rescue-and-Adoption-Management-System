import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function RemoveVehicle() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDeleteVehicle = () => {
    axios
      .delete(`http://localhost:3000/api/schedules/${id}`)
      .then(() => {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          navigate('/transportManager/scheduleProfile');
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className={`fixed inset-0 overflow-y-auto flex items-center justify-center z-50 ${showSuccess ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Delete successful</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">The Schedule has been successfully deleted.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        </div>
        </div>
      </div>
      
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Are you sure you want to delete?</strong>
        <span className="block sm:inline"> This action cannot be undone.</span>
        <div className="flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleDeleteVehicle}
          >
            Yes, Delete it
          </button>
        </div>
      </div>
    </div>
  );
}
