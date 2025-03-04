import React from "react";
import { Link } from "react-scroll";
import HomeImage from "../assets/images/homeimage.svg";
import MobilePhone from "../assets/images/communitymobile.svg";
import { ReactTyped } from "react-typed";
import ExperienceMobile from "../assets/images/experiencemobile.svg";
import MobileSection from "../assets/images/mobilesection.svg";
import HandPhone from "../assets/images/handphone.svg";
import Explorecard from "./Explorecard";
import Empowering from "./Empowering";
import Googleplay from "../assets/images/googleplay.svg";
import Applepay from "../assets/images/applestore.svg";

const Home = () => {
  return (
    <div>
      {/* Welcomehome */}
      <div
        name="home"
        className=" flex w-full h-screen bg-[#F5F7FA] py-32 px-32 md:h-auto"
      >
        {/*Container*/}
        <div className="flex flex-col md:flex-row h-full justify-center items-center my-28 md:my-10 w-full">
          <div className="text-center md:text-left md:pr-10">
            <h1 className="text-4xl sm:text-7xl font-bold text-black max-w-[400px] md:text-4xl">
              <ReactTyped
                strings={[
                  "Welcome to <span style='color:#0051F9'>Home</span> ",
                ]}
                typeSpeed={100}
                loop
                backSpeed={20}
              />
            </h1>
            <p className="text-[#8892b0] py-4 pr-40 max-w-[600px] md:pr-5">
              Your Hub for Newcomers in Canada. Connect, learn, and thrive in
              your new community!
            </p>
            <div>
              <Link to="work">
                <button className="bg-black text-white px-6 py-3 my-2 rounded-md">
                  Download App
                </button>
              </Link>
            </div>
          </div>
          <div className="md:">
            <img src={HomeImage} alt="homeimage" />
          </div>
        </div>
      </div>
      {/* advantages */}
      <div className="my-14">
        <div className="text-center justify-items-center">
          <h1 className="text-lg sm:text-6xl font-bold text-[#4D4D4D] px-140 md:px-10 md:text-5xl">
            Explore the Advantages of Joining Home App
          </h1>
          <p className="text-[#8892b0] py-10 px-36">
            Connecting Newcomers to Canada's Vibrant Community and Resources
          </p>
        </div>
        <div className="px-32">
          <Explorecard />
        </div>
      </div>

      {/* joincommunity */}
      <div className=" flex justify-between w-full px-32 pt-6">
        <div className="pr-10">
          <img src={MobilePhone} alt="phone" className="w-180 h-140" />
        </div>

        <div className="mt-44">
          <h1 className="text-9xl sm:text-7xl font-semibold text-[#4D4D4D] max-w-[300px]">
            Join the{" "}
            <span className="text-9xl sm:text-7xl font-semibold text-[#F23838]">
              Community
            </span>
          </h1>
          <p className="text-[#8892b0] py-4 pr-40 max-w-[690px] md:pr-5">
            Connect with Your New Community. At Home, we understand that the
            journey of settling into a new country can be both exciting and
            challenging. Whether you have questions about navigating immigration
            processes, finding accommodation, or simply want to share your
            journey, our forum provides a supportive space for open dialogue.
          </p>
        </div>
      </div>

      {/* empoweryou */}
      <div className=" flex px-32 py-20 bg-[#F5F7FA]">
        <div className="mt-20">
          <h1 className="text-4xl sm:text-4xl font-semibold text-[#4D4D4D] max-w-[700px] md:text-4xl ">
            Empowering{" "}
            <span className="text-4xl sm:text-4xl font-semibold text-[#F7BD2D] md:text-4xl">
              You
            </span>
          </h1>
          <p className="text-[#8892b0] py-4 pr-40 max-w-[690px] md:pr-5">
            Essential Resources for Newcomers. Access guides, tools, and
            information to navigate life in Canada confidently.
          </p>
        </div>
        <div className="ml-56 md">
          <Empowering />
        </div>
      </div>

      {/* shareexperience */}
      <div className=" flex justify-between w-full px-32">
        <div className="pr-10">
          <img src={ExperienceMobile} alt="phone" />
        </div>

        <div className="my-44">
          <h1 className="text-9xl sm:text-7xl font-semibold text-[#4D4D4D] max-w-[400px]">
            Share your{" "}
            <span className="text-9xl sm:text-7xl font-semibold text-[#B31D89]">
              Experience
            </span>
          </h1>
          <p className="text-[#8892b0] py-4 pr-40 max-w-[690px]">
            At Home, we champion collective action and community strength. Your
            involvement can make a profound impact on newcomers' lives across
            Canada. Share your journey, offer guidance, and provide support to
            those starting anew in Canada. Together, let's make a difference.
          </p>
        </div>
      </div>

      {/* mobilesection */}
      <div>
        <img src={MobileSection} alt="phone" className="w-full " />
      </div>
      <div className=" flex justify-between w-full bg-[#F5F7FA] px-32 ">
        {/*Container*/}
        <div className="mt-44">
          <h1 className="text-4xl sm:text-7xl font-bold text-black max-w-[700px]">
            Experience <span className="text-[#0051F9]">Home </span>
            on the Go
          </h1>

          <p className="text-[#8892b0] py-4 pr-40 max-w-[600px]">
            Stay Connected, Anytime, Anywhere. Download the Home App today to
            unlock a world of opportunities for newcomers in Canada.
          </p>
          <div className="flex flex-row items-center my-2">
            <div>
              <img src={Googleplay} alt="googleplay" />
            </div>
            <div className="ml-4">
              <img src={Applepay} alt="googleplay" />
            </div>
          </div>
        </div>
        <div>
          <img src={HandPhone} alt="homeimage" />
        </div>
      </div>
    </div>
  );
};

export default Home;
