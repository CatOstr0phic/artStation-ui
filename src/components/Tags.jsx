import React from "react";
import Card from "../layouts/Card";

export const Tag = [
  { id: 1, tagName: "Digital 2D" },
  { id: 2, tagName: "Blender" },
  { id: 3, tagName: "Ai" },
];

export default function Tags() {
  return (
    <Card>
      <div className="text-xl font-semibold mb-2">Tags</div>
      <div className="flex gap-2 text-center">
        {Tag.map((t) => (
          <div
            id={t.id}
            key={t.id}
            className="text-xs bg-[#404044] 
        text-[#E6E6EA] rounded-sm p-1 w-fit
        cursor-pointer "
          >
            <small>#</small>
            {t.tagName}
          </div>
        ))}
      </div>
    </Card>
  );
}
