import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { GoSearch } from "react-icons/go";
import { MdOutlineDone } from "react-icons/md";
import { Button } from "react-bootstrap";

const VideoCard = ({ videoData, setVideoData }) => {
  console.log(videoData);
  const handleClick = () => {
    setVideoData(...videoData, (videoData.isOkey = true));
  };
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top rounded-circle mx-auto mt-3"
        style={{ width: "7rem", height: "7rem", objectFit: "cover" }}
        src={videoData.userImg}
        alt="User İmg"
      />
      <div className="card-body mx-auto text-center">
        <h4 className="card-title">{videoData.userName}</h4>
        <h5 className="card-text">{videoData.videoTitle}</h5>
        <h5 className="card-text">{videoData.time}</h5>
        <div
          className="btn p-1 text-white"
          style={{ backgroundColor: videoData.isOkey ? "green" : "gray" }}
        >
          {videoData.isOkey ? "Onaylandı" : "Onay Bekliyor"}
        </div>
        <br />
        {videoData.isOkey ? (
          <MdOutlineDone className="me-2" style={{ fontSize: "1.5rem" }} />
        ) : (
          <CgClose className="me-2" tyle={{ fontSize: "1.5rem" }} />
        )}

        <IoTrashOutline className="me-2" tyle={{ fontSize: "1.5rem" }} />

        <Button
          type="button"
          className="btn btn-primary mt-2"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal${videoData.id}`}
        >
          <GoSearch className="me-2" />
          Görüntüle
        </Button>

        <div
          className="modal fade"
          id={`exampleModal${videoData.id}`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Video
                </h5>
                <Button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></Button>
              </div>
              <div className="modal-body ratio ratio-16x9">
                <iframe
                  src={videoData.videoLink}
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="modal-footer">
                <Button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </Button>
                <Button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleClick}
                >
                  Onayla
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
