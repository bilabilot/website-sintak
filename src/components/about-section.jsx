import { Book, BookmarkCheck, Rocket } from "lucide-react";
import React from "react";

const dataKonten = [
    {
        ikon: Rocket, 
        judul: "Pembelajaran Praktis",
        deskripsi: "Belajar praktis dan menarik di SINTAK"
    },
    {
        ikon: Book,
        judul: "Relasi Luas",
        deskripsi: "Mendapatkan banyak teman baru di SINTAK"
    },
    {
        ikon: BookmarkCheck,
        judul: "Penawaran Menarik",
        deskripsi: "Dapatkan penawaran menarik di SINTAK"
    }
];


function AboutSection() {
  return (
    <section>
      <div className="flex flex-col px-4 items-center justify-center w-full mx-auto ">

        {/* Bagian Judul */}
        <div className="text-center space-y-2">
          <h1 className="font-bold text-orange-400 md:text-6xl space-y-2" >MENGENAL LEBIH DEKAT SINTAK</h1>
          <p className="text-black text-xl mt-4">
            SINTAK adalah sebuah kelas terbuka yang diselenggarakan oleh HMJ MI
            dan GDGoc untuk mahasiswa Politeknik Negeri Sriwijaya
          </p>
        </div>

        {/* Bagian Kotak */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            {dataKonten.map(data => (
                <div className="flex flex-col p-4 min-w-sm border-gray-300 items-center justify-center bg-white shadow-md rounded-lg mt-8 mx-4">
                    <div className="bg-orange-400 p-4 rounded-full">
                    <data.ikon size={32} />
                    </div>
                 <h2 className="font-bold text-xl">{data.judul}</h2>
                 <p className="text-gray-950">
                    {data.deskripsi}
                 </p>
                </div>
            ))}

        </div>
      </div>
    </section>
  );
}

export default AboutSection;