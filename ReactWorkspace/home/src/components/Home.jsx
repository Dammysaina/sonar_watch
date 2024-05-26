import React from "react";
import { Link } from "react-scroll";
import HomeImage from "../assets/images/homeimage.svg"

const Home = () => {
  return (
    <div name="home" className=" flex w-full h-screen pb-0 bg-homeBg py-32 px-32">
      {/*Container*/}
      <div className="h-full justify justify-start">
        <h1 className="text-4xl sm:text-7xl font-bold text-black">WELCOME TO</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] justify-start">HOME</h2>
        {/* <h1 className="text-4xl sm:text-7xl font-bold text-black">
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
        </div> */}
      </div>
      <div >
        <img src={HomeImage} alt="homeimage" />
      </div>
    </div>
  );
};

export default Home;
