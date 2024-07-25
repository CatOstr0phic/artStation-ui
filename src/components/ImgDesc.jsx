import React, { useState } from "react";
import { ThumbUpAlt, RemoveRedEye, Chat } from "@mui/icons-material";
import AboutArt from "../components/AboutArt"
import { useStateValue } from "../redux/StateProvider";

export default function ImgDesc() {
  const [{ postLikes, commentsAdded }, dispatch] = useStateValue();

  const ImgRang = [
    {
      id: 1,
      icon: <ThumbUpAlt />,
      viewed: `${postLikes}`,
    },
    {
      id: 2,
      icon: <RemoveRedEye />,
      viewed: "103.1K",
    },
    {
      id: 3,
      icon: <Chat />,
      viewed: `${commentsAdded}`,
    },
  ];
  const text = `
  Description of the image Lorem ipsum, dolor sit amet consectetur
  adipisicing elit. Sit, aliquid fugit? Accusantium dolor nulla libero
  veritatis aliquam eius autem atque quibusdam reiciendis. Fuga, officia
  voluptatibus. Corrupti enim laboriosam blanditiis dolorem.`;

  
  return (
    <section className="w-100 font-bold text-xl py-3 pb-2">
      <h1>NAme of the image</h1>
     <AboutArt text={text}/>
      <div className="text-sm text-zinc-500 cursor-pointer">
        <i>Posted 2 years ago</i>

        <div className="flex justify-between w-100 my- mt-3">
          {ImgRang.map((options) => (
            <div id={options.id} key={options.id}>
              {options.icon}
              <text className="ml-[4px]">{options.viewed}</text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
