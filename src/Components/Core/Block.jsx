import { useEffect, useMemo, useState } from "react";

import H1 from "@/Components/Text/Headers/H1.jsx";
import H2 from "@/Components/Text/Headers/H2.jsx";
import H3 from "@/Components/Text/Headers/H3.jsx";
import Blockquote from "@/Components/Text/Blockquote.jsx";
import LinkToPage from "@/Components/Text/LinkToPage.jsx";
import RewriteCarousel from "@/Components/Complex/RewriteCarousel.jsx";
import Paragraph from "@/Components/Text/Paragraph.jsx";
import RewritePanel from "@/Components/Complex/RewritePanel.jsx";
import RewriteDialog from "@/Components/Complex/RewriteDialog.jsx";
import StandardImage from "@/Components/Misc/StandardImage.jsx";
import Centerquote from "@/Components/Text/Centerquote.jsx";
import Embed from "@/Components/Complex/Embed.jsx";

import Info from "@/Components/Interactive/Info.jsx";
import { AiOutlineComment } from "react-icons/ai";

import { useSetAtom } from "jotai";
import { selectedBlockAtom } from "@/atoms/selectedBlockAtom.js";
import { permittedSocialTypes } from "@/helpers.js";
import EmailSignUp from "@/Components/Interactive/Email.jsx";
import MultiBlock from "@/Components/Core/MultiBlock.jsx";


export const componentRegistry = {
    h1: H1,
    h2: H2,
    h3: H3,
    paragraph: Paragraph,
    block_quote: Blockquote,
    center_quote: Centerquote,
    image: StandardImage,
    carousel: RewriteCarousel,
    panel: RewritePanel,
    embed: Embed,
    email_signup: EmailSignUp,
    multi_block: MultiBlock,
};

const Block = ({ blockData }) => {
    let conditionalStyle = '';

    if (permittedSocialTypes.includes(blockData.type)) {
        conditionalStyle = 'hover:cursor-pointer';
    }

    const Component = componentRegistry[blockData.type];

    if (!blockData.type) return null;

    return (
        <div
            className="my-0 py-2 w-full max-w-full flex justify-center items-center rounded-lg">
            <div className={`flex-1 ${conditionalStyle} w-full min-w-full max-w-full h-full max-h-full min-h-full`}>
                {blockData &&
                    <Component key={blockData.id + '-component'}
                               blockData={blockData}
                    />
                }
            </div>
        </div>
    );
};

export default Block;