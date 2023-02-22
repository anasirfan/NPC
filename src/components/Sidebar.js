//h-37px py-4 px-4
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiHome } from 'react-icons/bi';
import { AiOutlineFire } from 'react-icons/ai';
import { MdOutlineLiveTv } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { AiOutlineHistory } from 'react-icons/ai';
import { FaRegHospital } from 'react-icons/fa';
import { WiStars } from 'react-icons/wi';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { BsController } from 'react-icons/bs';
import { ImMusic } from 'react-icons/im';
import { MdOutlineTheaterComedy } from 'react-icons/md';
import { CiTrophy } from 'react-icons/ci';
import { TfiStatsUp } from 'react-icons/tfi';
import { TfiPencilAlt } from 'react-icons/tfi';
import { FaPaw } from 'react-icons/fa';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { BsCamera } from 'react-icons/bs';
import { AiOutlineCar } from 'react-icons/ai';
import { MdOutlineCardTravel } from 'react-icons/md';
import styles from './sidebar.module.css';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    
      <div className="sidebar-container h-37px py-4 px-4">
        <div className="menu-icon " onClick={toggleSidebar}>
          <AiOutlineMenu size={23} style={{ marginBottom: '50px' }} />
        </div>
        <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
          <div className="sidebar-icons  mb-2">
            <BiHome size={23} style={{ marginRight: '10px' }} />
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {isOpen && 'Home'}
            </span>
          </div>
          <div className="sidebar-icons mb-2">
            <AiOutlineFire size={23} style={{ marginRight: '10px' }} />
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {isOpen && 'Trending'}
            </span>
          </div>
          <div className="sidebar-icons mb-2">
            <MdOutlineLiveTv size={23} style={{ marginRight: '10px' , marginBottom: '20px' }} />
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                opacity: isOpen ? '1' : '0',
                
              }}
            >
              Live TV
            </span>

        <div className="sidebar-icons mb-2">
          <IoMdNotificationsOutline size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && 'Notifications'}
          </span>
        </div>
        <div className="sidebar-icons mb-2">
          <AiOutlinePlaySquare size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && 'Videos'}
          </span>
        </div>
        <div className="sidebar-icons mb-2">
          <AiOutlineHistory size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' , marginBottom: '40px' }}>
            {isOpen && 'History'}
          </span>
        </div>
        <div className="sidebar-icons mb-2">
          <FaRegHospital size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && 'Notifications'}
          </span>
        </div>
        <div className="sidebar-icons mb-2">
          <WiStars size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && 'Favorites'}
          </span>
        </div>
        <div className="sidebar-icons mb-2">
          <MdOutlineBusinessCenter size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && 'Business'}</span>
        </div>
        <div className="sidebar-icons mb-2">
          <BsController size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && 'Games'}</span>
        </div>
        <div className="sidebar-icons mb-2">
          <ImMusic size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && 'Music'}</span>
        </div>
        <div className="sidebar-icons mb-2">
          <MdOutlineTheaterComedy size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && 'Movies'}</span>
        </div>
        <div className="sidebar-icons mb-2">
          <CiTrophy size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && 'Sports'}</span>
        </div>
        <div className="sidebar-icons mb-2">
          <TfiStatsUp size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && 'Learning'}</span>
        </div>
        <div className="sidebar-icons mb-2">
          <TfiPencilAlt size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && 'Create'}</span>
        </div>
        <div className="sidebar-icons mb-2">
          <FaPaw size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && 'Animals'}</span>
        </div>
        <div className="sidebar-icons mb-2">
          <AiOutlineVideoCamera size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && 'Shorts'}</span>
        </div>
        <div className="sidebar-icons mb-2">
          <BsCamera size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && '360° Video'}</span>
        </div>
        <div className="sidebar-icons mb-2">
          <AiOutlineCar size={23} style={{ marginRight: '10px' }}/>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {isOpen && 'Automotive'}</span>
        </div>
        <div className="sidebar-icons mb-2">
          <MdOutlineCardTravel size={23} style={{ marginRight: '10px' }}/>
          <span
              style={{
                display: 'flex',
                alignItems: 'center',
                opacity: isOpen ? '1' : '0',
                transition: 'opacity 0.3s ease-in-out',
              }}
            >
            {isOpen && 'Travel'}</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;