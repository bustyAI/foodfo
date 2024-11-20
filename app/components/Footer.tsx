import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-orange-300 mt-auto ">
      <div>
        <Image src={"/avocado.png"} height={300} width={300} alt="avocado" />
      </div>
      <div className="flex flex-col justify-center items-center text-left">
        <h1 className="text-2xl">About Us</h1>
        <p className=" text-sm">
          Tired of throwing out food? Tired of feeling like your are throwing
          out more than you eat? We have the solution for you
        </p>
      </div>
    </div>
  );
};

export default Footer;
