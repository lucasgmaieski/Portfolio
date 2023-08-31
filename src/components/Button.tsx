
type Props = {
    url: string;
    colored: boolean;
    text: string;
}

export const Button = ({url, colored, text}: Props) => {
    return(
        <a href={url} target="_blank" rel="noreferrer" className={`font-semibold border-2 border-themecolor py-2 px-8 hover:drop-shadow-mytheme max-[400px]:py-1 max-[400px]:px-4 duration-500 transition ${colored ? 'bg-themecolor text-white dark:text-black' : 'bg-transparent' }`}>
            {text}
        </a>
    );
}