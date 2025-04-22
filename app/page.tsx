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

      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }} id="about">
          <AboutPage />
        </div>
        <div style={{ flex: 1 }} id="how">
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
