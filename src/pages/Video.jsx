import React, { useContext } from "react";
import VideoCard from "../components/VideoCard.jsx";
import { AppContext } from "../context/AppContext.jsx";
// import Pagination from "react-bootstrap/Pagination";

const Video = () => {
  const { videoData1, setVideoData } = useContext(AppContext);
  console.log(videoData1);

  // let active = 1;
  // let items = [];
  // for (let number = 1; number <= 5; number++) {
  //   items.push(
  //     <Pagination.Item key={number} active={number === active}>
  //       {number}
  //     </Pagination.Item>
  //   );
  // }
  return (
    <div>
      <div className="d-flex flex-wrap gap-3 justify-content-center mt-5">
        {videoData1.map((videoData) => (
          <VideoCard
            videoData={videoData}
            setVideoData={setVideoData}
            key={videoData.id}
          />
        ))}
      </div>
      {/* <div>
        <Pagination>{items}</Pagination>
      </div> */}
    </div>
  );
};

export default Video;
