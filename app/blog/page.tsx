import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
    title: "Blog - Conseils sur la Messagerie Orange",
    description: "Découvrez nos articles et conseils pour optimiser votre utilisation de la messagerie Orange. Astuces, tutoriels et bonnes pratiques.",
    keywords: ["blog orange", "conseils messagerie orange", "astuces email orange", "tutoriels orange"],
};

export default async function BlogPage() {
    const posts = await getPublishedBlogPosts(24, 0);

    return (
        <main className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-dark mb-4">
                        Blog <span className="text-orange">Messagerie Orange</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Conseils, tutoriels et bonnes pratiques pour optimiser votre utilisation 
                        de la messagerie Orange.
                    </p>
                </header>

                {posts.length === 0 ? (
                    <div className="card text-center py-16">
                        <img
                            src="/images/faq-section.svg"
                            alt="Blog Messagerie Orange - Articles a venir"
                            className="w-full rounded-lg mb-6 object-cover h-48"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-dark mb-4">Aucun article</h2>
                        <p className="text-gray-600 max-w-md mx-auto mb-8">
                            Aucun article publié pour le moment. Revenez bientôt pour découvrir nos conseils.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/faq" className="btn-secondary">
                                Consulter la FAQ
                            </Link>
                            <Link href="/" className="btn-primary">
                                Retour à l'accueil
                            </Link>
                        </div>
                    </div>
                ) : (
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <li key={post.id} className="card hover:shadow-lg transition-shadow">
                                <h2 className="text-lg font-bold mb-3">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-orange transition-colors">
                                        {post.h1 || post.seo_title || post.slug}
                                    </Link>
                                </h2>
                                {post.meta_description ? (
                                    <p className="text-gray-600 text-sm mb-3">{post.meta_description}</p>
                                ) : post.excerpt ? (
                                    <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                                ) : null}
                                <p className="text-xs text-gray-500">
                                    {post.published_at
                                        ? new Date(post.published_at).toLocaleDateString("fr-FR", {
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric",
                                          })
                                        : "Date inconnue"}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="mt-12 text-center">
                    <Link href="/" className="text-gray-500 hover:text-orange transition-colors">
                        ← Retour à l'accueil
                    </Link>
                </div>
            </div>
        </main>
    );
}
