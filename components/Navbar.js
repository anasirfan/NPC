import React from "react";
import { RiGooglePlayLine } from "react-icons/ri";
import { DarkLightSwitch } from "./NavbarComp/darkLightSwitch";
import Notification from "./NavbarComp/Notification";
import Profileicon from "./NavbarComp/Profileicon";
import Searchbar from "./NavbarComp/Searchbar";
const Navbar = () => {
  return (
      <div className="left-20">
        <RiGooglePlayLine />
        <Searchbar/>
        <DarkLightSwitch/>
        <Notification/>
        <Profileicon/>
      </div>      
  );
};

export default Navbar;
