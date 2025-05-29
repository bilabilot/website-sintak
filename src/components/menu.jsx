import React from "react";

function MenuSection() {
  return (
    <section className="bg-[#f8f1e7] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-[#4b2e18]">Our Cookies Menu</h2>
        <p className="text-[#4b2e18] text-lg">Choose your cookies!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {/* Red Velvet */}
        <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg border-2 border-[#d9c2a3] p-4 transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#4b2e18] mt-2">
            Red Velvet
          </h3>
          <img
            src="redvelvet.png"
            alt="Red Velvet Cookies"
            className="w-32 h-32 items-center object-cover rounded-full shadow-md mt-2"
          />

          <p className="text-[#4b2e18] font-bold mt-2">Rp 15k /pcs</p>
        </div>

        {/* Matcha */}
        <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg border-2 border-[#d9c2a3] p-4 transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#4b2e18] mt-2">Matcha</h3>
          <img
            src="matcha.png"
            alt="Matcha Cookies"
            className="w-full h-full object-cover rounded-full shadow-md mt-2"
          />
          <p className="text-[#4b2e18] font-bold mt-2">Rp 18k /pcs</p>
        </div>

        {/* Coklat */}
        <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg border-2 border-[#d9c2a3] p-4 transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#4b2e18] mt-2">Coklat</h3>
          <img
            src="coklat.png"
            alt="Chocolate Cookies"
            className="w-32 h-32 object-cover rounded-full shadow-md mt-2"
          />
          <p className="text-[#4b2e18] font-bold mt-2">Rp 15k /pcs</p>
        </div>

        {/* Original */}
        <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg border-2 border-[#d9c2a3] p-4 transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#4b2e18] mt-2">
            Original
          </h3>
          <img
            src="original.png"
            alt="Original Cookies"
            className="w-32 h-32 object-cover rounded-full shadow-md mt-2"
          />
          <p className="text-[#4b2e18] font-bold mt-2">Rp 10k /pcs</p>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
