import TextContent from "@/Components/Text/TextContent.jsx";

const ArticleHeader = ({ children }) => {
    return (
        <h1 className={"text-5xl mb-0 mt-12 text-left"} style={{ lineHeight: "55px" }}>
            {children}
        </h1>
    );

};

export default ArticleHeader;