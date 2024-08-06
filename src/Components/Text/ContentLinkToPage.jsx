import * as React from 'react';
import { keygen } from "@/api/keygen.js";

const URL_REGEX = /(?:^|[^\w])(https?:\/\/\S+)/i;

const ContentLinkToPage = ({ chunk, children }) => {
    let url = chunk?.href;
    if (!url) {
        // find url in chunk.text
        const match = chunk?.text?.match(URL_REGEX);
        if (match) url = match[1];

        if (url) {
            url = url.trim();
            if (url.endsWith('.')) url = url.slice(0, -1);
            if (url.endsWith(',')) url = url.slice(0, -1);
        }
    }

    const onClickHandler = (e) => {
        e.stopPropagation();
    };

    return (
        <a href={url}
           key={keygen()}
           className={"text-orange-500 hover:underline"}
           onClick={onClickHandler}
        >
            {children}
        </a>
    );
};

export default ContentLinkToPage;
