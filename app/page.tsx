import Link from "next/link";
import ImageFallback from "@/components/ImageFallback";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getPublishedBlogPosts } from "@/lib/blog";

export default async function HomePage() {
    const posts = await getPublishedBlogPosts(3, 0);
    const hasPosts = posts && posts.length > 0;

    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="hero-section relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-emerald/20"></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight text-white">
                                    Conseils Investissement | Stratégies selon votre âge et votre situation
                                </h1>
                                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                                    Investir intelligemment selon vos objectifs, votre horizon temporal et votre tolérance au risque. 
                                    Nos guides vous accompagnent dans toutes les phases de votre vie financière : de vos premiers investissements 
                                    à 20 ans jusqu&apos;à la constitution d&apos;un patrimoine robuste à 40 ans et au-delà.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/strategies" className="btn-primary">
                                        Découvrir mes stratégies
                                    </Link>
                                    <Link href="/classes-actifs" className="btn-secondary border-white text-white hover:bg-white hover:text-navy">
                                        Explorer les classes d&apos;actifs
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <ImageFallback
                                    src="/images/hero.jpeg"
                                    alt="Conseils investissement stratégie financière réussite"
                                    width={600}
                                    height={400}
                                    className="rounded-xl shadow-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hero Image Mobile */}
                <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12 relative z-20">
                    <ImageFallback
                        src="/images/hero.jpeg"
                        alt="Conseils investissement stratégie financière réussite"
                        width={1200}
                        height={400}
                        className="w-full rounded-xl shadow-2xl object-cover"
                    />
                </div>

                {/* Section Stratégies par Âge */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="section-title">
                                Stratégies d&apos;Investissement <span className="text-gold">par Tranche d&apos;Âge</span>
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                Chaque étape de votre vie nécessite une approche différente. Découvrez les stratégies 
                                d&apos;investissement optimales adaptées à votre situation financière et vos objectifs.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* 20-30 ans */}
                            <div className="card hover:shadow-xl transition-shadow group">
                                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold transition-colors">
                                    <svg className="w-8 h-8 text-navy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-display font-bold text-navy text-center mb-3">20-30 ans</h3>
                                <p className="text-gray-600 text-sm text-center mb-4">
                                    L&apos;avenir devant vous. Profitez d&apos;un horizon long pour maximiser votre épargne 
                                    et commencer à investir précocement dans l&apos;immobilier et les marchés financiers.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald">✓</span>
                                        <span>Profil agressif toléré</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald">✓</span>
                                        <span>Assurance-vie et PEA</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald">✓</span>
                                        <span>Investissement initial bourse</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald">✓</span>
                                        <span>Épargne de précaution</span>
                                    </li>
                                </ul>
                                <Link href="/strategies#20-30-ans" className="btn-secondary w-full text-center block">
                                    Stratégie 20-30 ans
                                </Link>
                            </div>

                            {/* 30-40 ans */}
                            <div className="card hover:shadow-xl transition-shadow group">
                                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold transition-colors">
                                    <svg className="w-8 h-8 text-gold group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-display font-bold text-navy text-center mb-3">30-40 ans</h3>
                                <p className="text-gray-600 text-sm text-center mb-4">
                                    La période de consolidation. Commencez à diversifier votre patrimoine tout en 
                                    préparant les projets majeurs : mariage, enfants, immobilier.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald">✓</span>
                                        <span>Diversification du portefeuille</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald">✓</span>
                                        <span>Investissement immobilier</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald">✓</span>
                                        <span>Allocation équilibrée</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald">✓</span>
                                        <span>Planification retraite</span>
                                    </li>
                                </ul>
                                <Link href="/strategies#30-40-ans" className="btn-secondary w-full text-center block">
                                    Stratégie 30-40 ans
                                </Link>
                            </div>

                            {/* 40 ans et plus */}
                            <div className="card hover:shadow-xl transition-shadow group">
                                <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald transition-colors">
                                    <svg className="w-8 h-8 text-emerald group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-display font-bold text-navy text-center mb-3">40 ans et plus</h3>
                                <p className="text-gray-600 text-sm text-center mb-4">
                                    L&apos;accent sur la préservation et la transmission. Optimisez votre fiscalité 
                                    et constituez un patrimoine robuste pour la retraite et vos héritiers.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald">✓</span>
                                        <span>Profil défensif</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald">✓</span>
                                        <span>Immobilier locatif</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald">✓</span>
                                        <span>Optiques et SCPI</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald">✓</span>
                                        <span>Assurance-vie premium</span>
                                    </li>
                                </ul>
                                <Link href="/strategies#40-plus" className="btn-secondary w-full text-center block">
                                    Stratégie 40+ ans
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Image Stratégies */}
                <section className="py-12 bg-cream">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <ImageFallback
                                src="/images/strategies.jpeg"
                                alt="Stratégies investissement planification financière par âge"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg"
                            />
                            <div>
                                <h2 className="section-title">
                                    Pourquoi Investir <span className="text-gold">selon votre Âge</span> ?
                                </h2>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    La question n&apos;est pas seulement <strong>quand investir</strong>, mais <strong>comment investir</strong> 
                                    en fonction de votre situation personnelle. Un jeune de 25 ans peut se permettre une volatilité 
                                    élevée avec un portefeuille actions majoritaire, tandis qu&apos;un investisseur de 45 ans cherchera 
                                    à préserver son capital tout en générant des revenus complémentaires.
                                </p>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Nos stratégies d&apos;investissement sont conçues pour s&apos;adapter à chaque étape de votre vie. 
                                    Elles prennent en compte votre capacité d&apos;épargne, votre horizon de placement, votre situation 
                                    familiale et professionnelle, ainsi que vos objectifs financiers à court, moyen et long terme.
                                </p>
                                <p className="text-gray-700 mb-8 leading-relaxed">
                                    Que vous soyez entrepreneur, salarié, fonctionnaire ou freelancer, nos conseils vous aideront 
                                    à construire un plan d&apos;investissement personnalisé et efficient, optimisé pour votre 
                                    profil unique d&apos;investisseur.
                                </p>
                                <Link href="/strategies" className="btn-primary">
                                    En savoir plus sur les stratégies
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Classes d'Actifs */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="section-title">
                                Nos <span className="text-gold">Classes d&apos;Actifs</span>
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                Diversifiez votre patrimoine en explorant les différentes classes d&apos;actifs. 
                                Chacune présente ses propres caractéristiques de risque, rendement et liquidité.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {/* Bourse */}
                            <Link href="/classes-actifs#bourse" className="card hover:shadow-lg transition-shadow text-center group">
                                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy transition-colors">
                                    <svg className="w-7 h-7 text-navy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="font-display font-bold text-navy mb-2">Bourse</h3>
                                <p className="text-gray-600 text-xs">Actions, ETF, OPCVM</p>
                            </Link>

                            {/* Crypto */}
                            <Link href="/classes-actifs#crypto" className="card hover:shadow-lg transition-shadow text-center group">
                                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold transition-colors">
                                    <svg className="w-7 h-7 text-gold group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-display font-bold text-navy mb-2">Crypto</h3>
                                <p className="text-gray-600 text-xs">Bitcoin, Ethereum, Altcoins</p>
                            </Link>

                            {/* Immobilier */}
                            <Link href="/classes-actifs#immobilier" className="card hover:shadow-lg transition-shadow text-center group">
                                <div className="w-14 h-14 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald transition-colors">
                                    <svg className="w-7 h-7 text-emerald group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <h3 className="font-display font-bold text-navy mb-2">Immobilier</h3>
                                <p className="text-gray-600 text-xs">Locations, SCPI, SCI</p>
                            </Link>

                            {/* Métaux précieux */}
                            <Link href="/classes-actifs#metaux-precieux" className="card hover:shadow-lg transition-shadow text-center group">
                                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold transition-colors">
                                    <svg className="w-7 h-7 text-gold group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 3z" />
                                    </svg>
                                </div>
                                <h3 className="font-display font-bold text-navy mb-2">Métaux précieux</h3>
                                <p className="text-gray-600 text-xs">Or, Argent, Platine</p>
                            </Link>

                            {/* Montres */}
                            <Link href="/classes-actifs#montres" className="card hover:shadow-lg transition-shadow text-center group">
                                <div className="w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy transition-colors">
                                    <svg className="w-7 h-7 text-navy group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-display font-bold text-navy mb-2">Montres</h3>
                                <p className="text-gray-600 text-xs">Rolex, Patek, Omega</p>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Section Image Classes d'Actifs */}
                <section className="py-12 bg-cream">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="section-title">
                                    Diversification : La Clé du <span className="text-gold">Succès</span>
                                </h2>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    La diversification de votre patrimoine est le fondement même de toute stratégie 
                                    d&apos;investissement performante. En répartissant vos investissements entre différentes 
                                    classes d&apos;actifs, vous réduisez votre risque global tout en optimisant votre 
                                    potentiel de rendement à long terme.
                                </p>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Un portefeuille bien diversifié combine des actifs avec des corrélations faibles 
                                    ou négatives entre eux. Quand les marchés actions baissent, les actifs refuges 
                                    comme l&apos;or ou l&apos;immobilier peuvent maintenir leur valeur, voire s&apos;apprécier.
                                </p>
                                <p className="text-gray-700 mb-8 leading-relaxed">
                                    Nos experts vous conseillent sur la meilleure allocation d&apos;actifs selon votre 
                                    profil de risque, votre horizon d&apos;investissement et vos objectifs financiers. 
                                    Découvrez comment construire un portefeuille resilient et adapté à votre situation.
                                </p>
                                <Link href="/classes-actifs" className="btn-primary">
                                    Découvrir les classes d&apos;actifs
                                </Link>
                            </div>
                            <ImageFallback
                                src="/images/assets.jpeg"
                                alt="Diversification portefeuille investissement classes d'actifs"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* Section Expertise */}
                <section className="py-16 bg-navy text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <ImageFallback
                                src="/images/expertise.jpeg"
                                alt="Expert conseil investissement stratégie financière"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg"
                            />
                            <div>
                                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                                    Notre <span className="text-gold">Expertise</span> à votre Service
                                </h2>
                                <p className="text-white/80 mb-6 leading-relaxed">
                                    Peichert Investissement vous accompagne dans toutes vos décisions d&apos;investissement. 
                                    Notre approche pédagogique et transparente vous permet de comprendre les mécanismes 
                                    des marchés financiers et de prendre des décisions éclairées.
                                </p>
                                <p className="text-white/80 mb-6 leading-relaxed">
                                    Nous croyons fermement que l&apos;éducation financière est la clé de l&apos;indépendance financière. 
                                    C&apos;est pourquoi nos guides sont conçus pour être accessibles à tous, des débutants 
                                    absolue aux investisseurs expérimentés souhaitant perfectionner leur stratégie.
                                </p>
                                <p className="text-white/80 mb-8 leading-relaxed">
                                    Nos conseils sont basés sur des données factuelles, des analyses de marché rigoureuses 
                                    et des principes financiers éprouvés. Nous ne promettons pas de rendements miracles, 
                                    mais une approche sérieuse et méthodique pour faire fructifier votre patrimoine.
                                </p>
                                <Link href="/a-propos" className="btn-primary">
                                    En savoir plus sur nous
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Blog - Conditionnal */}
                {hasPosts && (
                    <section className="py-16 bg-cream">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="section-title">
                                    Articles <span className="text-gold">Récents</span>
                                </h2>
                                <p className="text-gray-600">
                                    Nos derniers articles sur l&apos;investissement et la finance personnelle
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                {posts.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/blog/${post.slug}`}
                                        className="card hover:shadow-xl transition-shadow group"
                                    >
                                        {post.cover?.file_url && (
                                            <ImageFallback
                                                src={post.cover.file_url}
                                                alt={post.cover.alt || post.h1 || "Article investissement"}
                                                width={400}
                                                height={200}
                                                className="w-full h-48 object-cover rounded-lg mb-4"
                                            />
                                        )}
                                        <h3 className="font-display font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                                            {post.h1}
                                        </h3>
                                        {post.excerpt && (
                                            <p className="text-gray-600 text-sm line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                        )}
                                        <span className="inline-block mt-4 text-gold font-medium text-sm group-hover:text-gold-dark transition-colors">
                                            Lire la suite →
                                        </span>
                                    </Link>
                                ))}
                            </div>
                            <div className="text-center mt-8">
                                <Link href="/blog" className="btn-secondary">
                                    Voir tous les articles
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* Section CTA Finale */}
                <section className="py-16 bg-gradient-to-br from-gold to-gold-dark text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                            Prêt à Optimiser vos Investissements ?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Découvrez nos guides gratuits et commencez dès aujourd&apos;hui à construire 
                            votre indépendance financière. Nos stratégies sont adaptées à chaque profil 
                            et chaque situation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/strategies" className="bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-light transition-colors inline-block">
                                Explorer les stratégies
                            </Link>
                            <Link href="/blog" className="bg-white text-gold px-8 py-4 rounded-lg font-medium hover:bg-cream transition-colors inline-block">
                                Lire nos guides
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
