// import React, { useEffect, useState } from 'react'
// import { Link} from 'react-router-dom'
// // import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
// import axios from 'axios'

// export default function Order() {

// 	const [Order, setorder] = useState([]);

// 	useEffect(() => {
// 		axios.get('http://localhost:3000/suppliers/order').then(res => {
// 			console.log(res);
// 			setorder(res.data)
// 		})
// 	},[])

// 	return (<>
// 		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
// 			<strong className="text-gray-700 font-medium"> order </strong>

// 			<div className="border-x border-gray-200 rounded-sm mt-3">
// 				<table className="bg-[#f3f3f3] w-full text-gray-700">
// 					<thead className="bg-[#c1c3c558]">
// 						<tr>

// 							<th>order Id</th>
// 							<th>order from</th>
// 							<th>order Description</th>
// 							<th>order Date</th>
// 							<th>Action</th>
// 						</tr>
// 					</thead>
					
// 					{<tbody>
// 						{Order.map((order) => (
// 							order.order_status === 'Pending' &&(
// 							<tr className='border-b-2 border-[#c1c3c558] text-center' key={order._id}>
// 								<td>
// 								{order._id}
// 								</td >
// 								<td>
// 									{order.order_from}
// 								</td >
// 								<td>
// 									{order.order_description}
// 								</td >
// 								<td>
// 									{order.order_date}
// 								</td>
// 									{order.order_status=== "Pending" && (
// 									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
// 										<div>{order.order_status}</div>
// 									</td>)}
// 								<td>
// 									<Link to={`/Suppliers/requests/viewrequests/${order._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
// 								</td>
// 							</tr>)
// 						))}
// 					</tbody> }
					
// 				</table>
// 			</div>
// 		</div>
// 		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
// 			<strong className="text-gray-700 font-medium">history</strong>
// 			<div className="border-x border-gray-200 rounded-sm mt-3">
// 				<table className="bg-[#f3f3f3] w-full text-gray-700">
// 					<thead className="bg-[#c1c3c558]">
// 						<tr>
						

// 						<th>order Id</th>
// 							<th>order from</th>
// 							<th>order Description</th>
// 							<th>order Date</th>
// 							<th>Action</th>
// 						</tr>
// 					</thead>
					
// 					{<tbody>
// 						{Order.map((order) => (
// 								order.order_status !== 'Pending' &&(
// 									<tr className='border-b-2 border-[#c1c3c558] text-center' key={order._id}>
// 									<td>
// 									{order.order_id}
// 								</td >
// 								<td>
// 									{order.order_from}
// 								</td >
// 								<td>
// 									{order.order_description}
// 								</td >
// 								<td>
// 									{order.order_date}
// 								</td>
// 									{order.order_status=== "Accept" && (
// 									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
// 										<div>{order.order_status}</div>
// 									</td>)}
// 									{order.order_status=== "Reject" && (
// 									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
// 										<div>{order.order_status}</div>
// 									</td>)}
// 								<td>
// 									<Link to={`/Suppliers/requests/viewrequests/${order._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
// 								</td>
// 							</tr>
// 								)
// 						))}
// 					</tbody> }
					
// 				</table>
// 			</div>
// 		</div>
// 		</>
// 	)
// }

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

export default function Order() {
    const [order, setorder] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/Suppliers/requests`)
            .then((res) => {
                setorder(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);






	const handleDelete = (leaveId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this  request?');
        if (confirmDelete) {
            axios.delete(`http://InventoryManager/order/removeorder/${leaveId}`)
                .then(() => {
                    alert('leave request deleted');
                    //navigate('/EmployeeManager/LeaveManagement');
					window.location.reload();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };


	
  
  

    return (<>
             
        	<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Order</strong>
            <Link to="/InventoryManager/order/createorder" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create Order
            </Link>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="bg-[#f3f3f3] w-full text-gray-700">
               
        
                    <thead className="bg-[#c1c3c558]">
                        <tr>
                        <th>Order ID</th>
                            <th>Item ID</th>
                            <th>Order quantity</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.map((order) => (
                            order.order_status !== 'pending' && (
                                <tr className="border-b-2 border-[#c1c3c558] text-center" key={order._id}>
                                    <td>{order._id}</td>
                                <td>{order.item_id}</td>
                                <td>{order.order_quantity}</td>
                                <td>{order.date}</td>
                                <td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
                                    {order.order_status}
                                </td>
                                  
                                    <td>
									<Link to={`/InventoryManager/order/vieworder/${order._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
									
									
								</td>
                                </tr>
                            )
                        ))}
                    </tbody>
					</table>
			</div>
		</div>

		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">History</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="bg-[#f3f3f3] w-full text-gray-700">
                    <thead className="bg-[#c1c3c558]">
                        <tr>
                        <th>Order ID</th>
                            <th>Item ID</th>
                            <th>Order quantity</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.map((order) => (
                            order.order_status !== 'pending' && (
                                <tr className="border-b-2 border-[#c1c3c558] text-center" key={order._id}>
                                    <td>{order._id}</td>
                                <td>{order.item_id}</td>
                                <td>{order.order_quantity}</td>
                                <td>{order.date}</td>
                                <td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
                                    {order.order_status}
                                </td>
                                    
                                    <td>
									<Link to={`/InventoryManager/order/vieworder/${order._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
									
									
								</td>
                                </tr>
                            )
                        ))}
                    </tbody>
					</table>
			</div>
		</div>
		</>
	)
}
