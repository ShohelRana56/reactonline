import React from "react";
import Web from "../src/images/img2.svg";
import "./Home.css";
import Comman from "./Common";

const Home = () => {
  return (
    <>
      <Comman
        name="Grow your business with"
        imgsrc={Web}
        visit="/service"
        btn="Get Started"
      />
    </>
  );
};

export default Home;
