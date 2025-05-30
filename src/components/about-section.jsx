import React from "react";

function AboutSection() {
  return (
    <section className="bg-[#f8f1e7] py-6 px-4">
      <div className="max-w-3xl mx-auto flex flex-col gap-4 text-center">
        <h2 className="text-3xl font-bold text-[#4b2e18]">
          About Fine Cookies
        </h2>
        <p className="text-[#4b2e18] text-lg leading-relaxed">
          Fine Cookies adalah toko roti spesialis cookies dengan cita rasa
          hangat dan resep warisan keluarga. Kami percaya bahwa setiap gigitan
          cookies harus memberikan kelezatan yang tak terlupakan.
        </p>
        <p className="text-[#4b2e18] text-lg leading-relaxed">
          Berdiri pada tanggal{" "}
          <span className="font-semibold">26 November 2020</span>, Fine Cookies
          telah menjadi teman setia bagi para pecinta cookies di seluruh kota.
          Setiap cookies kami dibuat dengan cinta dan bahan-bahan berkualitas.
        </p>
        <p className="text-[#4b2e18] text-lg leading-relaxed">
          Yuk, rasakan sensasi manis dan renyahnya cookies kami yang selalu
          fresh dan memanjakan lidah!
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
