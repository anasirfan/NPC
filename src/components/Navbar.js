import React from 'react';
import Logo from './navbar_comp/Logo';

import DarkLightSwitch from './navbar_comp/DarkLightSwitch';
import Notification from './navbar_comp/Notification';
import ProfileIcon from './navbar_comp/profile_icon';
import styles from './navbar.module.css';
import SearchBar from './navbar_comp/SearchBar';


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