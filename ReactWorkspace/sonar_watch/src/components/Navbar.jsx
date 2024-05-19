import React from "react";
import SonarLogo from "../assets/images/sonarlogo.svg";
import BlackAddress from "../assets/images/blackaddress.svg";
import SearchIcon from "../assets/images/searchicon.svg"

const Navbar = ({ toggleDarkMode }) => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white border-b-2 border-customGray z-50 ">
      <div className="border-r-2 border-customGray">
        <img src={SonarLogo} alt="sonarlogo" style={{width: "180px"}}/>
      </div>
        
      <div class="flex justify-between items-center h-14 header-right">
        <div class="bg-searchIcon rounded-md flex items-center w-full max-w-xl mr-4 p-2 shadow-sm focus:ring-2 focus:ring-green-700 focus:outline-none">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search address,domain"
            class="w-96 pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
          />
          <img src={SearchIcon} alt="searchicon"/>
        </div>
        <img src={BlackAddress} style={{ width: "20px" }}alt="blackaddress"/>
      </div>

    </div>
  );
};

export default Navbar;
