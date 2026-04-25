import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Messagerie Orange - Conseils et Astuces pour Votre Email Orange",
        template: "%s | Messagerie Orange",
    },
    description:
        "Accédez facilement à votre messagerie Orange. Découvrez nos conseils pour optimiser l'utilisation de votre email Orange, récupérer votre mot de passe et configurer votre compte.",
    keywords: [
        "messagerie orange",
        "email orange",
        "orange mail",
        "connexion orange",
        "mot de passe orange",
        "configuration email orange",
        "webmail orange",
    ],
    authors: [{ name: "Messagerie Orange" }],
    creator: "Messagerie Orange",
    metadataBase: new URL("https://messagerieorange.fr"),
    alternates: {
        canonical: "/",
        languages: {
            "fr-FR": "/",
            "en-US": "/en/",
            "es-ES": "/es/",
            "de-DE": "/de/",
            "it-IT": "/it/",
        },
    },
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://messagerieorange.fr",
        siteName: "Messagerie Orange",
        title: "Messagerie Orange - Conseils et Astuces pour Votre Email Orange",
        description:
            "Accédez facilement à votre messagerie Orange. Découvrez nos conseils pour optimiser l'utilisation de votre email Orange, récupérer votre mot de passe et configurer votre compte.",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Messagerie Orange - Conseils et Astuces",
        description: "Tout ce qu'il faut savoir sur la messagerie Orange",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.svg",
        apple: "/apple-touch-icon.png",
    },
};

const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": "https://messagerieorange.fr/#website",
            url: "https://messagerieorange.fr",
            name: "Messagerie Orange",
            description: "Conseils et astuces pour utiliser votre messagerie Orange",
            publisher: {
                "@type": "Organization",
                name: "Messagerie Orange",
                logo: {
                    "@type": "ImageObject",
                    url: "https://messagerieorange.fr/favicon.svg",
                },
            },
            potentialAction: {
                "@type": "SearchAction",
                target: "https://messagerieorange.fr/?s={search_term_string}",
                "query-input": "required name=search_term_string",
            },
        },
        {
            "@type": "Organization",
            "@id": "https://messagerieorange.fr/#organization",
            name: "Messagerie Orange",
            url: "https://messagerieorange.fr",
            sameAs: ["https://www.orange.fr"],
        },
        {
            "@type": "WebPage",
            "@id": "https://messagerieorange.fr/#webpage",
            url: "https://messagerieorange.fr",
            name: "Messagerie Orange - Accueil",
            description:
                "Accédez facilement à votre messagerie Orange. Découvrez nos conseils pour optimiser l'utilisation de votre email Orange.",
            isPartOf: { "@id": "https://messagerieorange.fr/#website" },
            about: { "@id": "https://messagerieorange.fr/#organization" },
            datePublished: "2024-01-01",
            dateModified: new Date().toISOString(),
        },
        {
            "@type": "FAQPage",
            "@id": "https://messagerieorange.fr/faq/#faq",
            url: "https://messagerieorange.fr/faq",
            name: "Questions Fréquentes - Messagerie Orange",
            isPartOf: { "@id": "https://messagerieorange.fr/#website" },
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Comment accéder à ma messagerie Orange ?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Pour accéder à votre messagerie Orange, rendez-vous sur webmail.orange.fr et connectez-vous avec votre adresse email Orange et votre mot de passe.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Comment récupérer mon mot de passe Orange ?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Cliquez sur 'Mot de passe oublié' sur la page de connexion, puis suivez les instructions pour réinitialiser votre mot de passe via email de récupération ou SMS.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Comment configurer mon email Orange sur mon téléphone ?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Accédez aux paramètres de votre application email, ajoutez un nouveau compte, sélectionnez IMAP et entrez les paramètres serveur Orange : imap.orange.fr pour IMAP et smtp.orange.fr pour SMTP.",
                    },
                },
            ],
        },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
                />
            </head>
            <body className="min-h-screen flex flex-col">
                <header className="bg-dark text-white">
                    <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                        <a href="/" className="text-2xl font-bold text-orange">
                            Messagerie Orange
                        </a>
                        <ul className="flex items-center gap-6">
                            <li><a href="/" className="hover:text-orange transition-colors">Accueil</a></li>
                            <li><a href="/connexion" className="hover:text-orange transition-colors">Connexion</a></li>
                            <li><a href="/faq" className="hover:text-orange transition-colors">FAQ</a></li>
                            <li><a href="/blog" className="hover:text-orange transition-colors">Blog</a></li>
                            <li><a href="/contact" className="hover:text-orange transition-colors">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="flex-1">{children}</main>
                <footer className="bg-dark text-white py-8">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-lg font-bold text-orange mb-4">Messagerie Orange</h3>
                                <p className="text-gray-400 text-sm">
                                    Votre ressource complète pour tous les conseils et astuces concernant votre messagerie Orange.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Navigation</h4>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li><a href="/" className="hover:text-orange">Accueil</a></li>
                                    <li><a href="/connexion" className="hover:text-orange">Connexion</a></li>
                                    <li><a href="/faq" className="hover:text-orange">FAQ</a></li>
                                    <li><a href="/blog" className="hover:text-orange">Blog</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Ressources</h4>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li><a href="/faq#mot-de-passe" className="hover:text-orange">Récupérer mot de passe</a></li>
                                    <li><a href="/faq#configuration" className="hover:text-orange">Configuration email</a></li>
                                    <li><a href="/faq#connexion" className="hover:text-orange">Problèmes de connexion</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Contact</h4>
                                <p className="text-gray-400 text-sm">
                                    Une question ? <a href="mailto:contact@messagerieorange.fr" className="text-orange hover:underline">contact@messagerieorange.fr</a>
                                </p>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
                            <p>&copy; {new Date().getFullYear()} Messagerie Orange. Tous droits réservés.</p>
                            <div className="mt-2 flex justify-center gap-4">
                                <a href="/mentions-legales" className="hover:text-orange">Mentions légales</a>
                                <span>·</span>
                                <a href="/politique-confidentialite" className="hover:text-orange">Politique de confidentialité</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
