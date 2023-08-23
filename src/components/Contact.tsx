import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min( 3, {message: 'Nome inválido'}),
    email: z.string().email({message: 'Endereço de email inválido'}),
    message: z.string().min(10, {message: 'Escreva mais por favor'}),
})
type FormProps = z.infer<typeof schema>;

export const Contact = () => {

    const { handleSubmit, register, formState: { errors} } = useForm<FormProps>({mode: 'all', reValidateMode: 'onChange', resolver: zodResolver(schema)});
    const handleForm = async (data: FormProps) => {
        console.log("ta entrando aqui e mostrando os dados: " + data.name + data.email + data.message);
        
        fetch("https://getform.io/f/da934868-03a1-4319-8147-8b048af4516a", {
        method: "POST",
        mode: "no-cors",
        body: data
        })
        .then((res) => res.json)
        .then((json) => console.log("Active Campaign Form Reponse Text: ", json))
        .catch((err) => console.error(err));
    }

    return (
        <section className="" id="contact">
            <div>
                <h2>Contato</h2>
            </div>
            <p>Tem um desáfio para mim? Fique a vontade para me enviar uma mensagem</p>
            <div className="">
                <form action="https://getform.io/f/da934868-03a1-4319-8147-8b048af4516a" method="POST" onSubmit={handleSubmit(handleForm)}>
                    <label htmlFor="name">
                        Nome*:
                        <div className="">
                            <input type="text" id="name" placeholder="Digite seu nome" {...register('name')}/>
                        </div>
                    </label>
                    <label htmlFor="email">
                        Email*:
                        <div className="">
                            <input type="email" id="email" placeholder="Digite seu email" {...register('email')}/>
                        </div>
                    </label>
                    <label htmlFor="message">
                        Mensagem*:
                        <div className="">
                            <textarea id="message" placeholder="Digite sua mensagem" {...register('message')}/>
                        </div>
                    </label>

                    <input type="submit" value="Enviar" />
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