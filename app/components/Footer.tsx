import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-orange-300 mt-auto ">
      <div>
        <Image src={"/avocado.png"} height={300} width={300} alt="avocado" />
      </div>
    </div>
  );
};

export default Footer;
