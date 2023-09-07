import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { ImSpinner2 } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { db } from "../services/firebaseConfig";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore"; 


const schema = z.object({
    name: z.string().min( 3, {message: 'Nome inválido'}),
    email: z.string().email({message: 'Endereço de email inválido'}),
    message: z.string().min(10, {message: 'Escreva mais por favor'}),
})
type FormProps = z.infer<typeof schema>;

export const Contact = () => {
    const [sendFormSucess, setSendFormSucess] = useState(false);
    const [sendFormError, setSendFormError] = useState(false);
    const [sendingForm, setSendingForm] = useState(false);

    const { handleSubmit, register, reset, formState: { errors} } = useForm<FormProps>({mode: 'all', reValidateMode: 'onChange', resolver: zodResolver(schema)});
    const handleForm = async (data: FormProps) => {
        setSendingForm(true);
        console.log("ta entrando aqui e mostrando os dados: " + data.name + data.email + data.message);
        
        const dateSend =  Timestamp.fromDate(new Date());

        try {
            const messagesCollectionRef = collection(db, 'caixaDeEntrada');
            const dataAtual = new Date(); // Obtém a data e hora atual
            const nomeDocumento = `${data.name}_${dataAtual.getFullYear()}_${(dataAtual.getMonth() + 1).toString().padStart(2, '0')}_${dataAtual.getDate().toString().padStart(2, '0')}_${dataAtual.getHours().toString().padStart(2, '0')}_${dataAtual.getMinutes().toString().padStart(2, '0')}_${dataAtual.getSeconds().toString().padStart(2, '0')}`;
            const newMessageData = { name: data.name, email: data.email, message: data.message, date: dateSend };
            
            const customDocumentRef = doc(messagesCollectionRef, nomeDocumento);
            await setDoc(customDocumentRef, newMessageData);
            setTimeout(() => {
                setSendingForm(false);
                setSendFormSucess(true);
            }, 2000);
        } catch (error) {
            console.log('deu erro' + error);
            setTimeout(() => {
                setSendingForm(false);
                setSendFormError(true);
            }, 2000);
        }
        
    }
    useEffect(()=> {
        reset();
    }, [sendFormSucess]);

    const handleInputChange = () => {
        setSendFormSucess(false);
        setSendFormError(false);
    }

    return (
        <div className="pb-10 px-2 md:pb-20 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-themecolor/[3%] via-themecolor/[1%] to-themecolor/[1%] relative overflow-hidden">
            <section className="max-w-5xl m-auto" id="contact">
                <div data-aos="zoom-in" data-aos-duration="1000">
                    <h2 className="text-4xl text-bold m-auto relative w-fit before:content-[''] before:absolute before:w-full before:h-1 before:bg-gradient-to-r from-themecolor/0 via-themecolor to-themecolor/0 before:-bottom-1.5 before:left-0">Contato</h2>
                </div>
                <p className="text-center my-8">Tem um desafio para mim? Fique a vontade para me enviar uma mensagem</p>
                <div className="flex gap-8 px-1 items-start flex-col md:flex-row relative z-10">
                    <form onSubmit={handleSubmit(handleForm)} className={`w-full md:w-1/2 flex flex-col gap-2 relative `} data-aos="fade-right" data-aos-duration="1000">
                        <label htmlFor="name">
                            Nome*:
                            <div className="bg-gradient-to-r from-themecolor from-0% via-themecolor/50 via-25% to-themecolor/0 to-95%">
                                <input type="text" id="name" placeholder="Digite seu nome" {...register('name')} className="m-[3px] w-full p-2 bg-primarylight dark:bg-primarydark focus:outline-none outline-transparent focus:bg-primarylight/90 focus:dark:bg-primarydark/90" onChange={handleInputChange}/>
                            </div>
                            {errors.name && (
                                <span className="block text-xs text-red-500">{errors.name?.message}</span>
                            )}
                        </label>
                        <label htmlFor="email">
                            Email*:
                            <div className="bg-gradient-to-r from-themecolor from-0% via-themecolor/50 via-25% to-themecolor/0 to-95%">
                                <input type="email" id="email" placeholder="Digite seu email" {...register('email')} className="m-[3px] w-full p-2 bg-primarylight dark:bg-primarydark focus:outline-none outline-transparent focus:bg-primarylight/90 focus:dark:bg-primarydark/90" onChange={handleInputChange}/>
                            </div>
                            {errors.email && (
                                <span className="block text-xs text-red-500">{errors.email?.message}</span>
                            )}
                        </label>
                        <label htmlFor="message">
                            Mensagem*:
                            <div className="bg-gradient-to-r from-themecolor from-0% via-themecolor/50 via-25% to-themecolor/0 to-95% flex">
                                <textarea id="message" placeholder="Digite sua mensagem" {...register('message')} className="m-[3px]  w-full p-2 bg-primarylight dark:bg-primarydark focus:outline-none outline-transparent focus:bg-primarylight/90 focus:dark:bg-primarydark/90 resize-none" onChange={handleInputChange}/>
                            </div>
                            {errors.message && (
                                <span className="block text-xs text-red-500">{errors.message?.message}</span>
                            )}
                        </label>
                        <div className={`overflow-hidden mt-5 m-auto relative w-fit before:content-[''] before:absolute before:w-full before:h-full before:bg-themecolor before:top-0 before:-left-40 ${sendingForm ? 'pointer-events-none' : 'hover:before:translate-x-40'} before:duration-200 before:transition-transform`}>
                            <button type="submit" className={`flex items-center gap-2 m-auto relative border-2 border-themecolor py-2  hover:shadow-[rgba(234,_179,_8,_0.3)_0px_0px_16px] font-semibold ${sendingForm ? 'px-2' : 'px-8'}`}>
                                {sendingForm && <ImSpinner2 className="animate-spin text-themecolor" size={24}/>}
                                {sendingForm ? 'Enviando...' : 'Enviar'}
                            </button>
                        </div>
            
                        {sendFormError &&
                            <p className="text-lg text-center text-red-500">Falha ao enviar mensagem, tente novamente!</p>
                        }
                        {sendFormSucess &&
                            <p className="text-lg text-center text-green-500">Obrigado por enviar sua mensagem!</p>
                        }
                    </form>
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <Link to={'mailto:lucasgrigol@gmail.com'} target="_blank" className="font-bold flex gap-1 items-center mb-2 duration-500 transition-transform hover:translate-x-3 hover:text-themecolor" title=""><AiOutlineMail className="text-themecolor text-4xl"/>lucasgrigol@gmail.com</Link>
                        <Link to={'https://www.linkedin.com/in/lucasgmaieski/'} target="_blank" className="font-bold flex gap-1 items-center mb-2 duration-500 transition-transform hover:translate-x-3 hover:text-themecolor" title=""><AiOutlineLinkedin className="text-themecolor text-4xl"/> /lucasgmaieski</Link>
                        <Link to={'https://github.com/lucasgmaieski'} target="_blank" className="font-bold flex gap-1 items-center mb-2 duration-500 transition-transform hover:translate-x-3 hover:text-themecolor" title=""><AiFillGithub className="text-themecolor text-4xl"/> /lucasgmaieski</Link>
                        <Link to={'https://wa.me/5546991333202'} target="_blank" className="font-bold flex gap-1 items-center mb-2 duration-500 transition-transform hover:translate-x-3 hover:text-themecolor" title=""><BsWhatsapp className="text-themecolor text-4xl p-[2px]"/> (46) 99133 3202</Link>
                    </div>
                </div>
            </section>
            <div className="absolute hidden md:block text-themecolor/5 text-8xl left-0 top-[50%] -translate-y-1/2 z-[0]">
                <MdEmail className="w-[20vw] h-[20vw] mx-2 my-1"/>
            </div>
        </div>
    );
}