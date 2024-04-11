import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function EditPet() {
    
    const [request_id, setReqId] = useState()
    const [task_id, setTaskId] = useState()
    const [pet_name, setPetName] = useState()
    const [pet_type, setPettype] = useState()
    const [health_status, setHealStatus] = useState()
    const [pet_gender, setPetGender] = useState()
    const [pet_age, setPetAge] = useState()
    const [pet_appearance, setPetappearance] = useState()
    const [location, setLocation] = useState()
    const [pet_image, setPetImage] = useState()
    const navigate = useNavigate()
<<<<<<< HEAD
    const {id} = useParams()
    useEffect((e) => {

=======

    const {id} = useParams()
    useEffect((e) => {


>>>>>>> d39252ca9a0aa277b9aca8c1b3ce0db4a59e9d46
        axios.get(`http://localhost:3000/petManager/petProfile/viewPet/${id}`)
        .then((res) => {
            setReqId(res.data.request_id)
            setTaskId(res.data.task_id)
            setPetName(res.data.pet_name)
            setPettype(res.data.pet_type)
            setHealStatus(res.data.health_status)
            setPetGender(res.data.pet_gender)
            setPetAge(res.data.pet_age)
            setPetappearance(res.data.pet_appearance)
            setLocation(res.data.location)
            setPetImage(res.data.pet_image)

            console.log(res);

        }).catch(err => console.log(err))
    },[])
    const Edit = (e) => {
        const data = {
        request_id,task_id,pet_name,pet_type,pet_gender,health_status,pet_age,pet_appearance,location,pet_image
        };

        console.log('result')
        axios.put(`http://localhost:3000/petManager/petProfile/editPet/${id}`,data)
        .then(result => {
            alert('updated')
            console.log(result)
            navigate('/petManager/petProfile')
        })
        .catch(err => console.log(err))
    }
        return (

        
        <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <div className='text-xl font-bold '>Edit Pet Profile</div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                    <div className="col-span-full">
            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
            Profile picture
            </label>
            <div className="mt-2 flex items-center gap-x-3">
            <img className="h-20 w-20 text-gray-300" alt='image' />
            </div>
        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                Request ID
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="request_id"
                                    id="request-id"
                                    value={request_id}
                                    className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="task-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    Task ID
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="task_id"
                                        id="task-id"
                                        value={task_id}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="pet-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Pet Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="pet_name"
                                        id="pet-name"
                                        value={pet_name}
                                        //onChange={(e) => setPetName(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="pet-gender" className="block text-sm font-medium leading-6 text-gray-900">
                                    Pet Gender
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="pet_gender"
                                        id="pet-gender"
                                        value={pet_gender}
                                        //onChange={(e) => setPetGender(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="pet-age" className="block text-sm font-medium leading-6 text-gray-900">
                                    Pet Age
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="pet_age"
                                        id="pet-age"
                                        value={pet_age}
                                        //onChange={(e) => setPetAge(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="pet-appearance" className="block text-sm font-medium leading-6 text-gray-900">
                                    Pet Appearance
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="pet_appearance"
                                        id="pet-appearance"
                                        value={pet_appearance}
                                        //onChange={(e) => setPetappearance(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="pet-type" className="block text-sm font-medium leading-6 text-gray-900">
                                    Pet type
                                </label>
                                    <div className="mt-2">
                                        <select
                                            id="pet-type"
                                            name="pet_type"
                                            value={pet_type}
                                            
                                            //onChange={(e) => setPettype(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            ><option></option>
                                            <option>Cat</option>
                                            <option>Dog</option>
                                        </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="health-status" className="block text-sm font-medium leading-6 text-gray-900">
                                    Health Status
                                </label>
                                    <div className="mt-2">
                                        <select
                                            id="health-status"
                                            name="health_status"
                                            value={health_status}
                                            onChange={(e) => setHealStatus(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            ><option></option>
                                            <option className='bg-[#15803d]'>Good</option>
                                            <option className='bg-[#be123c]'>Need Treament</option>
                                            <option className='bg-[#ca8a04]'>Treating</option>
                                        </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                    Location
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="location"
                                        id="locations"
                                        value={location}
                                        //onChange={(e) => setLocation(e.target.value)}
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            { <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                            Pet Image
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file_upload"  type="file" className="sr-only" 
                                            value={pet_image}
                                            //onChange={(e) => setPetImage(e.target.value)}
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                            </div>
                            </div> }
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