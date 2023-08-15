import { MdDarkMode } from "react-icons/md";
import { FiMenu, FiSun} from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";


export const Header = () => {
    const { theme, setTheme } = useTheme();

    return (
        <header className="flex justify-between max-w-5xl m-auto items-center bg-transparent">
            <div>
                <img src="/assets/logo" alt="logo" />
            </div>
            <nav className="flex flex-row gap-8 items-center">
                <ul className="flex gap-8 text-yellow-500 font-semibold">
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li>Habilidades</li>
                    <li>Contato</li>
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
