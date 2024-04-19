import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../../firebase';
// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function CreatePet() {
    
    const [rescue_req_id, setReqId] = useState()
    const [rescue_task_id, setTaskId] = useState()
    const [pet_name, setPetName] = useState()
    const [pet_type, setPettype] = useState()
    const [health_status, setHealStatus] = useState()
    const [pet_gender, setPetGender] = useState()
    const [pet_age, setPetAge] = useState()
    const [pet_appearance, setPetappearance] = useState()
    const [location, setLocation] = useState()
    const [imgUrl, setPetImage] = useState()
    const [pet_profile_status] = useState(true)
    
    const navigate = useNavigate()


    const [rescueTasks, setRescueTasks] = useState({})
	const {id} = useParams()


	useEffect(() => {
		axios.get(`http://localhost:3000/petManager/rescueTask/viewRescueTask/${id}`)
		.then((res) => {
			setReqId(res.data.rescue_req_id)
            setTaskId(res.data.rescue_task_id)
            setLocation(res.data.location)
            setPettype(res.data.pet_type)
            setHealStatus(res.data.health_status)
            setPetImage(res.data.imgUrl)
		}).catch((err) => {
			console.log(err);
		})
	},[])

    const [img, setImg] = useState(null);
    const [imgPerc, setImgPerc] = useState();
    const [videoPerc, setVideoPerc] = useState();
  
  
    useEffect((e) => {
        if (img) {
          uploadFile(img, "imgUrl");
        }
      }, [img]);
  
    const uploadFile = (file, fileType) => {
      const storage = getStorage(app);
      const folder = fileType === "imgUrl" ? "images/" : "videos/";
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, folder + fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          fileType === "imgUrl"
            ? setImgPerc(Math.round(progress))
            : setVideoPerc(Math.round(progress));
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              console.log(error);
              break;
            case "storage/canceled":
              // User canceled the upload
              break;
            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
            default:
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            
            console.log('DownloadURL - ', downloadURL);
            
            setPetImage(() => {
                // console.log("45"+JSON.parse(downloadURL));
              return downloadURL
            });
          });
        }
      );
    }
        const Submit = (e) => {
            const data = {
                rescue_req_id,rescue_task_id,pet_name,pet_type,pet_gender,health_status,pet_age,pet_appearance,location,imgUrl,
            };
            const update = {
                "pet_profile_status":true
            }
            console.log('result')
            console.log(imgUrl);
            axios.post(`http://localhost:3000/petManager/petProfile/createPet`,{...data})
            axios.put(`http://localhost:3000/petManager/rescueTask/editRescueTask/${id}`,update)
            .then(result => {
                console.log(result)
                navigate('/petManager/petProfile')
            })
            .catch(err => console.log(err))
        }
    
        return (

            <div>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <div className='text-xl font-bold '>Create Pet Profile</div>
                        <div className="mt-3 flex text-xs justify-center">
                <img className='object-cover h-60 w-60 m-5 rounded-full' src={imgUrl} alt='profile_Image'/>
				</div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                                <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                        Request ID
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="request_id"
                                            id="request-id"
                                            value={rescue_req_id}
                                            onChange={(e) => setReqId(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                                value={rescue_task_id}
                                                onChange={(e) => setTaskId(e.target.value)}
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
                                                onChange={(e) => setPetName(e.target.value)}
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
                                                onChange={(e) => setPetGender(e.target.value)}
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
                                                onChange={(e) => setPetAge(e.target.value)}
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
                                                onChange={(e) => setPetappearance(e.target.value)}
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
                                                    
                                                    // onChange={(e) => setPettype(e.target.value)}
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
                                                    // onChange={(e) => setHealStatus(e.target.value)}
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
                                                <input id="file-upload" name="file_upload"  type="file" className="sr-only"  accept='image/'
                                                    
                                                    onChange={(e) => setImg(() => e.target.files[0])}
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
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            onClick={Submit}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Submit
                        </button>
                </div>
        </div>
    )
}

