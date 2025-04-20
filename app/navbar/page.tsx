'use client';

export default function NavbarComp() {
  return (
    <nav
      style={{
        backgroundImage: "url('/navbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="shadow-md fixed w-full top-0 z-10 text-white"
    >
      <div className="bg-black/60">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Navbar Links (Desktop) */}
          <div className="hidden md:flex space-x-8 justify-center flex-1">
            <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
            <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a>
            <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="hover:text-blue-400 focus:outline-none"
              aria-label="Toggle Navigation"
              onClick={() => {
                // Add toggle logic for mobile menu
              }}
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Centered) */}
        <div className="md:hidden bg-black/60">
          <div className="p-4 space-y-4 flex justify-center">
            <a href="#home" className="block hover:text-blue-400">Home</a>
            <a href="#projects" className="block hover:text-blue-400">Projects</a>
            <a href="#skills" className="block hover:text-blue-400">Skills</a>
            <a href="#contact" className="block hover:text-blue-400">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
