import H1 from "@/Components/Text/Headers/H1.jsx";
import H2 from "@/Components/Text/Headers/H2.jsx";
import H3 from "@/Components/Text/Headers/H3.jsx";
import Paragraph from "@/Components/Text/Paragraph.jsx";
import Blockquote from "@/Components/Text/Blockquote.jsx";
import Centerquote from "@/Components/Text/Centerquote.jsx";
import StandardImage from "@/Components/Misc/StandardImage.jsx";
import RewriteCarousel from "@/Components/Complex/RewriteCarousel.jsx";
import RewriteSheet from "@/Components/Complex/RewriteSheet.jsx";
import RewritePanel from "@/Components/Complex/RewritePanel.jsx";
import Embed from "@/Components/Complex/Embed.jsx";
import EmailSignUp from "@/Components/Interactive/Email.jsx";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineComment, AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";
import { useSetAtom } from "jotai";
import { selectedBlockAtom } from "@/atoms/selectedBlockAtom.js";
import { MdBookmarkBorder } from "react-icons/md";
import RewriteDialog from "@/Components/Complex/RewriteDialog.jsx";
import Info from "@/Components/Interactive/Info.jsx";
import Block from "@/Components/Core/Block.jsx";
import { Avatar, AvatarFallback } from "@/shadcn/components/ui/avatar.jsx";
import { MultiBlock } from "@/Components/Core/MultiBlock.jsx";

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
    multi_block: MultiBlock,
};

const Page = ({ blockData, setOpen, sidebars }) => {
    const [socialData, setSocialData] = useState({});
    const [liked, setLiked] = useState(false);
    const [footnoteData, setFootnoteData] = useState({});
    const setSelectedBlock = useSetAtom(selectedBlockAtom);

    const Component = componentRegistry[blockData.type];

    useEffect(() => {
        setFootnoteData(blockData?.footnote);
        setSocialData(blockData?.social);
    }, []);

    const handleMouseClick = (event) => {
        setSelectedBlock(blockData);
        console.log("block data: ", blockData);
        setOpen(true);
    };

    const handleLikeClick = (event) => {
        setLiked(!liked);
    };

    const renderLSidebar = () => {
        if (sidebars === false) return null;
        return (
            <div className="w-10 mr-4 h-full flex flex-col justify-center items-center content-center hidden sm:block">
                {blockData.footnote?.enabled ?
                    <RewriteDialog Trigger={Info} title={footnoteData.title}>
                        {footnoteData?.blocks?.map(blockData => (
                            <Block key={blockData.id + '-block'} blockData={blockData} sidebars={false}/>
                        ))}
                    </RewriteDialog>
                    : <Avatar>
                        <AvatarFallback className={"bg-orange-400 text-white"}>MM</AvatarFallback>
                    </Avatar>
                }
            </div>
        );
    };

    const renderRSidebar = () => {
        const likes = blockData?.social?.likes;
        const likeIconColor = likes > 0 ? "text-neutral-400" : "text-neutral-300";
        return (
            // mt-56 is the height of the top bar
            <div className={"ml-0 sm:ml-2 w-1/12 sm:w-12 h-full flex flex-col justify-center"}>
                <div
                    className={"w-full mb-3 flex-col justify-center items-center content-center hover:cursor-pointer"}>
                    {liked ?
                        <>
                            <div
                                className={`flex justify-center items-center text-orange-400 transition ease-in-out`}>
                                <AiFillHeart className={`mx-1`} size={"1.7em"} onClick={handleLikeClick}/>
                            </div>
                            <span className={`text-sm font-semibold text-neutral-400`}>
                                {blockData?.social?.likes}
                            </span>
                        </>
                        :
                        <>
                            <div
                                className={`flex justify-center items-center ${likeIconColor} hover:text-orange-400 transition ease-in-out`}>
                                <AiOutlineHeart className={`mx-1`} size={"1.7em"} onClick={handleLikeClick}/>
                            </div>
                            <span className={`text-sm font-semibold text-neutral-400`}>
                                {blockData?.social?.likes}
                            </span>
                        </>
                    }
                </div>
            </div>
        );
    };

    return (
        <div
            className={"w-full h-full flex justify-center snap-always snap-start"}>
            {renderLSidebar()}
            <div
                className={"relative w-10/12 sm:w-8/12 md:w-6/12 pl-3 pr-1 sm:px-4 h-full flex flex-col justify-center hover:cursor-pointer border-s border-neutral-200"}
                onClick={handleMouseClick}
            >
                {blockData && <Component key={blockData.id + '-component'} blockData={blockData}/>}
            </div>
            {renderRSidebar()}
        </div>
    );

};

export default Page;