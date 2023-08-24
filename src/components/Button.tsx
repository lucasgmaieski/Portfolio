
type Props = {
    url: string;
    colored: boolean;
    text: string;
}

export const Button = ({url, colored, text}: Props) => {
    return(
        <a href={url} target="_blank" rel="noreferrer" className={`border-2 border-themecolor-500 py-1 px-3 hover:shadow-[rgba(234,_179,_8,_0.3)_0px_0px_16px] ${colored ? 'bg-themecolor-500 text-white dark:text-black' : 'bg-transparent' }`}>
            {text}
        </a>
    );
}