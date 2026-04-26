import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Classes d'actifs : Bourse, Crypto, Immobilier",
  description: "Comprendre les grandes classes d'actifs : actions en bourse, cryptomonnaies, immobilier, métaux précieux et montres de collection. Avantages, risques et rendements.",
};

const classes = [
  {
    id: "bourse",
    icon: "📈",
    titre: "Bourse & Actions",
    sous_titre: "Le moteur de croissance à long terme",
    intro: "Les actions représentent une participation dans des entreprises cotées. Sur le long terme, les marchés actions ont historiquement généré les meilleurs rendements parmi les actifs traditionnels.",
    avantages: [
      "Rendement moyen historique de 8 à 10 % par an sur 20+ ans",
      "Liquidité immédiate : achat/vente en quelques secondes",
      "Diversification accessible via les ETF (MSCI World, S&P 500)",
      "Fiscalité avantageuse via PEA (exonération après 5 ans)",
    ],
    risques: [
      "Volatilité à court terme : chutes de 30-50 % possibles",
      "Risque de faillite pour les actions individuelles",
      "Biais émotionnel : vendre lors des crises est coûteux",
    ],
    rendement: "7–10 % / an",
    risque: "Modéré à élevé",
    horizon: "5 ans minimum",
    couleur: "blue",
  },
  {
    id: "crypto",
    icon: "₿",
    titre: "Cryptomonnaies",
    sous_titre: "Actif asymétrique à haute volatilité",
    intro: "Bitcoin, Ethereum et l'écosystème crypto offrent un profil rendement/risque unique. Actif décorrélé des marchés traditionnels, la crypto peut amplifier un portefeuille — dans les deux sens.",
    avantages: [
      "Potentiel de rendement exceptionnel sur les cycles haussiers",
      "Décorrélation partielle avec les marchés traditionnels",
      "Bitcoin : réserve de valeur déflationniste (21M BTC max)",
      "Marché accessible 24h/24, 7j/7",
    ],
    risques: [
      "Volatilité extrême : -80 % lors des marchés baissiers",
      "Risque réglementaire dans certains pays",
      "Complexité technique : gestion des wallets, sécurité",
      "Nombreux scams et projets sans valeur fondamentale",
    ],
    rendement: "Variable (très élevé à négatif)",
    risque: "Très élevé",
    horizon: "3-5 ans minimum",
    couleur: "orange",
  },
  {
    id: "immobilier",
    icon: "🏠",
    titre: "Immobilier",
    sous_titre: "Patrimoine tangible et revenus passifs",
    intro: "L'immobilier reste la classe d'actif préférée des Français. Il combine effet de levier bancaire, revenus locatifs réguliers et protection contre l'inflation.",
    avantages: [
      "Effet de levier : investir avec l'argent de la banque",
      "Revenus passifs réguliers via les loyers",
      "Protection contre l'inflation (les loyers suivent l'IRL)",
      "SCPI : accès indirect dès 200 € sans gestion locative",
    ],
    risques: [
      "Illiquidité : vente lente (3-6 mois en moyenne)",
      "Concentration géographique et risque locatif",
      "Charges : taxe foncière, travaux, gestion, vacance",
      "Levier amplifie aussi les pertes",
    ],
    rendement: "3–6 % net / an",
    risque: "Faible à modéré",
    horizon: "7–10 ans minimum",
    couleur: "green",
  },
  {
    id: "metaux-precieux",
    icon: "🥇",
    titre: "Métaux Précieux",
    sous_titre: "Valeur refuge et protection systémique",
    intro: "L'or et l'argent sont des actifs défensifs utilisés depuis des millénaires comme réserve de valeur. Ils protègent contre l'inflation, les crises bancaires et la dévaluation monétaire.",
    avantages: [
      "Protection contre l'inflation et la dévaluation des devises",
      "Actif refuge lors des crises (guerre, récession, faillites bancaires)",
      "Aucun risque de contrepartie pour les métaux physiques",
      "Diversification efficace : faible corrélation aux actions",
    ],
    risques: [
      "Pas de rendement passif (pas de dividende ni loyer)",
      "Coûts de stockage et d'assurance pour le physique",
      "Fiscalité spécifique en France (taxe forfaitaire sur la revente)",
      "Volatilité de l'argent supérieure à l'or",
    ],
    rendement: "2–5 % / an (inflation + revalorisation)",
    risque: "Faible",
    horizon: "Moyen à long terme",
    couleur: "yellow",
  },
  {
    id: "montres",
    icon: "⌚",
    titre: "Montres de Collection",
    sous_titre: "Actif tangible et passion",
    intro: "Les montres de luxe (Rolex, Patek Philippe, AP) sont devenues une classe d'actif alternative reconnue. Elles combinent plaisir d'usage et potentiel de plus-value.",
    avantages: [
      "Actif tangible, portable et utilisable",
      "Certains modèles s'apprécient fortement (Rolex Daytona, PP Nautilus)",
      "Marché mondial liquide via les plateformes spécialisées",
      "Protection contre l'inflation pour les références rares",
    ],
    risques: [
      "Expertise nécessaire : authenticité, état, documentation",
      "Marché peut se retourner (correction post-2022)",
      "Coûts : entretien, assurance, stockage sécurisé",
      "Liquidité limitée pour les pièces moins cotées",
    ],
    rendement: "5–15 % / an sur les meilleures références",
    risque: "Modéré",
    horizon: "3–5 ans minimum",
    couleur: "purple",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700",
  orange: "bg-orange-100 text-orange-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
  purple: "bg-purple-100 text-purple-700",
};

const badgeColor: Record<string, string> = {
  blue: "bg-blue-50 border-blue-200",
  orange: "bg-orange-50 border-orange-200",
  green: "bg-green-50 border-green-200",
  yellow: "bg-yellow-50 border-yellow-200",
  purple: "bg-purple-50 border-purple-200",
};

export default function ClassesActifsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0f1f3d] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white">
            Les <span className="text-amber-400">Classes d&apos;Actifs</span>
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            Chaque classe d&apos;actif a ses caractéristiques propres. Comprendre leurs différences est la première étape pour construire un portefeuille équilibré.
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            {classes.map((c) => (
              <a key={c.id} href={`#${c.id}`}
                className="px-4 py-2 bg-amber-500 text-slate-900 font-semibold rounded-lg text-sm hover:bg-amber-400 transition-colors">
                {c.titre}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Asset classes */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {classes.map((c, i) => (
          <section key={c.id} id={c.id}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{c.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{c.titre}</h2>
                    <p className="text-amber-600 font-medium text-sm">{c.sous_titre}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">{c.intro}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-700 text-sm uppercase tracking-wide mb-3">
                      ✓ Avantages
                    </h3>
                    <ul className="space-y-2">
                      {c.avantages.map((a) => (
                        <li key={a} className="flex gap-2 text-sm text-slate-600">
                          <span className="text-green-500 flex-shrink-0 mt-0.5">+</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-600 text-sm uppercase tracking-wide mb-3">
                      ✗ Risques
                    </h3>
                    <ul className="space-y-2">
                      {c.risques.map((r) => (
                        <li key={r} className="flex gap-2 text-sm text-slate-600">
                          <span className="text-red-400 flex-shrink-0 mt-0.5">−</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Stats card */}
              <div className={`rounded-2xl p-6 border ${badgeColor[c.couleur]}`}>
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Fiche synthèse</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Rendement estimé</p>
                    <p className="font-bold text-slate-900">{c.rendement}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Niveau de risque</p>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${colorMap[c.couleur]}`}>
                      {c.risque}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Horizon conseillé</p>
                    <p className="font-bold text-slate-900">{c.horizon}</p>
                  </div>
                </div>
              </div>
            </div>
            {i < classes.length - 1 && <hr className="mt-12 border-slate-100" />}
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-amber-50 border-t border-amber-100 py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Construire votre stratégie</h2>
          <p className="mt-3 text-slate-600">Découvrez comment combiner ces classes d&apos;actifs selon votre âge et vos objectifs.</p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link href="/strategies" className="px-5 py-2.5 bg-[#0f1f3d] text-white font-semibold rounded-lg hover:bg-[#162c55] transition-colors text-sm">
              Stratégies par âge
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
