import React from "react";

export default function AddProject() {
  return (
    <div before="Hello World" className="bg-[#18181c] ">
      <div className="w-100 bg-[#303034] text-base text-white py-[7px] px-[14px]">
        Add project
      </div>
      <div className="p-[14px]">
        <input
          type="text"
          className="p-2 h-9 border-1 text-sm text-[#eeeef1] 
        border-zinc-600 rounded-sm w-100 bg-[#101014]"
          placeholder="What is your Artwork called?"
        />
      </div>
    </div>
  );
}
