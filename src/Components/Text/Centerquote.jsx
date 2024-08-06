import TextContent from "@/Components/Text/TextContent.jsx";

export const Centerquote = ({ blockData }) => {
    return (
        <div className={"my-4"}>
            <hr className={"rounded border-1"}/>
            <blockquote
                className={`text-center italic text-lg px-8 py-6 flex justify-center items-center text-neutral-700`}>
                <TextContent content={blockData.content} className={"text-center"}/>
            </blockquote>
            <hr className={"rounded border-1"}/>
        </div>
    );

};

export default Centerquote;