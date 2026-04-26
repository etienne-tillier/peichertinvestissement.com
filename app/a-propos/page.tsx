import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos",
  description: "Peichert Investissement : qui nous sommes, notre mission et notre philosophie d'investissement pour vous aider à construire votre patrimoine.",
};

const valeurs = [
  {
    icon: "🎯",
    titre: "Clarté avant tout",
    desc: "La finance peut être complexe. Notre mission est de la rendre accessible, sans jargon inutile ni promesses irréalistes.",
  },
  {
    icon: "🛡️",
    titre: "Indépendance",
    desc: "Nous ne sommes rémunérés par aucun produit financier. Nos conseils sont libres de tout conflit d'intérêt.",
  },
  {
    icon: "📐",
    titre: "Approche fondamentale",
    desc: "Chaque recommandation repose sur des données historiques, des principes éprouvés et une analyse rigoureuse.",
  },
  {
    icon: "🌱",
    titre: "Vision long terme",
    desc: "Nous croyons que la richesse se construit sur des décennies, pas des semaines. La patience est la stratégie la plus sous-estimée.",
  },
];

export default function AProposPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0f1f3d] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white">
            À <span className="text-amber-400">Propos</span>
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            Peichert Investissement est une plateforme de conseils et de guides pour les investisseurs particuliers français.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Notre mission</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Trop de Français laissent leur épargne dormir sur des livrets à faibles rendements, faute d&apos;information claire et accessible sur les alternatives disponibles.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Peichert Investissement a été créé pour combler ce manque : offrir des guides pratiques, des stratégies adaptées à chaque situation de vie, et une vision honnête des marchés financiers.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Notre approche est simple : vous donner les outils pour prendre vos propres décisions, en connaissance de cause.
            </p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
            <p className="text-5xl font-black text-amber-500 mb-2">10+</p>
            <p className="text-slate-700 font-medium mb-6">ans d&apos;expérience en investissement personnel</p>
            <p className="text-5xl font-black text-amber-500 mb-2">5</p>
            <p className="text-slate-700 font-medium mb-6">classes d&apos;actifs couvertes en profondeur</p>
            <p className="text-5xl font-black text-amber-500 mb-2">0</p>
            <p className="text-slate-700 font-medium">conflit d&apos;intérêt — aucune commission sur produits</p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Nos valeurs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((v) => (
              <div key={v.titre} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                <span className="text-3xl mb-3 block">{v.icon}</span>
                <h3 className="font-bold text-slate-900 mb-2">{v.titre}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-slate-100 rounded-xl p-6 border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">⚠️ Avertissement légal</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Le contenu de ce site est fourni à titre informatif et éducatif uniquement. Il ne constitue pas un conseil en investissement personnalisé au sens de la réglementation AMF. Tout investissement comporte des risques, y compris la perte partielle ou totale du capital investi. Consultez un conseiller financier agréé avant toute décision d&apos;investissement.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f1f3d] py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white">Prêt à commencer ?</h2>
          <p className="mt-3 text-slate-300">Explorez nos guides et trouvez la stratégie adaptée à votre situation.</p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link href="/strategies" className="px-5 py-2.5 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm">
              Stratégies par âge
            </Link>
            <Link href="/contact" className="px-5 py-2.5 border border-slate-500 text-slate-200 font-semibold rounded-lg hover:border-amber-400 hover:text-amber-400 transition-colors text-sm">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
