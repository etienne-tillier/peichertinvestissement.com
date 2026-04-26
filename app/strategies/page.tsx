import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Stratégies d'investissement par âge",
  description: "Découvrez les stratégies d'investissement adaptées à chaque étape de votre vie : 20-30 ans, 30-40 ans, 40 ans et plus.",
};

const strategies = [
  {
    id: "20-30-ans",
    age: "20–30 ans",
    titre: "L'avenir devant vous",
    intro: "C'est la phase idéale pour prendre des risques calculés et maximiser la croissance à long terme. Avec un horizon d'investissement de 30 à 40 ans, vous pouvez vous permettre d'absorber les cycles de marché.",
    conseils: [
      { titre: "Priorité à l'épargne de précaution", desc: "Constituez 3 à 6 mois de dépenses avant d'investir. C'est votre filet de sécurité." },
      { titre: "Ouvrez un PEA et une assurance-vie", desc: "Ces enveloppes fiscalement avantageuses sont idéales pour débuter. Le PEA exonère les plus-values après 5 ans." },
      { titre: "Investissez dans des ETF actions monde", desc: "Les ETF à faibles frais (MSCI World, S&P 500) offrent une diversification immédiate avec un profil rendement/risque optimal sur le long terme." },
      { titre: "Bitcoin et crypto : 5 à 10 % max", desc: "Les actifs numériques peuvent booster un portefeuille mais avec une volatilité extrême. Limitez l'exposition." },
    ],
    allocation: [
      { label: "Actions (ETF)", pct: 70 },
      { label: "Obligations/Fonds €", pct: 15 },
      { label: "Crypto", pct: 10 },
      { label: "Autres", pct: 5 },
    ],
    profil: "Agressif",
    couleur: "amber",
  },
  {
    id: "30-40-ans",
    age: "30–40 ans",
    titre: "La période de consolidation",
    intro: "Mariage, enfants, achat immobilier — cette décennie est marquée par des projets majeurs. L'investissement doit s'adapter à ces nouvelles responsabilités tout en continuant à faire fructifier le capital.",
    conseils: [
      { titre: "Immobilier : résidence principale ou locatif", desc: "L'achat de la résidence principale reste un investissement structurant. Le locatif avec effet de levier bancaire peut accélérer la constitution de patrimoine." },
      { titre: "Diversification accrue", desc: "Ajoutez des SCPI (pierre-papier), des obligations et des métaux précieux pour réduire la corrélation avec les marchés actions." },
      { titre: "Planification retraite", desc: "Commencez à alimenter un PERP ou PER. Les versements sont déductibles de vos revenus imposables." },
      { titre: "Assurance décès/invalidité", desc: "Protégez votre famille avec une couverture adaptée à vos nouvelles responsabilités." },
    ],
    allocation: [
      { label: "Actions (ETF)", pct: 50 },
      { label: "Immobilier/SCPI", pct: 25 },
      { label: "Obligations/Fonds €", pct: 20 },
      { label: "Autres", pct: 5 },
    ],
    profil: "Équilibré",
    couleur: "amber",
  },
  {
    id: "40-plus",
    age: "40 ans et plus",
    titre: "Préservation et transmission",
    intro: "L'horizon de retraite se rapproche. La priorité glisse de la croissance vers la préservation du capital et la génération de revenus passifs, tout en optimisant la transmission patrimoniale.",
    conseils: [
      { titre: "Réduction progressive du risque", desc: "Augmentez la part d'actifs défensifs : obligations d'État, fonds en euros, SCPI, immobilier locatif de qualité." },
      { titre: "Revenus passifs : dividendes et loyers", desc: "Construisez des sources de revenus réguliers pour compléter la retraite : dividendes d'actions, loyers de biens locatifs, coupons obligataires." },
      { titre: "Optimisation fiscale", desc: "Utilisez l'assurance-vie pour la transmission (abattements de 152 500 € par bénéficiaire). Envisagez la donation-partage." },
      { titre: "Métaux précieux et actifs refuges", desc: "L'or, l'argent et les montres de collection apportent une protection contre l'inflation et les crises systémiques." },
    ],
    allocation: [
      { label: "Immobilier/SCPI", pct: 35 },
      { label: "Obligations/Fonds €", pct: 30 },
      { label: "Actions dividendes", pct: 25 },
      { label: "Or/valeurs refuges", pct: 10 },
    ],
    profil: "Défensif",
    couleur: "amber",
  },
];

export default function StrategiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0f1f3d] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white">
            Stratégies d&apos;Investissement <span className="text-amber-400">par Âge</span>
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            Votre âge et votre situation personnelle déterminent la meilleure stratégie. Découvrez les approches adaptées à chaque phase de votre vie.
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            {strategies.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="px-4 py-2 bg-amber-500 text-slate-900 font-semibold rounded-lg text-sm hover:bg-amber-400 transition-colors">
                {s.age}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy sections */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {strategies.map((s, i) => (
          <section key={s.id} id={s.id}>
            <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
                  {s.profil}
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{s.age}</h2>
                <p className="text-xl text-amber-600 font-medium mt-1">{s.titre}</p>
                <p className="mt-4 text-slate-600 leading-relaxed">{s.intro}</p>

                <div className="mt-8 space-y-4">
                  {s.conseils.map((c) => (
                    <div key={c.titre} className="flex gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-amber-600" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{c.titre}</p>
                        <p className="text-slate-600 text-sm mt-0.5">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Allocation chart */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Allocation recommandée</h3>
                <div className="space-y-3">
                  {s.allocation.map((a) => (
                    <div key={a.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-700 font-medium">{a.label}</span>
                        <span className="text-amber-600 font-bold">{a.pct}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-2 bg-amber-400 rounded-full"
                          style={{ width: `${a.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-400">
                  * Allocation indicative à adapter selon votre situation personnelle. Ce n&apos;est pas un conseil financier personnalisé.
                </p>
              </div>
            </div>
            {i < strategies.length - 1 && <hr className="mt-16 border-slate-100" />}
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-amber-50 border-t border-amber-100 py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Approfondir vos connaissances</h2>
          <p className="mt-3 text-slate-600">Explorez nos guides détaillés sur chaque classe d&apos;actifs pour affiner votre stratégie.</p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link href="/classes-actifs" className="px-5 py-2.5 bg-[#0f1f3d] text-white font-semibold rounded-lg hover:bg-[#162c55] transition-colors text-sm">
              Classes d&apos;actifs
            </Link>
            <Link href="/blog" className="px-5 py-2.5 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-white transition-colors text-sm">
              Lire nos guides
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
