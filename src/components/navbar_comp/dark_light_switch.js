import React, { useState } from 'react';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import { FaCircle } from 'react-icons/fa';

const DarkLightSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSwitch = () => {
    setIsDarkMode(!isDarkMode);
    
  };
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="ml-4 flex items-center">
      <div className="relative inline-block w-16 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle-switch"
          id="toggle-switch"
          checked={isDarkMode}
          onChange={handleSwitch}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle-switch"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
        <div className="sun-icon z-0 absolute left-0 top-0 flex items-center justify-center w-6 h-6 text-yellow-400">
          <RiSunLine />
        </div>
        <div className="moon-icon absolute right-0 top-0 flex items-center justify-center w-6 h-6 text-blue-400">
          <RiMoonClearLine />
        </div>
      </div>
      <div
        className={`absolute w-6 h-6 flex items-center bg-gray-300 rounded-xl z-50 ${
          isClicked ? 'transform translate-x-10' : ''
        }`}
        onClick={handleClick}
      >
        <FaCircle className='text-white w-6 h-6 px-1' />
      </div>
    </div>
  );
};

export default DarkLightSwitch;