import React from "react";
import homeImg from "../../image/homeImg.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/userAffairsManager/gallery")
      .then((res) => {
        console.log(res.data);
        setImages(res.data);
        console.log(images);
      });
  }, []);
  return (
    <div>
      <div className="columns-2xs">
        <div className="w-full aspect-square">
          {images.map((image) => (
            <tr
              className="border-b-2 border-[#c1c3c558] text-center"
              key={image._id}
            >
              <div className="mt-3 flex text-xs justify-center">
                <img
                  className="object-cover h-60 w-60"
                  src={image.pet_image}
                  alt="profile_Image"
                />
              </div>
            </tr>
          ))}
        </div>
      </div>
    </div>
  );
}
