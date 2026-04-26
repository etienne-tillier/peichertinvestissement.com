import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de Peichert Investissement : collecte et traitement des données personnelles conformément au RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Politique de confidentialité</h1>

      <div className="prose prose-slate max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Responsable du traitement</h2>
          <p className="text-slate-600 leading-relaxed">
            Le responsable du traitement des données collectées via le site <strong>peichertinvestissement.com</strong> est l&apos;éditeur du site.
          </p>
          <p className="text-slate-600 leading-relaxed mt-2">
            Contact : <a href="mailto:contact@peichertinvestissement.com" className="text-amber-600 hover:text-amber-500">contact@peichertinvestissement.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. Données collectées</h2>
          <p className="text-slate-600 leading-relaxed">
            Nous collectons uniquement les données strictement nécessaires :
          </p>
          <ul className="mt-3 space-y-2">
            {[
              "Données de navigation (adresse IP anonymisée, pages visitées, durée de visite) — via analytics anonymisé",
              "Adresse email — uniquement si vous nous contactez volontairement",
              "Données techniques (navigateur, système d'exploitation) — à des fins de compatibilité uniquement",
            ].map((d) => (
              <li key={d} className="flex gap-2 text-slate-600 text-sm">
                <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>
                {d}
              </li>
            ))}
          </ul>
          <p className="text-slate-600 leading-relaxed mt-3">
            Nous ne collectons <strong>pas</strong> de données sensibles (données financières, données de santé, données biométriques).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. Finalités du traitement</h2>
          <p className="text-slate-600 leading-relaxed">
            Les données collectées sont utilisées pour :
          </p>
          <ul className="mt-3 space-y-2">
            {[
              "Assurer le bon fonctionnement technique du site",
              "Mesurer l'audience et améliorer le contenu (analytics anonymisé)",
              "Répondre à vos messages si vous nous contactez",
            ].map((f) => (
              <li key={f} className="flex gap-2 text-slate-600 text-sm">
                <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">4. Base légale</h2>
          <p className="text-slate-600 leading-relaxed">
            Les traitements sont fondés sur :
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>L&apos;intérêt légitime (amélioration du site, analytics)</li>
            <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>Votre consentement (cookies non essentiels)</li>
            <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>L&apos;exécution d&apos;un contrat ou de mesures précontractuelles (si applicable)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">5. Conservation des données</h2>
          <p className="text-slate-600 leading-relaxed">
            Les données sont conservées pour la durée strictement nécessaire à leur finalité :
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>Données analytiques : 13 mois maximum</li>
            <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>Emails de contact : 3 ans à compter du dernier contact</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">6. Vos droits (RGPD)</h2>
          <p className="text-slate-600 leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
          </p>
          <div className="mt-3 grid sm:grid-cols-2 gap-3">
            {[
              { droit: "Accès", desc: "Obtenir une copie de vos données" },
              { droit: "Rectification", desc: "Corriger des données inexactes" },
              { droit: "Effacement", desc: "Demander la suppression de vos données" },
              { droit: "Opposition", desc: "Vous opposer à certains traitements" },
              { droit: "Portabilité", desc: "Recevoir vos données dans un format lisible" },
              { droit: "Limitation", desc: "Restreindre temporairement un traitement" },
            ].map((r) => (
              <div key={r.droit} className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                <p className="font-semibold text-slate-900 text-sm">{r.droit}</p>
                <p className="text-slate-500 text-xs mt-0.5">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@peichertinvestissement.com" className="text-amber-600 hover:text-amber-500">contact@peichertinvestissement.com</a>
          </p>
          <p className="text-slate-600 leading-relaxed mt-2 text-sm">
            Vous pouvez également introduire une réclamation auprès de la CNIL : <span className="text-amber-600">www.cnil.fr</span>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">7. Cookies</h2>
          <p className="text-slate-600 leading-relaxed">
            Ce site utilise des cookies techniques (indispensables au fonctionnement) et des cookies analytiques (mesure d&apos;audience anonymisée). Vous pouvez configurer votre navigateur pour refuser les cookies, ce qui peut affecter certaines fonctionnalités du site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">8. Mise à jour</h2>
          <p className="text-slate-600 leading-relaxed">
            Cette politique peut être mise à jour à tout moment. La date de dernière modification est indiquée ci-dessous.
          </p>
        </section>

        <p className="text-xs text-slate-400 pt-4 border-t border-slate-100">
          Dernière mise à jour : janvier 2025
        </p>
      </div>
    </main>
  );
}
