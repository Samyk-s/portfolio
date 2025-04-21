import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <section className="relative flex flex-col md:flex-row items-center md:items-start mt-[50px] p-6 w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-black/60 z-0"
        style={{ backgroundImage: "url('/bgimg.png')" }}
      />
     <div className="relative z-10 flex flex-col md:flex-row items-center  ml-[50px] md:items-start w-full px-[20px] md:px-[50px]">
        {/* Left Side: Profile Picture */}
        <div className="w-50 h-50 relative mb-4 mt-[150px] md:mb-0 md:mr-8 rounded-full overflow-hidden">
          <Image
            src="/profile.jpg" // your profile image
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="text-center md:text-left mt-[50px] ml-[150px] bg-opacity-0 p-6 rounded ml-[70px] w-[950px]">
  <h1 className="text-5xl font-bold mb-7 ml-[200px] text-white">Samyak Bajracharya</h1>
  <h2 className="text-3xl font-semibold mb-4 ml-[245px] text-white">Front End Engineer</h2>

  <ul className="text-xl text-white text-left ml-[100px] space-y-3 mt-6 list-disc list-inside">
  <li>🎨 Your <strong>go-to UI/UX guy</strong> — clean, modern, and mobile-first designs that just feel right.</li>
    <li>💻 Building blazing-fast, responsive <strong>React websites</strong> that actually convert.</li>
    <li>🎮 Dabbling in <strong>game dev</strong> — from Unity scenes to 3D madness, let’s make games fun again.</li>
    <li>🧠 Full-cycle problem solver — <strong>design, code, debug, repeat</strong> (with caffeine and good music).</li>
    <li>📈 Writing <strong>semantic HTML</strong>, optimized CSS, and always keeping <strong>SEO in check</strong>.</li>
    <li>🧰 <strong>Version control ninja</strong> — Git, GitHub, API integrations, clean commits, zero drama.</li>
    <li>⚡ Whether it’s a landing page, dashboard, or e-commerce — <strong>I deliver the goods</strong>.</li>
    <li>🤝 Wanna <strong>collab, talk tech, startup ideas, football, or just hang?</strong> I’m always down.</li>
    <li>📬 Open to <strong>projects, gigs, or even catching up over momo and chai</strong> — hit me up!</li>
  </ul>


  <div className="flex justify-center md:justify-start mt-6">
    <a
      href="#projects"
      className="inline-flex items-center gap-2 px-6 py-2 ml-[300px] text-white bg-blue-600 hover:bg-red-700 rounded transition"
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
