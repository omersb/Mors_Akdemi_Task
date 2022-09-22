import React from "react";
import { Link } from "react-router-dom";

const NavigateCard = ({ link }) => {
  return (
    <Link
      to={link.linkTo}
      className="card hover-overlay"
      style={{ width: "15rem" }}
    >
      <img
        className="card-img-top rounded-circle mx-auto mt-3"
        style={{ width: "10rem", height: "10rem", objectFit: "cover" }}
        src={link.linkImg}
        alt="card"
      />
      <div className="card-body mx-auto ">
        <h5 className="card-title">{link.linkTitle}</h5>
      </div>
    </Link>
  );
};

export default NavigateCard;
