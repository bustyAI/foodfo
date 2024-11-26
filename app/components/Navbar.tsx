"use client";
import React, { useState } from "react";
import Link from "next/link";

// Components
import { Logo, SidePanel } from "@/app/components";

// Icons
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handlePanel = () => {
    setIsPanelOpen((prev) => !prev);
  };
  return (
    <>
      <nav
        aria-label="Main Navigation"
        className="flex flex-row items-center justify-between m-4"
      >
        <Link href={"#"}>
          <Logo />
        </Link>

        <h1>Welcome</h1>
        <div className="flex">
          <button onClick={handlePanel}>
            <RxHamburgerMenu className=" text-2xl" />
          </button>
        </div>
      </nav>
      <SidePanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </>
  );
};

export default Navbar;
