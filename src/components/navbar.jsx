import { CodeXml } from "lucide-react";
import React from "react";

function NavBar() {
  return (
    <header className="sticky top-0 border-3 border-black-400 rounded-md bg-amber-100 shadow-md z-10">
      <div className=" flex mx-auto justify-between h-16 items-center px-2">
        <div className="flex items-center color gap-2">
          <CodeXml size={32} className="text-yellow-700" />
          <h1 className="font-bold text-xl text-orange-400">SINTAK.</h1>
        </div>
        <ul className="hidden md:flex gap-20 text-xl font-semibold text-gray-700">
          <li>
            <a href="/" className="hover:text-gray-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-500">
              Tentang
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-500">
              Kontak
            </a>
          </li>
        </ul>
        <a
          href=""
          className="bg-orange-500 px-4 py-2 text-white rounded-md hover:bg-orange-300 border-2 border-gray-900 shadow-md transition duration-300 ease-in-out"
        >
          Daftar Sekarang
        </a>
      </div>
    </header>
  );
}

export default NavBar;
