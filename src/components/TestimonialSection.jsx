import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Setelah ikut kelas ini, profil LinkedIn saya jadi lebih profesional dan mudah ditemukan recruiter.",
      name: "Andi",
      role: "Mahasiswa UI",
    },
    {
      quote:
        "Saya belajar strategi networking yang praktis, sekarang saya punya banyak koneksi baru di industri.",
      name: "Sinta",
      role: "Fresh Graduate ITB",
    },
    {
      quote:
        "Tips job hunting-nya sangat membantu, saya berhasil dapat interview dalam 2 minggu!",
      name: "Budi",
      role: "Job Seeker",
    },
  ];

  return (
    <section id="testimonials" className=" bg-gray-50 py-20 font-sans">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-12">
          Apa Kata Peserta?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center"
            >
              <FaQuoteLeft className="text-sky-500 text-3xl mb-4" />
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                “{item.quote}”
              </p>
              <h3 className="font-semibold text-sky-800">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
