import React from "react";
import { FaLinkedin, FaBriefcase, FaUsers } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaLinkedin className="text-sky-600 text-4xl mb-4" />,
      title: "Optimized LinkedIn Profile",
      description:
        "Pelajari cara membuat profil LinkedIn yang menarik recruiter dan HR.",
    },
    {
      icon: <FaBriefcase className="text-sky-600 text-4xl mb-4" />,
      title: "Job Hunting Strategies",
      description:
        "Strategi praktis mencari kerja dengan lebih efektif dan terarah.",
    },
    {
      icon: <FaUsers className="text-sky-600 text-4xl mb-4" />,
      title: "Networking Tips",
      description:
        "Bangun jaringan profesional yang bisa membantu percepat kariermu.",
    },
  ];

  return (
    <section className="relative bg-white py-20 font-sans">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-12">
          Kenapa Harus Ikut Kelas Ini?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 group bg-zinc-50 rounded-xl border-2 border-transparent shadow-md hover:shadow-lg transition-transform hover:scale-105 hover:border-sky-500 "
            >
              <div className="flex flex-col items-center ">
                <div className="group-hover:animate-bounce">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-sky-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
