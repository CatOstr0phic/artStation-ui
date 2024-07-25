import React from "react";
import BlueBtn from "../layouts/BlueBtn";
import Card from "../layouts/Card";
import { ThumbUpAltOutlined } from "@mui/icons-material";
import { Bookmark } from "@mui/icons-material";
import ImgDesc from "./ImgDesc";
import OptionsOfSharing from "./OptionsOfSharing";
import SoftwareUsed from "./SoftwareUsed";
import { useStateValue } from "../redux/StateProvider";

export default function ChannelImageDes({ setValue }) {
  const [dispatch] = useStateValue();

  return (
    <Card>
      <div
        className="flex justify-center 
        gap-3 items-center 
        text-center w-100"
      >
          <BlueBtn bg="bg-blue-600 " onClick={() =>
            dispatch({
              type: "LIKE",
            })
          }>
            <ThumbUpAltOutlined fontSize="small" />
            Like
          </BlueBtn>

        <BlueBtn bg="bg-slate-600  text-white">
          <Bookmark fontSize="small" />
          Save
        </BlueBtn>
      </div>
      <ImgDesc />

      <OptionsOfSharing />
      <SoftwareUsed />
    </Card>
  );
}
