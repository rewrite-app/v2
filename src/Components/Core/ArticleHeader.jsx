import H1 from "@/Components/Text/Headers/H1.jsx";
import { useAtomValue } from "jotai";
import { articleAtom } from "@/atoms/articleAtom.js";
import H2 from "@/Components/Text/Headers/H2.jsx";
import StandardImage from "@/Components/Misc/StandardImage.jsx";
import H3 from "@/Components/Text/Headers/H3.jsx";
import { Avatar } from "@/shadcn/components/ui/avatar.jsx";
import { AvatarFallback } from "@radix-ui/react-avatar";

const ArticleHeader = () => {
    const articleData = useAtomValue(articleAtom);
    const standardImageData = { src: "./article/god-capitalism-geometry.png", content: [] };

    return (
        <div
            className={"w-full h-full snap-always snap-start flex justify-center content-center shadow-3xl shadow-white"}>
            <div
                className={"h-full w-9/12 sm:w-7/12 flex flex-col justify-center content-center items-center"}>
                <div className={"w-96 h-96 flex flex-col justify-center content-center mb-6"}>
                    <StandardImage blockData={standardImageData} edges={false} floating/>
                </div>
                <h1 className={"text-2xl sm:text-5xl/[58px]"}>
                    {articleData?.title}
                </h1>
                <div className={"flex justify-center content-center items-center mt-2 sm:mt-6"}>
                    <h3 className={"sm:text-2xl text-neutral-400 font-light"}>
                        by {articleData?.author?.username}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ArticleHeader;