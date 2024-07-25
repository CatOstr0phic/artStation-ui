  import React from "react";
  import { FavoriteBorder, Search } from "@mui/icons-material";

  export default function HamburgerMenu({isOpen}) {
    return (
      <div
        className={`${
          !isOpen ? "h-[0px] overflow-hidden" : "h-[400px] "
        } transition-height ease transform duration-300 px-4 text-[19.5px]`}
      >
        <div className="flex justify-between mb-2">
          <div className="flex">
            <FavoriteBorder />
          </div>
          <div className="flex">Sign up</div>
        </div>
        <div className="mt-3 flex w-100 flex-[5] items-center justify-end h-8 p-2 border-1 border-[#707074] rounded-[20px]">
          <input
            placeholder="Search..."
            type="text "
            className="hidden lg:block w-100 bg-transparent px-2"
          />
          <Search />
        </div>
        <ul className="mt-3 flex flex-col justify-between w-100 h-[60%]">
          <li className="relative hover:text-white cursor-pointer">Explore</li>
          <li>Learn</li>
          <li>Shop</li>
          <li>Jobs</li>
        </ul>
      </div>
    );
  }
