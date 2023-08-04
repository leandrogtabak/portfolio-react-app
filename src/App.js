import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App () {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Configura el atributo 'once' para que las animaciones se realicen solo la primera vez
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
