import React from "react";

export default function ArtworkDetails() {
  return (
    <div before="Hello World" className="bg-[#18181c] ">
      <div className="w-100 bg-[#303034] text-base text-white py-[7px] px-[14px]">
        Artwork Details
      </div>
      <div className="p-[14px]">
        Artwork Description
        <textarea
          type="text"
          className="p-2 h-32 border-1 text-sm text-[#eeeef1] 
          border-zinc-600 rounded-sm w-100 bg-[#101014]"
          placeholder="Artwork Description?"
        />
      </div>
    </div>
  );
}
