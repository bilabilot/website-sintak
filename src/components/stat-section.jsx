import { Star } from "lucide-react";
import React from "react";

function StatSection() {
  return (
    <section className="bg-[#fff7f0] py-12 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Sweet Stats</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-4xl font-bold text-[#d2691e]">10,000+</p>
          <p className="text-sm">Cookies Sold</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-[#d2691e]">12</p>
          <p className="text-sm">Flavors</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-1 text-4xl font-bold text-[#d2691e]">
            4
            <Star size={24} fill="#d2691e" stroke="none" />
          </div>
          <p className="text-sm">Rating</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-[#d2691e]">500+</p>
          <p className="text-sm">Happy Customers</p>
        </div>
      </div>
    </section>
  );
}

export default StatSection;
