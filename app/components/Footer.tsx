import React from "react";
import Image from "next/image";
import AboutUs from "./AboutUs";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-center items-center bg-orange-300 mt-auto ">
      <div>
        <Image src={"/avocado.png"} height={300} width={300} alt="avocado" />
      </div>
      <AboutUs />
    </footer>
  );
};

export default Footer;
