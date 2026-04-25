import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

import { MarkdownLink } from "@/components/MarkdownLink";
import { getBlogPostBySlug } from "@/lib/blog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const buildAlternatesByLocale = (post: { slug: string; default_locale?: string | null; translations?: unknown }) => {
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
    for (const [locale, value] of Object.entries(post.translations as Record<string, unknown>)) {
      if (!value || typeof value !== "object") continue;
      const translation = value as Record<string, unknown>;
      const translatedSlug = typeof translation.slug === "string" ? translation.slug : "";
      const status = typeof translation.status === "string" ? translation.status : "published";

      if (!translatedSlug || status !== "published") continue;
      languages[locale] = buildArticleUrl(translatedSlug);
    }
  }

  return languages;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    alternates: { languages: buildAlternatesByLocale(post) },
    title: post.seo_title || post.h1 || post.slug,
    description: post.meta_description || post.excerpt || "",
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center text-navy hover:text-gold mb-8 text-sm font-medium">
            ← Retour au blog
          </Link>

          {/* Cover Image */}
          {post.cover?.file_url && (
            <div className="mb-10">
              <Image
                src={post.cover.file_url}
                alt={post.cover.alt || post.h1 || post.slug}
                width={800}
                height={400}
                className="w-full rounded-xl shadow-lg object-cover h-64 md:h-80"
                priority
              />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-10 pb-8 border-b border-gray-200">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((cat, index) => (
                  <span key={index} className="px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full">
                    {cat.label}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4 leading-tight">
              {post.h1 || post.seo_title || post.slug}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              {post.author?.name && (
                <span className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-navy/10 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  {post.author.name}
                </span>
              )}
              {post.published_at && (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(post.published_at).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              )}
            </div>
          </header>

          {/* Article Body */}
          <article className="prose-article">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              components={{ 
                a: MarkdownLink,
                img: ({ src, alt }) => (
                  <Image 
                    src={typeof src === 'string' ? src : ''} 
                    alt={alt || ''} 
                    width={800} 
                    height={400}
                    className="rounded-lg shadow-md my-8"
                  />
                )
              }}
            >
              {post.body_md || post.excerpt || ""}
            </ReactMarkdown>
          </article>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link href="/blog" className="btn-secondary">
                ← Retour au blog
              </Link>
              <div className="text-sm text-gray-500">
                Vous avez des questions ? <Link href="/contact" className="text-navy hover:text-gold hover:underline">Contactez-nous</Link>
              </div>
            </div>
          </footer>
        </div>
      </main>
      <Footer />
    </>
  );
}
