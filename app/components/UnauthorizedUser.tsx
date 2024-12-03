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

      <Button
        href="/api/auth/login"
        classParams="hover:bg-orange-500 hover:text-white"
        buttonText="Get Started"
        textColor="text-orange-500"
        borderColor="border-orange-500"
      />
    </>
  );
};

export default UnauthorizedUser;
