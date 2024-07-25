import React from "react";
import { PersonAddAltOutlined } from "@mui/icons-material";

export default function FollowBtn() {
  return (
    <div className="mt-[7px] block">
      <button
        className="py-[2px] px-1 text-[#fff] text-sm
              border-1 border-[#96969A] rounded-md
              flex gap-1 items-center
              hover:backdrop-brightness-75"
      >
        <span>
          <PersonAddAltOutlined fontSize="small" />
        </span>
        <span>Follow</span>
      </button>
    </div>
  );
}
