import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Navbar from "../src/components/Navbar";
import Skills from "../src/components/Skills";
import Work from "../src/components/Work";

function App() {
  return (
    <div className="bg-[#0a192f] mb-0 pb-4 flex flex-col justify-between">
    <Navbar  />
    <Home  />
    <About />
    <Work />
    <Contact />
    <Skills />
    <Contact />
  </div>
  );
}

export default App;
