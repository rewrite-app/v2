import TextContent from "@/Components/Text/TextContent.jsx";

const StandardImage = ({ blockData }) => {
    return (
        <div className={'w-full h-full flex flex-col content-center my-2'}>
            <img
                src={blockData.src}
                // width={1200}
                // height={1200}
                className={'border rounded-sm shadow'}
                alt={''}
            />
            <div className={"mt-2"}>
                <TextContent content={blockData.content} className={'text-center text-neutral-500'}/>
            </div>
        </div>
    );
};

export default StandardImage;