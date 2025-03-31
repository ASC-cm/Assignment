"use client";
import { FaUser, FaBars } from "react-icons/fa";

export default function Header({ setIsSidebarOpen }) {
  return (
    <header className="p-4 flex justify-between items-center bg-white shadow-md">
      <div className="flex items-center">
        <img
          src="/assets/icons.png"
          alt="Illustration"
          width={30}
          height={30}
          className="inline-block align-middle"
        />
        <h1 className="text-xl font-bold inline-block align-middle ml-2">
          WhatBytes
        </h1>
      </div>

      {/* Hamburger Menu - Visible only on small screens */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        <FaBars />
      </button>

      {/* User Info */}
      <div className="hidden md:flex items-center">
        <FaUser className="inline-block align-middle mr-2" />
        <span className="font-medium inline-block align-middle">
          Rahil Siddique
        </span>
      </div>
    </header>
  );
}
