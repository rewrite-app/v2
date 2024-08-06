import React, { useEffect, useState } from "react";
import { keygen } from "@/api/keygen.js";
import ContentLinkToPage from "@/Components/Text/ContentLinkToPage.jsx";
import Footnote from "@/Components/Interactive/Footnote.jsx";


const TextContent = ({ content, className }) => {
    if (!content) return null;
    if (!Array.isArray(content)) throw new Error("Contents must be an array.");

    const render = (chunk) => {
        const annotationMap = [
            { type: 'italic', component: 'i', condition: !!chunk.annotations?.italic },
            { type: 'bold', component: 'span', condition: !!chunk.annotations?.bold, className: "font-semibold" },
        ];

        const annotatedText = annotationMap.reduce((acc, annotation) => {
            if (annotation.condition) {
                return React.createElement(
                    annotation.component,
                    { key: keygen(), className: annotation.className },
                    acc
                );
            }
            return acc;
        }, chunk.text);

        if (chunk.type === 'link_to_page') {
            return <ContentLinkToPage chunk={chunk}>{annotatedText}</ContentLinkToPage>;
        }

        if (chunk.type === 'footnote') {
            return <Footnote reference_id={chunk.reference_id}/>;
        }

        return annotatedText;
    };

    return (
        <p className={`text-left ${className}`} key={keygen()}>
            {content.map(chunk => render(chunk))}
        </p>
    );
};

export default TextContent;