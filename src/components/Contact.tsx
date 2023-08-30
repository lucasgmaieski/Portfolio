import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from "react";
import { Button } from "./Button";

const schema = z.object({
    name: z.string().min( 3, {message: 'Nome inválido'}),
    email: z.string().email({message: 'Endereço de email inválido'}),
    message: z.string().min(10, {message: 'Escreva mais por favor'}),
})
type FormProps = z.infer<typeof schema>;

export const Contact = () => {
    const [sendFormSucess, setSendFormSucess] = useState(true);

    const { handleSubmit, register, reset, formState: { errors} } = useForm<FormProps>({mode: 'all', reValidateMode: 'onChange', resolver: zodResolver(schema)});
    const handleForm = async (data: FormProps) => {
        console.log("ta entrando aqui e mostrando os dados: " + data.name + data.email + data.message);
        // colocar um a no final da url
        fetch("https://getform.io/f/da934868-03a1-4319-8147-8b048af4516", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json' 
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`An error occurred: ${response.statusText}`);
            } else {
                setSendFormSucess(true);
            }
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }
    useEffect(()=> {
        reset();
    }, [sendFormSucess]);

    const handleInputChange = () => {
        setSendFormSucess(false);
    }

    return (
        <section className="mb-10 mx-2 md:mb-20" id="contact">
            <div>
                <h2 className="text-4xl text-bold m-auto relative w-fit before:content-[''] before:absolute before:w-full before:h-1 before:bg-gradient-to-r from-themecolor-500/0 via-themecolor-500 to-themecolor-500/0 before:-bottom-1.5 before:left-0">Contato</h2>
            </div>
            <p className="text-center my-5">Tem um desáfio para mim? Fique a vontade para me enviar uma mensagem</p>
            <div className="flex gap-8 px-1 items-start flex-col md:flex-row">
                <form onSubmit={handleSubmit(handleForm)} className="w-full md:w-1/2 flex flex-col gap-2">
                    <label htmlFor="name">
                        Nome*:
                        <div className="bg-gradient-to-r from-themecolor-500 from-0% via-themecolor-500/50 via-25% to-themecolor-500/0 to-95%">
                            <input type="text" id="name" placeholder="Digite seu nome" {...register('name')} className="m-[3px] w-full p-2 bg-primarylight dark:bg-primarydark focus:outline-none outline-transparent focus:bg-primarylight/90 focus:dark:bg-primarydark/90" onChange={handleInputChange}/>
                        </div>
                        {errors.name && (
                            <span className="block text-xs text-red-500">{errors.name?.message}</span>
                        )}
                    </label>
                    <label htmlFor="email">
                        Email*:
                        <div className="bg-gradient-to-r from-themecolor-500 from-0% via-themecolor-500/50 via-25% to-themecolor-500/0 to-95%">
                            <input type="email" id="email" placeholder="Digite seu email" {...register('email')} className="m-[3px] w-full p-2 bg-primarylight dark:bg-primarydark focus:outline-none outline-transparent focus:bg-primarylight/90 focus:dark:bg-primarydark/90" onChange={handleInputChange}/>
                        </div>
                        {errors.email && (
                            <span className="block text-xs text-red-500">{errors.email?.message}</span>
                        )}
                    </label>
                    <label htmlFor="message">
                        Mensagem*:
                        <div className="bg-gradient-to-r from-themecolor-500 from-0% via-themecolor-500/50 via-25% to-themecolor-500/0 to-95%">
                            <textarea id="message" placeholder="Digite sua mensagem" {...register('message')} className="-mb-[3px] m-[3px] w-full p-2 bg-primarylight dark:bg-primarydark focus:outline-none outline-transparent focus:bg-primarylight/90 focus:dark:bg-primarydark/90" onChange={handleInputChange}/>
                        </div>
                        {errors.message && (
                            <span className="block text-xs text-red-500">{errors.message?.message}</span>
                        )}
                    </label>

                    <div className="overflow-hidden mt-5 m-auto relative w-fit before:content-[''] before:absolute before:w-full before:h-full before:bg-themecolor-500 before:top-0 before:-left-28 hover:before:translate-x-28 before:duration-200 before:transition-transform">
                        <input type="submit" value="Enviar" className="m-auto relative border-2 border-themecolor-500 py-2 px-8 hover:shadow-[rgba(234,_179,_8,_0.3)_0px_0px_16px] font-semibold"/>
                    </div>
                    {sendFormSucess && 
                        <p className="text-lg text-center text-green-500">Obrigado por enviar sua mensagem!</p>
                    }
                </form>
                <div>
                    <Link to={'mailto:lucasgrigol@gmail.com'} target="_blank" className="font-bold flex gap-1 items-center mb-2 duration-500 transition hover:translate-x-3 hover:text-themecolor-500" title=""><AiOutlineMail className="text-themecolor-500 text-4xl"/>lucasgrigol@gmail.com</Link>
                    <Link to={'https://www.linkedin.com/in/lucasgmaieski/'} target="_blank" className="font-bold flex gap-1 items-center mb-2 duration-500 transition hover:translate-x-3 hover:text-themecolor-500" title=""><AiOutlineLinkedin className="text-themecolor-500 text-4xl"/> /lucasgmaieski</Link>
                    <Link to={'https://github.com/lucasgmaieski'} target="_blank" className="font-bold flex gap-1 items-center mb-2 duration-500 transition hover:translate-x-3 hover:text-themecolor-500" title=""><AiFillGithub className="text-themecolor-500 text-4xl"/> /lucasgmaieski</Link>
                    <Link to={'https://wa.me/5546991333202'} target="_blank" className="font-bold flex gap-1 items-center mb-2 duration-500 transition hover:translate-x-3 hover:text-themecolor-500" title=""><BsWhatsapp className="text-themecolor-500 text-4xl p-[2px]"/> (46) 99133 3202</Link>
                </div>
            </div>
            
        </section>
    );
}