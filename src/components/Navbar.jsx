import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-black/10 dark:border-white/10 shadow-lg transition">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="#home" className="font-bold text-lg md:text-xl">
            <span className="text-black dark:text-white">
              Scale & Sync
            </span>
            <span className="text-blue-500"> Systems</span>
          </a>

          {/* Mobile Menu Button */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-black dark:text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
              Home
            </a>

            <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
              Services
            </a>

            <a href="#process" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
              Process
            </a>

            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
              Work
            </a>

            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
              About
            </a>

            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
              Contact
            </a>

            {/* Toggle Switch */}
           

          </div>
        </div>
      </div>
    </nav>
  );
};
