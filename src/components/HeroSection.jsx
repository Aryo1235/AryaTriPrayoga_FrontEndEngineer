import React from "react";

export default function HeroSection() {
  return (
    <div className="relative rounded-lg max-w-[400px]  sm:max-w-6xl md:max-w-7xl mx-auto px-4 py-16 flex flex-col gap-2 justify-center items-center md:h-[520px] md:py-0 md:px-0">
      {/* Background Image */}
      <div
        id="herosection"
        className="absolute inset-0 bg-cover bg-center rounded-lg "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900/70 to-sky-700/40 rounded-lg" />

      {/* Content */}
      <div className="relative  text-center text-white font-sans">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          Unlock Your Career Potential with LinkedIn
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 mb-8">
          Belajar personal branding & networking agar lebih cepat dapat kerja.
        </p>
        <button className="bg-sky-600 mt-2 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:-translate-y-1 hover:bg-sky-700 hover:shadow-lg transition duration-300 cursor-pointer">
          Join The Class
        </button>
      </div>
    </div>
  );
}
