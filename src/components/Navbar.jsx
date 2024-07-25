/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import NavbarSearchInput from "./NavbarSearchInput";
import NavbarOptions from "./NavbarOptions";
import CloseOpenBtn from "./CloseOpenBtn";
import SignInModal from "./SignInModal";
import Signup from "./Signup";
import RightSideofNac from "./RightSideofNac";
import HamburgerMenu from "./HamburgerMenu";
import { useStateValue } from "../redux/StateProvider";
import LoggedIn from "./LoggedIn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [{ login }, dispatch] = useStateValue();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowSignup, setIsShowSignup] = useState(false);
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  const handleSignUpClick = () => {

    setIsShowSignup((isShowSignup) => !isShowSignup);
  };
  return (
    <>
      <section
        className="fixed left-0 right-0 top-0 
      text-zinc-400 bg-[#101014] z-10"
      >
        <div
          className="h-[70px] md:h-[80px]
        w-full flex justify-between items-center px-4 "
        >
          <CloseOpenBtn onClock={handleOpen} isOpen={isOpen} />
          <NavbarOptions />
          <NavbarSearchInput />
          {!login ? (
            <RightSideofNac
              handleLoginClick={handleLoginClick}
              handleSignUpClick={handleSignUpClick}
            />
       
          ) :<LoggedIn/>}
        </div>



      </section>
      <SignInModal
      setIsShowLogin={setIsShowLogin}
        isShowLogin={isShowLogin}
        handleLoginClick={handleLoginClick}
      />
      <Signup
        handleSignUpClick={handleSignUpClick}
        isShowSignup={isShowSignup}
        setIsShowSignup={setIsShowSignup}
      />
    </>
  );
}
