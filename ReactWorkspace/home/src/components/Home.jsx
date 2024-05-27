import React from "react";
import { Link } from "react-scroll";
import HomeImage from "../assets/images/homeimage.svg";
import MobilePhone from "../assets/images/communitymobile.svg";

const Home = () => {
  return (
    <div>
      <div
        name="home"
        className=" flex w-full h-screen bg-homeBg pb-0 py-32 px-32"
      >
        {/*Container*/}
        <div className="h-full justify justify-center my-32">
          <h1 className="text-4xl sm:text-7xl font-bold text-black">
            Welcome to{" "}
            <span className="text-4xl sm:text-7xl font-bold text-[#0051F9]">
              Home
            </span>
          </h1>

          <p className="text-[#8892b0] py-4 pr-40 max-w-[600px]">
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
          <img src={HomeImage} alt="homeimage" />
        </div>
      </div>
      <div className="bg-black">
        <div className="text-center justify-items-center">
          <h1 className="text-sm sm:text-7xl font-bold text-[#4D4D4D] px-56">
            Explore the Advantages of Joining Home App
          </h1>
          <p className="text-[#8892b0] py-10 px-36">
            Connecting Newcomers to Canada's Vibrant Community and Resources
          </p>
        </div>
        <div></div>
      </div>
      <div className=" flex justify-between w-full h-screen px-32 pt-6">
        <div className="pr-10">
          <img src={MobilePhone} alt="phone" />
        </div>

        <div className="my-32">
          <h1 className="text-9xl sm:text-7xl font-semibold text-[#4D4D4D] max-w-[300px]">
            Join the{" "}
            <span className="text-9xl sm:text-7xl font-semibold text-[#F23838]">
              Community
            </span>
          </h1>
          <p className="text-[#8892b0] py-4 pr-40 max-w-[690px]">
            Connect with Your New Community. At Home, we understand that the
            journey of settling into a new country can be both exciting and
            challenging. Whether you have questions about navigating immigration
            processes, finding accommodation, or simply want to share your
            journey, our forum provides a supportive space for open dialogue.
          </p>
        </div>
      </div>
      <div className=" flex justify-between w-full h-screen px-32 pt-6">
        <div>
          <h1 className="text-4xl sm:text-7xl font-semibold text-[#4D4D4D] max-w-[700px]">
            Empowering{" "}
            <span className="text-9xl sm:text-7xl font-semibold text-[#F7BD2D]">
              You
            </span>
          </h1>
          <p className="text-[#8892b0] py-4 pr-40 max-w-[690px]">
            Essential Resources for Newcomers. Access guides, tools, and
            information to navigate life in Canada confidently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
