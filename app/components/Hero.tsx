import React from "react";
import OrangeBallText from "./OrangeBallText";

const Hero = () => {
  return (
    <section className="flex justify-center mt-10 mr-8 ml-8">
      <OrangeBallText
        topText="Keep Track & "
        strongText="Save"
        middleText="on Your"
        bottomText="Food"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. odio
            eveniet"
      />
    </section>
  );
};

export default Hero;
