import React from "react";
import HomeIcon from "../assets/images/home.svg";
import { HiOutlinePlusSm } from "react-icons/hi";
import GrayAddress from "../assets/images/grayaddress.svg";
import Api from "../assets/images/api.svg";
import BugReport from "../assets/images/bug.svg";
import RequestFeature from "../assets/images/request.svg";
import Settings from "../assets/images/settings.svg";
import Download from "../assets/images/download.svg";
import "../assets/css/styles.css";
import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <div className="w-[18rem] h-screen fixed items-center pt-20 border-r-2 border-customGray">
      <div className="border-b-2 pl-4 border-customGray">
        {/* <Link to="work"> */}
        <button className="group text-black px-14 py-2 mb-2 rounded-lg flex items-center bg-customGray">
          Add an address
          <span>
            <HiOutlinePlusSm className="ml-3" />
          </span>
        </button>
        {/* </Link> */}
      </div>

      <div className="text-left sm:text-center lg:text-left">
        <Link to="home">
          <button className="flex my-4 items-center font-medium focus:outline-none focus:bg focus:bg-violet-300">
            <span className="mr-2">
              <img src={HomeIcon} alt="homeicon" className="w-5 h-5" />
            </span>
            Discover Protocols
          </button>
        </Link>

        <Link to="table">
          <button className="mb-4 text-black flex items-center font-medium text-base ">
            <span className="mr-2">
              <img src={HomeIcon} alt="homeicon" className="w-5 h-5" />
            </span>
            Home
          </button>
        </Link>
        <Link>
          <button className="mb-4 text-black flex items-center font-medium text-base ">
            <span className="mr-2">
              <img src={GrayAddress} alt="homeicon" className="w-5 h-5" />
            </span>
            Address
          </button>
        </Link>
      </div>

      <div className="mt-120">
        <ul className="text-left sm:text-center lg:text-left">
          <li className="mb-4 text-black flex items-center font-medium text-base ">
            <span className="mr-4">
              <img src={Api} alt="homeicon" className="w-5" />
            </span>
            API
            <span className="ml-2">
              <img src={Download} alt="download" className="w-3" />
            </span>
          </li>
          <li className="mb-4 text-black flex items-center font-medium text-base ">
            <span className="mr-4">
              <img src={BugReport} alt="homeicon" className="w-5" />
            </span>
            Bug Report
            <span className="ml-2">
              <img src={Download} alt="download" className="w-3" />
            </span>
          </li>
          <li className="mb-4 text-black flex items-center font-medium text-base ">
            <span className="mr-4">
              <img src={RequestFeature} alt="homeicon" className="w-5" />
            </span>
            Request Feature
            <span className="ml-2">
              <img src={Download} alt="download" className="w-3" />
            </span>
          </li>
          <li className="mb-4 text-black flex items-center font-medium text-base ">
            <span className="mr-4">
              <img src={Settings} alt="homeicon" className="w-5" />
            </span>
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
