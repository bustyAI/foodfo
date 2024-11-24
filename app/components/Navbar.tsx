import React from "react";
import Link from "next/link";

// Components
import { Logo } from "@/app/components";

// Icons
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav
      aria-label="Main Navigation"
      className="flex flex-row items-center justify-between m-4"
    >
      <Link href={"#"}>
        <Logo />
      </Link>

      <div className="flex flex-row space-x-6">
        <Link href={"#"}>Home</Link>
        <Link href={"/pantry"}>My pantry</Link>
        <Link href={"#"}>Add food</Link>
      </div>

      <div className="flex">
        <Link href={"#"}>
          <RxHamburgerMenu className=" text-2xl" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
