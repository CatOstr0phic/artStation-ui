import React from "react";

export default function CheckboxBtn({ mediumName, id }) {
  return (
    <button className="flex items-center border-1 rounded-sm 
    py-2 px-3 border-[#303034]">
      <input
        type="checkbox"
        name={mediumName}
        id={id}
        className="bg-[#303034] accent-[#3b99fc] mr-4"
      />

      {mediumName}
    </button>
  );
}
