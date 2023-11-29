import React from "react";
import Aeroplane from "../../assest/aeroPlane.webp";
function Delivery() {
  return (
    <div className="bg-yellow-400">
      <div className="sm:p-4 md:w-[80%] mx-auto flex justify-between">
        <div className="flex flex-col justify-center items-center">
          <p className="text-red-600 sm:text-xl md:text-3xl font-bold tracking-wide">
            WE VALUE YOUR PACKAGES AS MUCH AS YOU DO
          </p>
          <p className="text-black">
            Packages are sensitive and moving them is tiring, so we take care of
            them for you.
          </p>
          <div className="sm:mb-12">
            <button className="font-bold bg-red-600 hover:bg-black text-white py-3 px-6 mt-12 rounded-tl-md rounded-bl-2xl rounded-r-2xl ">
              GET DELIVERY TODAY
            </button>
          </div>
        </div>
        <div className="sm:hidden md:block py-4 w-[40%]">
          <img className="w-fit" src={Aeroplane} alt="aeroplane" />
        </div>
      </div>
    </div>
  );
}

export default Delivery;
