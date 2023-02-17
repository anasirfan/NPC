import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { BiHome } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineLiveTv } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import { FaRegHospital } from "react-icons/fa";
import { WiStars } from "react-icons/wi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BsController } from "react-icons/bs";
import { ImMusic } from 'react-icons/im';
import { RxCookie } from "react-icons/rx";
import { MdOutlineTheaterComedy } from "react-icons/md";
import { CiTrophy } from "react-icons/ci";
import { TfiStatsUp } from "react-icons/tfi";
import { TfiPencilAlt } from "react-icons/tfi";
import { FaPaw } from "react-icons/fa";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { BsCamera } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlineCardTravel } from "react-icons/md";


const Sidebar = () => {
  return (
   

    <div class="flex h-screen">
  <div class="  w-64">
    <div class="p-4">
      <div class="flex items-center mb-4">
        <AiOutlineMenu class="text-2xl"/>
      </div>
      <div class="flex flex-col">
        <div class="mb-4">
          <div class="flex items-center mb-2">
            <BiHome class="mr-2"/>
            <span class="font-medium">Home</span>
          </div>
          <div class="flex items-center mb-2">
            <AiOutlineFire class="mr-2"/>
            <span class="font-medium">Trending</span>
          </div>
          <div class="flex items-center">
            <MdOutlineLiveTv class="mr-2"/>
            <span class="font-medium">Live TV</span>
          </div>
        </div>
        <div class="mb-4">
          <div class="flex items-center mb-2">
            <IoMdNotificationsOutline class="mr-2"/>
            <span class="font-medium">Notifications</span>
          </div>
          <div class="flex items-center mb-2">
            <AiOutlinePlaySquare class="mr-2"/>
            <span class="font-medium">Videos</span>
          </div>
          <div class="flex items-center">
            <AiOutlineHistory class="mr-2"/>
            <span class="font-medium">History</span>
          </div>
        </div>
        <div class="mb-4">
          <div class="flex items-center mb-2">
            <FaRegHospital class="mr-2"/>
            <span class="font-medium">Health</span>
          </div>
          <div class="flex items-center mb-2">
            <WiStars class="mr-2"/>
            <span class="font-medium">Entertainment</span>
          </div>
          <div class="flex items-center mb-2">
            <MdOutlineBusinessCenter class="mr-2"/>
            <span class="font-medium">Business</span>
          </div>
          <div class="flex items-center mb-2">
            <BsController class="mr-2"/>
            <span class="font-medium">Gaming</span>
          </div>
          <div class="flex items-center mb-2">
            <ImMusic class="mr-2"/>
            <span class="font-medium">Music</span>
          </div>
          <div class="flex items-center mb-2">
            <RxCookie class="mr-2"/>
            <span class="font-medium">Food</span>
          </div>
          <div class="flex items-center mb-2">
            <MdOutlineTheaterComedy class="mr-2"/>
            <span class="font-medium">Comedy</span>
          </div>
          <div class="flex items-center mb-2">
            <CiTrophy class="mr-2"/>
            <span class="font-medium">Sports</span>
          </div>
          <div class="flex items-center mb-2">
            <TfiStatsUp class="mr-2"/>
            <span class="font-medium">News</span>
          </div>
          <div class="flex items-center mb-2">
            <TfiPencilAlt class="mr-2"/>
            <span class="font-medium">Politics</span>
          </div>
          <div class="flex items-center mb-2">
            </div>
         

            </div>
            </div>
            </div>
            </div>
            </div>
            

  )
}

export default Sidebar