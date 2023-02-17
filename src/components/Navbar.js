import React from "react";
import { RiGooglePlayLine } from "react-icons/ri";
import { DarkLightSwitch } from "../components/NavbarComp/DarkLightSwitch";
import Notification from "../components/NavbarComp/Notification";
import Profileicon from "../components/NavbarComp/Profileicon";
import Searchbar from "../components/NavbarComp/Searchbar";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    // <div className="absolute  left-10 top-5">
    //   <nav className=" shadow-sm fixed w-full z-10">
    //   <div className="w-full">
    //     <div>
    //       <RiGooglePlayLine/>
    //       <Searchbar />
    //         <div>
    //         <DarkLightSwitch /> 
    //         <Notification />
    //         <Profileicon />
    //         </div>
    //       </div>  
    //     </div>
    //   </nav>    
    // </div>  
    <div class="flex items-center justify-between bg-white fixed w-full top-0">
      <div class="flex items-center ml-4">
        <RiGooglePlayLine class="w-8 h-8"/>
      </div>
      <div class="flex items-center justify-center  flex-grow h-15">
       
        
    <div class="py-1 px-1 flex flex-row ">
      <input type="text" placeholder="Search" class="px-6 rounded-l-xl w-80 h-9 .placeholder-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"/>
      
      <div className="bg-blue-600 w-15 h-9 rounded-r-xl px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"><CiSearch class="w-6 h-5 mr-2"/></div>
    </div>
    </div>
    <div class="flex items-center mr-4">
      <DarkLightSwitch class="mr-4" />
      <Notification class="w-8 h-8" />
      <div class="ml-4">
        <button class="bg-gray-800 rounded-full p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          <img class="h-6 w-6 rounded-full" src="E:\NPC-dev\src\images" alt="Profile Icon"/>
        </button>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
