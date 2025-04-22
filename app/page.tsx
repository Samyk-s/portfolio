import AboutPage from "./about/page";
import Contact from "./contact/page";
import Home from "./Home/page";
import TechOrbit from "./how/page";
import NavbarComp from "./navbar/page";
import Projects from "./projects/page";


export default function Mainpage() {
  return (
    <>
    <NavbarComp />
    <Home />

    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1}}>
        <AboutPage/>
      </div>
      <div style={{ flex: 1}}>
        <TechOrbit/>
        </div>
    </div>
    <Projects />
    <Contact />
    </>
  );
}
