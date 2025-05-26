import { Calendar, Clock, MapPin, Section } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto flex px-4 lg:flex-row items-center" >

        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-5xl text-orange-400 font-bold">
            Kembangkan Skill Web Development-mu dengan Mengikuti Kelas SINTAK
          </h1>
          <p className="text-gray-800 text-xl">
            Pelajari Materi Pengembangan 
            Website Bersama Kak Norris
            dan kak Piastri
          </p>
          <div className="flex gap-4 flex-col text-center md:flex-row">
            <a
              href=""
              className="bg-orange-400 px-4 py-2 text-black rounded-md hover:text-red-400 border-2 border-gray-700 transition duration-300 ease-in-out"
            >
              Daftar Sekarang
            </a>
            <a
              href=""
              className="bg-orange-400 px-4 py-2 text-black rounded-md hover:text-red-400 border-2 border-gray-700 transition duration-300 ease-in-out"
            >
              Pelajari Selangkapnya
            </a>
          </div>
          <div className="flex gap-2 mt-2 items-center">
            <Calendar className="text-black font-semibold" />
            <p className="text-black font-semibold">Rabu, 21 Mei 2025</p>
            <Clock className="text-black font-semibold" />
            <p className="text-black font-semibold">13.30 - 14.30</p>
            <MapPin className="text-black font-semibold" />
            <p className="text-black font-semibold">Kampus Polsri</p>
          </div>
        </div>
        <img className="w-120 rounded-full h-auto outline-1 transition-transform duration-300 outline-orange-600 shadow-lg max-w-sm" src="./twins.jpg" alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
