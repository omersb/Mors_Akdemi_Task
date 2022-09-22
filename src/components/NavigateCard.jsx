import React from "react";

const NavigateCard = ({ link }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top rounded-circle mx-auto mt-3"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
        src={link.linkImg}
        alt="Card image cap"
      />
      <div className="card-body mx-auto">
        <h5 className="card-title">{link.linkTitle}</h5>
      </div>
    </div>
  );
};

export default NavigateCard;
