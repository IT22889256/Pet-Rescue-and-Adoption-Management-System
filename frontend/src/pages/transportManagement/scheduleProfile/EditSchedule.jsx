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

    const [showSuccess, setShowSuccess] = useState(false);

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
        .then(() => {
            setShowSuccess(true);
            setTimeout(() => {
              setShowSuccess(false);
              navigate('/transportManager/scheduleProfile');
            }, 3000);
          })
          .catch((error) => {
            console.log(error);
          });
      };

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
            <div className={`fixed inset-0 overflow-y-auto flex items-center justify-center z-50 ${showSuccess ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Updated successful</h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">The Schedule has been successfully Updated</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              </div>
              </div>
            </div>

        
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
                                <div 
                                        name="Driver"
                                        id="Driver"
                                        value={Driver}
                                        onChange={(e) => setDriver(e.target.value)} >
                                       <DriverAvailability driver = {Driver}/>
                                </div>
                            </div>

                            

                            <div className="sm:col-span-3">
                                <label htmlFor="Vet_nary_Doctor" className="block text-sm font-medium leading-6 text-gray-900">
                                Vet nary Doctor
                                </label>
                                <div 
                                      
                                        name="Vet_nary_Doctor"
                                        id="Vet_nary_Doctor"
                                        value={Vet_nary_Doctor}
                                        onChange={(e) => setVet(e.target.value)}>  
                                        <DoctorAvailability doctor={Vet_nary_Doctor}/>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Staff_Member" className="block text-sm font-medium leading-6 text-gray-900">
                                Staff Member
                                </label>
                                <div
                                        name="Staff_Member"
                                        id="Staff_Member"
                                        value={Staff_Member}
                                        onChange={(e) => setStaffMem(e.target.value)} >
                                        <HelperAvailability helper={Staff_Member}/>
                                </div>
                            </div>
                            
                            
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link to={`/transportManager/ScheduleProfile`} className="text-sm font-semibold leading-6 text-gray-900">Cancel</Link>
                <button
                    onClick={Edit}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button>
        </div>
</div>
</div>

)}