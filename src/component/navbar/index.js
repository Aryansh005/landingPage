import React, { useEffect, useState, useRef } from "react";
import Logo from "../../assest/azoozLogo.webp";
import "./style.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const crossRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleLinkClick = () => {
    handleClose();
  };

  const handleOutsideClick = (e) => {
    if (
      menuRef.current &&
      crossRef.current &&
      !menuRef.current.contains(e.target) &&
      !crossRef.current.contains(e.target)
    ) {
      handleClose();
    }
  };
  const handleScroll = () => {
    const scrollThreshold = 700;
    if (window.scrollY > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <header className="">
        <nav className={`${scrolled ? "scrolled" : ""}`}>
          <ul className="nav-bar text-white">
            <li className="logo">
              <div>
                <img className="w-[200px]" src={Logo} alt="logo" />
              </div>
            </li>
            <input
              type="checkbox"
              id="check"
              checked={isOpen}
              onChange={() => setIsOpen((prev) => !prev)}
              ref={crossRef}
            />
            <span
              className={`menu font-bold max-[768px]:text-white ${
                isOpen ? "open" : ""
              }`}
              ref={menuRef}
            >
              <li className="cursor-pointer">
                <p className="nav-link">Home</p>
              </li>

              <li className="cursor-pointer">
                <p>About</p>
              </li>
              <li className="cursor-pointer">
                <p>Contact</p>
              </li>
              <li className="cursor-pointer">
                <p>Service</p>
              </li>
              <label htmlFor="check" className="close-menu">
                <i className="fas fa-times"></i>
              </label>
            </span>
            <label htmlFor="check" className="open-menu">
              <i className="fas fa-bars"></i>
            </label>
            <div className="text-white sm:hidden md:block">
              <div className="flex justify-around gap-6">
                <p className="mt-2">
                  <FaFacebook size="25px" />
                </p>
                <p className="mt-2">
                  <FaTwitter size="25px" />
                </p>
                <p className="mt-2">
                  <FaInstagram size="25px" />
                </p>
                <p className="mt-2">
                  <ImLinkedin size="25px" />
                </p>
                <button className="font-bold bg-red-600 hover:bg-black text-white py-3 px-8 rounded-tl-md rounded-bl-2xl rounded-r-2xl ">
                  GET A QUOTE
                </button>
              </div>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};
