import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { articleAtom } from "@/atoms/articleAtom.js";
import { footnotesAtom } from "@/atoms/footnotesAtom.js";
import { selectedBlockAtom } from "@/atoms/selectedBlockAtom.js";
import { Avatar, AvatarFallback } from "@/shadcn/components/ui/avatar.jsx";

const LgNavbar = () => {
    const articleData = useAtomValue(articleAtom);

    return (
        <>
            <div className={"flex items-center mx-4 bg-white p-2 rounded-lg hidden md:block"}>
                <h1 className={"text-lg text-neutral-400"}>{articleData?.author?.username}</h1>
            </div>
            <div className={"flex items-center mx-4 bg-white p-2 rounded-lg hidden md:block z-50"}>
                <h1 className={"text-lg text-neutral-400"}>{articleData?.title}</h1>
            </div>
        </>
    );

};

export default LgNavbar;
