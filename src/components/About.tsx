import { Link } from "react-scroll";


export const About = () => {
    return (
        <section className="mb-10 mx-2 md:mb-20" id="about">
            <div>
                <h2 className="text-4xl text-bold m-auto relative w-fit before:content-[''] before:absolute before:w-full before:h-1 before:bg-gradient-to-r from-themecolor-500/0 via-themecolor-500 to-themecolor-500/0 before:-bottom-1.5 before:left-0">Sobre mim</h2>
            </div>
            <div className="flex gap-8 items-center flex-col md:flex-row">
                <div className="mt-5 md:w-3/5 md:mt-0">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur architecto iusto vero dolore. Fugiat mollitia dolorum laborum nulla numquam, nobis sed nemo autem atque quidem tenetur architecto. Expedita, qui voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste est, debitis mollitia sunt, nemo ut id voluptatibus officia dolore, laborum sed sequi assumenda dolor enim! Ut explicabo vitae cum.</p>
                </div>
                <div className="max-w-xs">
                    <img src="./src/assets/reactjs.svg" alt="Imagem do desenvolvedor Lucas Maieski" title="Olá, tudo bem?"/>
                </div>
            </div>
        </section>
    );
}