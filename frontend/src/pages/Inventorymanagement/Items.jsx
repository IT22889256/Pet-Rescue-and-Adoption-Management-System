


import {useReactToPrint} from 'react-to-print'
import React, { useEffect,useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function PetProfile() {
    const [items, setItems] = useState([]);
    const [itemCount, setItemCount] = useState(0); // State to hold item count

    useEffect(() => {
        axios.get('http://localhost:3000/inventoryManager/items').then(res => {
            console.log(res);
            setItems(res.data);
            setItemCount(res.data.length); // Update item count when items are fetched
        })
    }, [])

    const ComponetRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => ComponetRef.current,
		DocumentTItle:"Rescue Requests Report",
		onafterprint: ()=>("Rescue Requests Report Successfully Download")
	})

    // Subscribe to item changes and update the item count
    useEffect(() => {
        setItemCount(items.length);
    }, [items])

    return (
        <div className="relative bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
    <strong className="text-gray-700 font-medium">Items</strong>
    <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
        <Link to="/InventoryManager/Items/additem" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Items</Link>
        <button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">Generate Report</button>
    </div> 

            <div className="absolute top-0 left-0 p-2 bg-blue-500 text-white rounded">
                Total Items: {itemCount}
            </div>
            <div ref={ComponetRef} className="border-x border-gray-200 rounded-sm mt-3">
                <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
                    <thead className="bg-[#c1c3c558]">
                        <tr>
                            <th>Item Id</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>MFO Date</th>
                            <th>EXP Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr className='border-b-2 border-[#c1c3c558] text-center' key={item._id}>
                                <td>{item.pid}</td>
                                <td>{item.item_name}</td>
                                <td>{item.item_category}</td>
                                <td>{item.item_quantity}</td>
                                <td>{item.item_price}</td>
                                <td>{item.item_mfodate}</td>
                                <td>{item.item_expdate}</td>
                                <td>
                                    <Link to={`/InventoryManager/Items/veiwitem/${item._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

