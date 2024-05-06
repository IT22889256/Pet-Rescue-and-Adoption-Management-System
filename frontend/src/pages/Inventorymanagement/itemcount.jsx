// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate,Link } from 'react-router-dom';
// import axios from 'axios';

// export default function Order() {
//     const [order, setorder] = useState([]);
//     const { id } = useParams();
//     const navigate = useNavigate();

//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
//     };

//     useEffect(() => {
//         axios.get(`http://localhost:3000/InventoryManager/order/getorder`)
//             .then((res) => {
//                 setorder(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);






// 	const handleDelete = (leaveId) => {
//         const confirmDelete = window.confirm('Are you sure you want to delete this leave request?');
//         if (confirmDelete) {
//             axios.delete(`http://InventoryManager/order/removeorder/${leaveId}`)
//                 .then(() => {
//                     alert('leave request deleted');
//                     //navigate('/EmployeeManager/LeaveManagement');
// 					window.location.reload();
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//         }
//     };


	
  
  

//     return (<>
//        <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
// 			<strong className="text-gray-700 font-medium">Order</strong>
// 			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to="/InventoryManager/order/createorder" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Create Order</Link></div>
// 			<div className="border-x border-gray-200 rounded-sm mt-3">
// 				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
// 					<thead className="bg-[#c1c3c558]" >
//                         <tr>
//                             <th>Order ID</th>
//                             <th>Item ID</th>
//                             <th>Order quantity</th>
//                             <th>Date</th>
//                             <th>Status</th>
//                             <th>Action</th>
							
// 	{/* // 	type: String,
// 	// 	// required: true,
	   
// 	// },
  
	
// 	// item_id: {
// 	// 	type: String,
		
// 	//   },
  
// 	//   order_quantity:{
// 	// 	type:String,
// 	//   },
// 	//   order_status:{
// 	// 	type:String
// 	//   },
	
// 	//   item_image:{
// 	// 	type: String
// 		 */}
	
//                         </tr>
//                     </thead>
//                    { <tbody>
//                         {order.map((leave) => (
// 							order.status === 'pending' &&(
//                             <tr className="border-b-2 border-[#c1c3c558] text-center" key={order._id}>
//                                 <td>{order.order_id}</td>
//                                 <td>{order.item_id}</td>
//                                 <td>{order.order_quantity}</td>
//                                 <td>{formatDate(order.startDate)}</td>
//                                 <td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
//                                     {order.status}
//                                 </td>
//                                 <td>
                                    
//                                         <>
                                            
//                                         	<Link to={`/Inventorymanagement/order/${order._id}`} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400 text-center ml-1">View</Link>
                                           

//                                         </>
                                    
//                                 </td>
//                             </tr>)
//                         ))}
//                     </tbody>}
//                 </table>
//             </div>
//         </div>

// 		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
//             <strong className="text-gray-700 font-medium">History</strong>
//             <div className="border-x border-gray-200 rounded-sm mt-3">
//                 <table className="bg-[#f3f3f3] w-full text-gray-700">
//                     <thead className="bg-[#c1c3c558]">
//                         <tr>
// 						<th>Order ID</th>
//                             <th>Item ID</th>
//                             <th>Order quantity</th>
//                             <th>Date</th>
//                             <th>Status</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {order.map((leave) => (
//                             order.status !== 'pending' && (
//                                 <tr className="border-b-2 border-[#c1c3c558] text-center" key={leave._id}>
//                                     <td>{order.order_id}</td>
//                                 <td>{order.item_id}</td>
//                                 <td>{order.order_quantity}</td>
//                                     {order.status === 'accepted' && (
//                                         <td className="overflow-auto py-1 capitalize rounded-md text-s text-white bg-[#15803d] text-center">
// 										<div>{order.status}</div>
// 									</td>
//                                     )}
//                                     {order.status === 'rejected' && (
//                                         <td className="overflow-auto py-1 capitalize rounded-md text-s text-white bg-[#801515] text-center">
//                                             <div>{order.status}</div>
//                                         </td>
//                                     )}
//                                     <td>
// 									<Link to={`/employeeManager/leave/${order._id}`} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400 text-center ml-1">View</Link>
// 									<button onClick={() =>handleDelete(order._id)} className="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-700 text-xs text-gray-400 text-center ml-1">Remove</button>
                                    

//                                     </td>
//                                 </tr>
//                             )
//                         ))}
//                     </tbody>
// 					</table>
// 			</div>
// 		</div>
// 		</>
// 	)
// }
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PetSupply() {
    const [supplies, setSupplies] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch supplies
        axios.get('http://localhost:3000/messages')
            .then(res => {
                console.log(res);
                setSupplies(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching supplies:', err);
                setLoading(false);
            });
        
        // Fetch item count
        axios.get('http://localhost:3000/items/count')
            .then(res => {
                console.log(res);
                setItemCount(res.data.count);
            })
            .catch(err => {
                console.error('Error fetching item count:', err);
            });

        // Set interval to update item count every 30 seconds
        const interval = setInterval(() => {
            axios.get('http://localhost:3000/items/count')
                .then(res => {
                    console.log(res);
                    setItemCount(res.data.count);
                })
                .catch(err => {
                    console.error('Error fetching item count:', err);
                });
        }, 30000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Request for Supplies</strong>
            <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
                <Link to='/InventoryManager/messages/Createmessages' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create Supply Request
                </Link>
            </div>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                {loading ? (
                    <p className="text-gray-700 text-center py-4">Loading supplies...</p>
                ) : (
                    <>
                        <p className="text-gray-700 text-center py-2">Current Items in Stock: {itemCount}</p>
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
                                            <Link to={`/InventoryManager/messages/viewmessages/${supply._id}`} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400 text-center text-justify ml-1">
                                                View
                                            </Link>
                                            <Link to={`/InventoryManager/messages/editmessages/${supply._id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400 text-center text-justify ml-1">
                                                Edit
                                            </Link>
                                            <Link to={`/InventoryManager/messages/deletemessages/${supply._id}`} className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400 text-center text-justify ml-1">
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
}
