import { Logout } from "@mui/icons-material";
import React from "react";
import { useStateValue } from "../redux/StateProvider";
import SavedBtn from "./SavedBtn";
import BlueBtn from "../layouts/BlueBtn";
import { Link } from "react-router-dom";

export default function LoggedIn() {
  const [{ login }, dispatch] = useStateValue();
  const handleSignout = () => {
    dispatch({
      type: "SIGNOUT",
    });
  };
  return (
    <div className="flex justify-between items-center gap-3">
      <SavedBtn />
      <Link to="/profile-page">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="./assets/b.jpeg"
            alt="#"
            className="h-full w-100 object-cover"
          />
        </div>
      </Link>
      <div>
        <BlueBtn bg="bg-[#26bbff]" onClick={handleSignout}>
          <Logout fontSize="small" />
          <span>Signout</span>
        </BlueBtn>
      </div>
    </div>
  );
}
