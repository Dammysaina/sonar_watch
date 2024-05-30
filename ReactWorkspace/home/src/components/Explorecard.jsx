import React from "react";
import Community from "../assets/images/community.svg"

const Explorecard = () => {
  return (
    <div className="flex justify-between">
      <div class="max-w-sm rounded text-center justify-items-center overflow-hidden shadow-lg px-5 py-10">
        <img
          className="text-center justify-items-center bg-[#FFDB82] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl  p-4  w-20 h-20"
          src={Community}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Community Support </div>
          <p class="text-gray-700 text-base">
            Connect with fellow newcomers and locals for advice, support, and a
            sense of belonging.
          </p>
        </div>
      </div>
      <div class="max-w-sm rounded text-center justify-items-center overflow-hidden shadow-lg px-5 py-10">
        <img
          className="text-center justify-items-center bg-[#FFDB82] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl  p-4  w-20 h-20"
          src={Community}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Community Support </div>
          <p class="text-gray-700 text-base">
            Connect with fellow newcomers and locals for advice, support, and a
            sense of belonging.
          </p>
        </div>
      </div>
      <div class="max-w-sm rounded text-center justify-items-center overflow-hidden shadow-lg px-5 py-10">
        <img
          className="text-center justify-items-center bg-[#FFDB82] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl  p-4  w-20 h-20"
          src={Community}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Community Support </div>
          <p class="text-gray-700 text-base">
            Connect with fellow newcomers and locals for advice, support, and a
            sense of belonging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explorecard;
