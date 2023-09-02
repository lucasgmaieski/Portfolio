import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";


export const About = () => {
    return (
        <section className="mb-10 mx-2 md:mb-20 z-10 relative" id="about">
            <div>
                <h2 className="text-4xl text-bold m-auto relative w-fit before:content-[''] before:absolute before:w-full before:h-1 before:bg-gradient-to-r from-themecolor/0 via-themecolor to-themecolor/0 before:-bottom-1.5 before:left-0">Sobre mim</h2>
            </div>
            <div className="flex gap-8 mt-5 px-1 items-center flex-col md:flex-row relative z-10">
                <div className="mt-5 md:w-3/5 md:mt-0">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur architecto iusto vero dolore. Fugiat mollitia dolorum laborum nulla numquam, nobis sed nemo autem atque quidem tenetur architecto. Expedita, qui voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste est, debitis mollitia sunt, nemo ut id voluptatibus officia dolore, laborum sed sequi assumenda dolor enim! Ut explicabo vitae cum.</p>
                </div>
                <div className="max-w-xs">
                   <FaReact className="text-themecolor" size="auto" />
                </div>
            </div>
            <div className="absolute text-themecolor/10 text-8xl -left-[20vw] top-[50%] -translate-y-1/2 z-[0] flex items-center">
                <BsFillPersonLinesFill className="w-[20vw] h-[20vw] mx-2 my-1"/>
            </div>
        </section>
    );
}