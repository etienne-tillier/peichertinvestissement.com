import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité - Messagerie Orange",
    description: "Politique de confidentialité du site Messagerie Orange. Comment nous protégeons vos données personnelles.",
};

export default function PolitiqueConfidentialitePage() {
    return (
        <main className="py-16">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-dark mb-8">Politique de Confidentialité</h1>
                <div className="card space-y-6 text-gray-700">
                    <section>
                        <h2 className="text-xl font-bold text-dark mb-3">Collecte des données</h2>
                        <p>Ce site ne collecte aucune donnée personnelle. Il s'agit d'un site d'information static qui ne requiert aucune inscription ni formulaire.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-dark mb-3">Cookies</h2>
                        <p>Ce site n'utilise pas de cookies de traçabilité. Seuls les cookies techniques nécessaires au fonctionnement du site peuvent être utilisés.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-dark mb-3">Contact</h2>
                        <p>Pour toute question concernant la protection de vos données : <a href="mailto:contact@messagerieorange.fr" className="text-orange hover:underline">contact@messagerieorange.fr</a></p>
                    </section>
                </div>
            </div>
        </main>
    );
}
