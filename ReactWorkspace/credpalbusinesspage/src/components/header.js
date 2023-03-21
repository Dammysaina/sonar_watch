import React from "react";
import Logo from "../assests/images/logo.svg";
import Nigeria from "../assests/images/nigeria.svg";
import Dropdown from "../assests/images/forward.svg";
import CustomButton from "../library/custombutton";
import "../assests/css/header.css";

const Header = () => {
  return (
    <div className="header_container">
      <div className="logo_container">
        <img src={Logo} alt="credpallogo" />
        <ul>
          <li>Products</li>
          <li>Business</li>
        </ul>
      </div>
      <div className="faq_container">
        <p>FAQ</p>
        <div className="nigeria_container">
          <img className="nigeria" src={Nigeria} alt="nigeriaflag" />
          <img className="dropdown" src={Dropdown} alt="dropdown" />
        </div>
        <div >
        <CustomButton className="header_button" textColor="#000000" buttonColor="#FFFFFF">
          Download the Credpal app
        </CustomButton>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
