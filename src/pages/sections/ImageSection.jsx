import React from "react";
import TestImage from "../../components/TestImage";
import { ChannelInformation } from "../../DUMMY_DATA";

export default function ImageSection() {
  return (
    <div
    className="col-span-7 row-span-5 
    col-start-1 row-start-1"
  >
    <div className="w-100 h-full bg-black
    rounded-lg overflow-hidden overflow-y-scroll">
      <div className="flex items-center flex-col
       text-center jsutify-center px-8 py-10">
        { ChannelInformation.map((channel) => (
          <TestImage
           id={channel.id}
           key={channel.id}
           imageUrl ={channel.imageUrl}
           imageName={channel.imageName}
          />
        ))}
      </div>
    </div>
  </div>
  );
}
