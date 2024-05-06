import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'


import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../../firebase';
// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function Editsupplier() {
    
const [supplier_id, setsupplierid] = useState()
const [supplier_name, setsuppliername] = useState()
const [supplier_address, setsupplieraddress] = useState()
const [supplier_email,setsupplieremail] = useState()
const [supplier_age,setsupplierage] = useState()
const [supplier_phonenumber,setsupplierphonenumber] = useState()
const [supplier_image,setsupplierimage] = useState()
const [preImg, setSup] = useState()

    const navigate = useNavigate()
    const [setLoading] = useState(false);
    const {id} = useParams()
    useEffect((e) => {
        
        axios.get(`http://localhost:3000/InventoryManager/supplier/viewsupplier/${id}`)
        .then((res) => {
            
            setsuppliername(res.data.supplier_name)
            setsupplieraddress(res.data.supplier_address)
            setsupplieremail(res.data.supplier_email)
            setsupplierage(res.data.supplier_age)
            setsupplierphonenumber(res.data.supplier_phonenumber)
            setsupplierimage(res.data.supplier_image)
           

            console.log(res);
           
        }).catch(err => console.log(err))
    },[])
    const Edit = (e) => {
        const data = {
            supplier_name,supplier_address,supplier_email,supplier_age,supplier_phonenumber,supplier_image
        };
    
        console.log('result')
        axios.put(`http://localhost:3000/InventoryManager/supplier/editsupplier/${id}`,data)
        .then(result => {
            alert('updated')
            console.log(result)
            navigate('/InventoryManager/supplier')
        })
        .catch(err => console.log(err))
    }

    
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
            
            setsupplierimage(() => {
                // console.log("45"+JSON.parse(downloadURL));
                setSup(downloadURL)
              return downloadURL
            });
          });
        }
      );
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
          <img className="h-20 w-20 text-gray-300" src={supplier_image} alt='image' />
          </div>
        </div>



                        <div className="sm:col-span-3">
                            <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                            Supplier Id
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="supplier_id"
                                    id="supplier_id"
                                    value={id}
                                    className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="task-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    Supplier name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="supplier_name"
                                        id="supplier_name"
                                        value={supplier_name}
                                        onChange={(e) => setsuppliername(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="pet-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Supplier address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="supplier_address"
                                        id="supplier_address"
                                        value={supplier_address}
                                        onChange={(e) => setsupplieraddress(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="pet-appearance" className="block text-sm font-medium leading-6 text-gray-900">
                                    supplier email
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="supplier_email"
                                        id="supplier_email"
                                        value={supplier_email}
                                        onChange={(e) => setsupplieremail(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="pet-gender" className="block text-sm font-medium leading-6 text-gray-900">
                                    supplier age
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="supplier_age"
                                        id="supplier_age"
                                        value={supplier_age}
                                        onChange={(e) => setsupplierage(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="pet-age" className="block text-sm font-medium leading-6 text-gray-900">
                                    Supplier phonenumber
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="supplier_phonenumber"
                                        id="supplier_phonenumber"
                                        value={supplier_phonenumber}
                                        onChange={(e) => setsupplierphonenumber(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            { <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                            supplier image
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
                                            // value={supplier_image}
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

