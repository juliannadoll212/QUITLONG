import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white bg-opacity-600 top-0 z-10">
    <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
      <a href="#about" className="title-font font-medium text-black mb-4 md:mb-0 text-sm md:text-xl lg:text-2xl">
      🔵 Julianna Marie M. Quitlong
      </a>
  
      <nav className="flex flex-wrap items-center text-blue-600">
        <a href="#projects" className="mr-5 pr-5 hover:text-blue-800 border-r border-blue-600 text-lg md:text-xl">
          My Certificates
        </a>
        <a href="#skills" className="mr-5 pr-5 hover:text-blue-800 border-r border-blue-600 text-lg md:text-xl">
          Skills
        </a>
        <a href="#Contact" className="mr-5 pr-5 hover:text-blue-800 text-lg md:text-xl">
          Contact Me
        </a>
      </nav>
    </div>
  </header>
  
  );
}