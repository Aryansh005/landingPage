import React,{ useEffect} from "react";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css"
import { Navbar } from "../navbar";

function HeroPanel() {
  useEffect(() => {
    Aos.init({
      delay:500,
duration:500
    });
  }, []);
  return (
    <>
      <Navbar/>
      <div className="heropanel h-[50vh] text-white lg:px-24 sm:px-4 pt-24 " data-aos="zoom-in">
      <div>
        <p className=" sm:text-2xl sm:text-center md:text-start md:text-3xl font-bold ">
          <i>FAST AND RELIABLE MOVING SOLUTIONS</i>
        </p>
        <p className=" md:w-1/2 mt-16  sm:text-center md:text-start sm:lg md:text-xl">
          We Cater To All Of Your Moving & Packaging Needs, Ensuring A
          Commitment Towards Fast, Reliable And 100% Delivery Assurance
        </p>
        </div>
      </div>
    </>
  );
}

export default HeroPanel;
