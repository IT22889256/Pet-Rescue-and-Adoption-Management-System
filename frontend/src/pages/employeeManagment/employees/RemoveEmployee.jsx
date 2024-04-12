import React from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function RemoveEmployee() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteEmployee = () => {
    
    axios
      .put(`http://localhost:3000/EmployeeManager/employees/DeleteEmployee/${id}`)
      .then(() => {
        alert('deleted')
        navigate('/EmployeeManager/ManageEmployees');
      })
      .catch((error) => {
        
        console.log(error);
      });
  };
  return (
    <div> <button
    className='p-4 bg-red-600 text-white m-8 w-1/4 rounded-lg'
    onClick={handleDeleteEmployee}
    >
      Yes, Delete it
    </button></div>
  )
}
