import { Link } from "react-scroll";


export const Presentation = () => {
    return (
        <section className="" id="presentation">
            <div>
                <h1 className="">
                    <span>Olá! aqui é o </span> <br />
                    Lucas Maieski <br />
                     <span> Desenvolvedor Front-End</span>
                </h1>
                <p>Bem vindo ao meu portfólio! aqui eu apresendo meus projetos, habilidades e informações para contato.</p>
                <div>
                    <Link to="download-curriculo" />
                    <Link to="www.linkedin.com/in/lucasgmaieski" />
                </div>
            </div>
            <div className="max-w-xs">
                <img src="./src/assets/lucas-png-1024x1024.png" alt="Imagem do desenvolvedor Lucas Maieski" title="Olá, tudo bem?"/>
            </div>
        </section>
    );
}