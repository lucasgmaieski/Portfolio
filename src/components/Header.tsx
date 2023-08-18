import { MdDarkMode } from "react-icons/md";
import { FiMenu, FiSun} from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";
import { Link } from   "react-scroll";
import { useState } from "react";

export const Header = () => {
    const { setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex justify-between max-w-5xl m-auto py-8 px-2 items-center bg-transparent">
            <div>
                <img src="/assets/logo" alt="logo" />
            </div>
            <nav className="flex flex-row gap-8 items-center">
                <ul className="gap-8 text-themecolor-500 font-semibold hidden md:flex">
                    <li>
                        <Link to="presentation" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to="sobre" smooth={true} duration={500}>Sobre</Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>Projetos</Link>
                    </li>
                    <li>
                        <Link to="habilidades" smooth={true} duration={500}>Habilidades</Link>
                    </li>
                    <li>
                        <Link to="contato" smooth={true} duration={500}>Contato</Link>
                    </li>
                </ul>
                <div>
                    <FiSun className="w-[28px] h-[28px] cursor-pointer hidden text-white dark:block" onClick={()=>setTheme("dark")}/>
                    <MdDarkMode className="w-[28px] h-[28px] cursor-pointer block text-black dark:hidden" onClick={()=>setTheme("light")}/>
                </div>
                {isMenuOpen &&
                    <div className=" bg-black opacity-75 fixed top-1/2 translate-y-0.5 right-0 flex items-center justify-center ">
                        <ul className="gap-8 text-themecolor-500 font-semibold flex flex-col">
                            <li>
                                <Link to="presentation" smooth={true} duration={500}>Home</Link>
                            </li>
                            <li>
                                <Link to="sobre" smooth={true} duration={500}>Sobre</Link>
                            </li>
                            <li>
                                <Link to="projects" smooth={true} duration={500}>Projetos</Link>
                            </li>
                            <li>
                                <Link to="habilidades" smooth={true} duration={500}>Habilidades</Link>
                            </li>
                            <li>
                                <Link to="contato" smooth={true} duration={500}>Contato</Link>
                            </li>
                        </ul>
                    </div>
                }
                
                <div className="block  top-1/2 md:hidden"><FiMenu className="w-[28px] h-[28px] cursor-pointer" onClick={toggleMenu}/></div>
            </nav>
        </header>
    );
}
