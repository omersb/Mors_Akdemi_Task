import React from "react";
import NavigateCard from "../components/NavigateCard";
import { navData } from "../helper/data.js";

const Home = () => {
  console.log(navData);
    return (
      <div className="d-flex flex-wrap gap-3">
        {navData.map((link) => (
          <NavigateCard link={link} key={link.id} />
        ))}
      </div>
    );
};

export default Home;
