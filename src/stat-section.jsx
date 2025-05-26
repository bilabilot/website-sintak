import { Star } from "lucide-react";
import React from "react";

function StatSection() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-4 items-center text-center mx-auto bg-[url(/Withbila.jpg)] bg-fixed py-16 ">
        <div className="font-bold text-white">
          <h1 className="text-5xl">90+</h1>
          <p>Pendaftar</p>
        </div>
        <div className="font-bold text-white">
          <h1 className="text-5xl">8+</h1>
          <p>Mentor</p>
        </div>
        <div className="font-bold text-white">
          <div className="flex items-center justify-center">
            <h1 className="text-5xl">
              <Star />
            </h1>
            <p>Review dan Ulasan</p>
          </div>
        </div>
        <div className="font-bold text-white">
          <h1 className="text-5xl">100+</h1>
          <p>Lulusan</p>
        </div>
      </div>
    </section>
  );
}

export default StatSection;
