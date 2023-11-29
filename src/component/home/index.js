import React from "react";
import Footer from "../footer";
import Contact from "../contactUs";
import Delivery from "../delivery";
import OneStopSolution from "../oneStopSolution";
import Navbar from "../navbar";
import AboutUs from "../aboutUs";
import OurProcess from "../ourProcess";
import OurService from "../ourServices";

function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <AboutUs/>
    <OurProcess/>
    <OurService/>
    <OneStopSolution/>
      <Delivery />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
