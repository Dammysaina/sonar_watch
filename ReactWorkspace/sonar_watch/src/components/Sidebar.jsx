import React from "react";
import HomeIcon from "../assets/images/home.svg";
import { HiOutlinePlusSm } from "react-icons/hi";
import GrayAddress from "../assets/images/grayaddress.svg";
import Api from "../assets/images/api.svg"
import BugReport from "../assets/images/bug.svg";
import RequestFeature from "../assets/images/request.svg";
import Settings from "../assets/images/settings.svg"


const Sidebar = () => {
  return (
    <div className="w-64 h-screen items-center pt-24 border-r-2 border-customGray">
      <div>
        {/* <Link to="work"> */}
        <button className="group text-black border-2 px-8 py-2 my-2 mx-4 rounded-lg flex items-center bg-customGray">
          Add an address
          <span>
            <HiOutlinePlusSm className="ml-3" />
          </span>
        </button>
        {/* </Link> */}
      </div>
      <div>
        <ul className="text-left sm:text-center lg:text-left">
          <li className="mb-4 text-black flex items-center font-medium text-base ">
            <span className="mr-2">
              <img src={HomeIcon} alt="homeicon" className="w-4" />
            </span>
            Discover Protocols
          </li>
          <li className="mb-4 text-black flex items-center font-medium text-base ">
            <span className="mr-2">
              <img src={HomeIcon} alt="homeicon" className="w-4" />
            </span>
            Home
          </li>
          <li className="mb-4 text-black flex items-center font-medium text-base ">
            <span className="mr-2">
              <img src={GrayAddress} alt="homeicon" className="w-4" />
            </span>
            Address
          </li>
        </ul>
      </div>
      <div className="mt-30">
        <ul className="text-left sm:text-center lg:text-left">
          <li className="mb-4 text-black flex items-center font-medium text-base ">
            <span className="mr-2">
              <img src={Api} alt="homeicon" className="w-4" />
            </span>
            Discover Protocols
          </li>
          <li className="mb-4 text-black flex items-center font-medium text-base ">
            <span className="mr-2">
              <img src={BugReport} alt="homeicon" className="w-4" />
            </span>
            Home
          </li>
          <li className="mb-4 text-black flex items-center font-medium text-base ">
            <span className="mr-2">
              <img src={RequestFeature} alt="homeicon" className="w-4" />
            </span>
            Address
          </li>
          <li className="mb-4 text-black flex items-center font-medium text-base ">
            <span className="mr-2">
              <img src={Settings} alt="homeicon" className="w-4" />
            </span>
            Discover Protocols
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
