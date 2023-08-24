import { Link } from "react-scroll";
import { Button } from "./Button";


export const Presentation = () => {
    return (
        <section className="my-20 mx-2 flex gap-8 items-center flex-col md:flex-row" id="presentation">
            <div className="md:w-3/5">
                <h1 className="text-themecolor-500 font-extrabold flex flex-col gap-2 ">
                    <span className="block text-2xl sm:text-2xl md:text-3xl text-black dark:text-white font-normal">Olá! aqui é o </span> 
                    <span className="block text-4xl sm:text-5xl md:text-6xl">Lucas Maieski </span>
                     <span className="block text-2xl sm:text-2xl md:text-3xl font-normal"> Desenvolvedor Front-End</span>
                </h1>
                <p className="my-5">Bem vindo ao meu portfólio! aqui eu apresendo meus projetos, habilidades e informações para contato.</p>
                <div className="flex gap-3">
                    <Button url="/curriculo" colored={true} text="Currículo" />
                    <Button url="https://www.linkedin.com/in/lucasgmaieski/" colored={false} text="Linkedin" />
                </div>
            </div>
            <div className="max-w-xs w-4/5 md:w-2/5">
                <img src="./src/assets/lucas-png-1024x1024.png" alt="Imagem do desenvolvedor Lucas Maieski" title="Olá, tudo bem?"/>
            </div>
        </section>
    );
}