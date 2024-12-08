import React from "react";

interface ButtonNoHrefProps {
  text: string;
  onClick?: () => void;
}

const ButtonNoHref = ({ onClick, text }: ButtonNoHrefProps) => {
  return (
    <button
      className="p-2 text-orange-500
      font-semibold
      rounded-md border-2
       border-orange-500
       transition-colors duration-300 ease-in-out
       hover:text-white hover:bg-orange-500"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonNoHref;
