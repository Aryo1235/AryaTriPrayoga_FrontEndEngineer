import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(scroll);

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-sky-200 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 w-full z-40 transition-all duration-200 ${
          scrolled
            ? "bg-sky-500 shadow-md text-white"
            : "bg-sky-50 text-sky-600"
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-4 md:px-2">
          <div className="flex justify-between h-16 items-center">
            {/* Brand Logo*/}
            <a
              href="/"
              className="text-lg font-bold transition-colors duration-300"
            >
              My Website
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6">
              {navItems.map((items) => (
                <li key={items.name} className="relative group">
                  <a
                    href={items.path}
                    className="transition-colors duration-300"
                  >
                    {items.name}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-500 group-hover:w-full rounded"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Navigation */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <GiHamburgerMenu size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden transition-all duration-300 ${
              scrolled ? "bg-sky-500 text-white" : "bg-white text-sky-600"
            } shadow-lg`}
          >
            <ul className="flex flex-col items-center space-y-3 pb-4">
              {navItems.map((items) => (
                <li key={items.name}>
                  <a
                    href={items.path}
                    className="px-4 py-2 hover:text-sky-700 transition-colors"
                  >
                    {items.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
