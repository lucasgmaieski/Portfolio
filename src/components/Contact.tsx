import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

export const Contact = () => {
    return (
        <section className="" id="contact">
            <div>
                <h2>Contato</h2>
            </div>
            <p>Tem um desáfio para mim? Fique a vontade para me enviar uma mensagem</p>
            <div className="">
                <form>
                    <div>
                        <div className="max-w-xs">
                            <img src="./src/assets/reactjs.svg" alt="Imagem do desenvolvedor Lucas Maieski" title="Olá, tudo bem?"/>
                        </div>
                        <h3>React</h3>
                    </div>
                </form>
                <div>
                    <div>
                        <AiOutlineMail /> <Link to={''}>lucasgrigol@gmail.com</Link>
                    </div>
                    <div>
                        <AiOutlineLinkedin /> <Link to={''}>/lucasgmaieski</Link>
                    </div>
                    <div>
                        <AiFillGithub /> <Link to={''}>/lucasgmaieski</Link>
                    </div>
                    <div>
                        <BsWhatsapp /> <Link to={''}>(46) 99133 3202</Link>
                    </div>
                </div>
            </div>
            
        </section>
    );
}