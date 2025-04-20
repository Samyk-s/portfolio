import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <section className="relative flex flex-col md:flex-row items-center md:items-start mt-[50px] p-6 w-full">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-black/60 z-0"
        style={{ backgroundImage: "url('/bgimg.png')" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center ml-[50px] md:items-start w-full px-[20px] md:px-[50px]">
        {/* Left Side: Profile Picture */}
        <div className="w-50 h-50 relative mb-4 mt-[50px] md:mb-0 md:mr-8 rounded-full overflow-hidden">
          <Image
            src="/profile.jpg" // your profile image
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="text-center md:text-left ml-[150px] bg-opacity-0 p-6 rounded ml-[70px] w-[800px]">
          <h1 className="text-3xl font-bold mb-2 text-white">Samyak Bajracharya</h1>
          <p className="text-gray-200 mb-4">
            Hey there! I’m Samyak Bajracharya — a final-year Computer Engineering
            student & front-end enthusiast based in Kathmandu. I craft responsive,
            user-friendly websites using React, HTML, and CSS, with a flair for clean
            code and pixel-perfect design. When I’m not coding, I’m exploring tech
            trends, planning my next creative project, or breaking a sweat with a
            solid 4 a.m. workout! Currently looking for a frontend internship where I
            can grow, build cool stuff, and contribute meaningfully.
          </p>

          {/* Resume Button */}
          <div className="flex justify-center md:justify-start mt-4">
  <a
    href="#projects"
    className="inline-flex items-center gap-2 px-6 py-2 text-white bg-blue-600 hover:bg-red-700 rounded transition"
  >
    <FontAwesomeIcon
      icon={faCloudArrowDown}
      bounce
      style={{ color: "white" }}
    />
    Resume
  </a>
</div>

        </div>
      </div>
    </section>
  );
}
