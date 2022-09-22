import React from "react";
import VideoCard from "../components/VideoCard.jsx";
import { videoData } from "../helper/data.js";

const Video = () => {
  console.log(videoData);
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center mt-3">
      {videoData.map((videoDate) => (
        <VideoCard videoDate={videoDate} key={videoDate.id} />
      ))}
    </div>
  );
};

export default Video;
