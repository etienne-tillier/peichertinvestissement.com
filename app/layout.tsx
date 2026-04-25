import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Conseils Investissement | Stratégies selon votre âge et votre situation | Peichert Investissement",
        template: "%s | Peichert Investissement",
    },
    description:
        "Guides d'investissement personnalisés : bourse, crypto, immobilier. Stratégies adaptées à 20, 30, 40 ans. Conseils experts pour optimiser votre portefeuille et atteindre l'indépendance financière.",
    keywords: [
        "conseils investissement",
        "stratégies investissement",
        "investir 20 ans",
        "investir 30 ans",
        "investir 40 ans",
        "bourse",
        "crypto",
        "cryptomonnaies",
        "immobilier",
        "métaux précieux",
        "or",
        "bitcoin",
        "portefeuille",
        "diversification",
        "indépendance financière",
    ],
    authors: [{ name: "Peichert Investissement" }],
    creator: "Peichert Investissement",
    metadataBase: new URL("https://peichertinvestissement.com"),
    alternates: {
        canonical: "/",
        languages: {
            "fr-FR": "/",
        },
    },
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://peichertinvestissement.com",
        siteName: "Peichert Investissement",
        title: "Conseils Investissement | Stratégies selon votre âge et votre situation",
        description:
            "Guides d'investissement personnalisés : bourse, crypto, immobilier. Stratégies adaptées à 20, 30, 40 ans. Conseils experts pour optimiser votre portefeuille.",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Conseils Investissement | Peichert Investissement",
        description: "Stratégies d'investissement personnalisées selon votre âge et votre situation.",
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
            "@id": "https://peichertinvestissement.com/#website",
            url: "https://peichertinvestissement.com",
            name: "Peichert Investissement",
            description: "Conseils et stratégies d'investissement personnalisés selon votre âge et votre situation",
            publisher: {
                "@type": "ProfessionalService",
                name: "Peichert Investissement",
                logo: {
                    "@type": "ImageObject",
                    url: "https://peichertinvestissement.com/favicon.svg",
                },
            },
            potentialAction: {
                "@type": "SearchAction",
                target: "https://peichertinvestissement.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
            },
        },
        {
            "@type": "ProfessionalService",
            "@id": "https://peichertinvestissement.com/#organization",
            name: "Peichert Investissement",
            url: "https://peichertinvestissement.com",
            description: "Conseil en investissement et planification financière",
            areaServed: "FR",
            serviceType: ["Investment Advisory", "Financial Planning"],
        },
        {
            "@type": "WebPage",
            "@id": "https://peichertinvestissement.com/#webpage",
            url: "https://peichertinvestissement.com",
            name: "Conseils Investissement | Stratégies selon votre âge",
            description: "Guides d'investissement personnalisés : bourse, crypto, immobilier. Stratégies adaptées à 20, 30, 40 ans.",
            isPartOf: {
                "@type": "WebSite",
                "@id": "https://peichertinvestissement.com/#website",
            },
        },
        {
            "@type": "Article",
            "@id": "https://peichertinvestissement.com/#article",
            headline: "Conseils Investissement | Stratégies selon votre âge",
            description: "Guides d'investissement personnalisés pour tous les âges et toutes les situations.",
            author: {
                "@type": "ProfessionalService",
                name: "Peichert Investissement",
            },
            publisher: {
                "@type": "ProfessionalService",
                name: "Peichert Investissement",
            },
            datePublished: "2024-01-01",
            dateModified: new Date().toISOString(),
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://peichertinvestissement.com/",
            },
        },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
                />
            </head>
            <body className="min-h-screen flex flex-col">
                {children}
            </body>
        </html>
    );
}
