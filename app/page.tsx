import Link from "next/link";
import Image from "next/image";
import { getPublishedBlogPosts } from "@/lib/blog";

export const revalidate = 21600;

// Pre-generated R2 images (from prompt_md pipeline)
const BASE_R2 = "https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/peichertinvestissement-com";
const HERO_IMAGE       = `${BASE_R2}-home-hero-financial-success.jpeg`;
const STRATEGIES_IMAGE = `${BASE_R2}-home-strategies-age-planning.jpeg`;
const ASSETS_IMAGE     = `${BASE_R2}-home-assets-diversification.jpeg`;
const EXPERTISE_IMAGE  = `${BASE_R2}-home-expertise-advisor.jpeg`;

export default async function HomePage() {
  const posts = await getPublishedBlogPosts(3, 0);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Conseils investissement stratégie financière réussite"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Conseils Investissement | Stratégies selon votre âge et votre situation
              </h1>
              <p className="mt-6 text-lg text-slate-300 max-w-xl">
                Investir intelligemment selon vos objectifs, votre horizon temporel et votre
                tolérance au risque. Nos guides vous accompagnent dans toutes les phases de votre
                vie financière : de vos premiers investissements à 20 ans jusqu&apos;à la
                constitution d&apos;un patrimoine robuste à 40 ans et au-delà.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/strategies"
                  className="inline-flex items-center px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Découvrir mes stratégies
                </Link>
                <Link
                  href="/classes-actifs"
                  className="inline-flex items-center px-6 py-3 border border-slate-400 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Explorer les classes d&apos;actifs
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src={HERO_IMAGE}
                alt="Conseils investissement stratégie financière réussite"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Strategies by age ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Stratégies d&apos;Investissement{" "}
              <span className="text-amber-500">par Tranche d&apos;Âge</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Chaque étape de votre vie nécessite une approche différente. Découvrez les
              stratégies d&apos;investissement optimales adaptées à votre situation financière et
              vos objectifs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 20-30 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">20-30 ans</h3>
              <p className="mt-2 text-slate-600">
                L&apos;avenir devant vous. Profitez d&apos;un horizon long pour maximiser votre
                épargne et commencer à investir précocement dans l&apos;immobilier et les marchés
                financiers.
              </p>
              <ul className="mt-4 space-y-2">
                {["Profil agressif toléré", "Assurance-vie et PEA", "Investissement initial bourse", "Épargne de précaution"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/strategies#20-30-ans"
                className="mt-6 inline-block text-amber-600 font-semibold hover:text-amber-700 text-sm"
              >
                Stratégie 20-30 ans →
              </Link>
            </div>

            {/* 30-40 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">30-40 ans</h3>
              <p className="mt-2 text-slate-600">
                La période de consolidation. Commencez à diversifier votre patrimoine tout en
                préparant les projets majeurs : mariage, enfants, immobilier.
              </p>
              <ul className="mt-4 space-y-2">
                {["Diversification du portefeuille", "Investissement immobilier", "Allocation équilibrée", "Planification retraite"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/strategies#30-40-ans"
                className="mt-6 inline-block text-amber-600 font-semibold hover:text-amber-700 text-sm"
              >
                Stratégie 30-40 ans →
              </Link>
            </div>

            {/* 40+ */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">40 ans et plus</h3>
              <p className="mt-2 text-slate-600">
                L&apos;accent sur la préservation et la transmission. Optimisez votre fiscalité et
                constituez un patrimoine robuste pour la retraite et vos héritiers.
              </p>
              <ul className="mt-4 space-y-2">
                {["Profil défensif", "Immobilier locatif", "SCPI et foncières", "Assurance-vie premium"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/strategies#40-plus"
                className="mt-6 inline-block text-amber-600 font-semibold hover:text-amber-700 text-sm"
              >
                Stratégie 40+ ans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pourquoi investir selon votre âge ───────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={STRATEGIES_IMAGE}
                alt="Stratégies investissement planification financière par âge"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Pourquoi Investir{" "}
                <span className="text-amber-500">selon votre Âge</span> ?
              </h2>
              <div className="mt-4 space-y-4 text-slate-600">
                <p>
                  La question n&apos;est pas seulement <strong>quand investir</strong>, mais{" "}
                  <strong>comment investir</strong> en fonction de votre situation personnelle. Un
                  jeune de 25 ans peut se permettre une volatilité élevée avec un portefeuille
                  actions majoritaire, tandis qu&apos;un investisseur de 45 ans cherchera à préserver
                  son capital tout en générant des revenus complémentaires.
                </p>
                <p>
                  Nos stratégies d&apos;investissement sont conçues pour s&apos;adapter à chaque étape
                  de votre vie. Elles prennent en compte votre capacité d&apos;épargne, votre horizon
                  de placement, votre situation familiale et professionnelle, ainsi que vos objectifs
                  financiers à court, moyen et long terme.
                </p>
                <p>
                  Que vous soyez entrepreneur, salarié, fonctionnaire ou freelancer, nos conseils
                  vous aideront à construire un plan d&apos;investissement personnalisé et efficient,
                  optimisé pour votre profil unique d&apos;investisseur.
                </p>
              </div>
              <Link
                href="/strategies"
                className="mt-6 inline-flex items-center px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                En savoir plus sur les stratégies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Asset classes ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Nos <span className="text-amber-500">Classes d&apos;Actifs</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Diversifiez votre patrimoine en explorant les différentes classes d&apos;actifs. Chacune
              présente ses propres caractéristiques de risque, rendement et liquidité.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { href: "/classes-actifs#bourse", label: "Bourse", sub: "Actions, ETF, OPCVM", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
              { href: "/classes-actifs#crypto", label: "Crypto", sub: "Bitcoin, Ethereum, Altcoins", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { href: "/classes-actifs#immobilier", label: "Immobilier", sub: "Locations, SCPI, SCI", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
              { href: "/classes-actifs#metaux-precieux", label: "Métaux précieux", sub: "Or, Argent, Platine", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 3z" },
              { href: "/classes-actifs#montres", label: "Montres", sub: "Rolex, Patek, Omega", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map((asset) => (
              <Link
                key={asset.href}
                href={asset.href}
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50 transition-colors"
              >
                <div className="w-12 h-12 bg-slate-100 group-hover:bg-amber-100 rounded-xl flex items-center justify-center mb-3 transition-colors">
                  <svg className="w-6 h-6 text-slate-600 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={asset.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{asset.label}</h3>
                <p className="text-xs text-slate-500 mt-1">{asset.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diversification ──────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Diversification : La Clé du{" "}
                <span className="text-amber-500">Succès</span>
              </h2>
              <div className="mt-4 space-y-4 text-slate-600">
                <p>
                  La diversification de votre patrimoine est le fondement même de toute stratégie
                  d&apos;investissement performante. En répartissant vos investissements entre
                  différentes classes d&apos;actifs, vous réduisez votre risque global tout en
                  optimisant votre potentiel de rendement à long terme.
                </p>
                <p>
                  Un portefeuille bien diversifié combine des actifs avec des corrélations faibles
                  ou négatives entre eux. Quand les marchés actions baissent, les actifs refuges
                  comme l&apos;or ou l&apos;immobilier peuvent maintenir leur valeur, voire s&apos;apprécier.
                </p>
                <p>
                  Nos experts vous conseillent sur la meilleure allocation d&apos;actifs selon votre
                  profil de risque, votre horizon d&apos;investissement et vos objectifs financiers.
                  Découvrez comment construire un portefeuille résilient et adapté à votre situation.
                </p>
              </div>
              <Link
                href="/classes-actifs"
                className="mt-6 inline-flex items-center px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                Découvrir les classes d&apos;actifs
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={ASSETS_IMAGE}
                alt="Diversification portefeuille investissement classes d'actifs"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src={EXPERTISE_IMAGE}
                alt="Expert conseil investissement stratégie financière"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-slate-900">
                Notre <span className="text-amber-500">Expertise</span> à votre Service
              </h2>
              <div className="mt-4 space-y-4 text-slate-600">
                <p>
                  Peichert Investissement vous accompagne dans toutes vos décisions
                  d&apos;investissement. Notre approche pédagogique et transparente vous permet de
                  comprendre les mécanismes des marchés financiers et de prendre des décisions
                  éclairées.
                </p>
                <p>
                  Nous croyons fermement que l&apos;éducation financière est la clé de
                  l&apos;indépendance financière. C&apos;est pourquoi nos guides sont conçus pour être
                  accessibles à tous, des débutants absolus aux investisseurs expérimentés souhaitant
                  perfectionner leur stratégie.
                </p>
                <p>
                  Nos conseils sont basés sur des données factuelles, des analyses de marché
                  rigoureuses et des principes financiers éprouvés. Nous ne promettons pas de
                  rendements miracles, mais une approche sérieuse et méthodique pour faire fructifier
                  votre patrimoine.
                </p>
              </div>
              <Link
                href="/a-propos"
                className="mt-6 inline-flex items-center px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors text-sm"
              >
                En savoir plus sur nous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest blog posts ────────────────────────────────────────── */}
      {posts.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Derniers guides</h2>
              <Link href="/blog" className="text-amber-600 font-semibold hover:text-amber-700 text-sm">
                Voir tous les guides →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  {post.cover?.file_url && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.cover.file_url}
                        alt={post.cover.alt || post.h1 || post.slug}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {post.h1 || post.seo_title || post.slug}
                    </h3>
                    {post.excerpt && (
                      <p className="mt-2 text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-navy-900 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Prêt à Optimiser vos Investissements ?
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Découvrez nos guides gratuits et commencez dès aujourd&apos;hui à construire votre
            indépendance financière. Nos stratégies sont adaptées à chaque profil et chaque situation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/strategies"
              className="px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
            >
              Explorer les stratégies
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 border border-slate-500 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Lire nos guides
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
