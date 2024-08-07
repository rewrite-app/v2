import TextContent from "@/Components/Text/TextContent.jsx";

const H1 = ({ blockData, children, className }) => {
    return (
        <h1 className={`text-5xl ${className}`}>
            <TextContent content={blockData?.content}/>
            {children}
        </h1>
    );

};

export default H1;