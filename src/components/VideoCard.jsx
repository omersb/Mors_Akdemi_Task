import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ videoDate }) => {
  //   console.log(videoDate);
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top rounded-circle mx-auto mt-3"
        style={{ width: "7rem", height: "7rem", objectFit: "cover" }}
        src={videoDate.userImg}
        alt="User İmg"
      />
      <div className="card-body mx-auto text-center">
        <h4 className="card-title">{videoDate.userName}</h4>
        <h5 className="card-text">{videoDate.videoTitle}</h5>
        <h5 className="card-text">{videoDate.time}</h5>
        <Link to="#" className="btn btn-primary">
          Onay Bekliyor
        </Link>
        <br />
        <Link to={videoDate.videoLink} className="btn btn-primary mt-2">
          Görüntüle
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
