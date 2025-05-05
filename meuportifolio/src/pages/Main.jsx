import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import AnimatedBackground from "../components/AnimatedBackground";


const Main = () => {
  return (
    <>
        <AnimatedBackground />
        <Home />
        <About />
        <Skills />
        <Projects />
    </>
  );
};

export default Main;