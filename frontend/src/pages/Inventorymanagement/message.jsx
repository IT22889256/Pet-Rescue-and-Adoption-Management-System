// // import React, { useEffect, useState } from 'react'
// // import { Link} from 'react-router-dom'
// // import axios from 'axios'

// // export default function PetSupply() {
// // 	const [supplies, setSupplies] = useState([]);

// // 	useEffect(() => {
// // 		axios.get('http://localhost:3000//messages').then(res => {
// // 			console.log(res);
// // 			setSupplies(res.data)
// // 		})
// // 	},[])

// // 	return (
// // 		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
// // 			<strong className="text-gray-700 font-medium">Request for Supplies</strong>
// // 			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/InventoryManager/messages/Createmessages' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Create Supply Request</Link></div>
// // 			<div className="border-x border-gray-200 rounded-sm mt-3">
// // 				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
// // 					<thead className="bg-[#c1c3c558]" >
// // 						<tr>
// // 							<th>Supply ID</th>
// //                             <th>Item Type</th>
// // 							<th>Pet Type</th>
// // 							<th>Brand</th>
// // 							{/*<th>Message</th>*/}
// // 							<th>Action</th>
// // 						</tr>
// // 					</thead>
// // 					{<tbody>
// // 						{supplies.map((supply) => (
// // 							<tr className='border-b-2 border-[#c1c3c558] text-center' key={supply._id}>
// // 								<td>
// // 									{supply._id}
// // 								</td >
// // 								<td>
// // 									{supply.supply_item}
// // 								</td>
// // 								<td>
// // 									{supply.supply_pettype}
// // 								</td>
// // 								<td>
// // 									{supply.supply_brand}
// // 								</td>
// // 								{/*<td>
// // 									{supply.supply_message}
// // 								</td>*/}
// // 								<td>
// // 									<Link to={`/InventoryManager/messages/viewmessages/${supply._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								
// // 									<Link to={`/InventoryManager/messages/editmessages/${supply._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								
// // 									<Link to={`/InventoryManager/messages/deletemessages/${supply._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Delete</Link>
// // 								</td>
// // 							</tr>
// // 						))}
// // 					</tbody> }
					
// // 				</table>
// // 			</div>
// // 		</div>
// // 	)
// // }
// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';

// // export default function PetSupply() {
// //     const [supplies, setSupplies] = useState([]);
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         axios.get('http://localhost:3001/inventroymanager')
// //             .then(res => {
// //                 console.log(res);
// //                 setSupplies(res.data);
// //                 setLoading(false);
// //             })
// //             .catch(err => {
// //                 console.error('Error fetching supplies:', err);
// //                 setLoading(false);
// //             });
// //     }, []);

// //     return (
// //         <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
// //             <strong className="text-gray-700 font-medium">Request for Supplies</strong>
// //             <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
// //                 <Link to='/InventoryManager/messages/Createmessages' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
// //                     Create Supply Request
// //                 </Link>
// //             </div>
// //             <div className="border-x border-gray-200 rounded-sm mt-3">
// //                 {loading ? (
// //                     <p className="text-gray-700 text-center py-4">Loading supplies...</p>
// //                 ) : (
// //                     <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
// //                         <thead className="bg-[#c1c3c558]">
// //                             <tr>
// //                                 <th>Supply ID</th>
// //                                 <th>Item Type</th>
// //                                 <th>Pet Type</th>
// //                                 <th>Brand</th>
// //                                 <th>Action</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {supplies.map((supply) => (
// //                                 <tr className='border-b-2 border-[#c1c3c558] text-center' key={supply._id}>
// //                                     <td>{supply._id}</td>
// //                                     <td>{supply.supply_item}</td>
// //                                     <td>{supply.supply_pettype}</td>
// //                                     <td>{supply.supply_brand}</td>
// //                                     <td>
// //                                         <Link to={`/InventoryManager/messages/viewmessages/${supply._id}`} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400 text-center text-justify ml-1">
// //                                             View
// //                                         </Link>
// //                                         <Link to={`/InventoryManager/messages/editmessages/${supply._id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400 text-center text-justify ml-1">
// //                                             Edit
// //                                         </Link>
// //                                         <Link to={`/InventoryManager/messages/deletemessages/${supply._id}`} className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400 text-center text-justify ml-1">
// //                                             Delete
// //                                         </Link>
// //                                     </td>
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// export default function PetSupply() {
//     const [supplies, setSupplies] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios.get('http://localhost:3000/InventoryManager/messages')
//             .then(res => {
//                 console.log(res);
//                 setSupplies(res.data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error('Error fetching supplies:', err);
//                 setLoading(false);
//             });
//     }, []);

//     return (
//         <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
//             <strong className="text-gray-700 font-medium">Messages</strong>
//             <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
//                 {/* <Link to='/InventoryManager/messages/Createmessages' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Create Supply Request
//                 </Link> */}
//             </div>
//             <div className="border-x border-gray-200 rounded-sm mt-3">
//                 {loading ? (
//                     <p className="text-gray-700 text-center py-4">Loading messages...</p>
//                 ) : (
//                     <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
//                         <thead className="bg-[#c1c3c558]">
//                             <tr>
//                                 <th>Supply ID</th>
//                                 <th>Item Type</th>
//                                 <th>Pet Type</th>
//                                 <th>Brand</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {supplies.map((supply) => (
//                                 <tr className='border-b-2 border-[#c1c3c558] text-center' key={supply._id}>
//                                     <td>{supply._id}</td>
//                                     <td>{supply.supply_item}</td>
//                                     <td>{supply.supply_pettype}</td>
//                                     <td>{supply.supply_brand}</td>
//                                     <td>
//                                         <Link to={`/InventoryManager/messages/viewmessages/${supply._id}`} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400 text-center text-justify ml-1">
//                                             View
//                                         </Link>
//                                         {/* <Link to={`/InventoryManager/messages/editmessages/${supply._id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400 text-center text-justify ml-1">
//                                             Edit
//                                         </Link> */}
//                                         {/* <Link to={`/InventoryManager/messages/deletemessages/${supply._id}`} className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400 text-center text-justify ml-1">
//                                             Delete
//                                         </Link> */}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         </div>
//     );
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// export default function PetSupply() {
//     const [supplies, setSupplies] = useState([]);
//     const [messageCount, setMessageCount] = useState(0);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios.get('http://localhost:3000/InventoryManager/messages')
//             .then(res => {
//                 console.log(res);
//                 setSupplies(res.data);
//                 setMessageCount(res.data.length); // Update message count
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error('Error fetching supplies:', err);
//                 setLoading(false);
//             });
//     }, []);

//     useEffect(() => {
//         // Subscribe to changes in supplies and update message count
//         setMessageCount(supplies.length);
//     }, [supplies]);

//     return (
//         <div className="relative bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
//             <strong className="text-gray-700 font-medium">Messages</strong>
//             <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
//                 {/* <Link to='/InventoryManager/messages/Createmessages' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Create Supply Request
//                 </Link> */}
//             </div>
//             <div className="absolute top-0 left-0 p-2 bg-blue-500 text-white rounded">
//                 Messages Count: {messageCount}
//             </div>
//             <div className="border-x border-gray-200 rounded-sm mt-3">
//                 {loading ? (
//                     <p className="text-gray-700 text-center py-4">Loading messages...</p>
//                 ) : (
//                     <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
//                         <thead className="bg-[#c1c3c558]">
//                             <tr>
//                                 <th>Supply ID</th>
//                                 <th>Item Type</th>
//                                 <th>Pet Type</th>
//                                 <th>Brand</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {supplies.map((supply) => (
//                                 <tr className='border-b-2 border-[#c1c3c558] text-center' key={supply._id}>
//                                     <td>{supply._id}</td>
//                                     <td>{supply.supply_item}</td>
//                                     <td>{supply.supply_pettype}</td>
//                                     <td>{supply.supply_brand}</td>
//                                     <td>
//                                         <Link to={`/InventoryManager/messages/viewmessages/${supply._id}`} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400 text-center text-justify ml-1">
//                                             View
//                                         </Link>
//                                         {/* <Link to={`/InventoryManager/messages/editmessages/${supply._id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400 text-center text-justify ml-1">
//                                             Edit
//                                         </Link> */}
//                                         {/* <Link to={`/InventoryManager/messages/deletemessages/${supply._id}`} className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400 text-center text-justify ml-1">
//                                             Delete
//                                         </Link> */}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         </div>
//     );
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
