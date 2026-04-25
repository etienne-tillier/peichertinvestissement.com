import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageFallback from "@/components/ImageFallback";

export const metadata: Metadata = {
    title: "Classes d'Actifs | Bourse, Crypto, Immobilier, Métaux Précieux",
    description: "Découvrez les différentes classes d'actifs pour diversifier votre patrimoine : bourse, cryptomonnaies, immobilier, métaux précieux et montres de collection.",
    keywords: ["classes d'actifs", "bourse", "crypto", "cryptomonnaies", "immobilier", "métaux précieux", "or", "montres de collection", "diversification"],
    alternates: {
        canonical: "/classes-actifs",
    },
};

export default function ClassesActifsPage() {
    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="hero-section py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                            Nos <span className="text-gold">Classes d&apos;Actifs</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl">
                            Explorez les différentes classes d&apos;actifs pour construire un portefeuille 
                            diversifié et resilient. Chaque actif présente ses propres caractéristiques 
                            de risque, rendement et liquidité.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                        {/* Bourse */}
                        <div id="bourse" className="scroll-mt-20">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <h2 className="section-title mb-0">La Bourse</h2>
                                    </div>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        La bourse représente l&apos;ensemble des marchés financiers où s&apos;échangent 
                                        des actions, des obligations et d&apos;autres instruments financiers. Investir en bourse 
                                        signifie devenir actionnaire d&apos;entreprises et participer à leur création de valeur.
                                    </p>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Sur le long terme, les actions constituent l&apos;une des classes d&apos;actifs les plus 
                                        performantes avec un rendement moyen historique de l&apos;ordre de 8-10% annulisé 
                                        pour les marchés développés. C&apos;est la base de tout patrimoine financier robuste.
                                    </p>
                                    <h3 className="text-xl font-display font-bold text-navy mb-4">Avantages</h3>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Rendements élevés sur le long terme</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Excellente liquidité</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Dividendes réguliers</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Fiscalité avantageuse (PEA)</span>
                                        </li>
                                    </ul>
                                    <h3 className="text-xl font-display font-bold text-navy mb-4">Risques</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">✗</span>
                                            <span>Volatilité importante à court terme</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">✗</span>
                                            <span>Risque de perte en capital</span>
                                        </li>
                                    </ul>
                                </div>
                                <ImageFallback
                                    src="/images/blog-bourse.jpeg"
                                    alt="Investissement bourse actions marché financier"
                                    width={600}
                                    height={400}
                                    className="rounded-xl shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Crypto */}
                        <div id="crypto" className="scroll-mt-20">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1">
                                    <ImageFallback
                                        src="/images/blog-crypto.jpeg"
                                        alt="Cryptomonnaies bitcoin ethereum investissement"
                                        width={600}
                                        height={400}
                                        className="rounded-xl shadow-lg"
                                    />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h2 className="section-title mb-0">Les Cryptomonnaies</h2>
                                    </div>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Le Bitcoin, Ethereum et les autres cryptomonnaies représentent une nouvelle 
                                        classe d&apos;actifs décentralisée. Bien que récente et extremely volatile, cette 
                                        classe d&apos;actifs attire越来越多的 investisseurs fascinés par son potentiel 
                                        de rendement et sa technologie blockchain innovante.
                                    </p>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Il est recommandé de limiter l&apos;exposition aux cryptomonnaies à une petite 
                                        partie de votre portefeuille (5-10% maximum) en raison de leur volatilité 
                                        extrême. Investissez uniquement ce que vous pouvez vous permettre de perdre.
                                    </p>
                                    <h3 className="text-xl font-display font-bold text-navy mb-4">Points clés</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Potentiel de rendements exceptionnel</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Décentralisation et autonomie</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Actif non corrélé aux marchés traditionnels</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">✗</span>
                                            <span>Volatilité extrême</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">✗</span>
                                            <span>Réglementation incertaine</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Immobilier */}
                        <div id="immobilier" className="scroll-mt-20">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-emerald rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                            </svg>
                                        </div>
                                        <h2 className="section-title mb-0">L&apos;Immobilier</h2>
                                    </div>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        L&apos;immobilier est traditionally considéré comme un investissement solide, 
                                        offrant à la fois un rendement locatif et une appréciation potentielle du 
                                        capital. En France, l&apos;immobilier reste l&apos;une des classes d&apos;actifs les 
                                        plus populaires auprès des investisseurs particuliers.
                                    </p>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Que ce soit pour l&apos;investissement locatif direct, les SCPI (Sociétés de 
                                        Placement en Immobilier) ou les SCI (Sociétés Civiles Immobilières), 
                                        l&apos;immobilier offre des opportunités adaptées à différents profils 
                                        d&apos;investisseurs et objectifs patrimoniaux.
                                    </p>
                                    <h3 className="text-xl font-display font-bold text-navy mb-4">Points clés</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Revenus locatifs réguliers</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Effet de levier bancaire</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Valeur tangible et palpable</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Protection contre l&apos;inflation</span>
                                        </li>
                                    </ul>
                                </div>
                                <ImageFallback
                                    src="/images/blog-immobilier.jpeg"
                                    alt="Investissement immobilier location patrimoine"
                                    width={600}
                                    height={400}
                                    className="rounded-xl shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Métaux précieux */}
                        <div id="metaux-precieux" className="scroll-mt-20">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1">
                                    <ImageFallback
                                        src="/images/hero.jpeg"
                                        alt="Or métaux précieux investissement refuge"
                                        width={600}
                                        height={400}
                                        className="rounded-xl shadow-lg"
                                    />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 3z" />
                                            </svg>
                                        </div>
                                        <h2 className="section-title mb-0">Les Métaux Précieux</h2>
                                    </div>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        L&apos;or et l&apos;argent sont depuis des millénaires des valeurs refuges par excellence. 
                                        Contrairement aux devises fiduciaires, ils conservent leur valeur dans le temps 
                                        et constituent une protection efficace contre l&apos;inflation et les crises 
                                        financières.
                                    </p>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Une allocation de 5-15% en métaux précieux, principalement en or, est souvent 
                                        recommandée pour diversifier un portefeuille et réduire son risque global. 
                                        L&apos;or montre une faible corrélation avec les actions et les obligations.
                                    </p>
                                    <h3 className="text-xl font-display font-bold text-navy mb-4">Points clés</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Valeur refuge historique</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Protection contre l&apos;inflation</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Faible corrélation avec les actions</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">✗</span>
                                            <span>Pas de rendement régulier</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Montres de collection */}
                        <div id="montres" className="scroll-mt-20">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h2 className="section-title mb-0">Les Montres de Collection</h2>
                                    </div>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Les montres de luxe, particulièrement les marques comme Rolex, Patek Philippe, 
                                        Audemars Piguet ou Omega, sont devenues une classe d&apos;actifs alternative 
                                        fascinante. Certaines références prennent exponentiellement de la valeur, 
                                        avec des rendements qui peuvent rivaliser avec les marchés financiers.
                                    </p>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        C&apos;est une classe d&apos;actifs pour les connaisseurs et passionnés. Elle nécessite 
                                        une expertise spécifique et une recherche approfondie avant d&apos;investir. 
                                        Les montres sont des actifs tangibles offrant également une utility.
                                    </p>
                                    <h3 className="text-xl font-display font-bold text-navy mb-4">Points clés</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Actif tangible et désirable</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Potentiel de apreciación</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald mt-1">✓</span>
                                            <span>Faible corrélation avec les marchés financiers</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">✗</span>
                                            <span>Liquidité limitée</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">✗</span>
                                            <span>Expertise requise</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-cream rounded-xl p-8">
                                    <h3 className="text-lg font-display font-bold text-navy mb-4">Marques de Référence</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white rounded-lg p-4 text-center">
                                            <span className="font-bold text-navy">Rolex</span>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 text-center">
                                            <span className="font-bold text-navy">Patek Philippe</span>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 text-center">
                                            <span className="font-bold text-navy">Audemars Piguet</span>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 text-center">
                                            <span className="font-bold text-navy">Omega</span>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 text-center">
                                            <span className="font-bold text-navy">Richard Mille</span>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 text-center">
                                            <span className="font-bold text-navy">Cartier</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-br from-gold to-gold-dark text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                            Prêt à Diversifier votre Portefeuille ?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Explorez nos stratégies d&apos;investissement personnalisées selon votre âge 
                            et votre profil de risque.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/strategies" className="bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-light transition-colors inline-block">
                                Voir les stratégies par âge
                            </a>
                            <a href="/blog" className="bg-white text-gold px-8 py-4 rounded-lg font-medium hover:bg-cream transition-colors inline-block">
                                Lire nos guides
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
