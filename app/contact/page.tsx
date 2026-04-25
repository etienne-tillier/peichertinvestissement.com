import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Contact | Peichert Investissement",
    description: "Contactez Peichert Investissement pour vos questions sur l'investissement, la bourse, les cryptomonnaies et l'immobilier.",
    keywords: ["contact investissement", "conseil financier", "contact"],
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="hero-section py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                            <span className="text-gold">Contact</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl">
                            Une question sur l&apos;investissement ? Contactez-nous par email pour toute demande de conseil ou d&apos;information.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="card text-center">
                            <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="section-title">Envoyez-nous un email</h2>
                            <p className="text-gray-600 mb-8">
                                Pour toute question relative à l&apos;investissement, aux stratégies financières 
                                ou à nos guides, n&apos;hésitez pas à nous contacter par email.
                            </p>
                            <a 
                                href="mailto:contact@peichertinvestissement.com" 
                                className="btn-primary text-lg px-8 py-4"
                            >
                                contact@peichertinvestissement.com
                            </a>
                        </div>

                        <div className="mt-12 bg-cream rounded-xl p-8">
                            <h3 className="text-xl font-display font-bold text-navy mb-4">Informations importantes</h3>
                            <p className="text-gray-700 mb-4">
                                Nous fournissons des informations et conseils généraux sur l&apos;investissement financier. 
                                Cependant, nous ne sommes pas des conseillers financiers certifiés et nos contenus 
                                ne constituent pas un conseil financier personnalisé.
                            </p>
                            <p className="text-gray-700">
                                Pour des conseils adaptés à votre situation personnelle, nous vous recommandons 
                                de consulter un conseiller financier professionnel qualifié.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
