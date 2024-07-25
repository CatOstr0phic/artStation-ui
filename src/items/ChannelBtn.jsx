import React from "react";
// 1715

export default function ChannelBtn({ text, images }) {
  return (
    <section className="flex justify-center items-center gap-2 whitespace-nowrap ">
      <div className="w-9 h-8 rounded-lg overflow-hidden">
      <img src={images} alt="" className="w-100 h-100 object-cover" />
        </div> 

      {text}
    </section>
  );
}
