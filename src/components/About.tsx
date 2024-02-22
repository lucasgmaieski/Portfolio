import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import { BiSolidUpArrowAlt } from 'react-icons/bi'

export const About = () => {
    const { themeColor ,setThemeColor } = useTheme();
    const [loadingThemeColor, setLoadingThemeColor] = useState(false);

    const themeColors = ['red', 'green', 'blue', 'violet', 'default'];

    const toggleColor = () => {
        const indexThemeColorCurrent = themeColors.indexOf(themeColor);

        if(indexThemeColorCurrent == -1) {
            setThemeColor('default');
        } else {
            setLoadingThemeColor(true);
            setTimeout(() => {
                if((indexThemeColorCurrent + 1) < themeColors.length) setThemeColor(themeColors[indexThemeColorCurrent + 1]);
                else setThemeColor(themeColors[0]);
                setLoadingThemeColor(false);
            }, 1000);
        }
    };

    return (
        <div className="pb-10 px-2 md:pb-24 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-themecolor/[3%] via-themecolor/[1%] to-themecolor/[1%] relative overflow-hidden">
            <section className="max-w-5xl m-auto" id="about">
                <div data-aos="zoom-in" data-aos-duration="1000">
                    <h2 className="text-4xl font-semibold text-bold m-auto relative w-fit before:content-[''] before:absolute before:w-full before:h-1 before:bg-gradient-to-r from-themecolor/0 via-themecolor to-themecolor/0 before:-bottom-1.5 before:left-0">Sobre mim</h2>
                </div>
                <div className="flex gap-8 mt-5 px-1 items-center flex-col md:flex-row relative z-10">
                    <div className="mt-5 md:w-3/5 md:mt-0 text-base" data-aos="fade-right" data-aos-offset="80" data-aos-duration="1000">
                        <p className="mb-3">Meu primeiro contato com a programação foi em 2014, durante a faculdade, e confesso que não foi amor à primeira vista, rs. No entanto, em janeiro de 2022, reencontrei a programação web, e foi então que descobri minha verdadeira paixão e me dedico a ela em tempo integral.</p>
                        <p className="mb-3">Atualmente, trabalho como desenvolvedor front-end, criando temas para WordPress, utilizando tecnologias como HTML, CSS, Scss, JavaScript, PHP, jQuery, Bootstrap e Git. Além disso, estou profundamente envolvido em meus projetos pessoais, nos quais venho aprimorando minhas habilidades com NextJS, ReactJS, TypeScript, Styled-Components e TailwindCSS.</p>
                        <p className="mb-3">Procuro estar sempre a par das novidades para criar interfaces seguindo conceitos modernos e avançados, focadas na usabilidade e experiência do usuário.</p>
                    </div>
                    <div className="max-w-xs w-full h-auto relative max-[460px]:overflow-hidden" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="130">
                       <FaReact className={`svg-about text-themecolor z-10 relative ${loadingThemeColor ? 'animate-spin-slow animate-once animate-duration-1000' : ''}`}/>
                       <div id="btn-change-theme-color" className="absolute w-1/3 h-1/3 translate-y-1/2 -translate-x-1/2 rounded-full bg-themecolor/80 bottom-1/2 left-1/2 z-20 blur-2xl animate-pulse cursor-pointer" title="Clique para mudar a cor" onClick={toggleColor}></div>
                       <p className="text-themecolor justify-center flex items-top"><BiSolidUpArrowAlt className="text-3xl animate-bounce"/> Click no botão!</p>
                    </div>
                </div>
            </section>
            <div className="absolute hidden md:block text-themecolor/5 dark:text-themecolor/[15%] top-[50%] -translate-y-1/2 z-[0]">
                <BsFillPersonLinesFill className="w-[20vw] h-[20vw] mx-2 my-1"/>
            </div>
        </div>
    );
}