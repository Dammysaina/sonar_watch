import React from "react";
import womansmile from "../assests/images/womansmile.svg";
import "../assests/css/home.css";
import CustomButton from "../library/custombutton";
import Payment from "./paymentcard";
import Faq from "./faq";






const Home = () => {
  return (
    <div>
      <div className="financialneeds_container">
        <div className="financial_needs">
          <div>
            <p>Join several fast-growing businesses and watch your sales increase by over 32%</p>
          <img src={imagebackground} alt="image" />

          </div>
          
        </div>
        <div className="phone_container">
          <img src={womansmile} alt="iphone" />
        </div>
      </div>
      <div className="customers_container">
        <div className="our_customers">
          <h2>Save more by using four strategies.</h2>
          <p>Maximize your savings and reach your financial goals faster with CredPal! With CredPal, you have the opportunity to receive up to 18% returns on your savings, making your money grow faster and helping you achieve your financial goals sooner.</p>
        </div>
        <div>
          <Payment/>
      </div>
      </div>
      <div>
         <div>
          <h1>FAQs</h1>
         </div>
         <div>
          <Faq />
         </div>
      </div>
      <div className="building_container">
        <h2>Start building your credit score today</h2>
        <p>Download our app to get started on your credit journey in Africa. Make the first move towards a better financial future today.</p>
        <CustomButton textColor="#3772FF" buttonWidth="12rem">Sign Up</CustomButton>
      </div>
    </div>
  );
};

export default Home;
