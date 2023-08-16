import { MdDarkMode } from "react-icons/md";
import { FiMenu, FiSun} from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";
import { Link } from   "react-scroll";

export const Header = () => {
    const { setTheme } = useTheme();

    return (
        <header className="flex justify-between max-w-5xl m-auto items-center bg-transparent">
            <div>
                <img src="/assets/logo" alt="logo" />
            </div>
            <nav className="flex flex-row gap-8 items-center">
                <ul className="flex gap-8 text-yellow-500 font-semibold">
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
                    <FiSun className="cursor-pointer hidden text-white dark:block" onClick={()=>setTheme("dark")}/>
                    <MdDarkMode className="cursor-pointer block text-black dark:hidden" onClick={()=>setTheme("light")}/>
                </div>
            </nav>
            <div className="block sm:hidden"><FiMenu /></div>
        </header>
    );
}
