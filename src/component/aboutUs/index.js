import React,{ useEffect } from "react";
import Whatsapp from "../../assest/WhatsappLogo.webp";
import NoWeightLimit from "../../assest/noWeightLimit.webp";
import Men from "../../assest/deliverBoy.webp"
import Aos from "aos";
import 'aos/dist/aos.css';

function AboutUs() {
  useEffect(() => {
    Aos.init({
      delay:1000,
duration:500
    });
  }, []);
  return (
    <div className="sm:px-4 md:px-32 text-start">
      <div className="sm:text-2xl md:text-4xl sm:text-center md:text-start font-bold pl-6 pt-16 pb-12 tracking-wider">
        <p>
          WE CRETAE AN <span className="text-red-600">HONEST</span>,
          <span className="text-red-600">HASSLE-FREE</span> AND{" "}
          <span className="text-red-600">QUALITY DELIVERY EXPERIENCE</span>
        </p>
      </div>
      <div className="bg-yellow-400 sm:p-6 md:p-12 md:w-[60%] sm:text-center md:text-start rounded-lg rounded-bl-3xl relative">
      <img src={Men} className="sm:hidden absolute right-0 " width="500px" alt="deliveryMen"/>
        <p data-aos="zoom-in" className="text-black font-bold sm:text-xl md:text-3xl mb-1">About Us</p>
        <p data-aos="zoom-in" className="text-red-600 font-bold sm:text-2xl md:text-4xl mb-5">
          OMAN'S BEST LAST-MILE DELIVERY COMPANY
        </p>
        <p className="font-semibold mb-10" data-aos="fade-left">
          Our delivery management business is built on speed, security,
          reliability and accountability, the four great pillars of our success
          journey. We are serving a large permanent customer base in Oman
        </p>
        <div className="flex mb-12">
          <div className="mr-8" data-aos="fade-right">
            <img src={Whatsapp} width="80px" alt="whatsapp" />
          </div>
          <div>
            <p className="text-3xl font-bold" data-aos="zoom-in">WHATSAPP SUPPORT</p>
            <p>we are just a text away!</p>
          </div>
        </div>
        <div className="flex mb-12">
          <div className="mr-8" data-aos="fade-right">
            <img src={NoWeightLimit} width="90px" alt="whatsapp" />
          </div>
          <div>
            <p className="text-3xl font-bold" data-aos="zoom-in">NO WEIGHT LIMIT </p>
          </div>
        </div>
        <div className="flex justify-center">
        <div>
            <button className="font-bold bg-red-600 hover:bg-black text-white py-3 px-6 mt-12 rounded-tl-md rounded-bl-2xl rounded-r-2xl ">
              Contact Us Today
            </button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default AboutUs;
