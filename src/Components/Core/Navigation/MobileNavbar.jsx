import { Avatar, AvatarFallback } from "@/shadcn/components/ui/avatar.jsx";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { articleAtom } from "@/atoms/articleAtom.js";
import { footnotesAtom } from "@/atoms/footnotesAtom.js";
import { selectedBlockAtom } from "@/atoms/selectedBlockAtom.js";

const MobileNavbar = () => {
    const articleData = useAtomValue(articleAtom);

    return (
        <>
            <div className={"sm:hidden"}/>
            <div className={"flex items-center mx-4 bg-white p-2 rounded-lg sm:hidden"}>
                <h1 className={"text-lg text-neutral-400 mr-2"}>{articleData?.author?.username}</h1>
                <Avatar>
                    <AvatarFallback className={"bg-orange-400 text-white"}>MM</AvatarFallback>
                </Avatar>
            </div>
        </>
    );
};

export default MobileNavbar;