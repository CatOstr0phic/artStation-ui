import React from "react";
import NavigationMenu from "./NavigationMenu";
import { NavigationList } from "../DUMMY_DATA";
import Logo from "./Logo";

export default function NavbarOptions() {
  return (
    <div className="flex gap-3 items-center">
      <Logo />

      <ul className="hidden md:flex gap-5">
        {NavigationList.map((list) => (
          <NavigationMenu
            id={list.id}
            key={list.id}
            title={list.title}
           page={list.pageLink}
          />
        ))}
      </ul>
    </div>
  );
}
