// Step 1: Import the necessary modules
import { useState } from 'react';
import Image from 'next/image';
import { FaVolumeMute, FaVolumeUp, FaPlay, FaPause, FaExpand, FaCompress } from 'react-icons/fa';
import { RxAvatar } from "react-icons/rx";
import styles from "./videoplayer.module.css";
import videoPlayerStyles from './videoPlayer.module.css';
import thumbnail from "../thumbnail.png";


  

// Step 2: Define the VideoPlayer component
const VideoPlayer = () => {
  // Step 3: Define the state variables
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Step 4: Define the event handlers
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

  // Step 5: Define the JSX
  return (
    <div className="video-player-container">
      <video
        src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
        controls
        autoPlay
        muted={isMuted}
        volume={volume / 100}
        className={`video-player ${isFullScreen ? 'fullscreen' : ''}`}
      />

      <div className="video-controls">
        <div className="video-buttons">
          <button className="play-pause-button" onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <div className="volume-control">
            <button className="mute-button" onClick={toggleMute}>
              {isMuted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>

            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>

          <button className="fullscreen-button" onClick={toggleFullScreen}>
            {isFullScreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>

        <div className="video-subtitles">
          <span>Subtitles</span>
          <select>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
      <div className="video-player-container">
  <div className="video-player">
    {/* <!-- Video Player UI and controls --> */}
  </div>
  <div className={videoPlayerStyles.container}>
        <div className={videoPlayerStyles.video}>
          {/* Video player component */}
        </div>
        <div className={videoPlayerStyles.videoDesc}>
          {/* Video title, user profile, date, views, like/dislike and share button */}
          <div className={videoPlayerStyles.title}>
            <h1>Video Title</h1>
          </div>
          <div className={videoPlayerStyles.userActions}>
            {/* User profile, date, views, like/dislike and share button */}
          </div>
          <div className={videoPlayerStyles.description}>
            {/* Video description */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={videoPlayerStyles.comments}>
            {/* Comments section */}
          </div>
        </div>
        <div className={videoPlayerStyles.recommendedVideos}>
          <h2>Recommended videos</h2>
          <div className={videoPlayerStyles.videoList}>
            <div className={videoPlayerStyles.videoItem}>
              <Image src={thumbnail} alt="video thumbnail" width={200} height={100} />
              <div className={videoPlayerStyles.videoInfo}>
                <div className={videoPlayerStyles.videoTitle}>Video Title</div>
                <div className={videoPlayerStyles.userInfo}>User Name &#8226; 100 views</div>
              </div>
            </div>
            {/* Add three more video items like the one above */}
          </div>
        </div>
      </div>

  <div className="videoDesc">
  <h1>Title of Video</h1>
  <div className="videoDetails">
    <div className="user-info">
      <p>Username</p>
      <p>Date</p>
      <p>Views</p>
    </div>
    <div className="video-actions">
      <button className="like">Like</button>
      <button className="dislike">Dislike</button>
      <button className="share">Share</button>
    </div>
  </div>
  <p>Description of the video.</p>
</div>

<div className="videoComments">
  <h2>Comments</h2>
  <div className="comment">
    <div className="commentHeader">
      <div className="user-info">
        <p>Username</p>
        <p>Date</p>
      </div>
      <div className="comment-actions">
        <button className="like">Like</button>
        <button className="dislike">Dislike</button>
        <button className="reply">Reply</button>
      </div>
    </div>
    <p>Comment text.</p>
    <div className="commentReplies">
      <div className="comment">
        <div className="commentHeader">
          <div className="user-info">
            <p>Username</p>
            <p>Date</p>
          </div>
          <div className="comment-actions">
            <button className="like">Like</button>
            <button className="dislike">Dislike</button>
            <button className="reply">Reply</button>
          </div>
        </div>
        <p>Reply text.</p>
      </div>
    </div>
  </div>
    </div>

</div>

</div>
  );
};

export default VideoPlayer;
