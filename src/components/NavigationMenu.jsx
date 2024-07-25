import React from "react";
import { Link } from "react-router-dom";

export default function NavigationMenu({ title, page, id }) {
  return (
    <div
      id={id}
      key={id}
      className="dropdown border-b border-[transparent] 
       hover:border-b-2 
       hover:border-blue-700 "
    >
      <Link to={page}>
        <button
          className=""
          type="button"
          id="dropdownMenuButton"
          data-mdb-dropdown-init
          data-mdb-toggle="dropdown"
          aria-expanded="true"
        >
          {title}
        </button>
      </Link>
      {/* <ul class="dropdown-menu mt-1 bg-[#202024] text-white py-2 px-1">
        <li
          className="px-2 py-1 w-100 bg-[#202024] 
        hover:bg-[#3d3c3c6e] cursor-pointer rounded-md align-middle"
        >
          {icon1}
          <span className="ml-2">{item}</span>
        </li>

        <li
          className="px-2 py-1 w-100 bg-[#202024]
         hover:bg-[#3d3c3c6e] cursor-pointer rounded-md"
        >
          {icon2}
          <span>{item1}</span>
        </li>
      </ul> */}
    </div>
  );
}
