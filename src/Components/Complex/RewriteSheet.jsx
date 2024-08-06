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
        const Component = componentRegistry[blockData?.type];
        if (!blockData) return null;

        return (
            <Component key={blockData.id + '-component'} blockData={blockData}/>
        );
    };

    return (
        <Sheet {...props}>
            <SheetContent className={"w-5/12 px-6 pt-8"}>
                <SheetHeader>
                    <SheetTitle className={"text-xl mb-2"}>{articleData?.title}</SheetTitle>
                </SheetHeader>

                <div className={"mt-1 mb-4"}>
                    {renderBlock()}
                </div>

                <hr className={""}/>
                <div className={"py-3 flex justify-between content-center items-center text-neutral-500"}>
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
