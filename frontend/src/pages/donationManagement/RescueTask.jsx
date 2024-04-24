import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Donations() {
    const [Donations, setDonations] = useState([]);

    const formatDate = (dateString) => {
        // Convert MongoDB date string to JavaScript Date object
        const date = new Date(dateString);
        // Format the date into a readable format
        return format(date, 'dd MMM yyyy hh:mm a');
    };

    useEffect(() => {
        axios.get('http://localhost:3000/donationManager/reccuringdonation/display')
            .then(res => {
                console.log(res);
                setDonations(res.data);
            })
            .catch(err => {
                console.error('Error fetching donations:', err);
            });
    }, []);

    return (
        <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium"> Reccuring donations</strong>
            <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
                <Link to='/DonationManager/reccuringdonations/createReccuringDonations' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create Reccuring Donations
                </Link>
            </div>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
                    <thead className="bg-[#c1c3c558]">
                        <tr>
                            <th>Donation ID</th>
                            <th>User ID</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Donations.map((Donation) => (
                            <tr className='border-b-2 border-[#c1c3c558] text-center' key={Donation.id}>
                                <td>{Donation._id}</td>
                                <td>{Donation.user_id}</td>
                                {/* Call formatDate function to format the date */}
                                <td>{formatDate(Donation.createdAt)}</td>
                                <td>
                                    <Link to={`/DonationManager/reccuringdonations/viewreccuringdonations/${Donation._id}`} className=" bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify m-2 ">
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
