import { useEffect, useRef } from "react";

const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
const asyncRegex = /\basync\b/i;
const srcRegex = /src\s*=\s*["']([^"']+)["']/i;

const extractScriptInfo = (embedString) => {
    const scripts = [];
    let match;

    while ((match = scriptRegex.exec(embedString)) !== null) {
        const scriptTag = match[0];
        const scriptInfo = {
            async: null,
            src: null
        };

        const srcMatch = srcRegex.exec(scriptTag);
        if (srcMatch) scriptInfo.src = srcMatch[1];
        scriptInfo.async = asyncRegex.test(scriptTag);

        scripts.push(scriptInfo);
    }

    return scripts;
};

const Embed = ({ blockData }) => {

    const containerRef = useRef(null);

    const embedString = blockData.src;


    useEffect(() => {
        const loadScript = (src, async = false) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = async;
            document.body.append(script);
        };

        const scriptInfo = extractScriptInfo(embedString);
        scriptInfo.forEach(({ src, async }) => {
            if (src) loadScript(src, async);
        });
    }, [embedString]);

    if (!embedString) return null;

    return (
        <div
            ref={containerRef}
            className={"relative"}
            dangerouslySetInnerHTML={{ __html: embedString }}/>
    );

};

export default Embed;