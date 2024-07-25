import React from "react";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function NavbarSearchInput() {
  return (
    <div
      className="hidden md:flex 
      w-100 sm:w-[50%] 
      flex-[5] items-center justify-between h-10 p-2 mr-4 ml-9
      border-[0] lg:border-2 border-[#707074] rounded-[20px] "
    >
      <input
        placeholder="Search..."
        type="text "
        className="hidden lg:block w-100 bg-transparent px-2"
      />
      <Link to="/search-page">
        <Search />
      </Link>
    </div>
  );
}
