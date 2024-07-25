import React from "react";
import { useStateValue } from "../redux/StateProvider";
import { AddToPhotos } from "@mui/icons-material";


export default function TestImage({ 
    id, 
    key, 
    imageUrl, 
    imageName }) {

     
      const [{ liked }, dispatch] = useStateValue();
      console.log("this is the basket, ", liked);
    
      const addToGallery = () => {
        dispatch({
          type: "LIKED",
          item: {
            id: id,
            imageUrl: imageUrl,
            imageName: imageName,
          },
        });
      };
  
  return (
    <div id={id} key={id} className="relative">
      <h1 className="text-xl font-bold">Title</h1>
      <div className="">
        <div className="relative h-full w-full cursor-pointer">
          <img
            src={imageUrl}
            className="z-10 object-contain w-100 h-100"
            alt={imageName}
          /> 
          <button className="absolute right-5 top-3 
          flex items-center justify-center
          rounded-full h-10 w-10 
          hover:animate-bounce
          backdrop-blur-lg bg-[#0000004a]"
          onClick={addToGallery}>
            <AddToPhotos/>
      </button>
        </div>
        <div>
          {imageName}
        </div>
      </div>
     
    </div>
  );
}
