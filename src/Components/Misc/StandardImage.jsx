import TextContent from "@/Components/Text/TextContent.jsx";

const StandardImage = ({ blockData, edges, floating }) => {
    return (
        <div className={`w-full flex flex-col content-center items-center my-2 ${floating && 'floating'}`}>
            <img
                src={blockData.src}
                className={`rounded-sm ${edges && 'border shadow-lg'} ${floating && 'floating'}`}
                alt={''}
            />
            <div className={"mt-2"}>
                <TextContent content={blockData.content}
                             className={'text-center text-neutral-400 text-sm sm:text-lg'}/>
            </div>
        </div>
    );
};

export default StandardImage;