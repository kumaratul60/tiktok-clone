import React, { useRef, useState } from "react";
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSideBar/VideoSidebar";
import "./Video.css";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      {/* "loop" -> video play in loop one after one in loop one
    "control" -> for play or pouse the video like spotify music play-pouse system  so to remove control and we want to 
    tap on video and play-pouse so for this we use "useRef"   */}

      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
