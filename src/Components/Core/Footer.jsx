const Footer = () => {
    return (
        <div className={"w-full flex justify-center items-center content-center bg-orange-400 h-48"}>
            <div className={"w-[825px] flex justify-between items-center content-center"}>
                <p>© marcelo.app</p>
                <a className={"underline"} href={"https://www.linkedin.com/in/marcelo-mantilla-080410143/"}>
                    linkedin
                </a>
                <a className={"underline"} href={"https://marcelo.app"}>
                    substack
                </a>
                <a className={"underline"} href={"https://x.com/marcelodotapp"}>
                    twitter
                </a>
            </div>
        </div>
    );
};

export default Footer;