import React from "react";
import "../assests/css/home.css";
import CustomButton from "../library/custombutton";
// import Payment from "./paymentcard";
import background from "../assests/images/backgroundimage.svg";
// import Faq from "./faq";

const Home = () => {
  return (
    <div>
      <div className="financialneeds_container">
        <div className="financial_needs">
          <div>
            <p>
              Join several fast-growing businesses and watch your sales increase
              by over 32%
            </p>
            <img src={background} alt="background"/>
          </div>
        </div>
      </div>
      <div className="customers_container">
        <div className="our_customers">
          <h4>THE CREDPAL ADVANTAGE</h4>
          <p>
            Increase conversion for your business
          </p>
          <p>Expand your payment options to include CredPal Pay. This way, your customers no longer abandon cart. 
            You get full payment at the point of sale, while customers pay us later. It's a win-win for all.</p>
        </div>
        <div>
          {/* <Payment /> */}
        </div>
      </div>
      <div>
        <div>
          {/* <h1>FAQs</h1> */}
        </div>
        <div>
          {/* <Faq /> */}
        </div>
      </div>
      <div className="building_container">
        <h2>Start building your credit score today</h2>
        <p>
          Download our app to get started on your credit journey in Africa. Make
          the first move towards a better financial future today.
        </p>
        <CustomButton textColor="#3772FF" buttonWidth="12rem">
          Sign Up
        </CustomButton>
      </div>
    </div>
  );
};

export default Home;
