import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { MarkdownLink } from "@/components/MarkdownLink";
import { getBlogPostBySlug } from "@/lib/blog";

export const revalidate = 21600;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const buildAlternatesByLocale = (post: {
  slug: string;
  default_locale?: string | null;
  translations?: unknown;
}) => {
  const siteOriginRaw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteOrigin = siteOriginRaw
    ? siteOriginRaw.replace(/\/+$/, "")
    : `https://${(process.env.SITE_DOMAIN || "").replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

  const buildArticleUrl = (articleSlug: string) =>
    siteOrigin ? `${siteOrigin}/blog/${articleSlug}` : `/blog/${articleSlug}`;

  const languages: Record<string, string> = {};
  const defaultLocale = post.default_locale || "fr-FR";
  languages[defaultLocale] = buildArticleUrl(post.slug);

  if (post.translations && typeof post.translations === "object") {
    for (const [locale, value] of Object.entries(
      post.translations as Record<string, unknown>
    )) {
      if (!value || typeof value !== "object") continue;
      const translation = value as Record<string, unknown>;
      const translatedSlug =
        typeof translation.slug === "string" ? translation.slug : "";
      const status =
        typeof translation.status === "string" ? translation.status : "published";

      if (!translatedSlug || status !== "published") continue;
      languages[locale] = buildArticleUrl(translatedSlug);
    }
  }

  return languages;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    alternates: { languages: buildAlternatesByLocale(post) },
    title: post.seo_title || post.h1 || post.slug,
    description: post.meta_description || post.excerpt || "",
    openGraph: post.cover?.file_url
      ? { images: [{ url: post.cover.file_url }] }
      : undefined,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/blog" className="text-sm text-amber-600 hover:text-amber-700 font-medium">
        ← Retour au blog
      </Link>

      <article className="mt-6">
        {/* Cover image */}
        {post.cover?.file_url && (
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.cover.file_url}
              alt={post.cover.alt || post.h1 || post.slug}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          {post.h1 || post.seo_title || post.slug}
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {post.published_at
            ? new Date(post.published_at).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "Date inconnue"}
        </p>

        <div className="prose prose-slate prose-headings:font-bold prose-a:text-amber-600 mt-8 max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
            {post.body_md || post.excerpt || ""}
          </ReactMarkdown>
        </div>

        {/* Author block */}
        {post.author && (
          <div className="flex items-center gap-4 mt-12 pt-8 border-t border-slate-100">
            {post.author.avatar_url && (
              <Image
                src={post.author.avatar_url}
                alt={post.author.name}
                width={64}
                height={64}
                className="rounded-full object-cover flex-shrink-0"
              />
            )}
            <div>
              <p className="font-semibold text-slate-900">{post.author.name}</p>
              {post.author.bio && (
                <p className="text-sm text-slate-500 mt-0.5">{post.author.bio}</p>
              )}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
