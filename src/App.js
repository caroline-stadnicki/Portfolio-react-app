import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7vy3wCWWzRbaA_aYwSK6TsApMZtwqEmk",
  authDomain: "portfolio-c7a13.firebaseapp.com",
  projectId: "portfolio-c7a13",
  storageBucket: "portfolio-c7a13.appspot.com",
  messagingSenderId: "447007525038",
  appId: "1:447007525038:web:3a1fe27e3b12c65f66453f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
