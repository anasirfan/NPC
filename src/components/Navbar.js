import React from 'react';
import Logo from './NavbarComp/Logo';
import SearchBar from './NavbarComp/SearchBar';
import DarkLightSwitch from './NavbarComp/DarkLightSwitch';
import Notification from './NavbarComp/Notification';
import ProfileIcon from './NavbarComp/ProfileIcon';
import styles from './navbar.module.css';


const Navbar = () => {
  return (
    <nav className="ml-30 bg-white h-37px flex justify-between items-center py-3   px-4">
    <div className="flex items-center flex-grow">
      <Logo />
      <SearchBar />
    </div>
    <div className="flex items-center space-x-4">
      <DarkLightSwitch />
      <Notification />
      <div className="ml-4 h-8">
        <ProfileIcon />
      </div>
    </div>
  </nav>
  );
};

export default Navbar;