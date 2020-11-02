import React from "react";
import Web from "../src/images/hero-img.png";
import "./Home.css";
import Comman from "./Common";

const About = () => {
  return (
    <>
      <Comman
        name="Welcome to About page"
        imgsrc={Web}
        visit="/contact"
        btn="Contact Now"
      />
    </>
  );
};

export default About;
