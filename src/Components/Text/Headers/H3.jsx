import TextContent from "@/Components/Text/TextContent.jsx";

const H3 = ({ blockData, className, children }) => {

    return (
        <h3 className="">
            <TextContent content={blockData?.content} className={`text-left sm:text-3xl ${className}`}/>
            {children}
        </h3>
    );

};

export default H3;