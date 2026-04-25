import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Guides d'Investissement | Conseils et Tutoriels",
    description: "Guides pratiques et tutoriels sur l'investissement : bourse, crypto, immobilier, métaux précieux. Apprenez à investir intelligemment.",
    keywords: ["guides investissement", "tutoriels", "conseils", "apprendre à investir"],
    alternates: {
        canonical: "/guides",
    },
};

export default function GuidesPage() {
    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="hero-section py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                            Nos <span className="text-gold">Guides</span> d&apos;Investissement
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl">
                            Des guides pratiques pour vous accompagner dans votre parcours d&apos;investisseur. 
                            Apprenez les bases et perfectionnez vos connaissances.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-gray-600 mb-12">
                            Nos guides complets sont disponibles sur notre blog. Explorez les différentes 
                            catégories pour approfondir vos connaissances en investissement.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <a href="/blog?categorie=bourse" className="card hover:shadow-xl transition-shadow group">
                                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-navy transition-colors">
                                    <svg className="w-7 h-7 text-navy group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-display font-bold text-navy mb-2">Guide de la Bourse</h3>
                                <p className="text-gray-600 text-sm">
                                    Comprendre les marchés actions, les ETF, le PEA et les stratégies 
                                    d&apos;investissement en bourse.
                                </p>
                            </a>

                            <a href="/blog?categorie=crypto" className="card hover:shadow-xl transition-shadow group">
                                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                                    <svg className="w-7 h-7 text-gold group-hover:text-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-display font-bold text-navy mb-2">Guide Crypto</h3>
                                <p className="text-gray-600 text-sm">
                                    Découvrir le Bitcoin, Ethereum et les cryptomonnaies : fondamentaux, 
                                    risques et stratégies.
                                </p>
                            </a>

                            <a href="/blog?categorie=immobilier" className="card hover:shadow-xl transition-shadow group">
                                <div className="w-14 h-14 bg-emerald/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald transition-colors">
                                    <svg className="w-7 h-7 text-emerald group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-display font-bold text-navy mb-2">Guide Immobilier</h3>
                                <p className="text-gray-600 text-sm">
                                    Investir dans l&apos;immobilier : location, SCPI, SCI, financement 
                                    et optimisation fiscale.
                                </p>
                            </a>

                            <a href="/blog?categorie=metaux-precieux" className="card hover:shadow-xl transition-shadow group">
                                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                                    <svg className="w-7 h-7 text-gold group-hover:text-navy transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-display font-bold text-navy mb-2">Guide Métaux Précieux</h3>
                                <p className="text-gray-600 text-sm">
                                    Investir dans l&apos;or, l&apos;argent et le platine : lingots, pièces, 
                                    ETF et stockage sécurisé.
                                </p>
                            </a>

                            <a href="/blog?categorie=montres" className="card hover:shadow-xl transition-shadow group">
                                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-navy transition-colors">
                                    <svg className="w-7 h-7 text-navy group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-display font-bold text-navy mb-2">Guide Montres</h3>
                                <p className="text-gray-600 text-sm">
                                    Collection de montres de luxe : marques, modèles, authenticité 
                                    et potentiel de apreciación.
                                </p>
                            </a>

                            <a href="/strategies" className="card hover:shadow-xl transition-shadow group">
                                <div className="w-14 h-14 bg-emerald/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald transition-colors">
                                    <svg className="w-7 h-7 text-emerald group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-display font-bold text-navy mb-2">Stratégies par Âge</h3>
                                <p className="text-gray-600 text-sm">
                                    Adaptées à votre situation : investissements optimaux à 20, 30, 
                                    40 ans et plus.
                                </p>
                            </a>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-gray-600 mb-6">
                                Tous nos guides sont的理论理论与实践相结合 pour vous aider à progresser.
                            </p>
                            <a href="/blog" className="btn-secondary">
                                Voir tous les articles
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
