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
  FaRegThumbsUp,
} from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import thumbnail from "./thumbnail.jpg";
import { HiOutlineEye } from "react-icons/hi";
import { GiShare } from "react-icons/gi";
import { SiBitcoinsv } from "react-icons/si";
import { BsThreeDots } from "react-icons/bs";
import Download from "./icons/download";
import Clip from "./icons/Clip";
import Donate from "./icons/donate";
import Message from "./icons/message";
import Report from "./icons/report";
import Sort from "./icons/sort";
import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/outline";
import Cross from "./icons/cross";

const VideoPlayer = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [replyOpen, setReplyOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleDislike() {
    setDislikes(dislikes + 1);
  }
  function handleReply() {
    setReplyOpen(true);
  }
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  
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

        <div className=" w-full mt-8">
          <div className="flex items-center mb-4 ">
            <div>
              <div className="text-2xl font-bold tracking-wide">
                How I ve made millions with crypto
              </div>
            </div>
          </div>
          <div className="text-gray-400 text-md flex flex-row w-auto ">
            <div>
              <RxAvatar className="h-8 w-8" />
            </div>
            <div>
              <div className="flex flex-col text-md mx-3 text-gray-600 mt-1 font-medium">
                william doe
              </div>
              <button
                style={{
                  color: "#F2F4F7",
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  letterSpacing: "0.25 px",
                }}
                className={`${style.joinbg} mx-3 h-7 w-20 text-white border rounded-2xl `}
              >
                <p className="pr-1"> + Subscribe</p>
              </button>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="text-3xl  -mt-1">•</div>
              <div className="">
                <button
                  className={`${style.joinbg} w-20 h-7 text-center text-sm  mt-1  text-white border rounded-2xl `}
                >
                  Join
                </button>
              </div>
              <div className="text-3xl -mt-1">•</div>
              <div className="mt-1">168.5k Subscribers</div>
              <div className="text-3xl -mt-1">•</div>
            </div>
            <div className="flex flex-row mt-1 px-3">
              <HiOutlineEye className="w-8 h-6 mr-1" /> <p>20.1k viewers </p>{" "}
            </div>
            <div
              className={`flex flex-row px-3 ${style.btnbg} text-center w-20 text-sm text-white border h-8 rounded-2xl mx-3`}
            >
              <button>
                <FaRegThumbsUp className="w-8 h-5 pr-3 " />
              </button>
              <button>
                <FaRegThumbsDown className="w-8 h-5 pr-1 " />
              </button>
            </div>
            <div
              className={`flex flex-row px-1 ${style.btnbg} text-center w-20 text-sm h-8 text-white border rounded-2xl`}
            >
              <button>
                <GiShare className="w-8 h-5 " />{" "}
              </button>
              <p className="text-black pt-1 ">Share</p>
            </div>
            <div
              className={`flex flex-row px-1 ${style.btnbg} text-center w-22 text-sm text-white border rounded-2xl h-8  ml-3 pt-1`}
            >
              {" "}
              <SiBitcoinsv className="w-8 h-5 pr-1 " />
              <p className="pr-1">Donate</p>
            </div>
            <div className="relative">
              <div onClick={togglePopup} className="px-3">
                <BsThreeDots className="w-5 h-8 ml-1" />
              </div>
              {popupOpen && (
                <div className="absolute top-0 right-0 p-2 mt-12 bg-white w-32 border shadow-xl rounded-2xl z-99 ">
                  <div className="flex flex-col space-y-2 ">
                    <div className="px-2 flex text-sm font-gray-900">
                      <button className=" text-white  rounded-full h-4 w-8 px-2 pt-1">
                        <Download className="pl-3" />
                      </button>
                      <p className="">Download</p>
                    </div>
                    <div className="px-2 flex text-sm  font-gray-900">
                      <button className=" text-white  rounded-full h-4 w-7 px-2 pt-1">
                        <Clip />
                      </button>
                      <p className="pl-1">Clip</p>
                    </div>
                    <div className="px-2 flex text-sm font-gray-900">
                      <button className=" text-white  rounded-full h-4 w-7 px-2 pt-1">
                        <Donate />
                      </button>
                      <p className="pl-1">Donate</p>
                    </div>
                    <div className="px-2 flex text-sm font-gray-900">
                      <button className=" text-white  rounded-full h-4 w-7 px-2 pt-1">
                        <Message className="" />
                      </button>
                      <p className="pl-1">Message </p>
                    </div>
                    <div className="px-2 flex text-sm font-gray-900">
                      <button className=" text-white  rounded-full h-4 w-6 px-2 pt-1">
                        <Report />
                      </button>
                      <p className="pl-2" style={{ color: "#D60E21" }}>
                        Report
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className=" mt-4 border border-l-0 border-r-0 border-gray-300 py-3">
            <p style={{ color: "#868687" }} className="font-semibold text-sm">
              Uploaded on 4 Dec 2022
            </p>
            <p
              style={{
                color: "#868687",
                width: "694px",
                fontWeight: "400",
                fontSize: " 14px",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book....
            </p>
          </div>
          <div className="px-5 w-full pb-5">
            <div className="flex flex-row  justify-between my-4 text-gray-500 ">
              <div className="text-lg font-semibold">
                Comments<span> (12)</span>
              </div>
              <div className="flex flex-row space-x-2">
                <Sort />
                <span>Sort by </span>
              </div>
            </div>
            <div className="italic w-inherit mt-10">
              <input
                type="text"
                placeholder="Type in Your Comment"
                className="italic-placeholder w-full h-12"
              />
            </div>
            <style jsx>{`
              .italic-placeholder::placeholder {
                font-style: italic;
              }
            `}</style>
            <div className="flex justify-end flex-row space-x-2 pr-3">
              <button
                style={{ borderColor: "#0773B480" }}
                className="text-gray-500 border   px-4 py-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                style={{
                  borderColor: "#0773B4",
                  backgroundColor: " #0773B480",
                  opacity: "50%",
                }}
                className="text-gray-900 font-semibold border px-4 py-2 rounded-md"
              >
                Speak Freely!
              </button>
            </div>
            <div className="my-10">
              <div className="flex flex-row  space-x-4">
                <RxAvatar className="h-10 w-10" />
                <div className="flex flex-col space-y-1 w-full pr-52">
                  <div className="space-x-2 flex flex-row  pt-2 text-gray-500">
                    <span className="text-lg text-black font-semibold">
                      Maria Doe
                    </span>
                    <span className="text-xs center italic pl-1 py-2 ">
                      9:10 pm
                    </span>
                    <span className="text-xs center italic py-2 ">
                      (5 mins ago)
                    </span>
                  </div>
                  <div className=" text-gray-500">
                    This is so cool! I will also invest in cryptos.
                  </div>
                  <div className="flex flex-row space-x-5 pt-1">
                    <div onClick={handleReply} style={{ color: "#0773B4" }}>
                      Reply
                    </div>
                    <div style={{ display: "flex" }} onClick={handleLike}>
                      <FaRegThumbsUp
                        style={{ color: "#0773B4" }}
                        className="mt-1"
                      />
                      <span
                        style={{
                          color: "#0773B4",
                          width: "10px",
                          textAlign: "center",
                        }}
                        className="pl-1"
                      >
                        {likes > 0 && <span className="pl-1">{likes}</span>}
                      </span>
                    </div>
                    <div style={{ display: "flex" }} onClick={handleDislike}>
                      <FaRegThumbsDown
                        style={{ color: "#0773B4" }}
                        className="mt-1"
                      />
                      <span
                        style={{
                          color: "#0773B4",
                          width: "10px",
                          textAlign: "center",
                        }}
                        className="pl-1"
                      >
                        {dislikes > 0 && (
                          <span className="pl-1">{dislikes}</span>
                        )}
                      </span>
                    </div>
                  </div>
                  {replyOpen && (
                    <div className="flex flex-col w-full">
                      <div>
                        <input
                          type="text"
                          placeholder={`@Maria Doe Type your comment`}
                          className="w-full text-xs h-7 italic-placeholder"
                        />
                      </div>

                      <div className="flex flex-row justify-end space-x-4">
                        <button
                          style={{
                            borderColor: "#0773B4",
                            backgroundColor: " #0773B480",
                            opacity: "50%",
                          }}
                          className="text-gray-900 text-xs border  h-5 w-16 rounded-md"
                        >
                          Reply
                        </button>
                        <button onClick={() => setReplyOpen(false)}>
                          <Cross />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
           
            
              <div className="flex flex-row  space-x-4">
                <RxAvatar className="h-10 w-10" />
                <div className="flex flex-col space-y-1 w-full pr-52">
                  <div className="space-x-2 flex flex-row  pt-2 text-gray-500">
                    <span className="text-lg text-black font-semibold">
                      Maria Doe
                    </span>
                    <span className="text-xs center italic pl-1 py-2 ">
                      9:10 pm
                    </span>
                    <span className="text-xs center italic py-2 ">
                      (5 mins ago)
                    </span>
                  </div>
                  <div className=" text-gray-500">
                    This is so cool! I will also invest in cryptos.
                  </div>
                  <div className="flex flex-row space-x-5 pt-1">
                    <div onClick={handleReply} style={{ color: "#0773B4" }}>
                      Reply
                    </div>
                    <div style={{ display: "flex" }} onClick={handleLike}>
                      <FaRegThumbsUp
                        style={{ color: "#0773B4" }}
                        className="mt-1"
                      />
                      <span
                        style={{
                          color: "#0773B4",
                          width: "10px",
                          textAlign: "center",
                        }}
                        className="pl-1"
                      >
                        {likes > 0 && <span className="pl-1">{likes}</span>}
                      </span>
                    </div>
                    <div style={{ display: "flex" }} onClick={handleDislike}>
                      <FaRegThumbsDown
                        style={{ color: "#0773B4" }}
                        className="mt-1"
                      />
                      <span
                        style={{
                          color: "#0773B4",
                          width: "10px",
                          textAlign: "center",
                        }}
                        className="pl-1"
                      >
                        {dislikes > 0 && (
                          <span className="pl-1">{dislikes}</span>
                        )}
                      </span>
                    </div>
                  </div>
                  {replyOpen && (
                    <div className="flex flex-col w-full">
                      <div>
                        <input
                          type="text"
                          placeholder={`@Maria Doe Type your comment`}
                          className="w-full text-xs h-7 italic-placeholder"
                        />
                      </div>

                      <div className="flex flex-row justify-end space-x-4">
                        <button
                          style={{
                            borderColor: "#0773B4",
                            backgroundColor: " #0773B480",
                            opacity: "50%",
                          }}
                          className="text-gray-900 text-xs border  h-5 w-16 rounded-md"
                        >
                          Reply
                        </button>
                        <button onClick={() => setReplyOpen(false)}>
                          <Cross />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                </div>
            </div>
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
                <div className="text-xl  mt-2 w-52 font-semibold">
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
                <div className="text-xl  mt-2 w-52 font-semibold">
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
                <div className="text-xl  mt-2 w-52 font-semibold">
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
