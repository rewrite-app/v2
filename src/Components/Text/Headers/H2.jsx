import TextContent from "@/Components/Text/TextContent.jsx";

const H2 = ({ blockData, children, className }) => {
    return (
        <h2 className={`text-2xl mt-4 ${className}`}>
            <TextContent content={blockData?.content}/>
            {children}
        </h2>
    );

};

export default H2;