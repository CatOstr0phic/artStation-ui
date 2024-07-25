import React from "react";
import DescSection from "./sections/DescSection";
import ChannelAccaunt from "../components/ChannelAccaunt";
import ImageSection from "./sections/ImageSection";
export default function Image() {
  return (
    <section
      className="h-[87vh] grid grid-cols-10 
        grid-rows-5 gap-2
        overflow-hidden "
    >
      <ImageSection />
      <div
        className="col-span-3 col-start-8 
        row-start-1 row-span-5 overflow-y-scroll"
      >
        <ChannelAccaunt />
        <DescSection />
      </div>
    </section>
  );
}
