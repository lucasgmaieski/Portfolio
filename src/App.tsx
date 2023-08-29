import "./global.css";
import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Link } from "react-scroll";
import { BsArrowUpCircle } from "react-icons/bs";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if(window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div className="w-full bg-primarylight text-black dark:bg-primarydark dark:text-white relative" id="topo">
      <Header />
      
      <main className="h-fit pt-24 max-w-5xl m-auto">
        
        <Presentation />
        <About />
        <Projects />
        <Skills />
        <Contact />
        {isVisible && 
          <Link to="topo" smooth={true} duration={1000} spy={true} spyThrottle={500} offset={-70} tabIndex={0} className=""><BsArrowUpCircle className="fixed bottom-6 text-themecolor-500 right-3 w-[36px] h-[36px] mx-2 my-1 rounded-full bg-primarylight dark:bg-primarydark shadow-primarydark dark:shadow-primarylight animate-bounce hidden md:block"/></Link>
        }

      </main>
      <footer className="text-center">
        <div className="max-w-[130px] m-auto">
          <img src="./src/assets/lgm-logo-tp.png" alt="Logotipo Lucas Maieski" />
        </div>
        <p>Lucas Maieski &copy; 2023 - Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
