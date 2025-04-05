
import React from 'react';
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-6">
        <div className="text-3xl font-extrabold text-blue-700 mb-4 sm:mb-0">MissingLink</div>
        <div className="space-x-4 md:space-x-8 text-lg font-semibold">
          <a href="#features" className="hover:text-blue-700 px-2">Features</a>
          <a href="#how-it-works" className="hover:text-blue-700 px-2">How It Works</a>
          <a href="#contact" className="hover:text-blue-700 px-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
