import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div className="bg-[#0a192f] mb-0 pb-4 flex flex-col">
    <Navbar className="flex" />
    <Home className="flex" />
    <About className="flex"/>
    <Work className="flex"/>
    <Skills className="flex"/>
    <Contact className="flex"/>
  </div>
  );
}

export default App;
