import TextContent from "@/Components/Text/TextContent.jsx";

const H3 = ({ blockData }) => {

    return (
        <h3 className="text-xl">
            <TextContent content={blockData.content}/>
        </h3>
    );

};

export default H3;