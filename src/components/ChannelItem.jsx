import React from "react";
import ChannelsLayout from "../layouts/ChannelsLayout";
import { LinearScale } from "@mui/icons-material";
import ChannelSlider from "./ChannelSlider";
import Explore from "./Explore";

export default function ChannelItem() {
  return (

    <div className=" "> 
    <section className="w-full flex py-3 items-center justify-center">
  
        <ChannelsLayout>
      <Explore/>
        </ChannelsLayout>
        <ChannelsLayout>
          <div className="flex items-center justify-center gap-2 whitespace-nowrap ">
            <LinearScale
              sx={{
                width: "26px",
                height: "26px",
              }}
            />

            <div>All Channels</div>
          </div>
        </ChannelsLayout>{" "}
      <ChannelSlider />
    </section>
    </div>
  );
}
