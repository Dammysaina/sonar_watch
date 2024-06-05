import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "../assets/images/homelogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-32 py-4 bg-[#F5F7FA] text-navText">
      <div>
        <Link to="home" >
          <img src={Logo} alt="Logoimage" style={{ width: "50px" }} className="cursor-pointer"/>
        </Link>
      </div>

      {/* menu*/}
      <ul className="hidden md:flex">
        <li>
          <Link to="Home" >
            Home
          </Link>
        </li>
        <li>
          <Link to="About" >
            About
          </Link>{" "}
        </li>
        <li>
          <Link to="" >
            Features
          </Link>{" "}
        </li>
        <li>
          <Link to="Contact" >
            Contact
          </Link>{" "}
        </li>
        
      </ul>

      <div>
      <button className="bg-black text-white px-6 py-3 my-2 rounded-md">
          <Link to="contact" >
            Download
          </Link>{" "}
        </button>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!Nav ? <FaBars className="bg-[#e3e5e9]" /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !Nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#F5F7FA] flex flex-col justify-center items-center"
        }
      >
        <li  className="py-6 text-4xl">
          <Link onClick={handleClick} to="Home" >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="About" >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" >
            Features
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="Contact" >
            Contact
          </Link>
        </li>
      </ul>
      {/*Social Menu */}
      
    </div>
  );
};

export default Navbar;