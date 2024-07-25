import React from "react";

export default function ChannelsLayout({ children }) {
  return (
    <div className="relative min-w-fit bg-[#303034] rounded-[10px] p-2 text text-xs sm:text-base mt-2 ml-2 
      hover:bg-[#56565b9d] text-white ">
      {children}
    </div>
  );
}
