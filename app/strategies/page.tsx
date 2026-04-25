import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Stratégies d'Investissement par Âge | 20, 30, 40 ans et plus",
    description: "Stratégies d'investissement personnalisées selon votre âge et votre situation. Découvrez comment investir à 20, 30, 40 ans et plus pour optimiser votre patrimoine.",
    keywords: ["stratégie investissement", "investir 20 ans", "investir 30 ans", "investir 40 ans", "allocation actif", "planification financière"],
    alternates: {
        canonical: "/strategies",
    },
};

export default function StrategiesPage() {
    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="hero-section py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                            Stratégies d&apos;Investissement <span className="text-gold">par Âge</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl">
                            Adaptez votre stratégie d&apos;investissement à votre situation financière, 
                            votre horizon temporal et vos objectifs. Nos conseils personnalisés vous 
                            accompagnent à chaque étape de votre vie.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* 20-30 ans */}
                        <div id="20-30-ans" className="mb-20 scroll-mt-20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                                    <span className="text-gold font-bold text-lg">1</span>
                                </div>
                                <h2 className="section-title mb-0">Stratégie 20-30 ans : L&apos;Agriculture du Long Terme</h2>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-12">
                                <div>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        À vingt ans, vous disposez de votre plus grand atout : <strong>le temps</strong>. 
                                        Un investissement de 10 000 € placé pendant 40 ans à un rendement moyen de 7% 
                                        annulisé peut transformer votre épargne en un patrimoine de plus de 150 000 €. 
                                        C&apos;est la magie des intérêts composés, et vous avez tout le temps de l&apos;exploiter.
                                    </p>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        Votre capacité d&apos;épargne est probablement limitée au début de votre carrière, 
                                        mais c&apos;est précisément le moment de construire les bonnes habitudes financières. 
                                        Même de petits montants réguliers, investis intelligemment, peuvent faire une 
                                        différence significative sur plusieurs décennies.
                                    </p>
                                    <h3 className="text-xl font-display font-bold text-navy mb-4">Principes Clés</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald mt-1">✓</span>
                                            <div>
                                                <strong>Profil de risque agressif :</strong> Vous pouvez vous permettre 
                                                une allocation de 80-90% en actions, avec une exposition majoritaire aux 
                                                marchés développés et émergents.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald mt-1">✓</span>
                                            <div>
                                                <strong>Investissement régulier :</strong> Misez sur les versements 
                                                programmés pour lisser les effets de la volatilité et bénéficier du 
                                                moyenne mobile des prix.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald mt-1">✓</span>
                                            <div>
                                                <strong>Produits d&apos;épargne :</strong> Privilégiez le PEA pour bénéficier 
                                                de la fiscalité avantageuse sur les plus-values, et l&apos;assurance-vie 
                                                pour la flexibilité et la disponibilité.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-cream rounded-xl p-8">
                                    <h3 className="text-lg font-display font-bold text-navy mb-4">Allocation Recommandée</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-600">Actions monde entier</span>
                                                <span className="text-sm font-medium">70%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-navy rounded-full" style={{ width: "70%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-600">ETF émergents</span>
                                                <span className="text-sm font-medium">15%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-gold rounded-full" style={{ width: "15%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-600">Obligations</span>
                                                <span className="text-sm font-medium">10%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald rounded-full" style={{ width: "10%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-600">Réserve de précaution</span>
                                                <span className="text-sm font-medium">5%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-gray-400 rounded-full" style={{ width: "5%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 30-40 ans */}
                        <div id="30-40-ans" className="mb-20 scroll-mt-20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                                    <span className="text-navy font-bold text-lg">2</span>
                                </div>
                                <h2 className="section-title mb-0">Stratégie 30-40 ans : La Consolidation Active</h2>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-12">
                                <div>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        La trentaine est marquée par l&apos;installation dans la vie adulte : mariage, enfants, 
                                        immobilier. Ces événements majeurs nécessitent une réflexion approfondie sur vos 
                                        priorités financières. L&apos;horizon d&apos;investissement reste long (20-30 ans), 
                                        mais vos besoins de liquidité peuvent être plus importants.
                                    </p>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        C&apos;est également le moment où votre capacité d&apos;épargne s&apos;améliore généralement, 
                                        vous permettant d&apos;accelerer l&apos;accumulation de votre patrimoine. Profitez-en pour 
                                        maximiser vos versements sur vos produits d&apos;épargne retraite tout en conservant 
                                        une réserve pour les imprévus.
                                    </p>
                                    <h3 className="text-xl font-display font-bold text-navy mb-4">Principes Clés</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald mt-1">✓</span>
                                            <div>
                                                <strong>Profil équilibrée :</strong> Une allocation 60-70% actions, 
                                                20-25% obligations, et 10-15% en actifs réels comme l&apos;immobilier.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald mt-1">✓</span>
                                            <div>
                                                <strong>Diversification familiale :</strong> Commencez à penser à la 
                                                protection de votre famille (assurance décès, prévoyance) et à la 
                                                transmission (assurance-vie pour les enfants).
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald mt-1">✓</span>
                                            <div>
                                                <strong>Investissement immobilier :</strong> Si votre situation le permet, 
                                                l&apos;accession à la propriété devient une priorité. Sinon, envisagez 
                                                l&apos;investissement locatif ou les SCPI.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-cream rounded-xl p-8">
                                    <h3 className="text-lg font-display font-bold text-navy mb-4">Allocation Recommandée</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-600">Actions zone euro</span>
                                                <span className="text-sm font-medium">35%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-navy rounded-full" style={{ width: "35%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-600">Actions internationales</span>
                                                <span className="text-sm font-medium">25%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-gold rounded-full" style={{ width: "25%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-600">Obligations diversifiées</span>
                                                <span className="text-sm font-medium">20%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald rounded-full" style={{ width: "20%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-600">Immobilier / SCPI</span>
                                                <span className="text-sm font-medium">15%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-navy-light rounded-full" style={{ width: "15%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-600">Réserve de précaution</span>
                                                <span className="text-sm font-medium">5%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-gray-400 rounded-full" style={{ width: "5%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 40 ans et plus */}
                        <div id="40-plus" className="mb-20 scroll-mt-20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-emerald rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">3</span>
                                </div>
                                <h2 className="section-title mb-0">Stratégie 40 ans et plus : La Preservation et la Transmission</h2>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-12">
                                <div>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        À partir de la quarantaine, l&apos;horizon d&apos;investissement se rédie, souvent 15-25 ans 
                                        avant la retraite. La priorité change : il s&apos;agit désormais de préserver le 
                                        patrimoine accumulé tout en continuant à le faire fructifier de manière raisonnable. 
                                        La volatilité des marchés peut avoir un impact significatif si vous êtes proche 
                                        de la retraite.
                                    </p>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        C&apos;est également le moment de songer à la transmission de votre patrimoine. 
                                        Les donations, l&apos;assurance-vie, les contrats de capitalisation offrent des 
                                        opportunités fiscales qu&apos;il faut exploiter dans une stratégie globale de 
                                        planification patrimoniale.
                                    </p>
                                    <h3 className="text-xl font-display font-bold text-navy mb-4">Principes Clés</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald mt-1">✓</span>
                                            <div>
                                                <strong>Profil défensif :</strong> Réduisez progressivement l&apos;allocation 
                                                en actions (40-50%) et augmentez la part des actifs refuges : 
                                                obligations qualité, or, immobilier.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald mt-1">✓</span>
                                            <div>
                                                <strong>Optiques de rendement :</strong> Privilégiez les placements 
                                                générant des revenus réguliers (loyers, dividendes, intérêts) plutôt 
                                                que la simple appréciation du capital.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-emerald mt-1">✓</span>
                                            <div>
                                                <strong>Fiscalité optimisée :</strong> Exploitez les niches fiscales 
                                                (PER, FCPI, FIP, Girardin), les donations et les démembrements 
                                                pour minimiser l&apos;imposition de votre patrimoine.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-cream rounded-xl p-8">
                                    <h3 className="text-lg font-display font-bold text-navy mb-4">Allocation Recommandée</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-600">Actions défensives</span>
                                                <span className="text-sm font-medium">30%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-navy rounded-full" style={{ width: "30%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-600">Obligations investment grade</span>
                                                <span className="text-sm font-medium">25%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald rounded-full" style={{ width: "25%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-600">Or et métaux précieux</span>
                                                <span className="text-sm font-medium">10%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-gold rounded-full" style={{ width: "10%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-600">Immobilier locatif</span>
                                                <span className="text-sm font-medium">20%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-navy-light rounded-full" style={{ width: "20%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm text-gray-600">Réserve de précaution</span>
                                                <span className="text-sm font-medium">15%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-gray-400 rounded-full" style={{ width: "15%" }}></div>
                                            </div>
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
                            Besoin de Conseils Personnalisés ?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Explorez nos guides sur les différentes classes d&apos;actifs pour compléter 
                            votre stratégie d&apos;investissement.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/classes-actifs" className="bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-navy-light transition-colors inline-block">
                                Explorer les classes d&apos;actifs
                            </a>
                            <a href="/contact" className="bg-white text-gold px-8 py-4 rounded-lg font-medium hover:bg-cream transition-colors inline-block">
                                Nous contacter
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
