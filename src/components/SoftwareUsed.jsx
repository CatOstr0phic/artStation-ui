import React from "react";
import { Facebook, Pinterest, Twitter } from "@mui/icons-material";
export const Software = [
  { id: 1, icon: <Facebook />, sftName: "Illustrator" },
  { id: 2, icon: <Pinterest />, sftName: "Photoshop" },
  { id: 3, icon: <Twitter />, sftName: "Blender" },
  { id: 2, icon: <Pinterest />, sftName: "Photoshop" },
  { id: 3, icon: <Twitter />, sftName: "Blender" },
];

export default function SoftwareUsed({ icon, id, sftName }) {
  return (
    <section className="flex flex-wrap gap-2 items-center py-2">
      {Software.map((option) => (
        <button
          id={option.id}
          key={option.id}
          className="flex items-center 
        text-xs  bg-[#5858583a] rounded-sm px-2 
        hover:bg-slate-500 hover:backdrop-blur-sm
        çursor-pointer "
        >
          <div>{option.icon}</div>

          <span className="ml-1">{option.sftName}</span>
        </button>
      ))}
    </section>
  );
}
