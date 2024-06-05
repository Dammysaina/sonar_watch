import React from 'react'

const Values = () => {
  return (
    <div>
        <div className="text-center justify-center items-center shadow-xl px-6 py-12 w-120 h-130 md:px-2 md:w-96 md:h-96 transition duration-300 ease-in-out hover:shadow-xl hover:animate-bounce rounded-3xl">
        <div className="flex justify-center items-center rounded-lg p-6 ">
        <img
          className="text-center justify-center items-center bg-[#FFDB82] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl p-4 w-20 h-20 md:w-14 md:p-2 md:h-14"
        //   src={Community}
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
    </div>
  )
}

export default Values