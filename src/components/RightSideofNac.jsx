import React from 'react';
import SavedBtn from "./SavedBtn";
import SignBtn from "./SignBtn";

export default function RightSideofNac({handleLoginClick, handleSignUpClick}) {
  return (
    <div className="flex gap-4 items-center">
    <SavedBtn />

    <div className="loginicon hidden md:flex ">
      <SignBtn text="Sign up" handleSignUpClick={handleSignUpClick} />
    </div>
    <SignBtn text="Sign In" handleLoginClick={handleLoginClick} />
  </div>
  )
}
