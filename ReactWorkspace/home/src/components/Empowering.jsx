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
      <div className="flex justify-between ">
        <div cl>
          <img src={Immigration} alt="immigration" />
          <p>Immigration</p>
        </div>
        <div className="m-4">
          <img src={School} alt="immigration" />
          <p>School</p>
        </div>
        <div>
          <img src={Personplay} alt="immigration" />
          <p>Meetup</p>
        </div>
      </div>
      <div className="flex justify-between ">
        <div>
          <img src={Skillet} alt="immigration" />
          <p>Daily Life</p>
        </div>
        <div>
          <img src={Bed} alt="immigration" />
          <p>Housing</p>
        </div>
        <div>
          <img src={Businesscenter} alt="immigration" />
          <p>Career</p>
        </div>
      </div>
    </div>
  );
};

export default Empowering;
