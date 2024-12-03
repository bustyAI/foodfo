import React from "react";

interface ButtonProps {
  borderColor?: string;
  textColor?: string;
  buttonHoverColor?: string;
  textHoverColor?: string;
  buttonText: string;
  classParams?: string;
  onClick?: () => void;
}

const Button = ({
  borderColor = "bg-white",
  textColor = "text-white",
  buttonText = "Button Text",
  classParams = "",
  onClick,
}: ButtonProps) => {
  return (
    <div className="flex justify-center  w-full mt-12">
      <button
        onClick={onClick}
        className={`p-2 ${textColor} ${classParams}
      font-semibold
      rounded-md border-2
       ${borderColor}
       transition-colors duration-300 ease-in-out`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
