import { Link } from "react-router-dom";
import { Button } from "./Button";


export const Projects = () => {
    return (
        <section className="mb-10 mx-2 md:mb-20" id="projects">
            <div>
                <h2 className="text-4xl text-bold m-auto relative w-fit before:content-[''] before:absolute before:w-full before:h-1 before:bg-gradient-to-r from-themecolor-500/0 via-themecolor-500 to-themecolor-500/0 before:-bottom-1.5 before:left-0">Projetos</h2>
            </div>
            <div className="flex gap-8 mt-10 px-2 items-center flex-col">
                <div className="group bg-gradient-to-t from-themecolor-500 from-0% via-themecolor-500/50 via-25% to-themecolor-500/0 to-55%  sm:bg-gradient-to-l">
                    <div className="flex items-center m-1 p-8 sm:pl-0 gap-10 bg-primarylight dark:bg-primarydark flex-col sm:flex-row max-[400px]:p-4">
                        <div className="max-w-full sm:max-w-[50%] group-hover:shadow-[rgba(234,_179,_8,_0.5)_0px_-5px_26px] sm:group-hover:shadow-[rgba(234,_179,_8,_0.5)_-5px_0px_26px] group-hover:scale-105 transition duration-500">
                            <img src="./src/assets/amper-foods-preview.png" alt="Preview projeto Amper Foods" />
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
                <div className="group bg-gradient-to-t from-themecolor-500 from-0% via-themecolor-500/50 via-25% to-themecolor-500/0 to-55%  sm:bg-gradient-to-r">
                    <div className="flex items-center m-1 p-8 sm:pr-0 gap-10 bg-primarylight dark:bg-primarydark flex-col sm:flex-row max-[400px]:p-4">
                        <div className="max-w-full sm:max-w-[50%] group-hover:shadow-[rgba(234,_179,_8,_0.5)_0px_-5px_26px] sm:group-hover:shadow-[rgba(234,_179,_8,_0.5)_5px_0px_26px] group-hover:scale-105 transition duration-500 sm:order-2">
                            <img src="./src/assets/portfolio-lucas-preview.png" alt="Preview projeto Amper Foods" />
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
                <div className="group bg-gradient-to-t from-themecolor-500 from-0% via-themecolor-500/50 via-25% to-themecolor-500/0 to-55%  sm:bg-gradient-to-l">
                    <div className="flex items-center m-1 p-8 sm:pl-0 gap-10 bg-primarylight dark:bg-primarydark flex-col sm:flex-row max-[400px]:p-4">
                        <div className="max-w-full sm:max-w-[50%] group-hover:shadow-[rgba(234,_179,_8,_0.5)_0px_-5px_26px] sm:group-hover:shadow-[rgba(234,_179,_8,_0.5)_-5px_0px_26px] group-hover:scale-105 transition duration-500">
                            <img src="./src/assets/sayit-preview.png" alt="Preview projeto Amper Foods" />
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
        </section>
    );
}