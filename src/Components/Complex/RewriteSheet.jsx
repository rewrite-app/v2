import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader, SheetOverlay,
    SheetTitle,
    SheetTrigger,
} from "@/shadcn/components/ui/sheet";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { articleAtom } from "@/atoms/articleAtom.js";
import TextContent from "@/Components/Text/TextContent.jsx";
import { componentRegistry } from "@/Components/Core/Block.jsx";
import { permittedSocialTypes } from "@/helpers.js";

// Icons
import { MdBookmarkBorder } from "react-icons/md";
import { MdBookmark } from "react-icons/md";
import { AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEllipsis } from "react-icons/ai";


const RewriteSheet = ({ blockData, ...props }) => {
    const articleData = useAtomValue(articleAtom);
    const [socialData, setSocialData] = useState(blockData?.social);

    if (!permittedSocialTypes.includes(blockData?.type)) {
        return null;
    }

    const renderBlock = () => {
        console.log('SHEET blockData', blockData);
        const Component = componentRegistry[blockData?.type];
        if (!blockData) return null;

        return (
            <Component key={blockData.id + '-component'} blockData={blockData}/>
        );
    };

    return (
        <Sheet {...props}>
            <SheetContent className={"w-11/12 sm:w-8/12 md:w-6/12 max-w-[520px] px-6 pt-8"}>
                <SheetHeader>
                    <SheetTitle className={"text-left text-xl sm:text-2xl"}>{articleData?.title}</SheetTitle>
                </SheetHeader>

                <div className={"mt-4 mb-8"}>
                    {renderBlock()}
                </div>

                <hr className={""}/>
                <div className={"py-3 flex justify-between content-center items-center text-neutral-400"}>
                    <AiOutlineComment className={"text-2xl"}/>
                    <AiOutlineHeart className={"text-2xl"}/>
                    <MdBookmarkBorder className={"text-2xl"}/>
                    <AiOutlineEllipsis className={"text-2xl"}/>
                </div>
                <hr className={""}/>
                <div className={"h-16 flex-col items-center content-center"}>
                    <p className={"text-center text-neutral-500"}>
                        Comments section in progress.
                    </p>
                </div>

            </SheetContent>
        </Sheet>
    );
};

export default RewriteSheet;
