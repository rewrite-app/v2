import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { articleAtom } from "@/atoms/articleAtom.js";
import { footnotesAtom } from "@/atoms/footnotesAtom.js";
import { selectedBlockAtom } from "@/atoms/selectedBlockAtom.js";
import { Avatar, AvatarFallback } from "@/shadcn/components/ui/avatar.jsx";

const SmNavbar = () => {
    const articleData = useAtomValue(articleAtom);

    return (
        <>
            <div className={"hidden sm:block md:hidden"}/>
            <div className={"flex items-center mx-4 bg-white p-2 rounded-lg hidden sm:block md:hidden"}>
                <h1 className={"text-lg text-neutral-400"}>{articleData?.title}</h1>
            </div>
        </>
    );

};

export default SmNavbar;