import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" flex w-full h-screen  pb-0 bg-">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          WELCOME TO
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">HOME</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Your Hub for Newcomers in Canada. Connect, learn, and thrive in your
          new community!
        </p>
        <div>
          <Link to="work">
            <button className="bg-black text-white px-6 py-3 my-2 rounded-md">
              Download App
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img />
      </div>
    </div>
  );
};

export default Home;
