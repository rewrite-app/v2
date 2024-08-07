import TextContent from "@/Components/Text/TextContent.jsx";
import { keygen } from "@/api/keygen.js";

const Paragraph = ({ blockData }) => {

    return (
        <TextContent content={blockData.content}
                     className={'text-md sm:text-2xl/10 text-neutral-600 py-1'}/>
    );

};

export default Paragraph;