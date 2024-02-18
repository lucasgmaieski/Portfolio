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
                {/* <div className="bg-gradient-to-t from-themecolor/40 from-0% via-themecolor/20  to-themecolor/5 to-80%  max-w-md w-4/5 md:w-2/5" data-aos="fade-left" data-aos-duration="1000"> */}
                <div className="group bg-gradient-to-t from-themecolor/40 from-0% via-themecolor/20 via-20% to-themecolor/0 to-100% p-1 max-w-md w-4/5 md:w-2/5" data-aos="fade-left" data-aos-duration="1000">
                    <div className="bg-primarylight dark:bg-primarydark">
                        <img className="relative z-10 group-hover:-translate-y-2 duration-500 transition-all ease-in-out" src="/assets/lucas11.png" alt="Imagem do desenvolvedor Lucas Maieski" title="Olá, tudo bem?"/>
                        <div className="absolute blur-2xl left-0 top-0 z-0 w-full h-3/5 before:content-[''] before:absolute before:left-0 before:z-0 before:w-full before:h-full before:bg-gradient-to-r before:from-themecolor/0 before:from-20% before:via-themecolor/30  before:to-themecolor/0 before:to-80% opacity-70 group-hover:opacity-90 duration-3000 transition-all ease-in-out"></div>
                        <div className="absolute blur-sm left-0 bottom-0 z-0 w-full h-2/5 before:content-[''] before:absolute before:left-0 before:z-0 before:w-full before:h-full before:bg-gradient-to-t before:from-themecolor/30 before:from-0% before:via-themecolor/20 before:to-themecolor/0 before:to-100% opacity-70 group-hover:opacity-90 duration-3000 transition-all ease-in-out"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}