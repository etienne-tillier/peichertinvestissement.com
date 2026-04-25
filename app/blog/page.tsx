import type { Metadata } from "next";
import Link from "next/link";
import ImageFallback from "@/components/ImageFallback";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getPublishedBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
    title: "Blog Investissement | Conseils et Analyses Financières",
    description: "Découvrez nos articles sur l'investissement, la bourse, les cryptomonnaies, l'immobilier et les stratégies financières. Conseils d'experts pour investisseurs.",
    keywords: ["blog investissement", "conseils financiers", "bourse", "crypto", "immobilier", "analyses"],
    alternates: {
        canonical: "/blog",
    },
};

export default async function BlogPage() {
    const posts = await getPublishedBlogPosts(24, 0);

    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="hero-section py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                            Blog <span className="text-gold">Investissement</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl">
                            Conseils, analyses et guides pratiques pour vous aider à investir 
                            intelligemment et atteindre vos objectifs financiers.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {posts.length === 0 ? (
                            <div className="card text-center py-16">
                                <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-display font-bold text-navy mb-4">Aucun article publié</h2>
                                <p className="text-gray-600 max-w-md mx-auto mb-8">
                                    Aucun article n&apos;est disponible pour le moment. Revenez bientôt pour 
                                    découvrir nos conseils et analyses sur l&apos;investissement.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link href="/strategies" className="btn-secondary">
                                        Voir les stratégies
                                    </Link>
                                    <Link href="/" className="btn-primary">
                                        Retour à l&apos;accueil
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <>
                                <p className="text-center text-gray-600 mb-12">
                                    Explorez nos derniers articles sur l&apos;investissement et la finance personnelle.
                                </p>
                                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {posts.map((post) => (
                                        <li key={post.id} className="card hover:shadow-xl transition-shadow group">
                                            {post.cover?.file_url && (
                                                <ImageFallback
                                                    src={post.cover.file_url}
                                                    alt={post.cover.alt || post.h1 || "Article investissement"}
                                                    width={400}
                                                    height={200}
                                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                                />
                                            )}
                                            <h2 className="text-lg font-display font-bold mb-3">
                                                <Link href={`/blog/${post.slug}`} className="text-navy hover:text-gold transition-colors">
                                                    {post.h1 || post.seo_title || post.slug}
                                                </Link>
                                            </h2>
                                            {post.excerpt && (
                                                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{post.excerpt}</p>
                                            )}
                                            <p className="text-xs text-gray-500">
                                                {post.published_at
                                                    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
                                                          year: "numeric",
                                                          month: "long",
                                                          day: "numeric",
                                                      })
                                                    : "Date inconnue"}
                                            </p>
                                            <span className="inline-block mt-4 text-gold font-medium text-sm group-hover:text-gold-dark transition-colors">
                                                Lire la suite →
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <div className="mt-12 text-center">
                            <Link href="/" className="text-navy hover:text-gold transition-colors">
                                ← Retour à l&apos;accueil
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
