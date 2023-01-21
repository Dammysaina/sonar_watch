import React from "react";
import kayndrexlogo from "../assest/images/kayndrex logo.jpg";
import '../assest/css/header.css'

const Header = () => {
    return (
        <div className="kayndrex_header">
            <div className="kayndrex_logo">
                <img src={kayndrexlogo} alt="Kayndrexlogo"/>
            </div>
            <div className="kayndrex_item">
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                <p>Language</p>
            </div>
        </div>
    )
};

export default Header;