import React from "react";
import { ShoppingCart } from "lucide-react";

function HeroSection() {
  return (
    <section className="bg-[#f8f1e7] min-h-screen flex flex-col items-center justify-center px-4 py-4 gap-4">
      <div className="relative w-full max-w-3xl aspect-[4/3] rounded-xl overflow-hidden">
       
        <img
          src="cookie.png"
          alt="Cookies"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#d6b98c]/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center z-10">
          <h1 className="text-6xl font-extrabold text-[#4b2e18] drop-shadow-md">
            LOVELY!
          </h1>
          <div className="bg-[#8b5e3c] text-white px-4 py-1 rounded-full shadow-lg">
            Start from 10k
          </div>
          <p className="text-sm px-4 py-1 text-[#4b2e18] font-medium">
            Freshly baked cookies, made just for you!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl">
        <div className="flex-1 bg-[#d2b48c] p-4 rounded-xl text-center shadow-md">
          <h2 className="text-lg px-4 py-2 font-bold text-[#4b2e18]">
            Order Now!
          </h2>
          <p className="text-sm px-4 py-1 text-center text-[#4b2e18]">
            Get 30% discount, min purchase 100k
          </p>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
