import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/MorsLogo.png";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark bg-primary navbar-expand-lg text-uppercase"
      style={{ height: "10vh" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img style={{ width: "12rem" }} src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" style={{ fontSize: "1.7rem" }}>
            <Link className="nav-link active" to="/resim">
              Resim
            </Link>
            <Link className="nav-link active" to="/video">
              Video
            </Link>
            <Link className="nav-link active" to="/karikatur">
              Karikatür
            </Link>
            <Link className="nav-link active" to="/kompozisyon">
              Kompozisyon
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
