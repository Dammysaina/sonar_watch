import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import GrayAddress from "../assets/images/grayaddress.svg";
import { HiOutlinePlusSm } from "react-icons/hi";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div>
        <Navbar toggleDarkMode={toggleDarkMode} />
      </div>

      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="px-100 pt-20">
          <div className="flex-grow text-left py-4">
            <h4 className="text-lg font-semibold text-[#202020]">
              Discover protocols
            </h4>
          </div>
          {/* <div className="flex"> */}
          {/* <div className="bg-searchIcon rounded-md flex items-center w-full max-w-xl mr-4 p-2 shadow-sm focus:ring-2 focus:ring-green-700 focus:outline-none">
              <div>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search for protocols"
                  className="w-96 pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
                />
              </div>
            </div> */}

          {/* <div className="flex">
              <button className="group text-black p-4 mb-2 w-60 rounded-lg flex items-center bg-customGray">
                Filter by : <span>All chains</span>
                <span>
                  <HiOutlinePlusSm className="ml-3" />
                </span>
              </button>
              <button className="group text-black px-12 py-2 mb-2 rounded-lg flex items-center bg-customGray">
                Filter by : <span>All chains</span>
                <span>
                  <HiOutlinePlusSm className="ml-3" />
                </span>
              </button>
            </div> */}
          {/* </div> */}
          <div className="flex">
            <div className="bg-searchIcon rounded-md flex items-center w-full max-w-l mr-4 p-2 shadow-sm">
              <input
                type="search"
                placeholder="Search for protocols"
                className="w-96 h-4 pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex justify justify-between">
              <button className="group text-black px-4 py-2 mb-2 rounded-lg flex items-center bg-customGray">
                <span className="text-textGray"> Filter by:</span>{" "}
                <span className="ml-2">All chains</span>
                <HiOutlinePlusSm className="ml-2" />
              </button>
              </div>
              <div>
              {/* <button className="group text-black px-12 py-2 mb-2 rounded-lg flex items-center bg-customGray">
                Filter by: <span className="ml-2">All chains</span>
                <HiOutlinePlusSm className="ml-3" />
              </button> */}
              <button className="group text-black px-2 pt-4 mb-2 rounded-lg flex items-center bg-customGray">
                <span className="text-textGray"> Filter by:</span>{" "}
                <span className="ml-2">All chains</span>
                <HiOutlinePlusSm className="ml-2" />
              </button>
            </div>
          </div>
          <div className="flex mt-4">
            <button className=" text-textGray font-semibold text-sm pl-4 focus focus:rounded-lg flex items-center ">
              All protocols
            </button>
            <button className="group text-textGray pl-8 font-semibold text-sm ">New</button>
            {/* <button class="text-textGray active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
  Save changes
</button> */}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
