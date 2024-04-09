import React from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Deleterequests() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    
    axios
      .delete(`http://localhost:3000/suppliers/requests/deleterequests/${id}`)
      .then(() => {
        alert('deleted')
        navigate('/Suppliers/requests');
      })
      .catch((error) => {
        
        console.log(error);
      });
  };
  return (
    <div> <button
    className='p-4 bg-red-600 text-white m-8 w-full'
    onClick={handleDeleteBook}
    >
      Yes, Delete it
    </button></div>
  )
}
