import React from "react";
import Card from "../layouts/Card";
export const MoreBy = [
  { id: 1, imageUrl: "./assets/f.jpeg" },
  { id: 2, imageUrl: "./assets/d.jpeg" },
  { id: 3, imageUrl: "./assets/a.jpeg" },
  { id: 4, imageUrl: "./assets/i.jpeg" },
  { id: 5, imageUrl: "./assets/j.jpeg" },
];

export default function MoreProjects() {
  return (
    <Card>
      <div className="text-xl font-semibold mb-2">
        More by User
      </div>
    <div className="grid grid-cols-3 grid-rows-1 gap-1">
      {MoreBy.map((more) => (
        <div
          id={more.id}
          key={more.id}
          className=" h-full rounded-md overflow-hidden"
        >
          <img src={more.imageUrl} alt="" className="object-cover" />
        </div>
      ))}
    </div>
    </Card>
  );
}
