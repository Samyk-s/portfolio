import Contact from "./contact/page";
import Home from "./Home/page";
import NavbarComp from "./navbar/page";
import Projects from "./projects/page";


export default function Mainpage() {
  return (
    <>
    <NavbarComp />
    <Home />
    <Projects />
    <Contact />
    </>
  );
}
