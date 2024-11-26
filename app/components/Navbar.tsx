"use client";
import React, { useState } from "react";
import Link from "next/link";

// Auth
import { useUser } from "@auth0/nextjs-auth0/client";

// Components
import { Logo, SidePanel } from "@/app/components";

// Icons
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const { user } = useUser();

  const handlePanel = () => {
    setIsPanelOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        aria-label="Main Navigation"
        className="flex flex-row items-center justify-between p-4"
      >
        <Link href={"#"}>
          <Logo />
        </Link>
        <div className="flex">
          <button onClick={handlePanel}>
            <RxHamburgerMenu className=" text-2xl" />
          </button>
        </div>
      </nav>
      <SidePanel
        user={user}
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      />
    </>
  );
};

export default Navbar;
