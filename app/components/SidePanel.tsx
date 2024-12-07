import React from "react";
import Link from "next/link";

// Auth
import { UserProfile } from "@auth0/nextjs-auth0/client";

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  user?: UserProfile;
}

function SidePanel({ isOpen, onClose, user }: SidePanelProps) {
  const handleClick = (event: React.MouseEvent<HTMLUListElement>) => {
    if ((event.target as HTMLElement).tagName === "A") {
      onClose();
    }
  };
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-orange-500 bg-opacity-5 backdrop-blur-sm z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Side panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button onClick={onClose} className="p-4">
          Close
        </button>
        <ul onClick={handleClick} className="p-4 space-y-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pantry">My pantry</Link>
          </li>
          <li>
            <Link href="/addfood">Add food</Link>
          </li>
          {user ? (
            <li>
              {" "}
              <a href="/api/auth/logout">Logout</a>
            </li>
          ) : (
            <li>
              <a href="/api/auth/login">Login</a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default SidePanel;
