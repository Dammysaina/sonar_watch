import React from "react";
import AboutImage from "../assets/images/Aboutusimage.svg";

const About = () => {
  return (
    <div className="bg-[#F5F7FA] px-32">
      <div name="home" className=" flex w-full py-32 mr-20 ">
        {/*Container*/}
        <div className="h-full my-28">
          <h1 className="text-4xl sm:text-4xl font-bold text-black max-w-[700px]">
            About <span className="text-[#0051F9]">Us</span>
          </h1>
          <p className="text-[#717171] font-normal text-sm py-4 pr-40 max-w-[600px]">
            At Home, we understand the challenges and excitement that come with
            starting a new life in a different country. That's why we're
            dedicated to providing newcomers in Canada with the support,
            resources, and connections they need to thrive.
          </p>
        </div>
        <div>
          <img src={AboutImage} alt="homeimage" />
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <h1 className="text-lg sm:text-4xl font-medium text-black max-w-[1000px] mr-6">
          Our Story
        </h1>
        <div className="text-[#717171] text-lg font-normal max-w-[900px] ">
          <p className="mb-4">
            Home was founded with a mission to empower newcomers and foster a
            sense of belonging in their new communities. We recognize that the
            journey of immigration is filled with unique experiences and
            obstacles, which is why we're committed to creating a platform where
            newcomers can find support, guidance, and friendship.
          </p>
          <p>
            Our vision is to build a vibrant and inclusive community where
            newcomers feel welcomed, supported, and empowered to pursue their
            dreams. We believe in the power of connection and collaboration, and
            we're passionate about creating opportunities for newcomers to
            network, learn, and grow.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h4 className="text-lg text-center justify-items-center sm:text-4xl font-medium text-black ">Our Values</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
