import { ReactNode } from "react";

type Props = {
    id: string;
    url: string;
    colored: boolean;
    text: string;
    children: ReactNode;
}

export const Button = ({id, url, colored, text, children}: Props) => {
    return(
        <a href={url} target="_blank" rel="noreferrer" id={id} className={`flex items-center gap-2 font-semibold border-2 border-themecolor py-2 px-6  max-[400px]:py-1 max-[400px]:px-4 duration-500 transition ${colored ? 'bg-themecolor text-white dark:text-black hover:drop-shadow-mytheme' : 'bg-transparent hover:shadow-mybutton hover:shadow-themecolor/40' }`}>
            {children}{text}
        </a>
    );
}