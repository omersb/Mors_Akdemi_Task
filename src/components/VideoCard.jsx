import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { GoSearch } from "react-icons/go";
import { MdOutlineDone } from "react-icons/md";

const VideoCard = ({ videoData }) => {
  //   console.log(videoData);
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

        <button
          type="button"
          className="btn btn-primary mt-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <GoSearch className="me-2" />
          Görüntüle
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Video
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body ratio ratio-16x9">
                <iframe
                  src={videoData.videoLink}
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Onayla
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
