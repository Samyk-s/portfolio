import Image from "next/image";

export default function Projects() {
  const items = [
    {
      heading: "Travel Planner",
      imageSrc: "/project1.png",
      link: "https://nepaltravelplanner.vercel.app/",
    },
    {
      heading: "E-commerce",
      imageSrc: "/project2.png",
      link: "https://ecommerce-coral-five.vercel.app/",
    },
    { heading: "AI trash classifier", imageSrc: "/project3.png", link: "https://trash-classifier-ai.vercel.app/" },
    { heading: "Portfolio", imageSrc: "/project4.png", link: "https://samyakbajr.vercel.app/" },
  ];

  return (
    <div id="projects" className="relative min-h-screen text-white text-center">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-black/60 z-0"
        style={{ backgroundImage: "url('/bgimg.png')" }}
      />

      {/* Content */}
      <div className="relative z-10 py-10 px-[50px]">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text [background-image:linear-gradient(to_right,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)]">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-3">{item.heading}</h3>

              {/* Image Container with Hover Button */}
              <div className="w-[450px] h-[300px] relative shadow-lg rounded-lg overflow-hidden group">
                <Image
                  src={item.imageSrc}
                  alt={item.heading}
                  layout="fill"
                  className="object-cover transition-opacity duration-300 group-hover:opacity-70"
                />

                {/* Hover Button */}
                <a
                  href={item.link}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40"
                >
                  <span className="px-4 py-2 border border-white text-white backdrop-blur-sm bg-white/10 rounded hover:bg-white/20 transition">
                    To the project
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
