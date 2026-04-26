import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-[#222] bg-cover bg-center text-white pt-20 pb-4 text-center"
      style={{ backgroundImage: "url(/navbg.png)" }}
    >
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 flex-wrap">
        <h4 className="text-2xl font-bold bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] bg-clip-text text-transparent">
          Connect with Me
        </h4>

        <div className="flex flex-wrap gap-8 sm:gap-10 justify-center">
          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/samyak-bajracharya-b3380028a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <FaLinkedin size={30} />
            </a>
            <p className="mt-2 text-sm text-white">LinkedIn</p>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center">
            <a
              href="https://github.com/Samyk-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition"
            >
              <FaGithub size={30} />
            </a>
            <p className="mt-2 text-sm text-white">GitHub</p>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center">
            <a
              href="https://wa.me/9779808516437?text=Hi%20Samyak%2C%20I%20just%20saw%20your%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition"
            >
              <FaWhatsapp size={30} />
            </a>
            <p className="mt-2 text-sm text-white">+977 9808516437</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <a
              href="mailto:samykbajr919@gmail.com?subject=Regarding%20My%20Portfolio"
              className="text-white hover:text-red-400 transition"
            >
              <FaEnvelope size={30} />
            </a>
            <p className="mt-2 text-sm text-white">samykbajr919@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
