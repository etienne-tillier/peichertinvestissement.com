import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Politique de Confidentialité | Peichert Investissement",
    description: "Politique de confidentialité du site Peichert Investissement. Comment nous protégeons vos données.",
};

export default function PolitiqueConfidentialitePage() {
    return (
        <>
            <Navigation />
            <main>
                <section className="hero-section py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                            Politique de <span className="text-gold">Confidentialité</span>
                        </h1>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="card space-y-8 text-gray-700">
                            <section>
                                <h2 className="text-xl font-display font-bold text-navy mb-3">Collecte des données</h2>
                                <p>Ce site ne collecte pas de données personnelles. Il s&apos;agit d&apos;un site d&apos;information static qui ne requiert aucune inscription ni formulaire de contact. Les seuls échanges de données sont quelli résultant de votre navigation sur le site.</p>
                            </section>
                            <section>
                                <h2 className="text-xl font-display font-bold text-navy mb-3">Cookies</h2>
                                <p>Ce site n&apos;utilise pas de cookies de tracking ou de publicité. Seuls les cookies techniques nécessaires au fonctionnement du site peuvent être utilisés pour améliorer votre expérience de navigation.</p>
                            </section>
                            <section>
                                <h2 className="text-xl font-display font-bold text-navy mb-3">Données supprimées</h2>
                                <p>Nous ne stockons aucune donnée personnelle sur nos serveurs. Tous les contenus sont servis de manière static via un réseau de diffusion de contenu (CDN).</p>
                            </section>
                            <section>
                                <h2 className="text-xl font-display font-bold text-navy mb-3">Contact</h2>
                                <p>Pour toute question concernant la protection de vos données : <a href="mailto:contact@peichertinvestissement.com" className="text-navy hover:text-gold hover:underline">contact@peichertinvestissement.com</a></p>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
