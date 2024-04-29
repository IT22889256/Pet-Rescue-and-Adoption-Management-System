import React, { useEffect, useState } from 'react'
// import React, { useState } from 'react'
import axios from 'axios'

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../../firebase'
import { useNavigate } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function CreatePet() {

    const [item_name, setItemName] = useState()
    const [item_category, setItemcategory] = useState()
    const [item_quantity, setquantity] = useState()
    const [item_price,setprice] = useState()
    const [item_image,setimage] = useState()
    const[item_mfodate,setmfodate]=useState()
    const[item_expdate,setexpdate]=useState()



   
    const navigate = useNavigate()

    const Submit = (e) => {

        const data = {
            
       
            item_name,item_category,item_quantity,item_price,item_image,item_mfodate,item_expdate
        };
        console.log('result')
        axios.post('http://localhost:3000/InventoryManager/items/createItem',data)
        .then(result => {
            console.log(result)
            navigate('/InventoryManager/Items')
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
            
            setimage(() => {
                // console.log("45"+JSON.parse(downloadURL));
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
                        <div className='text-xl font-bold '>Create Items</div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 

                            { <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                            Item image
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
                                        
                                            onChange={(e) => setImg(() => e.target.files[0])}
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                            </div>
                            </div> }

                                <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="item_name"
                                            id="item_name"
                                            value={item_name}
                                            onChange={(e) => setItemName(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div>
                                    <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item category
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="item_category"
                                            id="item_category"
                                            value={item_category}
                                            onChange={(e) =>setItemcategory (e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div>
                                    <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item quantity                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="item_quantity"
                                            id="item_quantity"
                                            value={item_quantity}
                                            onChange={(e) => setquantity(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div>
                                    <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item price                                   </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="item_price"
                                            id="item_price"
                                            value={item_price}
                                            onChange={(e) => setprice(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div>
                                    {/* <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item image                                   </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="item_image"
                                            id="item_image"
                                            value={item_image}
                                            onChange={(e) => setimage(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div> */}
                                    {/* const[item_mfodate,setmfodate]=useState()
    const[item_expdate,setexpdate]=useState() */}
                                   <div className="sm:col-span-3">
                                <label htmlFor="pet-age" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item MFO Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="item_mfodate"
                                        id="item_mfodate"
                                        value={item_mfodate}
                                        onChange={(e) => setmfodate(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="pet-age" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item EXP Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="item_expdate"
                                        id="item_expdate"
                                        value={item_expdate}
                                        onChange={(e) => setexpdate(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                           
                            </div>
                            </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        {/* <button
                            onClick={Submit}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Submit
                            
                        </button> */}
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

