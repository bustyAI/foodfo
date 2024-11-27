import React from "react";

interface OrangeBallTextProps {
  topText?: string;
  middleText?: string;
  bottomText?: string;
  strongText?: string;
  description?: string;
}

const OrangeBallText = ({
  topText,
  middleText,
  bottomText,
  strongText,
  description,
}: OrangeBallTextProps) => {
  return (
    <div className=" flex flex-col justify-center items-center text-5xl lg:text-7xl relative tracking-wider">
      <div className="z-10">
        <h1>{topText} </h1>
        <h1>
          <strong>{strongText}</strong> {middleText}
        </h1>
        <h1> {bottomText}</h1>
        <div className="text-xl max-w-[400px] mt-4">{description}</div>
      </div>
      <div className="hero-border absolute z-0"></div>
    </div>
  );
};

export default OrangeBallText;
