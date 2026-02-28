export function injectDofollowMarker(markdown: string): string {
    return markdown.replace(
        /(\[[^\]]+\])\(([^)]+)\)\s*(?:\{dofollow\}|\{do follow\}|dofollow|do follow|do-follow)/gi,
        (_match, textPart, urlPart) => {
            let newUrl = urlPart;
            try {
                const parsed = new URL(urlPart);
                parsed.searchParams.set("__dofollow", "1");
                newUrl = parsed.toString();
            } catch {
                const hashIndex = urlPart.indexOf("#");
                const hash = hashIndex !== -1 ? urlPart.slice(hashIndex) : "";
                const base = hashIndex !== -1 ? urlPart.slice(0, hashIndex) : urlPart;
                const separator = base.includes("?") ? "&" : "?";
                newUrl = `${base}${separator}__dofollow=1${hash}`;
            }
            return `${textPart}(${newUrl})`;
        }
    );
}
