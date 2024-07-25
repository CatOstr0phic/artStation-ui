/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// import { Backdrop } from "@mui/material";
import { useStateValue } from "../redux/StateProvider";
import BlueBtn from "../layouts/BlueBtn";
import { Close, Login } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

export default function Test({ isShowLogin, setIsShowLogin, handleLoginClick }) {
  const [{ users, }, dispatch] = useStateValue();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
const  navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
     setIsShowLogin(!isShowLogin)

    dispatch({
      type: "LOGIN",
      item: {
        id: new Date().getTime(),
        username,
        password,
      },
    });
  };
  return (
    <>
      <div
        className={`${!isShowLogin ? "active" : ""} 
        show fixed top-[20%] 
        right-0 left-0 m-auto z-30 max-w-[400px] `}
      >
        <div className="login-form relative">
          <div
            className="absolute top-3 right-3"
            open={isShowLogin}
            onClick={handleLoginClick}
          >
            <Close />
          </div>
          <div
            className="form-boc-solid bg-[#202023] 
          rounded-md px-3 py-3"
          >
            <form className="mt-3">
              <h1
                className="text-2xl text-center 
              w-100 text-white font-semibold"
              >
                Sign In
              </h1>

              <div className="text-zinc-500 grid gap-3 mb-2">
                <label htmlFor="" className="text-xl ">
                  Username
                </label>
                <div className="w-100 border-[1px] border-[grey] rounded-md">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-[transparent] p-2 rounded-sm w-100"
                  />
                </div>

                <label htmlFor="" className="text-xl ">
                  Password
                </label>
                <div className="w-100 border-[1px] border-[grey] rounded-md">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[transparent] p-2 rounded-sm w-100"
                  />
                </div>
              </div>

                <BlueBtn bg="bg-[#26bbff]" onClick={handleLogin}>
                  <Login />
                  Sign In
                </BlueBtn>

            </form>
          </div>
        </div>
      </div>
      {/* media 0916 */}
      {/* <Backdrop
        className="z-10"
        sx={{
          color: "#fff",

          position: "absolute",
        }}
        open={isShowLogin}
        onClick={handleLoginClick}
      /> */}
    </>
  );
}
