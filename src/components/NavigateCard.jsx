import React from "react";
import { Link } from "react-router-dom";

const NavigateCard = ({ link }) => {
  return (
    <Link
      to={link.linkTo}
      className="card hover-overlay text-decoration-none"
      style={{ width: "15rem" }}
    >
      <img
        className="card-img-top rounded-circle mx-auto mt-3"
        style={{ width: "12rem", height: "12rem", objectFit: "cover" }}
        src={link.linkImg}
        alt="card"
      />
      <div className="card-body mx-auto">
        <h4 className="card-title text-black text-muted">
          {link.linkTitle}
        </h4>
      </div>
    </Link>
  );
};

export default NavigateCard;
