"use client";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex fixed top-0 left-0 w-full z-20 px-6 py-2 bg-transparent/70 backdrop-blur-xs shadow-md items-center justify-between text-color-light">
      <Image
        src="/logo-moolen.png"  
        alt="Logo"
        width={100}
        height={100}
        className="w-48"
      />
      <ul className="flex space-x-4 gap-4">
        <a className="cursor-pointer hover:scale-110 transition-transform duration-200">
          Home
        </a>
        <a className="cursor-pointer hover:scale-110 transition-transform duration-200">
          Feature
        </a>
        <a className="cursor-pointer hover:scale-110 transition-transform duration-200">
          About Us
        </a>
        <a className="cursor-pointer hover:scale-110 transition-transform duration-200">
          Pricing
        </a>
        <a className="cursor-pointer hover:scale-110 transition-transform duration-200">
          Blog
        </a>
      </ul>
      <div className="">
        <button className="bg-color-primary text-color-light px-4 py-2 rounded">
          Search
        </button>
        <button className="bg-black text-white px-6 py-3 rounded-full">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
