import { Button } from "./Button";
import Typewriter from "typewriter-effect";


export const Presentation = () => {
    return (
        <div className="py-16 px-2 md:py-28 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-themecolor/[3%] via-themecolor/[1%] to-themecolor/[1%]">
            <section className="max-w-5xl m-auto flex gap-8 items-center flex-col md:flex-row z-10 relative" id="presentation">
                <div className="md:w-3/5">
                    <h1 className="text-themecolor font-extrabold flex flex-col gap-2 ">
                        <span className="block text-2xl sm:text-2xl md:text-3xl text-black dark:text-white font-normal">Olá! aqui é o </span>
                        <span className="block text-4xl sm:text-5xl md:text-6xl">Lucas Maieski </span>
                        <span className="block text-2xl sm:text-2xl md:text-3xl font-semibold">
                             <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString("Desenvolvedor Front-End").pauseFor(2000).start();
                                }}
                                options={{ loop: true }}
                             />
                        </span>
                    </h1>
                    <p className="my-5">Bem vindo ao meu portfólio! aqui eu apresento meus projetos, habilidades e informações para contato.</p>
                    <div className="flex gap-3">
                        <Button url="/curriculo" colored={true} text="Currículo" />
                        <Button url="https://www.linkedin.com/in/lucasgmaieski/" colored={false} text="Linkedin" />
                    </div>
                </div>
                <div className="max-w-md w-4/5 md:w-2/5">
                    <img src="/assets/lucas-png-1024x1024.png" alt="Imagem do desenvolvedor Lucas Maieski" title="Olá, tudo bem?"/>
                </div>
            </section>
        </div>
    );
}