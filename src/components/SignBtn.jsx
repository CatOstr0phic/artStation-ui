import React from "react";
import { Login, Create } from "@mui/icons-material";

export default function SignBtn({ text, handleLoginClick, handleSignUpClick }) {
  const handleClick = () => {
    text === "Sign In" ? handleLoginClick() : handleSignUpClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center text-center gap-2 rounded-[8px] py-1 px-2 border-2 ${
        text === "Sign In"
          ? "bg-[#26bbff] border-[#26bbff] text-black"
          : "bg-slate-500 text-white border-[#4e4e4e]"
      }  text-[14px] font-bolder  tracking-wider shadow-inner`}
    >
      {text === "Sign In" ? (
        <Login fontSize="small" />
      ) : (
        <Create fontSize="small" />
      )}
      <span className="w-[80%]">{text}</span>
    </button>
  );
}
