import React from "react";

export default function BlueBtn({ children, bg, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
      flex items-center gap-2 justify-center 
      rounded-[8px] py-1 px-2 w-100 
     ${bg}
     text-black text-[14px] font-bolder text-center
      tracking-wider shadow-inner
      `}
    >
      {children}
    </button>
  );
}
