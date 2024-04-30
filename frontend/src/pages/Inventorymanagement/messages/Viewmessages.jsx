// // import React, { useEffect, useState } from 'react'
// // import { Link, useParams } from 'react-router-dom'
// // import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
// // import axios from 'axios'


// // export default function ViewSupplyRequest() {
	
// // 	const [supply, setRequest] = useState({})
// // 	const {id} = useParams()

// // 	useEffect(() => {
// // 		axios.get(`http://localhost:3000/InventoryManager/messages/viewmessages/${id}`)
// // 		.then((res) => {
// // 			setRequest(res.data)
			
// // 		}).catch((err) => {
// // 			console.log(err);
// // 		})
// // 	},[])
// // return (
// // 		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
// // 			<strong className="text-gray-700 font-medium">Supply Request</strong>
// // 			<div className="border-x border-gray-200 rounded-sm mt-3">
// // 				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
// // 					<thead className="bg-[#c1c3c558]" >
// // 						<tr>
// // 							<th>Request ID</th>
// // 							<th>Item Type</th>
// // 							<th>Pet Type</th>
// // 							<th>Brand</th>
// // 							<th>Message</th>
// // 							<th>Action</th>
// // 						</tr>
// // 					</thead>
// // 						<tbody>
// // 						<tr className='border-b-2 border-[#c1c3c558] text-center'>
// // 								<td>
// // 									{supply._id}
// // 								</td >
// // 								<td>
// // 									{supply.supply_item}
// // 								</td >
// // 								<td>
// // 									{supply.supply_pettype}
// // 								</td >
// // 								<td>
// // 									{supply.supply_brand}
// // 								</td >
// // 								<td>
// // 									{supply.supply_message}
// // 								</td >
// // 							</tr>
						
// // 					</tbody>
					
// // 				</table>
// // 			</div>
// // 		</div>
// // 	)
// // }
// import React, { useEffect, useState } from 'react'
// import { useParams, useNavigate } from 'react-router-dom';

// import axios from 'axios'


// export default function ViewLeave() {

// 	const [leaves, setLeaves] = useState({})
// 	const [message, setMessage] = useState({})

// 	const {id} = useParams()
//     const navigate = useNavigate();


// 	useEffect(() => {
// 		axios.get(`http://localhost:3000/InventoryManager/messages/${id}`)
// 		.then((res) => {
// 			console.log(res.data)
// 			setLeaves(res.data)

// 		}).catch((err) => {
// 			console.log(err);
// 		})
// 	},[id]);

// 	const handleDelete = () => {
//         const confirmDelete = window.confirm('Are you sure you want to delete this leave request?');
//         if (confirmDelete) {
//             axios.delete(`http://localhost:3000/InventoryManager/messages/Deletemessages/${id}`)
//                 .then(() => {
//                     alert('message  deleted');
//                     navigate('/InventoryManager/messages');
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//         }
//     };


//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
//     };



// 	const accepted = (leaveId) => {

//         const data = {
// 			status: 'accepted'

//         };
        
//         console.log('result')
//         axios.put(`http://localhost:3000/InventoryManager/messages/${leaveId}`,data)
//         .then(result => {
//             alert(result.data.message)
//             console.log(result.data.message);
//             navigate('/InventoryManager/messages')
//         })
//         .catch(err => console.log(err))
//     }


// 	const rejected = (leaveId) => {

//         const data = {
// 			status: 'rejected'

//         };
        
//         console.log('result')
//         axios.put(`http://localhost:3000/InventoryManager/messages/rejectLeave/${leaveId}`,data)
//         .then(result => {
//             alert(result.data.message)
//             console.log(result.data.message);
//             navigate('/InventoryManager/messages')
//         })
//         .catch(err => console.log(err))
//     }

// //function for accept leave
// 	const handleAccept = (leaveId) => {
//         accepted(leaveId); // Call the accepted function with leaveId
//     };

// //function for reject leave
// 	const handleReject = (leaveId) => {
// 		rejected(leaveId); // Call the rejected function with leaveId
// 	};



// return (
// 	<div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
// 	<div className="bg-white shadow overflow-hidden sm:rounded-lg">
// 		<div className="px-4 py-5 sm:px-6">
// 			<h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Messages</h3>
// 		</div>
// 		<div className="border-t border-gray-200">
// 			<dl>
// 			<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
// 					<dt className="text-lg text-black-500 font-bold">Employee ID</dt>
// 					<dd className="mt-1 text-base text-gray-900 sm:col-span-2">{leaves.eid}</dd>
// 				</div>
// 				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
// 					<dt className="text-sm font-medium text-gray-500">Leave ID</dt>
// 					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{leaves.leaveID}</dd>
// 				</div>
// 				<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
// 					<dt className="text-sm font-medium text-gray-500">Type</dt>
// 					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{leaves.reason}</dd>
// 				</div>
// 				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
// 					<dt className="text-sm font-medium text-gray-500">Start date</dt>
// 					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formatDate(leaves.startDate)}</dd>
// 				</div>
// 				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
// 					<dt className="text-sm font-medium text-gray-500">How many days</dt>
// 					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{leaves.days}</dd>
// 				</div>
// 				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
// 					<dt className="text-sm font-medium text-gray-500">Status</dt>
// 					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{leaves.status}</dd>
// 				</div>

// 				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
// 					<dt className="text-sm font-medium text-gray-500">Reason</dt>
// 					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{leaves.note}</dd>
// 				</div>

			

// 				<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
// 				<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <button onClick={() => handleAccept(leaves._id)} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400 text-center text-justify ml-1">Accept</button>
//                 <button onClick={() =>handleReject(leaves._id)} className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400 text-center text-justify ml-1">Reject</button>
// 				{/* <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 text-xs">Remove</button> */}

// 				</div>
// 				</div>
// 			</dl>
// 		</div>
// 	</div>
// </div>

// )
// }

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PetSupply() {
    const [supplies, setSupplies] = useState([]);
    const [messageCount, setMessageCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/InventoryManager/messages')
            .then(res => {
                console.log(res);
                setSupplies(res.data);
                setMessageCount(res.data.length); // Update message count
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching supplies:', err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        // Subscribe to changes in supplies and update message count
        setMessageCount(supplies.length);
    }, [supplies]);

    const handleAccept = () => {
        alert('Message accepted');
        // Here you can add logic to handle the accept action, such as updating the message status in the backend
    };

    const handleReject = (rejectedId) => {
        alert('Message rejected');
        // Update message count
        setMessageCount(prevCount => prevCount - 1);
        // Remove the rejected message from the supplies array
        setSupplies(prevSupplies => prevSupplies.filter(supply => supply._id !== rejectedId));
        // Here you can add logic to handle the reject action, such as updating the message status in the backend
    };

    return (
        <div className="relative bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Messages</strong>
            <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
                {/* <Link to='/InventoryManager/messages/Createmessages' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create Supply Request
                </Link> */}
            </div>
            <div className="absolute top-0 left-0 p-2 bg-blue-500 text-white rounded">
                Messages Count: {messageCount}
            </div>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                {loading ? (
                    <p className="text-gray-700 text-center py-4">Loading messages...</p>
                ) : (
                    <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
                        <thead className="bg-[#c1c3c558]">
                            <tr>
                                <th>Supply ID</th>
                                <th>Item Type</th>
                                <th>Pet Type</th>
                                <th>Brand</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {supplies.map((supply) => (
                                <tr className='border-b-2 border-[#c1c3c558] text-center' key={supply._id}>
                                    <td>{supply._id}</td>
                                    <td>{supply.supply_item}</td>
                                    <td>{supply.supply_pettype}</td>
                                    <td>{supply.supply_brand}</td>
                                    <td>
                                        <button onClick={handleAccept} className="bg-green-500 text-white py-2 px-3 rounded hover:bg-green-700 text-xs text-gray-400 text-center text-justify ml-1">
                                            Accept
                                        </button>
                                        <button onClick={() => handleReject(supply._id)} className="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-700 text-xs text-gray-400 text-center text-justify ml-1">
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
