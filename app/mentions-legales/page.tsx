import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales - Messagerie Orange",
    description: "Mentions légales du site Messagerie Orange. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
};

export default function MentionsLegalesPage() {
    return (
        <main className="py-16">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-dark mb-8">Mentions Légales</h1>
                <div className="card">
                    <img
                        src="/images/hero.jpeg"
                        alt="Mentions legales Messagerie Orange"
                        className="w-full rounded-lg mb-6 object-cover h-48"
                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'; }}
                    />
                    <div className="space-y-6 text-gray-700">
                    <section>
                        <h2 className="text-xl font-bold text-dark mb-3">Éditeur du site</h2>
                        <p>Le site Messagerie Orange est un site d'information indépendant dédié aux conseils et astuces pour la messagerie Orange.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-dark mb-3">Propriété intellectuelle</h2>
                        <p>L'ensemble du contenu présent sur ce site est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-dark mb-3">Contact</h2>
                        <p>Pour toute question, contactez-nous à : <a href="mailto:contact@messagerieorange.fr" className="text-orange hover:underline">contact@messagerieorange.fr</a></p>
                    </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
