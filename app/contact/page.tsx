import type { Metadata } from "next";
import Link from "next/link";
import ImageFallback from "@/components/ImageFallback";

export const metadata: Metadata = {
    title: "Contact - Messagerie Orange",
    description: "Contactez-nous pour toute question concernant la messagerie Orange. Notre équipe vous répondra par email dans les plus brefs délais.",
    keywords: ["contact orange", "messagerie orange aide", "support email orange", "contact assistance orange"],
};

export default function ContactPage() {
    return (
        <main className="py-16">
            <div className="max-w-3xl mx-auto px-6">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-dark mb-4">
                        Contactez-<span className="text-orange">nous</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        Pour toute question, contactez-nous par email.
                    </p>
                </header>

                <div className="card">
                    <ImageFallback
                        src="/images/contact.jpeg"
                        alt="Contact Messagerie Orange - Notre equipe"
                        width={800}
                        height={200}
                        className="w-full rounded-lg mb-6 object-cover h-48"
                    />
                    <div className="text-center py-8">
                        <div className="w-20 h-20 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-dark mb-4">
                            Envoyez-nous un email
                        </h2>
                        
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                            Remplissez le formulaire de votre client email pour nous écrire. 
                            Nous vous répondrons dans les plus brefs délais, généralement sous 24 à 48 heures.
                        </p>

                        <a 
                            href="mailto:contact@messagerieorange.fr?subject=Question%20sur%20la%20messagerie%20Orange&body=Bonjour,%0A%0AVotre%20message%20ici..."
                            className="btn-primary text-lg px-8 py-4"
                        >
                            ✉️ Envoyer un email à contact@messagerieorange.fr
                        </a>
                    </div>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-dark mb-2">Temps de réponse</h3>
                                <p className="text-gray-600 text-sm">
                                    Nous répondons généralement sous 24 à 48 heures ouvrées. 
                                    Pour les urgences, consultez notre FAQ.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-dark mb-2">Avant de nous contacter</h3>
                                <p className="text-gray-600 text-sm">
                                    Consultez notre FAQ complète pour trouver rapidement 
                                    des réponses à vos questions les plus courantes.
                                </p>
                                <Link href="/faq" className="text-orange text-sm font-medium hover:underline mt-2 inline-block">
                                    Voir la FAQ →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-gray-500 hover:text-orange transition-colors text-sm">
                        ← Retour à l'accueil
                    </Link>
                </div>
            </div>
        </main>
    );
}
