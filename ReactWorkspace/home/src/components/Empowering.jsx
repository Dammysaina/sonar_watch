import React from "react";
import Immigration from "../assets/images/immigration.svg";
import School from "../assets/images/school.svg";
import Personplay from "../assets/images/personplay.svg";
import Skillet from "../assets/images/skillet.svg";
import Bed from "../assets/images/bed.svg";
import Businesscenter from "../assets/images/businesscenter.svg";

const Empowering = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        <div className="m-4 text-center flex flex-col items-center justify-center">
          <img src={Immigration} alt="immigration" className="w-12 h-12" />
          <p>Immigration</p>
        </div>
        <div className="m-4 text-center flex flex-col items-center justify-center ">
          <img src={School} alt="school" className="w-12 h-12" />
          <p>School</p>
        </div>
        <div className="m-4 text-center flex flex-col items-center justify-center">
          <img src={Personplay} alt="meetup" className="w-12 h-12" />
          <p>Meetup</p>
        </div>
        <div className="m-4 text-center flex flex-col items-center justify-center">
          <img src={Skillet} alt="daily life" className="w-12 h-12" />
          <p>Daily Life</p>
        </div>
        <div className="m-4 text-center flex flex-col items-center justify-center">
          <img src={Bed} alt="housing" className="w-12 h-12" />
          <p>Housing</p>
        </div>
        <div className="m-4 text-center flex flex-col items-center justify-center">
          <img src={Businesscenter} alt="career" className="w-12 h-12" />
          <p>Career</p>
        </div>
      </div>

      {/* <div className="flex justify-between ">
        <div className="m-4 text-center flex flex-col items-center">
          <img src={Immigration} alt="immigration" className="mb-2"/>
          <p>Immigration</p>
        </div>
        <div className="m-4 text-center flex flex-col items-center">
          <img src={School} alt="immigration" className="mb-2"/>
          <p>School</p>
        </div>
        <div className="m-4 text-center flex flex-col items-center">
          <img src={Personplay} alt="immigration" className="mb-2"  />
          <p>Meetup</p>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="m-4 text-center flex flex-col items-center">
          <img src={Skillet} alt="immigration" className="mb-2"/>
          <p>Daily Life</p>
        </div>
        <div className="m-4 text-center flex flex-col items-center">
          <img src={Bed} alt="immigration" className="mb-2"/>
          <p>Housing</p>
        </div>
        <div className="m-4 text-center flex flex-col items-center">
          <img src={Businesscenter} alt="immigration" className="mb-2"/>
          <p>Career</p>
        </div>
      </div> */}
      {/* <div className="flex flex-wrap justify-between">
        <div className="m-4 text-center flex flex-col items-center">
          <img src={Immigration} alt="immigration" className="mb-2" />
          <p>Immigration</p>
        </div>
        <div className="m-4 text-center flex flex-col items-center">
          <img src={School} alt="school" className="mb-2" />
          <p>School</p>
        </div>
        <div className="m-4 text-center flex flex-col items-center">
          <img src={Personplay} alt="meetup" className="mb-2" />
          <p>Meetup</p>
        </div>
        <div className="m-4 text-center flex flex-col items-center">
          <img src={Skillet} alt="daily life" className="mb-2" />
          <p>Daily Life</p>
        </div>
        <div className="m-4 text-center flex flex-col items-center">
          <img src={Bed} alt="housing" className="mb-2" />
          <p>Housing</p>
        </div>
        <div className="m-4 text-center flex flex-col items-center">
          <img src={Businesscenter} alt="career" className="mb-2" />
          <p>Career</p>
        </div>
      </div> */}
    </div>
  );
};

export default Empowering;
