import React from "react";
import { Facebook, Pinterest, Reply, Twitter } from "@mui/icons-material";
export const Options = [
  { id: 1, icon: <Facebook />, action: "Share" },
  { id: 2, icon: <Pinterest />, action: "Save" },
  { id: 3, icon: <Twitter />, action: "Share" },
  { id: 4, icon: <Reply />, action: "Reply" },
];

export default function OptionsOfSharing({ icon, id, action }) {
  return (
    <section className="flex w-100 justify-between items-center">
      {Options.map((option) => (
        <div
          id={option.id}
          key={option.id}
          className="flex justify-center items-center 
        text-sm text-zinc-500 cursor-pointer"
        >
          <div>{option.icon}</div>

          <span className="ml-1">{option.action}</span>
        </div>
      ))}
    </section>
  );
}
