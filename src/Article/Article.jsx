import { useEffect, useState } from "react";
import { article } from '../api/article.js';
import { Blocks } from '../api/blocks.js';
import { footnotesAtom } from "@/atoms/footnotesAtom.js";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { globalFootnotes } from "@/api/globalFootnotes.js";
import RewriteSheet from "@/Components/Complex/RewriteSheet.jsx";
import { selectedBlockAtom } from "@/atoms/selectedBlockAtom.js";
import { articleAtom } from "@/atoms/articleAtom.js";
import Page from "@/Components/Core/Page.jsx";
import MobileNavbar from "@/Components/Core/Navigation/MobileNavbar.jsx";
import SmNavbar from "@/Components/Core/Navigation/SmNavbar.jsx";
import LgNavbar from "@/Components/Core/Navigation/LgNavbar.jsx";
import ArticleHeader from "@/Components/Core/ArticleHeader.jsx";

const Article = () => {
    const [blocks, setBlocks] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const setArticleData = useSetAtom(articleAtom);
    const setFootnotes = useSetAtom(footnotesAtom);
    const selectedBlock = useAtomValue(selectedBlockAtom);

    console.log('rerendering: ', selectedBlock);

    useEffect(() => {
        setBlocks(Blocks);
        setArticleData(article);
        setFootnotes(globalFootnotes);
    }, []);

    return (
        <>
            <nav className={"h-14 w-full absolute top-0 flex justify-between items-center z-50 font-normal"}>
                <MobileNavbar/>
                <SmNavbar/>
                <LgNavbar/>
            </nav>
            <div
                className={"w-screen max-w-screen min-w-screen h-screen max-h-screen min-h-screen snap-y snap-mandatory overflow-y-scroll"}>
                <RewriteSheet blockData={selectedBlock} open={dialogOpen} onOpenChange={setDialogOpen}/>
                <ArticleHeader/>
                {blocks.map(blockData => (
                    <Page key={blockData.id + '-page'} blockData={blockData} setOpen={setDialogOpen}/>
                ))}
            </div>
        </>
    );
};

export default Article;