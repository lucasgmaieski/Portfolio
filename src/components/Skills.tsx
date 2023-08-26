import { Link } from "react-scroll";
import { ListSkills } from "../data/ListSkills";


export const Skills = () => {
    return (
        <section className="mb-10 mx-2 md:mb-20" id="skills">
            <div>
                <h2 className="text-4xl text-bold m-auto relative w-fit before:content-[''] before:absolute before:w-full before:h-1 before:bg-gradient-to-r from-themecolor-500/0 via-themecolor-500 to-themecolor-500/0 before:-bottom-1.5 before:left-0">Habilidades</h2>
            </div>
            <div className="mt-7 px-1 grid grid-cols-4 grid-flow-row gap-4 sm:grid-cols-7 max-[450px]:gap-2 max-[450px]:grid-cols-3">
                { ListSkills.map((item, key)=>(
                    <div key={key} className="group bg-gradient-to-t from-themecolor-500 from-0% via-themecolor-500/40 via-25%  to-themecolor-500/0 to-80% overflow-visible">
                        <div className="flex flex-col items-center justify-center bg-primarylight dark:bg-primarydark m-[2px]  aspect-[3/5]">
                            <div className="pt-4 flex flex-col items-center justify-center">
                                <div className="max-w-full p-2 ">
                                    <img src={item.path} alt="Imagem do desenvolvedor Lucas Maieski" className="w-full -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5"/>
                                </div>
                                <h3 className="opacity-0 group-hover:opacity-100 duration-700 transition text-center leading-4 sm:leading-3 sm:text-sm max-[450px]:text-xs">{item.name}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}