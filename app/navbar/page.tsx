"use client";
import { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function NavbarComp() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        backgroundImage: "url('/navbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="shadow-md fixed w-full top-0 z-50 text-white"
    >
      <div className="bg-black bg-opacity-80 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 justify-center flex-1">
            <a
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-blue-400 transition duration-300 flex items-center space-x-1"
            >
              <HomeIcon className="w-5 h-5" />
              <span>Home</span>
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-blue-400 transition duration-300"
            >
              {" "}
              Skills{" "}
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:text-blue-400 transition duration-300"
            >
              Connect with me
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
              className="hover:text-blue-400 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 w-full">
            <div className="p-4 space-y-4 flex flex-col items-center">
              <a
                onClick={() => {
                  scrollToSection("home");
                  setIsMobileMenuOpen(false);
                }}
                className="cursor-pointer hover:text-blue-400 transition duration-300 flex items-center space-x-1"
              >
                <HomeIcon className="w-5 h-5" />
                <span>Home</span>
              </a>
              <a
                onClick={() => {
                  scrollToSection("about");

                  setIsMobileMenuOpen(false);
                }}
                className="cursor-pointer hover:text-blue-400 transition duration-300"
              >
                Skills
              </a>
              <a
                onClick={() => {
                  scrollToSection("projects");
                  setIsMobileMenuOpen(false);
                }}
                className="cursor-pointer hover:text-blue-400 transition duration-300"
              >
                Projects
              </a>
              <a
                onClick={() => scrollToSection("about")}
                className="cursor-pointer hover:text-blue-400 transition duration-300"
              >
                {" "}
                Skills{" "}
              </a>
              <a
                onClick={() => {
                  scrollToSection("contact");
                  setIsMobileMenuOpen(false);
                }}
                className="cursor-pointer hover:text-blue-400 transition duration-300"
              >
                Connect with me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
