import React from "react";
import { Link } from "react-router-dom";
import { Upload } from "@mui/icons-material";

export default function UploadBg() {
  return (
    <section
      className="w-100 h-full flex flex-col 
    items-center justify-center gap-3 text-center"
    >
      <img
        alt=""
        src="./assets/projects.svg"
        className="text-2xl font-bold  text-[#777] 
        w-[427px] aspect-[auto 472/280] h-[282px]"
      />
      <h1 className="text-3xl">Upload your Artwork</h1>

      <p className="text-neutral-500">
        Fill your portfolio with projects you are proud of.
        <br />
        Get feedback on your work and build your industry network.
      </p>
      <Link to="/upload-page" className="">
        <button
          className="rounded-lg border-1 border-[#606064] 
            py-2 px-3 text-white text-sm text-center"
        >
          <Upload fontSize="small" sx={{ marginRight: "4px" }} />
          Upload a project
        </button>
      </Link>
    </section>
  );
}
