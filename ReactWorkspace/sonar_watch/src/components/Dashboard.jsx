import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import BlockIcon from "../assets/images/blockicon.svg";
import Footer from "./Footer";
import ListIcon from "../assets/images/listicon.svg";
import Dropdown from "../assets/images/dropdown.svg";
import SampleView from "./SampleView";

// import Table from "./table";

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

        <div className="px-100 pt-20 border-blue-50">
          <div className="flex-grow text-left py-4">
            <h4 className="text-lg font-bold text-[#202020]">
              Discover protocols
            </h4>
          </div>
          <div className="flex">
            <div className="bg-searchIcon rounded-md flex items-center w-full max-w-l mr-4 p-2 shadow-sm h-12">
              <input
                type="search"
                placeholder="Search for protocols"
                className="w-96 pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex justify justify-end mr-6">
              <div>
                <button className="group flex text-black h-10 w-56 px-6 py-2 ml-8 rounded-lg items-center bg-searchIcon">
                  <span className="text-textGray mr-2"> Filter by :</span> All
                  chains
                  <img src={Dropdown} alt="dropdown" className="ml-6" />
                </button>
              </div>
              <div>
                <button className="group flex text-black h-10 w-52 px-4 py-2 ml-8 rounded-lg items-center bg-searchIcon">
                  <span className="text-textGray mr-2"> Sort by :</span>
                  Most $TVL
                  <img src={Dropdown} alt="dropdown" className="ml-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="flex ">
              <button className=" text-textGray font-medium text-semibold pl-4 rounded-md focus:outline-none focus:bg focus:bg-textLightGreen focus:text focus:text-textGreen flex items-center ">
                All protocols
              </button>
              <button className="group text-textGray pl-8 font-medium text-sm ">
                Recommended
              </button>
              <button className="group text-textGray pl-8 mx-4 font-medium text-sm ">
                New
              </button>
            </div>
            <div className="flex justify-end space-x-4 pt-4 pr-8">
              <button className="group text-black p-3 mb-2 rounded-lg flex items-center bg-searchIcon">
                <img src={BlockIcon} alt="listicon" className="w-5 h-5" />
              </button>
              <button className="group text-black p-3 mb-2 rounded-lg flex items-center bg-searchIcon">
                <img src={ListIcon} alt="listicon" className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div>
            <table class="border-collapse border border-slate-500 ...">
              <thead>
                <tr>
                  <th class="border border-slate-600 ...">State</th>
                  <th class="border border-slate-600 ...">City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-slate-700 ...">Indiana</td>
                  <td class="border border-slate-700 ...">Indianapolis</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 ...">Ohio</td>
                  <td class="border border-slate-700 ...">Columbus</td>
                </tr>
                <tr>
                  <td class="border border-slate-700 ...">Michigan</td>
                  <td class="border border-slate-700 ...">Detroit</td>
                </tr>
              </tbody>
            </table>
            {/* <Table /> */}
          </div>
        </div>
      </div>
      <div>
        <SampleView />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
