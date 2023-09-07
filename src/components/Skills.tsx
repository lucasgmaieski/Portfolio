import { ListSkills } from "../data/ListSkills";
import { SiJavascript, SiTailwindcss, SiTypescript, SiNextdotjs, SiStyledcomponents, SiBootstrap, SiSass, SiHtml5, SiCss3, SiFirebase, SiGit, SiWordpress, SiPhp, SiFigma } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { PiListChecksBold } from "react-icons/pi";


export const Skills = () => {
    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'FaReact':
              return <FaReact className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl" />;
            case 'SiJavascript':
              return <SiJavascript className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl"/>;
            case 'SiTailwindcss':
              return <SiTailwindcss className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl"/>;
            case 'SiTypescript':
              return <SiTypescript className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl"/>;
            case 'SiNextdotjs':
              return <SiNextdotjs className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl"/>;
            case 'SiStyledcomponents':
              return <SiStyledcomponents className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl"/>;
            case 'SiBootstrap':
              return <SiBootstrap className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl"/>;
            case 'SiSass':
              return <SiSass className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl"/>;
            case 'SiHtml5':
              return <SiHtml5 className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl"/>;
            case 'SiCss3':
              return <SiCss3 className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl"/>;
            case 'SiFirebase':
              return <SiFirebase className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl"/>;
            case 'SiGit':
              return <SiGit className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl"/>;
            case 'SiWordpress':
              return <SiWordpress className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl"/>;
            case 'SiPhp':
              return <SiPhp className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl"/>;
            case 'SiFigma':
              return <SiFigma className="text-themecolor text-8xl sm:text-6xl md:text-7xl lg:text-8xl -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5 max-[550px]:text-7xl max-[450px]:text-8xl max-[400px]:text-7xl max-[320px]:text-6xl"/>;
            default:
              return null;
          }
    }
    return (
        <div className="pb-10 px-2 md:pb-24 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-themecolor/[3%] via-themecolor/[1%] to-themecolor/[1%] relative overflow-hidden">
          <section className="max-w-5xl m-auto" id="skills">
              <div data-aos="zoom-in" data-aos-duration="1000">
                  <h2 className="text-4xl text-bold m-auto relative w-fit before:content-[''] before:absolute before:w-full before:h-1 before:bg-gradient-to-r from-themecolor/0 via-themecolor to-themecolor/0 before:-bottom-1.5 before:left-0">Habilidades</h2>
              </div>
              <div className="mt-7 px-1 grid grid-cols-4 grid-flow-row gap-4 sm:grid-cols-7 max-[450px]:gap-2 max-[450px]:grid-cols-3 relative z-10">
                  { ListSkills.map((item, key)=>(
                      <div key={key} className="group bg-gradient-to-t from-themecolor from-0% via-themecolor/40 via-25%  to-themecolor/0 to-80% overflow-visible" data-aos="flip-up" data-aos-offset="280" data-aos-duration="1000">
                          <div className="flex flex-col items-center justify-center bg-primarylight dark:bg-primarydark m-[2px]  aspect-[3/5]">
                              <div className="pt-4 flex flex-col items-center justify-center">
                                  <div className="max-w-full p-2 ">
                                      {/* <img src={item.path} alt="Imagem do desenvolvedor Lucas Maieski" className="w-full -mb-6 group-hover:-translate-y-6 duration-700 transition max-[450px]:group-hover:-translate-y-5"/> */}
                                      {renderIcon(item.icon)}
                                  </div>
                                  <h3 className="opacity-0 group-hover:opacity-100 duration-700 transition text-center leading-4 sm:leading-3 sm:text-sm max-[450px]:text-xs">{item.name}</h3>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </section>
          <div className="absolute hidden md:block text-themecolor/5 top-[50%] -translate-y-1/2 z-[0]">
              <PiListChecksBold className="w-[20vw] h-[20vw] mx-2 my-1"/>
          </div>
        </div>
        
    );
}
