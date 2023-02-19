import React, { useState } from 'react';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';

const DarkLightSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSwitch = () => {
    setIsDarkMode(!isDarkMode);
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
        <div className="sun-icon absolute left-0 top-0 flex items-center justify-center w-6 h-6 text-yellow-400">
          <RiSunLine />
        </div>
        <div className="moon-icon absolute right-0 top-0 flex items-center justify-center w-6 h-6 text-blue-400">
          <RiMoonClearLine />
        </div>
      </div>
    </div>
  );
};

export default DarkLightSwitch;