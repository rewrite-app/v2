import { useAtomValue } from "jotai";
import { footnotesAtom } from "@/atoms/footnotesAtom.js";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/shadcn/components/ui/hover-card.jsx";

const Footnote = ({ reference_id }) => {
    const footnotes = useAtomValue(footnotesAtom);
    const footnote = footnotes.find(footnote => footnote.id === reference_id);

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <HoverCard openDelay={200}>
            <HoverCardTrigger>
                <a className={"text-orange-500 font-medium hover:cursor-pointer"} href={footnote.source}
                   onClick={stopPropagation}>
                    <sup className={'text-md'}>
                        [{footnote.index}]
                    </sup>
                </a>
            </HoverCardTrigger>
            <HoverCardContent>
                <div className={"flex flex-col"}>
                    {footnote.text}
                    <a href={footnote.source}
                       className={"font-normal text-orange-500 truncate"}>{footnote.source}</a>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default Footnote;