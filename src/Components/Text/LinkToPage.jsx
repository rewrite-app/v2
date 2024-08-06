import TextContent from "@/Components/Text/TextContent.jsx";

const LinkToPage = ({ blockData }) => {
    return (
        <a href={blockData.href}>
            <TextContent content={blockData.content}/>
        </a>
    );
};

export default LinkToPage;