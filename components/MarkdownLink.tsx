import Link from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type LinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const MarkdownLink = ({ href, children, ...props }: LinkProps) => {
    if (!href) return <a {...props}>{children}</a>;

    const dofollowMarker = "{dofollow}";
    const dofollowMarkerEncoded = "%7Bdofollow%7D";
    const dofollowParam = "__dofollow=1";
    const hasDofollowMarker = href.includes(dofollowMarker) || href.toLowerCase().includes(dofollowMarkerEncoded) || href.includes(dofollowParam);

    let cleanHref = href.replace(dofollowMarker, "").replace(/%7Bdofollow%7D/gi, "");
    if (cleanHref.startsWith("http://") || cleanHref.startsWith("https://")) {
        try { const parsed = new URL(cleanHref); parsed.searchParams.delete("__dofollow"); cleanHref = parsed.toString(); } catch { cleanHref = cleanHref.replace(/[?&]__dofollow=1/g, ""); }
    } else { cleanHref = cleanHref.replace(/[?&]__dofollow=1/g, ""); }

    const isAbsoluteUrl = cleanHref.startsWith("http://") || cleanHref.startsWith("https://");
    if (!isAbsoluteUrl) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <Link href={cleanHref} {...(props as any)}>{children}</Link>;
    }
    const siteDomain = process.env.SITE_DOMAIN || "";
    if (siteDomain && cleanHref.includes(siteDomain)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <Link href={cleanHref} {...(props as any)}>{children}</Link>;
    }
    return (
        <a href={cleanHref} target="_blank" rel={hasDofollowMarker ? "noopener noreferrer" : "nofollow noopener noreferrer"} {...props}>
            {children}
        </a>
    );
};
