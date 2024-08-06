import TextContent from "@/Components/Text/TextContent.jsx";

const StandardImage = ({ blockData }) => {
    return (
        <div className={'w-full flex flex-col content-center items-center my-2'}>
            <img
                src={blockData.src}
                className={'border rounded-sm shadow'}
                alt={''}
            />
            <div className={"mt-2"}>
                <TextContent content={blockData.content} className={'text-center text-neutral-400 text-xs sm:text-md'}/>
            </div>
        </div>
    );
};

export default StandardImage;