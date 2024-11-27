import React from "react";
import Button from "./Button";
import OrangeBallText from "./OrangeBallText";

const UnauthorizedUser = () => {
  return (
    <>
      <OrangeBallText
        topText="It seems like"
        strongText="you forgot"
        bottomText="to login"
        description="Hit that get started button!"
      />
      <a>
        <Button
          buttonText="Get Started"
          textColor="text-orange-500"
          borderColor="border-orange-500"
        />
      </a>
    </>
  );
};

export default UnauthorizedUser;
