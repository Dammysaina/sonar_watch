import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "../assets/images/homelogo.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-32 py-4 bg-[#F5F7FA] text-navText">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logoimage" style={{ width: "50px" }} className="cursor-pointer"/>
        </Link>
      </div>

      {/* menu*/}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>{" "}
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Features
          </Link>{" "}
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Contact
          </Link>{" "}
        </li>
        
      </ul>

      <div>
      <button className="bg-black text-white px-6 py-3 my-2 rounded-md">
          <Link to="contact" smooth={true} duration={500}>
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
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/*Social Menu */}
      
    </div>
  );
};

export default Navbar;