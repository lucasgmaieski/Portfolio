import { Button } from "./Button";
import Typewriter from "typewriter-effect";
import { AiOutlineLinkedin} from "react-icons/ai";
import { BiCloudDownload } from "react-icons/bi";
export const Presentation = () => {
    return (
        <div className="py-16 px-2 md:py-28 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-themecolor/[3%] via-themecolor/[1%] to-themecolor/[1%] overflow-hidden">
            <section className="max-w-5xl m-auto flex gap-8 items-center flex-col md:flex-row z-10 relative" id="presentation">
                <div className="md:w-3/5 px-1" data-aos="fade-right" data-aos-duration="1000">
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
                    <div className="flex gap-2 max-[300px]:flex-col sm:gap-3 ">
                        <Button id="curriculo" url="/curriculo" colored={true} text="Currículo"><BiCloudDownload className="text-2xl"/></Button>
                        <Button id="linkedin" url="https://www.linkedin.com/in/lucasgmaieski/" colored={false} text="Linkedin"><AiOutlineLinkedin className="text-2xl"/></Button>
                    </div>
                </div>
                <div className="max-w-md w-4/5 md:w-2/5" data-aos="fade-left" data-aos-duration="1000">
                    <img src="/assets/lucas-png-1024x1024.png" alt="Imagem do desenvolvedor Lucas Maieski" title="Olá, tudo bem?"/>
                </div>
            </section>
        </div>
    );
}