import { useState } from "react";
import Image from "next/image";
import styles from "./sidebar.module.css";
import style from "./videoplayer.module.css";

import {
  FaVolumeMute,
  FaVolumeUp,
  FaPlay,
  FaPause,
  FaExpand,
  FaCompress,
  FaRegThumbsDown,
  FaRegThumbsUp
} from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import thumbnail from "./thumbnail.jpg";
import { HiOutlineEye } from "react-icons/hi";
import { GiShare } from "react-icons/gi";
import { SiBitcoinsv } from "react-icons/si";
import { BsThreeDots } from "react-icons/bs";




const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    setIsMuted(false);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="container flex flex-row  max-w-screen-2xl pt-8 px-4">
      <div className="relative">
        <video
          src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          controls
          autoPlay
          muted={isMuted}
          volume={volume / 100}
          className={`w-full border rounded-lg ${
            isFullScreen ? "fixed inset-0 z-50" : "relative"
          }`}
        />
        
      

      <div className="mx-4 mt-8">
        <div className="flex items-center mb-4 ">
          <div>
            <div className="text-2xl font-bold tracking-wide">
              How I ve made millions with crypto
            </div>
          </div>
        </div>
        <div className="text-gray-400 text-md flex flex-row " >
          <div>
            <RxAvatar className="h-8 w-8"/>
          </div>
          <div className="text-md mx-3 font-medium">william doe</div>
          <div className="flex flex-row space-x-4">
          <div className="text-3xl -mt-2">•</div>
          <div className=""><button className={`${style.joinbg} w-20 h-7 text-center text-sm mb-1 text-white border rounded-2xl `}>
            Join</button></div>
               <div className="text-3xl -mt-2">•</div>
          <div>168.5k Subscribers</div>
             <div className="text-3xl -mt-2">•</div>
          </div>
          <div className="flex flex-row px-3"><HiOutlineEye className="w-8 h-6 mr-1"/> <p>20.1k</p></div>
          <div className={`flex flex-row px-3 ${style.btnbg} text-center w-20 text-sm text-white border rounded-2xl mx-3`}><button><FaRegThumbsUp className="w-8 h-5 pr-3 "/></button>
          <button><FaRegThumbsDown className="w-8 h-5 pr-1 "/></button>
          </div> 
          <div className={`flex flex-row px-1 ${style.btnbg} text-center w-20 text-sm text-white border rounded-2xl`}><button>
            <GiShare className="w-8 h-5 "/> </button><p className="text-black pt-1 ">Share</p></div>
         <div className={`flex flex-row px-1 ${style.btnbg} text-center w-20 text-sm text-white border rounded-2xl mx-3 pt-1`}>  <SiBitcoinsv className="w-8 h-5 "/>Donate</div>
          <div className="px-3"><BsThreeDots/></div>
          
          
        </div>
      </div>
      </div>
      <div className="px-10">
        <div className="w-52 flex flex-col">
          <div className="text-md font-sm font-semibold mb-4">
            Recommended Videos
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col bg-white rounded-md overflow-hidden shadow-md">
              <div className="relative w-full h-24 pb-9/16">
                <Image
                  src={thumbnail}
                  alt="video thumbnail"
                  layout="fill"
                  objectFit="cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-gray-900 opacity-75 hover:opacity-100 transition-opacity">
                  <FaPlay className="text-white text-3xl" />
                </button>
              </div>
              <div className="p-4 flex-grow">
                <div className="flex flex-row justify-between space-x-2 right-0">
                  <div className="text-sm font-medium  text-gray-500">
                    William doe
                  </div>
                  <div className="text-sm text-gray-500">
                    100 views • 2 days ago
                  </div>
                </div>
                <button
                  className={` ${styles.bluebg} text-white rounded-lg h-5 w-24 text-xs px-auto mt-2`}
                  onClick={() => {
                    // your backend logic for subscribing to the video
                    console.log("Subscribed!");
                  }}
                >
                  Subscribe
                </button>
                <div className="text-xl font-medium mt-2 w-52 font-semibold">
                  Build your first UX UI design
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-md overflow-hidden shadow-md">
              <div className="relative w-full h-24 pb-9/16">
                <Image
                  src={thumbnail}
                  alt="video thumbnail"
                  layout="fill"
                  objectFit="cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-gray-900 opacity-75 hover:opacity-100 transition-opacity">
                  <FaPlay className="text-white text-3xl" />
                </button>
              </div>
              <div className="p-4 flex-grow">
                <div className="flex flex-row justify-between space-x-2 right-0">
                  <div className="text-sm font-medium  text-gray-500">
                    William doe
                  </div>
                  <div className="text-sm text-gray-500">
                    100 views • 2 days ago
                  </div>
                </div>
                <button
                  className={` ${styles.bluebg} text-white rounded-lg h-5 w-24 text-xs px-auto mt-2`}
                  onClick={() => {
                    // your backend logic for subscribing to the video
                    console.log("Subscribed!");
                  }}
                >
                  Subscribe
                </button>
                <div className="text-xl font-medium mt-2 w-52 font-semibold">
                  Build your first UX UI design
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-md overflow-hidden shadow-md">
              <div className="relative w-full h-24 pb-9/16">
                <Image
                  src={thumbnail}
                  alt="video thumbnail"
                  layout="fill"
                  objectFit="cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-gray-900 opacity-75 hover:opacity-100 transition-opacity">
                  <FaPlay className="text-white text-3xl" />
                </button>
              </div>
              <div className="p-4 flex-grow">
                <div className="flex flex-row justify-between space-x-2 right-0">
                  <div className="text-sm font-medium  text-gray-500">
                    William doe
                  </div>
                  <div className="text-sm text-gray-500">
                    100 views • 2 days ago
                  </div>
                </div>
                <button
                  className={` ${styles.bluebg} text-white rounded-lg h-5 w-24 text-xs px-auto mt-2`}
                  onClick={() => {
                    // your backend logic for subscribing to the video
                    console.log("Subscribed!");
                  }}
                >
                  Subscribe
                </button>
                <div className="text-xl font-medium mt-2 w-52 font-semibold">
                  Build your first UX UI design
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
