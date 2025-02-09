import TextContent from "@/Components/Text/TextContent.jsx";

export const Blockquote = ({ blockData }) => {
    return (
        <div
            className={"border-l-4 border-l-orange-500 rounded-lg bg-neutral-100 pl-4 pt-2 pr-4 pb-2 shadow transition ease-in-out my-2"}>
            <blockquote className="text-left">
                <TextContent content={blockData.content} className={"text-md sm:text-2xl/9 text-neutral-600 ps-0"}/>
            </blockquote>
            {blockData.source &&
                <div className={"flex justify-end"}>
                    <a href={blockData.source}
                       className="text-sm sm:text-lg text-right my-0 text-gray-400 font-normal hover:text-blue-500 hover:underline">
                        Source
                    </a>
                </div>
            }
        </div>
    );
};

export default Blockquote;