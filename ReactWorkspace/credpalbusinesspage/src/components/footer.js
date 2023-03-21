import React from "react";
import Buttonapp from "../library/appbutton";
import Apple from "../assests/images/apple.svg";
import Google from "../assests/images/google.svg";
import Debitcard from "../assests/images/debitcard.svg";
import Phone from "../assests/images/footerphone.svg";
import footerlogo from "../assests/images/footerlogo.svg";
import "../assests/css/footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footerone_container">
        <div className="join_container">
          <div className="credpal_container">
            <h4>Join CredPal today</h4>
            <p>
              Join the millions of happy customers using CredPal to access
              credit, make payments, invest, and more by downloading the CredPal
              app.
            </p>
          </div>
          <div className="app_button">
            <Buttonapp buttonHeight="3rem" buttonWidth="10rem">
              <img className="arrow_right" src={Apple} alt="applelogo" />
              <p>Download on the <span>App Store</span></p>{" "}
            </Buttonapp>
            <Buttonapp buttonHeight="3rem" buttonWidth="10rem">
              <img className="arrow_right" src={Google} alt="googlelogo" />
              GET IT ON <span>Google Play</span>{" "}
            </Buttonapp>
          </div>
        </div>
        <div className="phone_debit">
          <img src={Debitcard} alt="Debitcard" />
          <img src={Phone} alt="Iphone" />
        </div>
      </div>
      <div className="footertwo_container">
        <div className="footerone">
          <div className="footerlogo_container">
            <img src={footerlogo} alt="footerlogo" />
            <p>
              CredPal is a revolutionary credit solution geared towards
              providing seamless credit access for businesses and individuals
              across developing economies.
            </p>
          </div>

          <div className="aboutCompany">
            <h1>Products</h1>
            <p>CredPal Personal</p>
            <p>CredPal Business</p>
            <p>CredPal Lifestyle</p>
          </div>
          <div className="aboutCompany">
            <h1>Legal</h1>
            <p>Customer Terms of use</p>
            <p>Merchant Terms of service</p>
            <p>Privacy Notice</p>
          </div>
          <div className="aboutCompany">
            <h1>Support</h1>
            <p>FAQs</p>
            <p>Blog</p>
          </div>
          <div className="aboutCompany">
            <h1>Get the app</h1>
            <div>
              <Buttonapp buttonHeight="3rem" buttonWidth="10rem">
                <img className="arrow_right" src={Apple} alt="applelogo" />
                Download on the <span>App Store</span>{" "}
              </Buttonapp>
              <Buttonapp buttonHeight="3rem" buttonWidth="10rem">
                <img className="arrow_right" src={Google} alt="googlelogo" />
                <p>Download on the <span>Google Play</span></p>{" "}
              </Buttonapp>
            </div>
          </div>
        </div>
        <div className="footer_two">
          <p>
            CredPal financial services are offered by BishopGate Microfinance
            Bank, fully licensed and regulated by the Central bank of Nigeria.
            CredPal offers innovative financial solutions including payment,
            savings and credit services. Our credit solution allows businesses
            and individuals to buy anything and pay for it in instalments across
            online and offline Merchants by providing them with instant access
            to credit at the point of checkout.
          </p>
        </div>
        <div className="footer_three">
          <p>
            We use cookies for better service. <span>Accept</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
