import { useEffect, useState } from "react";
import Block from "@/Components/Core/Block.jsx";

import { article } from '../api/article.js';
import { Blocks } from '../api/blocks.js';
import ArticleHeader from "@/Components/Text/Headers/ArticleHeader.jsx";
import Attribution from "@/Components/Misc/Attribution.jsx";
import { footnotesAtom } from "@/atoms/footnotesAtom.js";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { globalFootnotes } from "@/api/globalFootnotes.js";
import RewriteSheet from "@/Components/Complex/RewriteSheet.jsx";
import { selectedBlockAtom } from "@/atoms/selectedBlockAtom.js";
import { articleAtom } from "@/atoms/articleAtom.js";
import Footer from "@/Components/Core/Footer.jsx";
import Page from "@/Components/Core/Page.jsx";
import { Avatar, AvatarFallback } from "@/shadcn/components/ui/avatar.jsx";
import MobileNavbar from "@/Components/Core/Navigation/MobileNavbar.jsx";
import SmNavbar from "@/Components/Core/Navigation/SmNavbar.jsx";
import LgNavbar from "@/Components/Core/Navigation/LgNavbar.jsx";

const Article = () => {
    const [blocks, setBlocks] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [articleData, setArticleData] = useAtom(articleAtom);
    const setFootnotes = useSetAtom(footnotesAtom);
    const selectedBlock = useAtomValue(selectedBlockAtom);

    useEffect(() => {
        setBlocks(Blocks);
        setArticleData(article);
        setFootnotes(globalFootnotes);
    }, []);

    return (
        <>
            <nav className={"h-14 w-full fixed flex justify-between items-center z-50"}>
                <MobileNavbar/>
                <SmNavbar/>
                <LgNavbar/>
            </nav>
            <div
                className={"w-screen max-w-screen min-w-screen h-screen max-h-screen min-h-screen snap-y snap-mandatory overflow-y-scroll"}>
                <RewriteSheet blockData={selectedBlock} open={dialogOpen} onOpenChange={setDialogOpen}/>
                {blocks.map(blockData => (
                    <Page key={blockData.id + '-page'} blockData={blockData} setOpen={setDialogOpen}/>
                ))}
            </div>
        </>
    );
};

export default Article;