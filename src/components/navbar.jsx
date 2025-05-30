import { ChefHat } from "lucide-react";
import React from "react";

function NavBar() {
  return (
    <header className="sticky top-0 border-b-2 border-black rounded-md bg-amber-50 shadow-md z-10 w-full">
      <div className=" flex mx-auto justify-between h-16 items-center px-2 w-full">
        <div className="flex items-center font-bold color gap-x-2 p-4">
          <ChefHat size={24} className="text-lg font-bold text-amber-950"/>
          <h1 className="font-bold text-xl text-amber-700">FINE COOKIES</h1>
        </div>
        <ul className="hidden md:flex gap-20 text-xl font-semibold text-gray-700">
          <li>
            <a href="/" className="hover:text-gray-500">
              Menu
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-500">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-500">
              Contact
            </a>
          </li>
        </ul>
        <a
          href=""
          className="bg-amber-500 border-2 px-4 py-2 text-white rounded-md hover:bg-amber-700 border-amber-700 shadow-md transition-transform duration-300 ease-in-out mr-4 "
        >
          Order Now
        </a>
      </div>
    </header>
  );
}

export default NavBar;
