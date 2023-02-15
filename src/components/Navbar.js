import React from "react";
import { RiGooglePlayLine } from "react-icons/ri";
import { DarkLightSwitch } from "../components/NavbarComp/DarkLightSwitch";
import Notification from "../components/NavbarComp/Notification";
import Profileicon from "../components/NavbarComp/Profileicon";
import Searchbar from "../components/NavbarComp/Searchbar";
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
