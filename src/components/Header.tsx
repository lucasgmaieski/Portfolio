import { MdDarkMode, MdEmail } from "react-icons/md";
import { FiMenu, FiSun} from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonLinesFill, BsArrowUpCircle } from "react-icons/bs";
import { PiProjectorScreenChartDuotone, PiListChecksBold } from "react-icons/pi";
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
        <header id="topo" className="w-full py-2 px-2 items-center bg-gradient-to-b from-primarylight via-primarylight to-primarylight/95  dark:bg-gradient-to-b dark:from-primarydark dark:via-primarydark dark:to-primarydark/95 fixed z-50 before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-gradient-to-r before:from-themecolor/0 before:via-themecolor/50 before:to-themecolor/0 before:-bottom-0 before:left-0 ">
            <div className="flex justify-between max-w-5xl m-auto">
                <div className="max-w-[100px]">
                    <img src="./src/assets/lgm-logo-tp.png" alt="logo" tabIndex={0}/>
                </div>
                <nav className="flex flex-row gap-8 items-center">
                    <ul className="gap-8 text-black  dark:text-white font-semibold hidden md:flex">
                        <li className="hover:text-themecolor">
                            <Link to="presentation" smooth={true} duration={1000} offset={-120} className="cursor-pointer" tabIndex={0}>Home</Link>
                        </li>
                        <li className="hover:text-themecolor">
                            <Link to="about" smooth={true} duration={1000} offset={-100} className="cursor-pointer" tabIndex={0}>Sobre</Link>
                        </li>
                        <li className="hover:text-themecolor">
                            <Link to="projects" smooth={true} duration={1000} offset={-100} className="cursor-pointer" tabIndex={0}>Projetos</Link>
                        </li>
                        <li className="hover:text-themecolor">
                            <Link to="skills" smooth={true} duration={1000} offset={-100} className="cursor-pointer" tabIndex={0}>Habilidades</Link>
                        </li>
                        <li className="hover:text-themecolor">
                            <Link to="contact" smooth={true} duration={1000} offset={-100} className="cursor-pointer" tabIndex={0}>Contato</Link>
                        </li>
                    </ul>
                    <div>
                        <FiSun className="w-[28px] h-[28px] cursor-pointer hidden text-white dark:block" onClick={()=>setTheme("dark")} tabIndex={0}/>
                        <MdDarkMode className="w-[28px] h-[28px] cursor-pointer block text-black dark:hidden" onClick={()=>setTheme("light")} tabIndex={0}/>
                    </div>
                
                    <div className= {`bg-gradient-to-r from-themecolor via-themecolor/50 to-themecolor/10 fixed top-1/2 -translate-y-1/2 md:hidden flex items-center justify-center right-0  ${isMenuOpen ? '-translate-x-1' : 'translate-x-11'} transition duration-500`} >
                        <ul className={`text-themecolor font-semibold flex flex-col my-1 py-1 bg-primarylight/80 dark:bg-primarydark/80 transition duration-300 ${isMenuOpen ? 'translate-x-1' : 'translate-x-2'}`}>
                            <li className="opacity-90 hover:opacity-100 hover:text-themecolor-400" title="Home">
                                <Link to="presentation" smooth={true} duration={1000} offset={-120} tabIndex={0}><AiFillHome className="w-[28px] h-[28px] mx-3 my-2"/> </Link>
                            </li>
                            <li className="opacity-90 hover:opacity-100 hover:text-themecolor-400">
                                <Link to="about" smooth={true} duration={1000} offset={-100} tabIndex={0}><BsFillPersonLinesFill className="w-[28px] h-[28px] mx-3 my-2"/></Link>
                            </li>
                            <li className="opacity-90 hover:opacity-100 hover:text-themecolor-400">
                                <Link to="projects" smooth={true} duration={1000} offset={-100} tabIndex={0}><PiProjectorScreenChartDuotone className="w-[28px] h-[28px] mx-3 my-2"/></Link>
                            </li>
                            <li className="opacity-90 hover:opacity-100 hover:text-themecolor-400">
                                <Link to="skills" smooth={true} duration={1000} offset={-100} tabIndex={0}><PiListChecksBold className="w-[28px] h-[28px] mx-3 my-2"/></Link>
                            </li>
                            <li className="opacity-90 hover:opacity-100 hover:text-themecolor-400">
                                <Link to="contact" smooth={true} duration={1000} offset={-100} tabIndex={0}><MdEmail className="w-[28px] h-[28px] mx-3 my-2"/></Link>
                            </li>
                            <li className="opacity-90 hover:opacity-100 hover:text-themecolor-400">
                                <Link to="topo" smooth={true} duration={1000} offset={-100} tabIndex={0}><BsArrowUpCircle className="w-[28px] h-[28px] mx-3 my-2"/></Link>
                            </li>
                        </ul>
                    </div>
                
                    <div className="block top-1/2 md:hidden"><FiMenu className={`w-[32px] h-[32px] stroke-[3px] cursor-pointer text-black dark:text-white hover:text-themecolor dark:hover:text-themecolor focus:border-none focus:outline-none ${isMenuOpen ? 'text-themecolor dark:text-themecolor' : ''}`} onClick={toggleMenu} tabIndex={0}/></div>
                </nav>
            </div>
        </header>
    );
}
