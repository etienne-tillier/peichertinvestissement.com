import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Mentions Légales | Peichert Investissement",
    description: "Mentions légales du site Peichert Investissement. Informations sur l'éditeur et les conditions d'utilisation.",
};

export default function MentionsLegalesPage() {
    return (
        <>
            <Navigation />
            <main>
                <section className="hero-section py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                            Mentions <span className="text-gold">Légales</span>
                        </h1>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="card space-y-8 text-gray-700">
                            <section>
                                <h2 className="text-xl font-display font-bold text-navy mb-3">Éditeur du site</h2>
                                <p>Peichert Investissement est un site d&apos;information indépendant dédié aux conseils en investissement et planification financière.</p>
                            </section>
                            <section>
                                <h2 className="text-xl font-display font-bold text-navy mb-3">Propriété intellectuelle</h2>
                                <p>L&apos;ensemble du contenu présent sur ce site est protégé par le droit d&apos;auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
                            </section>
                            <section>
                                <h2 className="text-xl font-display font-bold text-navy mb-3">Avertissement</h2>
                                <p>Les informations contenues sur ce site sont fournies à titre informatif uniquement et ne constituent pas un conseil financier personnalisé. Investir comporte des risques, y compris la perte potentielle du capital investi. Consultez un conseiller financier qualifié avant toute décision d&apos;investissement.</p>
                            </section>
                            <section>
                                <h2 className="text-xl font-display font-bold text-navy mb-3">Contact</h2>
                                <p>Pour toute question : <a href="mailto:contact@peichertinvestissement.com" className="text-navy hover:text-gold hover:underline">contact@peichertinvestissement.com</a></p>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
