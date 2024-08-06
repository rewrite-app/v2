import { useEffect, useMemo, useState } from "react";

import H1 from "@/Components/Text/Headers/H1.jsx";
import H2 from "@/Components/Text/Headers/H2.jsx";
import H3 from "@/Components/Text/Headers/H3.jsx";
import Blockquote from "@/Components/Text/Blockquote.jsx";
import LinkToPage from "@/Components/Text/LinkToPage.jsx";
import RewriteCarousel from "@/Components/Complex/RewriteCarousel.jsx";
import Paragraph from "@/Components/Text/Paragraph.jsx";
import RewriteSheet from "@/Components/Complex/RewriteSheet.jsx";
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


export const componentRegistry = {
    h1: H1,
    h2: H2,
    h3: H3,
    paragraph: Paragraph,
    block_quote: Blockquote,
    center_quote: Centerquote,
    image: StandardImage,
    carousel: RewriteCarousel,
    sheet: RewriteSheet,
    panel: RewritePanel,
    embed: Embed,
    email_signup: EmailSignUp,
};

const Block = ({ blockData, sidebars, setOpen }) => {
    const [socialData, setSocialData] = useState({});
    const [footnoteData, setFootnoteData] = useState({});
    const setSelectedBlock = useSetAtom(selectedBlockAtom);

    if (sidebars == null) sidebars = true;

    useEffect(() => {
        setSocialData(blockData.social);
        setFootnoteData(blockData.footnote);
    }, []);

    const handleMouseClick = (event) => {
        setSelectedBlock(blockData);
        setOpen(true);
    };

    const renderLSidebar = () => {
        if (sidebars === false) return null;
        return (
            <div className="w-10 h-full flex flex-col justify-center items-center">
                {blockData.footnote?.enabled ?
                    <RewriteDialog Trigger={Info} title={footnoteData.title}>
                        {footnoteData?.blocks?.map(blockData => (
                            <Block key={blockData.id + '-block'} blockData={blockData} sidebars={false}/>
                        ))}
                    </RewriteDialog>
                    : null
                }
            </div>
        );
    };

    const renderCenterDiv = () => {
        let conditionalStyle = '';

        if (permittedSocialTypes.includes(blockData.type)) {
            conditionalStyle = 'hover:cursor-pointer';
        }

        const Component = componentRegistry[blockData.type];

        return (
            <div className={`flex-1 ${conditionalStyle}`}
                 onClick={handleMouseClick}
            >
                {blockData &&
                    <Component key={blockData.id + '-component'}
                               blockData={blockData}
                    />
                }
            </div>
        );
    };

    const renderRSidebar = () => {
        if (sidebars === false) return null;
        const sidebarCondition = socialData?.enabled && socialData?.numComments !== 0;
        return (
            <div
                className={`w-14 h-full flex space justify-between items-center rounded-xl transition duration-100 ease-in-out hover:cursor-pointer text-neutral-400`}>
                <div className={`flex items-center transition duration-100 hover:text-neutral-500`}>
                    {sidebarCondition &&
                        <>
                            <AiOutlineComment className={`mx-1`} size={"1.7em"} onClick={handleMouseClick}/>
                            <span
                                className="text-sm font-medium">{socialData?.numComments || null}</span>
                        </>
                    }
                </div>
            </div>
        );
    };


    if (!blockData.type) return null;
    return (
        <div
            className="my-0 py-2 w-full max-w-full flex justify-center items-center rounded-lg">
            {renderLSidebar()}
            {renderCenterDiv()}
            {renderRSidebar()}
        </div>
    );
};

export default Block;