import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageFallback from "@/components/ImageFallback";

export const metadata: Metadata = {
    title: "À Propos | Peichert Investissement",
    description: "Découvrez Peichert Investissement, votre source de conseils en investissement et planification financière. Notre mission : vous accompagner vers l'indépendance financière.",
    keywords: ["à propos", "peichert investissement", "conseil financier", "indépendance financière"],
    alternates: {
        canonical: "/a-propos",
    },
};

export default function AProposPage() {
    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="hero-section py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                            À <span className="text-gold">Propos</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl">
                            Votre ressource de confiance pour comprendre et maîtriser l&apos;art de l&apos;investissement financier.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h2 className="section-title">
                                    Notre <span className="text-gold">Mission</span>
                                </h2>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Peichert Investissement est né de la conviction que l&apos;éducation financière est 
                                    la clé de l&apos;indépendance financière. Notre mission est de rendre accessibles 
                                    et compréhensibles les stratégies d&apos;investissement aux hommes actifs qui 
                                    souhaitent optimiser leur patrimoine.
                                </p>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Nous savons que naviguer dans le monde complexe des finances personnelles peut 
                                    être intimidant. C&apos;est pourquoi nous nous efforçons de créer des contenus 
                                    clairs, pratiques et actionnables qui vous permettent de prendre des décisions 
                                    éclairées.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Notre approche est basée sur des principes financiers éprouvés, des données 
                                    factuelles et une compréhension profonde des besoins des investisseurs à 
                                    chaque étape de leur vie.
                                </p>
                            </div>
                            <ImageFallback
                                src="/images/about.jpeg"
                                alt="Expert consultant investissement finance personnelle"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg"
                            />
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <div className="card text-center">
                                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-display font-bold text-navy mb-2">Éducation</h3>
                                <p className="text-gray-600 text-sm">
                                    Des guides complets et des analyses approfondies pour comprendre 
                                    les mécanismes de l&apos;investissement.
                                </p>
                            </div>

                            <div className="card text-center">
                                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-display font-bold text-navy mb-2">Confiance</h3>
                                <p className="text-gray-600 text-sm">
                                    Des conseils impartiaux et objectifs, basés sur des données 
                                    factuelles et non sur des intérêts commerciaux.
                                </p>
                            </div>

                            <div className="card text-center">
                                <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-display font-bold text-navy mb-2">Action</h3>
                                <p className="text-gray-600 text-sm">
                                    Des conseils pratiques et actionnables que vous pouvez appliquer 
                                    immédiatement à votre situation.
                                </p>
                            </div>
                        </div>

                        <div className="bg-cream rounded-xl p-8 mb-16">
                            <h2 className="section-title text-center mb-8">
                                Notre <span className="text-gold">Approche</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-display font-bold text-navy mb-3">Transparence</h3>
                                    <p className="text-gray-700">
                                        Nous croyons en une information claire et honnête. Pas de promesses 
                                        de rendements miracle, pas de jargon incompréhensible. Juste des 
                                        conseils pragmatiques et réalistes.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-display font-bold text-navy mb-3">Pédagogie</h3>
                                    <p className="text-gray-700">
                                        Chaque investisseur mérite de comprendre les décisions qu&apos;il prend. 
                                        Nous expliquons le &quot;pourquoi&quot; derrière chaque recommandation.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-display font-bold text-navy mb-3">Personnalisation</h3>
                                    <p className="text-gray-700">
                                        Pas de solution unique. Nous adaptons nos conseils à votre situation 
                                        spécifique, votre âge, vos objectifs et votre tolérance au risque.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-display font-bold text-navy mb-3">Indépendance</h3>
                                    <p className="text-gray-700">
                                        Nos conseils sont objectifs et ne sont pas influencés par des 
                                        considérations commerciales. Votre intérêt est notre priorité.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <h2 className="section-title mb-6">
                                Une question ? <span className="text-gold">Contactez-nous</span>
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Nous sommes disponibles pour répondre à vos questions sur l&apos;investissement 
                                et la finance personnelle. N&apos;hésitez pas à nous contacter.
                            </p>
                            <a 
                                href="mailto:contact@peichertinvestissement.com" 
                                className="btn-primary"
                            >
                                Nous contacter par email
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
