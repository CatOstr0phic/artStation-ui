import { LocationOn } from "@mui/icons-material";
import React from "react";
export default function ProfileSection({
  city,
  country,
  accauntName,
  profileId,
}) {
  return (
    <div
      className="grid place-content-center 
    place-items-center gap-2 items-center"
    >
      <div className="h-24 w-24 overflow-hidden rounded-full">
        <img
          src="./assets/e.jpeg"
          alt=""
          className="object-cover h-100 w-100
             shadow-[inset_6px_6px_0_0.6px] "
        />
      </div>
      <div className="ml-0 mt-2">
        <div className=" text-[#E6E6EA] text-2xl">{accauntName}</div>
        <div className="text-[#96969A] text-sm">id: {profileId}</div>
      </div>

      <div className="text-[#96969A] text-sm ">
        <LocationOn fontSize={"small"} sx={{ marginRight: "5px", marginBottom: "3px" }} />
        {city} ,  {country}
      </div>
    </div>
  );
}
