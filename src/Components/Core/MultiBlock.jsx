import Block from "@/Components/Core/Block.jsx";

export const MultiBlock = ({ blockData }) => {
    const blocks = blockData?.blocks;

    return (
        blocks && blocks.map(blockData => (
            <Block key={blockData.id + '-block'} blockData={blockData} sidebars={false}/>
        ))
    );
};

export default MultiBlock;