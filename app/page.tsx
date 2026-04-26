import AboutPage from "./about/page";
import TechOrbit from "./how/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import NavbarComp from "./navbar/page";
import Home from "./Home/page";

export default function Mainpage() {
  return (
    <>
      <NavbarComp />
      <Home />

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:flex-1" id="about">
          <AboutPage />
        </div>
        <div className="w-full md:flex-1" id="how">
          <TechOrbit />
        </div>
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
