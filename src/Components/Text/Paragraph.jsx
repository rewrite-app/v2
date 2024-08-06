import TextContent from "@/Components/Text/TextContent.jsx";

const Paragraph = ({ blockData }) => {

    return (
        <TextContent content={blockData.content} className={'text-lg leading-7 text-neutral-700 py-1'}/>
    );

};

export default Paragraph;