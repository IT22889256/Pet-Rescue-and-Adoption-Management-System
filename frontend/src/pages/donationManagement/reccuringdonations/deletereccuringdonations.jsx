import React from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function UnsubsribeReccuringDonation() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    
    axios
      .delete(`http://localhost:3000/donationManager/reccuringdonation/delete/${id}`)
      .then(() => {
        alert('deleted')
        navigate('/DonationManager/reccuringdonations'); 
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
      Yes, Unsubscribe it!
    </button></div>
  )
}
