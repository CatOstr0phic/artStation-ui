import React from "react";
import Card from "../layouts/Card";
import FollowBtn from "./FollowBtn";

export default function ChannelAccaunt() {
  return (
    <Card>
      <div className="flex justify-start gap-3 items-center">
        <div className="h-20 w-20 overflow-hidden rounded-full">
          <img
            src="./assets/e.jpeg"
            alt=""
            className="object-cover h-100 w-100
             shadow-[inset_6px_6px_0_0.6px] "
          />
        </div>
        <div className="ml-0 mt-2">
          <div className=" text-[#E6E6EA] text-2xl">Lama Dev</div>
          <div className="text-[#96969A] text-sm">id: Q0293hfeoi3</div>
          <div>
            <FollowBtn />
          </div>
        </div>
      </div>
    </Card>
  );
}
