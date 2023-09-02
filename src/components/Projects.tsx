import { Button } from "./Button";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";


export const Projects = () => {
    return (
        <section className="mb-10 mx-2 md:mb-20 z-10 relative" id="projects">
            <div>
                <h2 className="text-4xl text-bold m-auto relative w-fit before:content-[''] before:absolute before:w-full before:h-1 before:bg-gradient-to-r from-themecolor/0 via-themecolor to-themecolor/0 before:-bottom-1.5 before:left-0">Projetos</h2>
            </div>
            <div className="flex gap-8 mt-10 px-1 items-center flex-col relative z-10">
                <div className="group bg-gradient-to-t from-themecolor from-0% via-themecolor/50 via-25% to-themecolor/0 to-55%  sm:bg-gradient-to-l">
                    <div className="flex items-center m-1 p-8 sm:pl-0 gap-10 bg-primarylight dark:bg-primarydark flex-col sm:flex-row max-[400px]:p-4">
                        <div className="max-w-full sm:max-w-[50%] group-hover:drop-shadow-mytheme group-hover:scale-105 transition duration-500">
                            <img src="/assets/amper-foods-preview.png" alt="Preview projeto Amper Foods" />
                        </div>
                        <div className="max-w-full sm:max-w-[50%] h-full flex flex-col justify-between">
                            <h3 className="text-3xl">Amper Foods</h3>
                            <p className="my-5">Aplicação web de pedidos e entrega de comida online. Desenvolvida com React, Typescript, Styled-Components e Firebase.</p>
                            <div className="flex gap-5 justify-center sm:gap-7 sm:justify-start">
                                <Button url="/curriculo" colored={true} text="Demo" />
                                <Button url="https://www.linkedin.com/in/lucasgmaieski/" colored={false} text="Código" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group bg-gradient-to-t from-themecolor from-0% via-themecolor/50 via-25% to-themecolor/0 to-55%  sm:bg-gradient-to-r">
                    <div className="flex items-center m-1 p-8 sm:pr-0 gap-10 bg-primarylight dark:bg-primarydark flex-col sm:flex-row max-[400px]:p-4">
                        <div className="max-w-full sm:max-w-[50%] group-hover:drop-shadow-mytheme group-hover:scale-105 transition duration-500 sm:order-2">
                            <img src="/assets/portfolio-lucas-preview.png" alt="Preview projeto Amper Foods" />
                        </div>
                        <div className="max-w-full sm:max-w-[50%] h-full flex flex-col justify-between items-end">
                            <h3 className="text-3xl">Amper Foods</h3>
                            <p className="my-5 text-right">Aplicação web de pedidos e entrega de comida online. Desenvolvida com React, Typescript, Styled-Components e Firebase.</p>
                            <div className="flex gap-5 justify-center sm:gap-7 sm:justify-start">
                                <Button url="/curriculo" colored={true} text="Demo" />
                                <Button url="https://www.linkedin.com/in/lucasgmaieski/" colored={false} text="Código" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group bg-gradient-to-t from-themecolor from-0% via-themecolor/50 via-25% to-themecolor/0 to-55%  sm:bg-gradient-to-l">
                    <div className="flex items-center m-1 p-8 sm:pl-0 gap-10 bg-primarylight dark:bg-primarydark flex-col sm:flex-row max-[400px]:p-4">
                        <div className="max-w-full sm:max-w-[50%] group-hover:drop-shadow-mytheme group-hover:scale-105 transition duration-500">
                            <img src="/assets/sayIt-preview.png" alt="Preview projeto Amper Foods" />
                        </div>
                        <div className="max-w-full sm:max-w-[50%] h-full flex flex-col justify-between">
                            <h3 className="text-3xl">Amper Foods</h3>
                            <p className="my-5">Aplicação web de pedidos e entrega de comida online. Desenvolvida com React, Typescript, Styled-Components e Firebase.</p>
                            <div className="flex gap-5 justify-center sm:gap-7 sm:justify-start">
                                <Button url="/curriculo" colored={true} text="Demo" />
                                <Button url="https://www.linkedin.com/in/lucasgmaieski/" colored={false} text="Código" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute text-themecolor/10 text-8xl -left-[20vw] top-[50%] -translate-y-1/2 z-[0] flex items-center">
                <PiProjectorScreenChartDuotone className="w-[20vw] h-[20vw] mx-2 my-1"/>
            </div>
        </section>
    );
}