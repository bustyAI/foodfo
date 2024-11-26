import React from "react";
import Link from "next/link";

// Auth
import auth0 from "@/utils/auth0";

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

function SidePanel({ isOpen, onClose }: SidePanelProps) {
  return (
    <>
      {/* Glassmorphism Overlay */}
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
        <ul className="p-4 space-y-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pantry">My pantry</Link>
          </li>
          <li>
            <Link href="/add-food">Add food</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SidePanel;
