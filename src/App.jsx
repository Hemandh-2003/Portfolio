import Navbar from "./components/layout/navbar/Navbar";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Skills from "./components/sections/skills";
import Projects from "./components/sections/projects";
import Experience from "./components/sections/experience";
import Contact from "./components/sections/contact";
import AIChat from "./components/ai";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <AIChat />
      <Footer />
    </>
  );
}

export default App;