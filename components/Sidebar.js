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
    <div>
      <div><AiOutlineMenu/></div>
      <div>
        <div>
          <div><BiHome/></div>
          <div><AiOutlineFire/></div>
          <div><MdOutlineLiveTv/></div>
        </div>
        <div>
          <div><IoMdNotificationsOutline/></div>
          <div><AiOutlinePlaySquare/></div>
          <div><AiOutlineHistory/></div>
        </div>
        <div>
          <div><FaRegHospital/></div>
          <div><WiStars/></div>
          <div><MdOutlineBusinessCenter/></div>
          <div><BsController/></div>
          <div><ImMusic/></div>
          <div><RxCookie/></div>
          <div><MdOutlineTheaterComedy/></div>
          <div><CiTrophy/></div>
          <div><TfiStatsUp/></div>
          <div><TfiPencilAlt/></div>
          <div><FaPaw/></div>
          <div><AiOutlineVideoCamera/></div>
          <div><BsCamera/></div>
          <div><AiOutlineCar/></div>
          <div><MdOutlineCardTravel/></div>
          
        </div>
      
      </div>
    </div>
  )
}

export default Sidebar