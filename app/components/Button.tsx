import React from "react";

interface ButtonProps {
  borderColor?: string;
  textColor?: string;
  buttonHoverColor?: string;
  textHoverColor?: string;
  buttonText: string;
}

const Button = ({
  borderColor = "bg-white",
  textColor = "text-white",
  buttonText = "Button Text",
  buttonHoverColor = "bg-black",
  textHoverColor = "text-white",
}: ButtonProps) => {
  return (
    <div className="flex justify-center mt-12">
      <button
        className={`p-2 ${textColor}
      font-semibold
      rounded-md border-2
       ${borderColor}
       hover:${buttonHoverColor}
       hover:${textHoverColor}
       transition-colors duration-300 ease-in-out`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
