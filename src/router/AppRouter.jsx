import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Karikatur from "../pages/Karikatur";
import Kompozisyon from "../pages/Kompozisyon";
import Resim from "../pages/Resim.jsx";
import Video from "../pages/Video";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resim" element={<Resim />} />
        <Route path="/video" element={<Video />} />
        <Route path="/kompozisyon" element={<Kompozisyon />} />
        <Route path="/karikatur" element={<Karikatur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
