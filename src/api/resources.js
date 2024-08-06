import { Blocks } from './blocks';


const getHeaderResources = (blockData) => {
    let resources = [];
    resources.push(...getAsideResources(blockData?.footnote));
    resources.push(...getContentResources(blockData?.content));
    return resources;
};

const getParagraphResources = (blockData) => {
    let resources = [];
    resources.push(...getAsideResources(blockData?.footnote));
    resources.push(...getContentResources(blockData?.content));
    return resources;
};

const getBlockquoteResources = (blockData) => {
    const resources = [];

    resources.push(...getAsideResources(blockData?.footnote));
    resources.push(...getContentResources(blockData?.content));
    resources.push(...[{
        href: blockData.source,
        text: null,
        position: null,
    }]);

    return resources;
};

const getCenterquoteResources = (blockData) => {
    const resources = [];
    resources.push(...getAsideResources(blockData?.footnote));
    resources.push(...getContentResources(blockData?.content));
    return resources;
};

const getContentResources = (content) => {
    if (!content?.length) return [];

    let resources = [];
    content.forEach(chunk => {
        if (chunk.type === "link_to_page") {
            resources.push({
                text: chunk.text,
                href: chunk.href || chunk.src,
                position: null,
            });
        }
    });

    return resources;
};

const getPanelResources = (blockData) => {
    let resources = [];
    blockData.items.forEach(item => {
        item.blocks.forEach(block => {
            const getResourcesForBlock = resourceFunctionRegistry[block.type];
            const newResources = getResourcesForBlock(block);
            resources.push(...newResources);
        });
    });
    return resources;
};

const getImageResources = (blockData) => {
    let resources = [];
    resources.push(...getAsideResources(blockData?.footnote));
    resources.push(...getContentResources(blockData?.content));
    return resources;
};

const getEmbedResources = () => {
};

const getAsideResources = (aside) => {
    if (!aside?.enabled) return [];
    if (!aside?.blocks) return [];

    const resources = [];

    aside.blocks.forEach(block => {
        const getResourcesForBlock = resourceFunctionRegistry[block.type];
        const resources = getResourcesForBlock(block);
        resources.push(...resources);
    });

    return resources;
};

const getNullResources = () => {
    return [];
};

const resourceFunctionRegistry = {
    h1: getHeaderResources,
    h2: getHeaderResources,
    h3: getHeaderResources,
    paragraph: getParagraphResources,
    block_quote: getBlockquoteResources,
    carousel: getNullResources,
    sheet: getNullResources,
    panel: getPanelResources,
    dialog: getNullResources,
    image: getImageResources,
    center_quote: getCenterquoteResources,
    embed: getEmbedResources,
};

const getResources = () => {
    const resources = [];

    Blocks.forEach(block => {
        const getResourcesForBlock = resourceFunctionRegistry[block.type];
        const newResources = getResourcesForBlock(block);
        console.log('new resources:', newResources);
        if (newResources.length) resources.push(...newResources);
    });

    console.log('ALL RESOURCES:', resources);

    return resources;
};

export default getResources;