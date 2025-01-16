
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen md:h-[75vh] flex flex-col md:flex-row items-center justify-center bg-white">
      <div className="w-full ml-8 mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
        <h1 className="text-4xl lg:text-6xl font-semibold text-blue-700 text-center lg:text-left">
           Accelerate Business Growth
        </h1>
        <p className="mt-4 text-xl text-blue-500 text-center lg:text-left">
        Unlock your organization’s potential with innovative tools designed to optimize performance, increase efficiency, and enhance customer satisfaction.
        </p>
      </div>
      <div className="w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center">
        <img
          src="./hero.png"
          alt="Hospital Food Management"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;

