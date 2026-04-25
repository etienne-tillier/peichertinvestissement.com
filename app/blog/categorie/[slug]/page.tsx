import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Blog - Catégorie | Peichert Investissement",
    description: "Articles sur l'investissement dans la catégorie sélectionnée.",
    alternates: {
        canonical: "/blog/categorie/[slug]",
    },
};

export default function CategoriePage() {
    return (
        <>
            <Navigation />
            <main>
                <section className="hero-section py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                            Blog - <span className="text-gold">Catégorie</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl">
                            Explorez nos articles sur l&apos;investissement dans cette catégorie.
                        </p>
                    </div>
                </section>
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-gray-600">
                            Cette page affiche les articles d&apos;une catégorie spécifique. 
                            Utilisez le blog principal pour explorer tous nos articles.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
