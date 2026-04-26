import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Peichert Investissement pour toute question sur nos guides, stratégies ou pour un conseil personnalisé.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0f1f3d] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white">
            Nous <span className="text-amber-400">Contacter</span>
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            Une question sur nos guides, une suggestion ou une demande spécifique ? Écrivez-nous.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Restons en contact</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <a href="mailto:contact@peichertinvestissement.com" className="text-amber-600 hover:text-amber-500 transition-colors text-sm">
                    contact@peichertinvestissement.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Délai de réponse</p>
                  <p className="text-slate-600 text-sm">Sous 48h ouvrées en général</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Type de questions</p>
                  <p className="text-slate-600 text-sm">Questions sur les guides, suggestions de contenu, partenariats éditoriaux</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 rounded-xl p-5 border border-amber-100">
              <p className="text-sm text-amber-800 font-medium mb-1">⚠️ Rappel important</p>
              <p className="text-sm text-amber-700">
                Nous ne fournissons pas de conseil en investissement personnalisé au sens réglementaire. Pour cela, consultez un conseiller financier agréé AMF.
              </p>
            </div>
          </div>

          {/* Simple email CTA */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#0f1f3d] flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Envoyez-nous un email</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              La façon la plus directe de nous contacter. Décrivez votre question ou demande et nous vous répondrons rapidement.
            </p>
            <a
              href="mailto:contact@peichertinvestissement.com"
              className="px-6 py-3 bg-[#0f1f3d] text-white font-semibold rounded-lg hover:bg-[#162c55] transition-colors w-full text-center"
            >
              Écrire un email
            </a>
            <p className="mt-4 text-xs text-slate-400">contact@peichertinvestissement.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
