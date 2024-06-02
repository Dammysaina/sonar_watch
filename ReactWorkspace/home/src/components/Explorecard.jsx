import React from "react";
import Community from "../assets/images/community.svg";
import Essential from "../assets/images/essential.svg";
import Engagement from "../assets/images/engagement.svg";

const Explorecard = () => {
  return (
    <div className="flex justify-around">
      <div className="text-center justify-center items-center shadow-xl px-6 py-12 w-120 h-130 transition duration-300 ease-in-out hover:shadow-xl hover:animate-bounce rounded-3xl">
        <div className="flex justify-center items-center  rounded-lg p-6 ">
        <img
          className="text-center justify-center items-center bg-[#FFDB82] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl p-4 w-20 h-20"
          src={Community}
          alt="Sunset in the mountains"
        />
        </div>
        
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-[#4D4D4D]">
            Community Support{" "}
          </div>
          <p class="text-[#717171] text-base">
            Connect with fellow newcomers and locals for advice, support, and a
            sense of belonging.
          </p>
        </div>
      </div>
      <div className=" text-center justify-center items-center shadow-lg px-6.9 py-12 mx-10 w-120 h-130 transition duration-300 ease-in-out hover:shadow-xl hover:animate-bounce rounded-3xl">
        <div className="flex justify-center items-center p-6">
          <img
            className="text-center justify-items-center bg-[#FFCFCF] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl  p-4  w-20 h-20"
            src={Essential}
            alt="Sunset in the mountains"
          />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-[#4D4D4D]">
            Essential Resources{" "}
          </div>
          <p class="text-[#717171] text-base">
            Access guides and tools for navigating life in Canada, covering
            immigration, housing, employment, healthcare, and cultural
            integration.
          </p>
        </div>
      </div>
      <div className=" text-center justify-center items-center shadow-lg px-6 py-12 w-120 h-130 transition duration-300 ease-in-out hover:shadow-xl hover:animate-bounce rounded-3xl">
        <div className="flex justify-center items-center rounded-lg p-6">
          <img
            className=" justify-center items-center bg-[#CADBFF] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl  p-4  w-20 h-20"
            src={Engagement}
            alt="Sunset in the mountains"
          />
        </div>

        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-[#4D4D4D]">Engagement</div>
          <p class="text-[#717171] text-base">
            Discover local events and activities to learn about Canadian
            culture, network, and build connections in your new community.
          </p>
        </div>
      </div>
      {/* <div className="text-center justify-center items-center shadow-lg">
        <div className="flex justify-center items-center bg-white rounded-lg p-6">
          <img
            className="bg-[#FFDB82] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl p-4 w-20 h-20"
            src={Community}
            alt="Sunset in the mountains"
          />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-[#4D4D4D]">
            Community Support{" "}
          </div>
          <p class="text-[#717171] text-base">
            Connect with fellow newcomers and locals for advice, support, and a
            sense of belonging.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Explorecard;
