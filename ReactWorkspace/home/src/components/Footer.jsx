import React from "react";
import Logo from "../assets/images/homelogo.svg";
import { Link } from "react-scroll";
import Instagram from "../assets/images/instagram.svg";
import Twitter from "../assets/images/twitter.svg";
import Arrow from "../assets/images/arrowsearch.svg";

const Footer = () => {
  return (
    <div className="flex justify-between bg-black px-32 py-10">
      <div className="text-white">
        <Link to="home">
          <img
            src={Logo}
            alt="Logoimage"
            style={{ width: "50px" }}
            className="cursor-pointer"
          />
        </Link>
        <p className="pt-4">Copyright © 2024 Home</p>
        <p className="pt-4">All rights reserved </p>

        <div className="flex justify-between mt-6">
          <img
            src={Instagram}
            alt="Instagram"
            className="bg-[#535353] rounded-3xl p-3 "
          />
          <img
            src={Twitter}
            alt="Twitter"
            className="bg-[#535353] rounded-3xl p-3 "
          />
          <img
            src={Twitter}
            alt="Twitter"
            className="bg-[#535353] rounded-3xl p-3 "
          />
        </div>
      </div>
      <div className="flex">
        <div className="text-white w-32 ">
          <h4 className="text-xl font-medium pb-4">About</h4>
          <p className="text-sm font-extralight pb-4">About </p>
          <p className="text-sm font-extralight pb-4">Benefit</p>
          <p className="text-sm font-extralight pb-4">Project</p>
        </div>
        <div className="text-white w-32">
          <h4 className="text-xl font-medium pb-4">Info</h4>
          <p className="text-sm font-extralight pb-4">Blog</p>
          <p className="text-sm font-extralight pb-4">Contact</p>
          <p className="text-sm font-extralight pb-4">Fact</p>
        </div>
        <div className="text-white">
          <h4 className="text-xl font-medium pb-4">Stay up to date</h4>
          {/* <div className="bg-searchIcon rounded-md flex items-center w-full max-w-xl mr-4 p-2 shadow-sm focus:ring-2 focus:ring-green-700 focus:outline-none">
            <input
              type="search"
              name=""
              id=""
              placeholder="Your email address"
              className="w-44 pl-3 text-sm outline-none rounded-sm focus:outline-none bg-[#535353]"
            />
            <img src={Arrow} alt="searchicon" />
          </div> */}
          <div className="relative w-full max-w-xl mr-4">
            <input
              type="search"
              name=""
              id=""
              placeholder="Your email address"
              className="w-full pl-3 pr-10 py-2 text-sm outline-none rounded-md focus:ring-2 focus:ring-[#D9DBE1] bg-[#535353] text-white"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <img src={Arrow} alt="searchicon" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
