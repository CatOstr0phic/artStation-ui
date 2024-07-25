import React from "react";
import Categorization from "../layouts/Categorization";
import ArtworkDetails from "./ArtworkDetails";
import ItemUpload from "./ItemUpload";
import AddProject from "./AddProject";
import CheckboxBtn from "./CheckboxBtn";
import FormContent from "../layouts/FormContent";
import { Rocket, Save } from "@mui/icons-material";

export default function App() {
  return (
    <>
      <p className="py-4 text-lg font-semibold">Create New Artwork</p>
      <section className="grid grid-cols-12 grid-rows-5  gap-4 pb-3">
        <div
          className="h-100 text-white 
        grid gap-4 col-span-12 md:col-span-9 row-span-3 md:row-span-5 max-h-full
        md:max-h-[73vh] overflow-y-scroll"
        >
          <AddProject />
          <ItemUpload />
          <ArtworkDetails />
          <Categorization category={"Categorization"}>
            {/* Medium */}
            <FormContent
              contentName={"Medium"}
              questionValidation={
                "What mediums did you use to create this project? (Choose up to 3)"
              }
            >
              <div className="p-[14px] flex flex-wrap gap-3 ">
                <CheckboxBtn mediumName={"Digital 2D"} id={"1"} />
                <CheckboxBtn mediumName={"Digital 3D"} id={"2"} />
                <CheckboxBtn mediumName={"Real Time"} id={"3"} />
                <CheckboxBtn mediumName={"Dry art"} id={"4"} />
                <CheckboxBtn mediumName={"Grafitti"} id={"5"} />
                <CheckboxBtn mediumName={"Ai made"} id={"6"} />
                <CheckboxBtn mediumName={"Sci-Fi"} id={"7"} />
              </div>
            </FormContent>

            {/* Software Used */}

            <FormContent
              contentName={"Tags"}
              questionValidation={"Use tags to add more information."}
            >
              <div>
                <input
                  type="text"
                  className="p-2 h-9 border-1 text-sm text-[#eeeef1] 
              border-zinc-600 rounded-sm w-100 bg-[#101014]"
                  placeholder="What is your Artwork called?"
                />
              </div>
            </FormContent>
          </Categorization>
        </div>

        <div className="col-span-12 md:col-span-3 row-span-2 md:row-span-5 row-start-4 md:col-start-10 grid gap-3">
          <Categorization category={"Tools needed"}>
            <FormContent questionValidation={"Software Used"}>
              <div>
                <input
                  placeholder="Enter Software that you used here"
                  type="text"
                  className="p-2 h-9 border-1 text-sm text-[#eeeef1] 
              border-zinc-600 rounded-sm w-100 bg-[#101014]"
                />
              </div>
            </FormContent>
          </Categorization>

          <Categorization category={"Publishing Options"}>
            <FormContent questionValidation={"Pulish status"}>
              <button
                className="w-100 btn mt-3 
              bg-[#24BAFF] border-[#3ac1ff] 
              hover:bg-[#45c4ff]"
              >
                <Save sx={{ marginRight: "5px" }} /> Save
              </button>

              <button
                className="w-100 btn mt-2 
              bg-[#5cb85c] border-[#6cbf6c] 
              hover:bg-[#74c374]"
              >
                <Rocket sx={{ marginRight: "5px" }} /> Publish
              </button>
            </FormContent>
          </Categorization>
        </div>
      </section>
    </>
  );
}
