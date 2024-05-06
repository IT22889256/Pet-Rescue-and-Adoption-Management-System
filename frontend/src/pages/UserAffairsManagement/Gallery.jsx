import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import { HiOutlineSearch } from "react-icons/hi";

export default function Gallery() {
  const [images, setimages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/userAffairsManager/gallery")
      .then((res) => {
        console.log(res);
        setimages(res.data);
      });
  }, []);

  const ComponetRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponetRef.current,
    DocumentTItle: "Feedback Report",
    onafterprint: () => "Feedback Report Successfully Download",
  });

  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  return (
    <div>
      <div className="relative">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
        />
        <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
          <strong className="text-2xl font-semibold text-gray-800">
            Gallery Details
          </strong>
          <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
            <Link
              to="/UserAffairsManager/Gallery/CreateGallery"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Image
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
            {images
              .filter((images) => {
                return searchQuery.toUpperCase() === ""
                  ? images
                  : images.imageId.toUpperCase()
                  .includes(searchQuery);
              })
              .map((images) => (
                <div
                  key={images._id}
                  className="border border-gray-200 rounded-md p-4 bg-blue-100"
                >
                  <p className="text-sm font-medium">
                    Image ID: {images.imageId}
                  </p>
                  <p className="text-sm font-medium">
                    Pet Name: {images.pet_name}
                  </p>
                  <div className="flex justify-end mt-2">
                    <Link
                      to={`/UserAffairsManager/Gallery/ViewGallery/${images._id}`}
                      className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 "
                    >
                      View
                    </Link>
                    <Link
                      to={`/UserAffairsManager/Gallery/EditGallery/${images._id}`}
                      className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 "
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/UserAffairsManager/Gallery/RemoveGallery/${images._id}`}
                      className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 "
                    >
                      Remove
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
