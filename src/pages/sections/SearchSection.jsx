import React from "react";
import { SearchOutlined } from "@mui/icons-material";

export default function SearchSection({ handleOnChange, handleSearch, value }) {
  return (
    <div className="bg-[#18181c] -m-4 px-8 py-20 flex items-center justify-center">
      <div className="relative w-[55%] h-12 border-[1px] bg-[#101014] 
      border-[#303034] rounded-md p-2 pr-12 text-xl">
        <div onClick={handleSearch} className="absolute right-0 p-2 top-0 text-[#303033] font-semibold">
          <SearchOutlined fontSize="medium" />
        </div>
        <input
          type="text"
          className="w-100 h-100 bg-transparent"
          placeholder="Search here..."
       
          value={value}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}
