
type Props = {
    url: string;
    colored: boolean;
    text: string;
}

export const Button = ({url, colored, text}: Props) => {
    return(
        <a href={url} target="_blank" rel="noreferrer" className={`border-2 border-themecolor-500 py-2 px-8 hover:shadow-[rgba(234,_179,_8,_0.3)_0px_0px_16px] max-[400px]:py-1 max-[400px]:px-4 ${colored ? 'bg-themecolor-500 text-white dark:text-black' : 'bg-transparent' }`}>
            {text}
        </a>
    );
}