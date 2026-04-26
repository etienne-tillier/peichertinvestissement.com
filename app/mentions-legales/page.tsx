import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Peichert Investissement : éditeur, hébergeur, propriété intellectuelle et avertissement sur les investissements.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Mentions légales</h1>

      <div className="prose prose-slate max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Éditeur du site</h2>
          <p className="text-slate-600 leading-relaxed">
            Le site <strong>peichertinvestissement.com</strong> est édité à titre personnel.
          </p>
          <p className="text-slate-600 leading-relaxed mt-2">
            Contact : <a href="mailto:contact@peichertinvestissement.com" className="text-amber-600 hover:text-amber-500">contact@peichertinvestissement.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. Hébergement</h2>
          <p className="text-slate-600 leading-relaxed">
            Ce site est hébergé par des services cloud conformes à la réglementation européenne (RGPD). L&apos;hébergeur traite les données dans le respect des normes en vigueur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. Propriété intellectuelle</h2>
          <p className="text-slate-600 leading-relaxed">
            L&apos;ensemble des contenus présents sur ce site (textes, graphiques, images, vidéos, données) sont protégés par le droit d&apos;auteur et sont la propriété exclusive de Peichert Investissement, sauf mention contraire.
          </p>
          <p className="text-slate-600 leading-relaxed mt-2">
            Toute reproduction, distribution ou utilisation de ces contenus sans autorisation préalable est strictement interdite.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">4. Avertissement sur les investissements</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-slate-700 leading-relaxed">
              Les informations publiées sur ce site sont fournies à titre <strong>informatif et éducatif uniquement</strong>. Elles ne constituent pas un conseil en investissement personnalisé au sens de la directive MIF2 et de la réglementation de l&apos;Autorité des Marchés Financiers (AMF).
            </p>
            <p className="text-slate-700 leading-relaxed mt-3">
              Tout investissement comporte des risques, y compris la perte partielle ou totale du capital. Les performances passées ne préjugent pas des performances futures. L&apos;éditeur de ce site ne peut être tenu responsable des décisions prises sur la base des informations publiées.
            </p>
            <p className="text-slate-700 leading-relaxed mt-3">
              Avant toute décision d&apos;investissement, il est recommandé de consulter un conseiller en investissements financiers (CIF) agréé par l&apos;AMF.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">5. Liens hypertextes</h2>
          <p className="text-slate-600 leading-relaxed">
            Ce site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre informatif. Peichert Investissement n&apos;est pas responsable du contenu des sites externes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">6. Cookies</h2>
          <p className="text-slate-600 leading-relaxed">
            Ce site utilise des cookies techniques nécessaires au bon fonctionnement du site et des cookies analytiques anonymisés pour mesurer l&apos;audience. Aucun cookie publicitaire ou de traçage tiers n&apos;est déposé sans votre consentement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">7. Droit applicable</h2>
          <p className="text-slate-600 leading-relaxed">
            Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront compétents.
          </p>
        </section>

        <p className="text-xs text-slate-400 pt-4 border-t border-slate-100">
          Dernière mise à jour : janvier 2025
        </p>
      </div>
    </main>
  );
}
