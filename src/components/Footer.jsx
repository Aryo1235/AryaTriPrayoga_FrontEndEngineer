import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sky-100 text-sky-700 border-t border-sky-300 mt-16">
      <div
        id="contact"
        className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between"
      >
        {/* Kontak */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="font-semibold text-lg">Kontak</h2>
          <p className="text-sm">aryatp124@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className="flex space-x-5">
          <a
            href="#"
            className="p-2 rounded-full bg-sky-200 text-sky-600 hover:bg-sky-500 hover:text-white transition-colors"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-sky-200 text-sky-600 hover:bg-sky-500 hover:text-white transition-colors"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-sky-200 text-sky-600 hover:bg-sky-500 hover:text-white transition-colors"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-sky-200 text-sky-600 hover:bg-sky-500 hover:text-white transition-colors"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-sky-200 text-sky-600 text-sm text-center py-3">
        © {new Date().getFullYear()} The Bokaw. All rights reserved.
      </div>
    </footer>
  );
}
