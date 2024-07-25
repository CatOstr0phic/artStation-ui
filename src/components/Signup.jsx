import React, { useState } from "react";
import { useStateValue } from "../redux/StateProvider";
import { Close } from "@mui/icons-material";
import BlueBtn from "../layouts/BlueBtn";

export default function Signup({
  isShowSignup,
  setIsShowSignup,
  handleSignUpClick,
}) {
  const [{ users }, dispatch] = useStateValue();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const signup = () => {
    const item = users.find(
      (user) => user.username === username && user.password === password
    );

    item && setIsShowSignup(!isShowSignup);

    item
      ? dispatch({
          type: "SIGNUP",
          item: item,
        })
      : alert("false");

    console.log(item);
  };

  return (
    <div
      className={`${!isShowSignup && "active"} 
      show absolute top-[75px] 
      right-0 left-0 m-auto z-10 max-w-[400px] `}
    >
      <form className="login-form">
        <div
          className="absolute top-3 right-3"
          open={isShowSignup}
          onClick={handleSignUpClick}
        >
          <Close />
        </div>
        <div
          className="form-boc-solid grid gap-1 bg-[#202023]
         rounded-md px-3 py-3"
        >
          <h1 className="text-xl text-center w-100 text-white font-semibold">
            Sign Up
          </h1>

          <div className="text-zinc-500">
            <label className="text-lg">Username</label>
            <div className="w-100 border-[1px] border-[grey] rounded-md">
              <input
                type="text"
                className="bg-[transparent] p-2 rounded-sm w-100"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <label className="text-lg">Password</label>
            <div className="w-100 border-[1px] border-[grey] rounded-md">
              <input
                type="password"
                className="bg-[transparent] p-2 rounded-sm w-100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <BlueBtn onClick={signup} bg="bg-slate-500  text-white">
            Sign Up
          </BlueBtn>
        </div>
      </form>
    </div>
  );
}
