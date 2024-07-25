/* eslint-disable no-unused-vars */
import React from "react";
import { useStateValue } from "../redux/StateProvider";
import { Link } from "react-router-dom";

export default function SavesImg({ id, imageUrl }) {
  const bg = `absolute right-2 top-1
    rounded-full p-1 text-xs
    backdrop-blur-md bg-[#0000004a]
    transition duration-300  ease-in-out`;

  const [{ liked }, dispatch] = useStateValue();

  const removeFromLiked = () => {
    dispatch({
      type: "REMOVE",
      id: id,
    });
  };

  return (
    <div className="relative rounded-md oveflow-hidden">
      <img src={imageUrl} alt="" className="object-cover h-full rounded-md " />
      <button className={`${bg} hover:scale-75`} onClick={removeFromLiked}>
        Remove
      </button>
      <Link to="/image-page">
        <button className={`${bg} top-8`}>View the channel</button>
      </Link>
    </div>
  );
}
