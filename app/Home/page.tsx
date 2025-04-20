import Image from "next/image";

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
        <div className="w-70 h-70 relative mb-4 mt-[50px] md:mb-0 md:mr-8 rounded-full overflow-hidden">
          <Image
            src="/project1.png" // your profile image
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Right Side: Text Content (Transparent) */}
        <div className="text-center md:text-left bg-opacity-0 p-6 rounded ml-[70px]">
          <h1 className="text-3xl font-bold mb-2 text-white">John Doe</h1>
          <p className="text-gray-200 mb-4">
            I’m a full-stack developer passionate about creating sleek web
            experiences. I specialize in React, Node.js, and crafting clean
            UI/UX.
          </p>
          {/* Additional content... */}

          {/* Centering the Resume button */}
          <div className="flex justify-center mt-4">
            <a
              href="#projects"
              className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded transition"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
