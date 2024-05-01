import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DriverAvailability from '../../DriverAvailability'
import DoctorAvailability from '../../DoctorAvailability'
import HelperAvailability from '../../HelperAvailability'



export default function EditSchedule() {
    
    const [Transport_Type, setTransTyp] = useState()
    const [Number_of_Pets, setNoPet] = useState()
    const [Location, setLoc] = useState()
    const [Driver, setDriver] = useState()
    const [Vet_nary_Doctor, setVet] = useState()
    const [Staff_Member, setStaffMem] = useState()
    const navigate = useNavigate()

        //validation
        const [nameError,setNameError]=useState("");
        const [valid,setValid] = useState(true);
   
    const {id} = useParams()
    useEffect((e) => {
       
        axios.get(`http://localhost:3000/api/schedules/${id}`)
        .then((res) => {
            setTransTyp(res.data.Transport_Type)
            setNoPet(res.data.Number_of_Pets)
            setLoc(res.data.Location)
            setDriver(res.data.Driver)
            setVet(res.data.Vet_nary_Doctor)
            setStaffMem(res.data.Staff_Member)
     

            console.log(res);

        }).catch(err => console.log(err))
    },[])
    const Edit = (e) => {
        const data = {
            Transport_Type,
            Number_of_Pets,
            Location,
            Driver,
            Vet_nary_Doctor,
            Staff_Member
        };
       
        console.log('result')
        axios.put(`http://localhost:3000/api/schedules/${id}`,data)
        .then(result => {
            alert('updated')
            console.log(result)
            navigate('/transportManager/ScheduleProfile')
        })
        .catch(err => console.log(err))
    }

     //validation
     const stringValidator = (value)=>{
        let regex = /^[a-zA-Z]*$/;
        if(!regex.test(value) ){
            setNameError("Invalid input");
            setValid(false);
        }
        else{
            setNameError("");
            setValid(true);
        }
    }

    const numberValidator = (value)=>{
        let regex = /^(?:[1-9]|1[0-9]|20|30)$/;
        if(!regex.test(value) ){
            setNameError("Invalid input");
            setValid(false);
        }
        else{
            setNameError("");
            setValid(true);
        }
    }
//
        return (

        
            <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <div className='text-xl font-bold '>Edit transportation Schedule</div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                    <div className="col-span-full">
       
         
        </div>



                         <div className="sm:col-span-3">
                            {/* validation */}
                            <div className='text-red-600'>{nameError}</div>
                                {/* validation */}
                                        <label htmlFor="Transport_Type" className="block text-sm font-medium leading-6 text-gray-900">
                                        Transport Type - <value>{Transport_Type}</value>
                                        </label>
                                        <div className="mt-2">
                                            
                                            <input type="radio" value="Emergency" name="Transport_Type" className='m-1' checked={Transport_Type === "Emergency"} onChange={(e) => setTransTyp(e.target.value)}/>
                                            <label htmlFor="Transport_Type" className="m-1 text-sm font-medium leading-6 text-gray-900">
                                            Emergency
                                            </label>
                                            <input type="radio" value="Normal" name="Transport_Type" className='m-1' checked={Transport_Type === "Normal"} onChange={(e) => setTransTyp(e.target.value)}/>
                                            <label htmlFor="Transport_Type" className="m-1 text-sm font-medium leading-6 text-gray-900">
                                            Normal
                                        </label>
                                        </div>
                                    </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Number_of_Pets" className="block text-sm font-medium leading-6 text-gray-900">
                                Number of Pets
                                </label>
                                <div className="mt-2">
                                    <input
                                        required
                                        type="Number_of_Pets"
                                        name="Number_of_Pets"
                                        id="Number_of_Pets-id"
                                        value={Number_of_Pets}
                                        onChange={(e) => {setNoPet(e.target.value);
                                        numberValidator(e.target.value);}}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Location" className="block text-sm font-medium leading-6 text-gray-900">
                                         Location
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Location"
                                        id="Location"
                                        value={Location}
                                        onChange={(e) => setLoc(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Driver" className="block text-sm font-medium leading-6 text-gray-900">
                                Driver
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Driver"
                                        id="Driver"
                                        value={Driver}
                                        onChange={(e) => setDriver(e.target.value)} 
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />    
                                </div>
                            </div>

                            

                            <div className="sm:col-span-3">
                                <label htmlFor="Vet_nary_Doctor" className="block text-sm font-medium leading-6 text-gray-900">
                                Vet nary Doctor
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Vet_nary_Doctor"
                                        id="Vet_nary_Doctor"
                                        value={Vet_nary_Doctor}
                                        onChange={(e) => setVet(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Staff_Member" className="block text-sm font-medium leading-6 text-gray-900">
                                Staff Member
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Staff_Member"
                                        id="Staff_Member"
                                        value={Staff_Member}
                                        onChange={(e) => setStaffMem(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            
                            
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </Link>
                <button
                    onClick={Edit}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button>
        </div>
</div>


)}