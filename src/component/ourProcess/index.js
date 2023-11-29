import React from "react";
import "./styles.css"
import Process from "../../assest/stepper.webp";

function OurProcess() {
  return (
    <>
      <div className="mt-10">
        <p className=" font-bold text-3xl tracking-wider text-blue-900 text-center">
          OUR PROCESS
        </p>
        <p className="font-bold text-4xl text-red-600 tracking-wider text-center">
          WHAT WE CAN DO
        </p>
        <div className="w-[50%] mt-6 mx-auto">
          <img src={Process} alt="process" />
        </div>
        <div className="px-20 flex justify-evenly mt-16"> 
        <div className="deliveryBox w-[20rem] h-[23vh] shadow-2xl flex justify-center items-center">
          <p className="font-bold text-3xl text-yellow-400 shadow-2xl mt-16">WE PACK</p>
        </div>
        <div className="deliver w-[20rem] h-[23vh] shadow-2xl flex justify-center items-center">
          <p className="font-bold text-3xl text-yellow-400 shadow-2xl mt-16">WE MOVE</p>
        </div>
        <div className="deliver w-[20rem] h-[23vh] shadow-2xl flex justify-center items-center">
          <p className="font-bold text-3xl text-yellow-400 shadow-2xl mt-16">WE DELIVER</p>
        </div>
        </div>
      </div>
    </>
  );
}

export default OurProcess;
