import React from "react";
import AzoozLogo from "../../assest/azoozLogo.webp";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaMapPin } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";


function Footer() {
  return (
    <>
      <div className="bg-black text-white p-8 ">
        <div className=" flex justify-around ">
          <div>
            <img src={AzoozLogo} alt="logo" />
            <div className="flex justify-around mt-10">
            <p className=""><FaTwitter size="25px" /></p>
            <p><FaFacebook size="25px" /></p>
            <p><FaInstagram size="25px" /></p>
            <p><ImLinkedin size="25px" /></p>
            </div>
          </div>
          <div>
            <ul>
              <li className="mb-4 font-bold">Company</li>
              <li className="mb-2">Home</li>
              <li className="mb-2">About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-4 font-bold">Reach Out To us</li>
              <li className="mb-2 flex items-center gap-4">
                <FaMapPin /> PO BOX 84, Postal code 101, Sultanate of Oman.
              </li>
              <li className="mb-2 flex items-center gap-4"><IoIosMailOpen/> info@azoozexpress.com</li>
              <li className="mb-2 flex items-center gap-4"><MdOutlineWifiCalling3/> +968 22700 070</li>
              <li className="flex items-center gap-4"><IoLogoWhatsapp/> +968 9658 6404</li>
            </ul>
          </div>
          <div>
            <button className="font-bold bg-red-600 hover:bg-black text-white py-3 px-6 rounded-tl-md rounded-bl-2xl rounded-r-2xl ">
              GET A QUOTE
            </button>
          </div>
        </div>
          <div className="flex justify-evenly font-semibold mt-20">
            <p>Copyright © 2022 All Rights Reserved.</p>
            <p>Privacy Policy | Terms of Service </p>
          </div>
        <div className="text-center mt-8">
        <p>Website Designed & Developed By Fielmente.com</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
