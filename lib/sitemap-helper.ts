import { getBlogPostsForSitemap } from "./blog";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://messagerieorange.fr";

const FR_STATIC_PAGES = [
    "",
    "/blog",
    "/connexion",
    "/faq",
    "/contact",
];

const EN_STATIC_PAGES = [
    "/en",
    "/en/blog",
    "/en/login",
    "/en/faq",
    "/en/contact",
];

const ES_STATIC_PAGES = [
    "/es",
    "/es/blog",
    "/es/login",
    "/es/faq",
    "/es/contact",
];

const DE_STATIC_PAGES = [
    "/de",
    "/de/blog",
    "/de/login",
    "/de/faq",
    "/de/contact",
];

const IT_STATIC_PAGES = [
    "/it",
    "/it/blog",
    "/it/login",
    "/it/faq",
    "/it/contact",
];

export async function generateSitemapXml(lang: string) {
    const staticPages = {
        fr: FR_STATIC_PAGES,
        en: EN_STATIC_PAGES,
        es: ES_STATIC_PAGES,
        de: DE_STATIC_PAGES,
        it: IT_STATIC_PAGES,
    }[lang] || FR_STATIC_PAGES;

    const posts = await getBlogPostsForSitemap(lang);
    let urls: { loc: string; lastmod: string }[] = [];

    if (lang === "fr") {
        urls = staticPages.map((route) => ({
            loc: `${BASE_URL}${route}`,
            lastmod: new Date().toISOString(),
        }));
    } else {
        urls = staticPages.map((route) => ({
            loc: `${BASE_URL}${route}`,
            lastmod: new Date().toISOString(),
        }));
    }

    urls = [
        ...urls,
        ...posts.map((post) => ({
            loc: `${BASE_URL}/blog/${post.slug}`,
            lastmod: post.updated_at ?? new Date().toISOString(),
        })),
    ];

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${urls.map((url) => `
    <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${url.loc === BASE_URL + "/" ? "1.0" : "0.8"}</priority>
    </url>`).join("")}
</urlset>`;
}
