import React from 'react';

import { RxAvatar } from "react-icons/rx";


const ProfileIcon = () => {
  return (
    <div className="ml-18">
      <button className=" rounded-full bg-gray-200">
      <RxAvatar className="w-8 h-8 rounded-full"/>
      </button>
    </div>
  );
};

export default ProfileIcon;