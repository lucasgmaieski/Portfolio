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
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Footer } from "./components/Footer";

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
        Aos.init();

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className="w-full bg-primarylight text-black dark:bg-primarydark dark:text-white relative" id="topo">
            <Header />
            
            <main className="h-fit pt-24 z-10">
                <Presentation />
                <About />
                <Projects />
                <Skills />
                <Contact />
                {isVisible && 
                    <Link to="topo" smooth={true} duration={1000} spy={true} spyThrottle={500} offset={-70} tabIndex={0} className=""><BsArrowUpCircle className="fixed z-20 bottom-6 text-themecolor right-3 w-[36px] h-[36px] mx-2 my-1 rounded-full bg-primarylight dark:bg-primarydark shadow-primarydark dark:shadow-primarylight animate-bounce hidden md:block cursor-pointer"/></Link>
                }
            </main>
            
            <Footer />
        </div>
    )
}

export default App
