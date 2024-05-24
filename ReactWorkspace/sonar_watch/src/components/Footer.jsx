import React from "react";
import { BsDiscord, BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full border-t-2 mt-16 pl-10 border-customGray">
      <div className="flex justify-end space-x-8 pt-4 pr-8">
        <BsInstagram className="w-6 h-6" />
        <BsTwitterX className="w-6 h-6" />
        <BsFacebook className="w-6 h-6" />
        <BsDiscord className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Footer;
