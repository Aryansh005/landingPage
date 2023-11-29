import React from "react";
import "./styles.css"
import Process from "../../assest/stepper.webp";

function OurProcess() {
  return (
    <>
      <div className="mt-10">
        <p className=" font-bold sm:hidden md:block text-3xl tracking-wider text-blue-900 text-center">
          OUR PROCESS
        </p>
        <p className="font-bold text-4xl sm:hidden md:block text-red-600 tracking-wider text-center">
          WHAT WE CAN DO
        </p>
        <div className="w-[50%] mt-6 mx-auto sm:hidden md:block">
          <img src={Process} alt="process" />
        </div>
        <div className="md:px-20 md:flex md:justify-evenly md:flex-row sm:flex-col mt-16"> 
        <div className="deliveryBox md:w-[20rem] sm:mb-4 md:mb-0 h-[23vh] shadow-2xl flex justify-center items-center">
          <p className="font-bold text-3xl text-yellow-400 shadow-2xl mt-16">WE PACK</p>
        </div>
        <div className="deliver md:w-[20rem] h-[23vh] sm:mb-4 md:mb-0 shadow-2xl flex justify-center items-center">
          <p className="font-bold text-3xl text-yellow-400 shadow-2xl mt-16">WE MOVE</p>
        </div>
        <div className="deliver md:w-[20rem] h-[23vh] shadow-2xl flex justify-center items-center">
          <p className="font-bold text-3xl text-yellow-400 shadow-2xl mt-16">WE DELIVER</p>
        </div>
        </div>
      </div>
    </>
  );
}

export default OurProcess;
