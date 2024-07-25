import React from "react";
import { InsertPhoto, SlowMotionVideo, Upload } from "@mui/icons-material";

export default function ItemUpload() {
  return (
    <div className="flex justify-between border-dashed border-zinc-500 border-1 py-1 px-3">
      <div className="flex gap-3">
        <label
          className="grid font-normal p-[8px_0_5px] text-sm leading-5
           transtion-all ease-linear duration-200
           place-items-center
           border-r-1 
           "
        >
          <InsertPhoto fontSize="large" color="primary" />
          <div className="font-semibold text-[#fff]">HQ Images</div>
          <small className="text-[#707074] text-xs">JPEG, PNG, GIF</small>
        </label>
        <label
          className="grid font-normal p-[8px_0_5px] text-sm leading-5
           transtion-all ease-linear duration-200
           place-items-center
           "
        >
          <SlowMotionVideo fontSize="large" color="primary" />
          <div className="font-semibold text-[#fff]">Videos</div>
          <small className="text-[#707074] text-xs">mp4</small>
        </label>
      </div>

      <button
        className="rounded-lg border-1 border-[#606064] 
            py-1 px-3 text-white text-sm text-center"
      >
        <Upload fontSize="small" sx={{ marginRight: "4px" }} />
        Upload a project
      </button>
    </div>
  );
}
