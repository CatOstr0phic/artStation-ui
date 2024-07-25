import React from "react";
import { GridOn, Sort } from "@mui/icons-material";

const layout =
  "py-1 px-4 rounded-full hover:bg-black hover:text-white cursor-pointer";

const Sorting = [
  {
    id: 1,
    element: <GridOn />,
  },
  {
    id: 2,
    element: (
      <>
        <div className={layout}>Community</div>
        <div className={layout}>Trending</div>
        <div className={layout}>Latest</div>
      </>
    ),
  },
  {
    id: 3,
    element: <Sort />,
  },
];

export default function GallerySorting() {
  return (
    <section className="fixed bottom-10 z-10 w-full ">
      <div className="flex w-full justify-evenly">
        {Sorting.map((sort) => (
          <div
            id={sort.id}
            key={sort.id}
            className=" px-2 py-1 bg-[#edeaea] flex gap-2 
            text-black rounded-full items-center 
            shadow-[inset_0px_0px_9px_6px] shadow-[#8f8e8ea7]"
          >
            {sort.element}
          </div>
        ))}
      </div>
    </section>
  );
}
