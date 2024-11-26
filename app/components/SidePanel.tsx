import React from "react";
import Link from "next/link";

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

function SidePanel({ isOpen, onClose }: SidePanelProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
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
          <Link href="/">Add food</Link>
        </li>
        <li>
          <a href="/api/auth/logout">Logout</a>
        </li>
      </ul>
    </div>
  );
}

export default SidePanel;
