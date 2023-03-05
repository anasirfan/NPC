import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";
import styles from "./profile-icon.module.css";
import profilePic from "./profilepic1.jpg";
import { SlEnergy } from "react-icons/sl";
AiOutlineUserSwitch
import { BiHome } from 'react-icons/bi';
import { AiOutlineFire, AiOutlineUserSwitch, AiOutlineHistory } from 'react-icons/ai';
import { MdOutlineLiveTv , MdOutlineLiveHelp} from 'react-icons/md';
import { BsSaveFill } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im';
import { FaSignOutAlt } from 'react-icons/fa';
import { SiBitcoinsv } from 'react-icons/si';


const ProfileIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // assuming user is not logged in by default

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    // handle login click here, e.g. redirect to login page
  };

  const handleSignupClick = () => {
    // handle signup click here, e.g. redirect to signup page
  };

  return (
    <div className="relative mr-18">
      {isLoggedIn ? (
        <button className="rounded-full bg-gray-200" onClick={handleIconClick}>
          {" "}
          <Image
            src={profilePic}
            alt="profile picture"
            width={100}
            height={100}
            className=" w-8 h-7 rounded-full"
          />
        </button>
      ) : (
        <div>
          <button
            className="rounded-full bg-gray-200"
            onClick={handleIconClick}
          >
            <RxAvatar className="w-8 h-8 rounded-full" />
          </button>
        </div>
      )}

      {isOpen && (
        <div className="absolute top-10 right-0 w-62 bg-white rounded-lg shadow-md py-4 ">
          <div className="flex items-center flex-col">
            {isLoggedIn ? (
              <>
                <div className="pr-6 mx-3">
                  <div className="flex flex-row ">
                    <Image
                      src={profilePic}
                      alt="profile picture"
                      width={100}
                      height={100}
                      className=" w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col text-sm text-center">
                      <div className="text-gray-900 font-semibold">
                        Jackie Doe
                      </div>
                      <div className="text-gray-500 pl-7 font-semibold">
                        @jackie_9024_1a
                      </div>
                    </div>
                  </div>

                  <div className="pl-4 w-60 text-gray-400 pt-8">
                  <div className="flex flex-row   space-x-4">
                   <SlEnergy className="w-6 h-6 "/>
                   <div className="w-full text-sm  "> Enable Faster Login</div>
                  </div>
                  <div className="flex flex-row pt-2 space-x-4">
                   <AiOutlineUserSwitch className="w-6 h-6 "/>
                   <div className="w-full text-sm  "> Switch Account</div>
                  </div>
                  <div className="flex flex-row pt-2 space-x-4">
                   <BiHome className="w-6 h-6 "/>
                   <div className="w-full text-sm  "> Dashboard</div>
                  </div>
                  <div className="flex flex-row pt-2 space-x-4">
                   <AiOutlineFire className="w-6 h-6 "/>
                   <div className="w-full text-sm  "> Analystics</div>
                  </div>
                  <div className="flex flex-row pt-2 space-x-4">
                   <MdOutlineLiveTv className="w-6 h-6 "/>
                   <div className="w-full text-sm  "> Channel</div>
                  </div>
                  <div className="flex flex-row pt-6 space-x-4">
                   <AiOutlineHistory className="w-6 h-6 "/>
                   <div className="w-full text-sm  "> Earnings</div>
                  </div>
                  <div className="flex flex-row pt-2 space-x-4">
                   <ImProfile className="w-6 h-6 "/>
                   <div className="w-full text-sm  "> Purchases and memberships</div>
                  </div>
                  <div className="flex flex-row pt-2 space-x-4">
                   <SiBitcoinsv className="w-6 h-6 "/>
                   <div className="w-full text-sm  ">Top up Donation tokens</div>
                  </div>
                  <div className="flex flex-row pt-2 space-x-4">
                   <BsSaveFill className="w-6 h-6 "/>
                   <div className="w-full text-sm  ">Your saved data</div>
                  </div>
                  <div className="flex flex-row pt-2 space-x-4">
                   <MdOutlineLiveHelp className="w-6 h-6 "/>
                   <div className="w-full text-sm pb-6 ">Help</div>
                  </div>
                  <div className="flex flex-row pt-2 space-x-4">
                   <FaSignOutAlt className="w-6 h-6 "/>
                   <div className="w-full text-sm  ">Sign out</div>
                  </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <RxAvatar className="w-10 h-10 rounded-full  mb-2" />
                <div className="flex flex-col my-2">
                  <div className="text-gray-900 text-sm text-center items-center font-semibold mb-3">
                    Already have a account?
                    <button
                      className={`bg-blue-500 ${styles.bluebg}  hover:bg-blue-500  text-white py-1 w-20 h-10 rounded-lg mt-2 mr-2`}
                      onClick={handleLoginClick}
                    >
                      Sign in
                    </button>
                  </div>
                  <div class="border-t mt-1 mb-1 border-gray-300"></div>
                  <div></div>
                  <p className="text-center font-bold">OR</p>
                  <div class="border-t mt-1 mb-3 border-gray-300"></div>
                  <div></div>

                  <div className="text-gray-900 text-sm items-center text-center font-semibold mb-1">
                    Create a new Account
                    <button
                      className={` ${styles.bluebg}   hover:bg-blue-500 text-white py-1 w-20 h-10 rounded-lg mt-2 mr-2`}
                      onClick={handleLoginClick}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
