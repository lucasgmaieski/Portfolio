import { LogoSvg } from "./LogoSvg";


export const Footer = () => {
    

    return (
        <footer className="text-center p-4 sm:p-8">
            <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-themecolor/[3%] via-themecolor/[1%] to-themecolor/[1%]">
                <div className="w-fit m-auto mb-6 group">
                    <LogoSvg />
                </div>
                <p>Lucas Maieski &copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
