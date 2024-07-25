import React, { useState } from "react";
import { LinearScale } from "@mui/icons-material";
import { ChannelList } from "../DUMMY_DATA";

export default function Explore() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      {" "}
      <LinearScale
        sx={{
          width: "26px",
          height: "26px",
        }}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={` ${isOpen ? "hidden" : "block"} 
      fixed top-[15%] left-[60px] right-[60%] z-10 
      bg-[#202024] shadow-[8px_0_34px_#000000de] 
      max-w-[300px] min-w-[260px] w-[300px] max-h-[450px] p-3 rounded-md 
      overflow-hidden overflow-y-scroll no-scrollbar text-center`}
      >
        <div className="w-100 h-5 mb-3">
          <input
            type="text"
            placeholder="Search..."
            className="p-1 w-100 rounded-md
            bg-[#101014] border-1 border-zinc-500 "
          />
        </div>
        <h3 className="text-xl mt-3 mb-3 ">Explore</h3>
        <ul className="grid gap-0.5">
          {ChannelList.map((channel) => (
            <li
              id={channel.id}
              key={channel.id}
              className="relative mt-1 text-center h-9 w-100 rounded-sm
          shadow-md shadow-zinc-500 overflow-hidden 
          cursor-pointer
          "
            >
               <div
      class="absolute bottom-0 left-0 right-0 top-0 h-full z-100  w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-10 transition duration-300 ease-in-out hover:opacity-100"></div>
            
              <img
                src={channel.image}
                alt={channel.channel}
                className="absolute -z-10 w-100 h-9 w-contain object-cover"
              />
              <span className="z-10 w-100 ">{channel.channelName}</span>
             </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
