import { Button } from "./Button";
import { PiGithubLogoBold, PiProjectorScreenChartDuotone } from "react-icons/pi";
import { BsWindowFullscreen } from "react-icons/bs";


export const Projects = () => {
    return (
        <div className="pb-10 px-2 md:pb-24 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-themecolor/[3%] via-themecolor/[1%] to-themecolor/[1%] relative overflow-hidden">
            <section className="max-w-5xl m-auto" id="projects">
                <div data-aos="zoom-in" data-aos-duration="1000">
                    <h2 className="text-4xl font-semibold text-bold m-auto relative w-fit before:content-[''] before:absolute before:w-full before:h-1 before:bg-gradient-to-r from-themecolor/0 via-themecolor to-themecolor/0 before:-bottom-1.5 before:left-0">Projetos</h2>
                </div>
                <div className="flex gap-8 mt-10 px-1 items-center flex-col relative z-10">
                    <div className="group bg-gradient-to-t from-themecolor from-0% via-themecolor/50 via-25% to-themecolor/0 to-55%  sm:bg-gradient-to-r" data-aos="fade-right" data-aos-duration="1000">
                        <div className="flex items-center m-1 p-8 sm:pr-0 gap-10 bg-primarylight dark:bg-primarydark flex-col sm:flex-row max-[400px]:p-4">
                            <div className="max-w-full sm:w-[50%] group-hover:drop-shadow-mytheme group-hover:scale-105 transition duration-500 sm:order-2">
                                <img src="/assets/votacao-camara-preview.png" alt="Preview projeto Amper Foods" />
                            </div>
                            <div className="max-w-full text-center sm:text-right sm:w-[50%] h-full flex flex-col justify-between">
                                <h3 className="text-3xl">Votação Câmara</h3>
                                <p className="my-5">Aplicação web para acompanhamento das sessões e votação de projetos da câmara de vereadores. Desenvolvida com Next JS, Typescript, TailwindCSS, Node JS e WebSocket seguindo layout no Figma.</p>
                                <div className="flex justify-center gap-2 sm:gap-5 sm:justify-end">
                                    <Button id="demo" url="https://sistema-votacao-ten.vercel.app/" colored={true} text="Demo"><BsWindowFullscreen className="text-xl"/></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group bg-gradient-to-t from-themecolor from-0% via-themecolor/50 via-25% to-themecolor/0 to-55%  sm:bg-gradient-to-l" data-aos="fade-left" data-aos-duration="1000">
                        <div className="flex items-center m-1 p-8 sm:pl-0 gap-10 bg-primarylight dark:bg-primarydark flex-col sm:flex-row max-[400px]:p-4">
                            <div className="max-w-full sm:w-[50%] group-hover:drop-shadow-mytheme group-hover:scale-105 transition duration-500">
                                <img src="/assets/amper-foods-preview.png" alt="Preview projeto Amper Foods" />
                            </div>
                            <div className="max-w-full text-center sm:text-left sm:w-[50%] h-full flex flex-col justify-between">
                                <h3 className="text-3xl">Amper Foods</h3>
                                <p className="my-5">Aplicação web de pedidos e entrega de comida online. Desenvolvida com React, Typescript, Styled-Components e Firebase.</p>
                                <div className="flex justify-center gap-2 sm:gap-5 sm:justify-start">
                                    <Button id="demo" url="https://amper-foods.vercel.app/" colored={true} text="Demo"><BsWindowFullscreen className="text-xl"/></Button>
                                    <Button id="codigo" url="https://github.com/lucasgmaieski/AmperFoods" colored={false} text="Código"><PiGithubLogoBold className="text-xl"/></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group bg-gradient-to-t from-themecolor from-0% via-themecolor/50 via-25% to-themecolor/0 to-55%  sm:bg-gradient-to-r" data-aos="fade-right" data-aos-duration="1000">
                        <div className="flex items-center m-1 p-8 sm:pr-0 gap-10 bg-primarylight dark:bg-primarydark flex-col sm:flex-row max-[400px]:p-4">
                            <div className="max-w-full sm:w-[50%] group-hover:drop-shadow-mytheme group-hover:scale-105 transition duration-500 sm:order-2">
                                <img src="/assets/portfolio-lucas-preview2.png" alt="Preview projeto Amper Foods" />
                            </div>
                            <div className="max-w-full text-center sm:text-right sm:w-[50%] h-full flex flex-col justify-between">
                                <h3 className="text-3xl">Página Web</h3>
                                <p className="my-5">Página web pessoal para mostrar meus projetos. Desenvolvida com React, Typescript, TailwindCSS e layout criado no Figma.</p>
                                <div className="flex justify-center gap-2 sm:gap-5 sm:justify-end">
                                    <Button id="demo" url="" colored={true} text="Demo"><BsWindowFullscreen className="text-xl"/></Button>
                                    <Button id="codigo" url="https://github.com/lucasgmaieski/Portfolio" colored={false} text="Código"><PiGithubLogoBold className="text-xl"/></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group bg-gradient-to-t from-themecolor from-0% via-themecolor/50 via-25% to-themecolor/0 to-55%  sm:bg-gradient-to-l" data-aos="fade-left" data-aos-duration="1000">
                        <div className="flex items-center m-1 p-8 sm:pl-0 gap-10 bg-primarylight dark:bg-primarydark flex-col sm:flex-row max-[400px]:p-4">
                            <div className="max-w-full sm:w-[50%] group-hover:drop-shadow-mytheme group-hover:scale-105 transition duration-500">
                                <img src="/assets/sayIt-preview.png" alt="Preview projeto Amper Foods" />
                            </div>
                            <div className="max-w-full text-center sm:text-left sm:w-[50%] h-full flex flex-col justify-between">
                                <h3 className="text-3xl">Sonho auto veículos</h3>
                                <p className="my-5">Site institucional de uma revendedora de automoveis. Está sendo desenvolvida com Next JS, Typescript, TailwindCSS e Wordpress como CMS.</p>
                                <div className="flex justify-center gap-2 sm:gap-5 sm:justify-start">
                                    <Button id="demo" url="/" colored={true} text="Demo"><BsWindowFullscreen className="text-xl"/></Button>
                                    <Button id="codigo" url="https://github.com/lucasgmaieski/sonho-auto-veiculos" colored={false} text="Código"><PiGithubLogoBold className="text-xl"/></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group bg-gradient-to-t from-themecolor from-0% via-themecolor/50 via-25% to-themecolor/0 to-55%  sm:bg-gradient-to-r" data-aos="fade-right" data-aos-duration="1000">
                        <div className="flex items-center m-1 p-8 sm:pr-0 gap-10 bg-primarylight dark:bg-primarydark flex-col sm:flex-row max-[400px]:p-4">
                            <div className="max-w-full sm:w-[50%] group-hover:drop-shadow-mytheme group-hover:scale-105 transition duration-500 sm:order-2">
                                <img src="/assets/marcosul-preview.png" alt="Preview projeto Amper Foods" />
                            </div>
                            <div className="max-w-full text-center sm:text-right sm:w-[50%] h-full flex flex-col justify-between">
                                <h3 className="text-3xl">Marcosul Distribuidora</h3>
                                <p className="my-5">Site institucional da empresa Marcosul Distribuidora. Desenvolvido tema no Wordpress utilizando HTML, CSS, JQuery e Php.</p>
                                <div className="flex justify-center gap-2 sm:gap-5 sm:justify-end">
                                    <Button id="demo" url="https://marcosuldistribuidora.com.br/" colored={true} text="Demo"><BsWindowFullscreen className="text-xl"/></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group bg-gradient-to-t from-themecolor from-0% via-themecolor/50 via-25% to-themecolor/0 to-55%  sm:bg-gradient-to-l" data-aos="fade-left" data-aos-duration="1000">
                        <div className="flex items-center m-1 p-8 sm:pl-0 gap-10 bg-primarylight dark:bg-primarydark flex-col sm:flex-row max-[400px]:p-4">
                            <div className="max-w-full sm:w-[50%] group-hover:drop-shadow-mytheme group-hover:scale-105 transition duration-500">
                                <img src="/assets/polidec-preview.png" alt="Preview site Polidec" className="w-full"/>
                            </div>
                            <div className="max-w-full text-center sm:text-left sm:w-[50%] h-full flex flex-col justify-between">
                                <h3 className="text-3xl">Polidec</h3>
                                <p className="my-5">Site institucional da empresa Polidec. Desenvolvido tema no Wordpress utilizando HTML, CSS, JQuery e Php.</p>
                                <div className="flex justify-center gap-2 sm:gap-5 sm:justify-start">
                                    <Button id="demo" url="https://polidec.ind.br/" colored={true} text="Demo"><BsWindowFullscreen className="text-xl"/></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            <div className="absolute hidden md:block text-themecolor/5 dark:text-themecolor/[15%] top-[50%] -translate-y-1/2 z-[0]">
                <PiProjectorScreenChartDuotone className="w-[20vw] h-[20vw] mx-2 my-1"/>
            </div>
        </div>
    );
}