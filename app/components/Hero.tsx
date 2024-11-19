import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center mt-10 mr-8 ml-8">
      <div className=" flex flex-col justify-center text-5xl lg:text-7xl relative tracking-wider">
        <div className="z-10">
          <h1>Keep Track & </h1>
          <h1>
            <strong>Save</strong> on Your
          </h1>
          <h1>Food</h1>
          <div className="text-xl max-w-[400px] mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. odio
            eveniet,
          </div>
        </div>
        <div className="hero-border absolute z-0"></div>
      </div>
    </div>
  );
};

export default Hero;
