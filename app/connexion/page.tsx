import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Connexion à votre Messagerie Orange",
    description: "Connectez-vous à votre messagerie Orange. Accédez à webmail.orange.fr pour consulter vos emails, envoyer des messages et gérer votre compte email.",
    keywords: ["connexion orange", "webmail.orange.fr", "messagerie orange login", "email orange connexion"],
};

export default function ConnexionPage() {
    return (
        <main className="min-h-[calc(100vh-200px)] flex items-center justify-center py-16 px-6">
            <div className="max-w-md w-full">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-dark mb-2">
                        Connexion à <span className="text-orange">Messagerie Orange</span>
                    </h1>
                    <p className="text-gray-600">
                        Accédez à votre boîte email Orange
                    </p>
                </div>

                <div className="card">
                    <img
                        src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&q=80"
                        alt="Connexion à la Messagerie Orange"
                        className="w-full rounded-lg mb-6 object-cover h-48"
                    />
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl font-bold text-dark mb-4 text-center">
                                Comment se connecter ?
                            </h2>
                            <ol className="space-y-4 text-gray-700">
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                                    <div>
                                        <p className="font-medium">Rendez-vous sur webmail.orange.fr</p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Ouvrez votre navigateur et saissez l'adresse du webmail Orange
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                                    <div>
                                        <p className="font-medium">Entrez vos identifiants</p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Saisissez votre adresse email Orange complète (ex: prenom.nom@orange.fr) et votre mot de passe
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-8 h-8 bg-orange text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                                    <div>
                                        <p className="font-medium">Cliquez sur "Se connecter"</p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Vous accéderez directement à votre boîte de réception
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                            <a 
                                href="https://webmail.orange.fr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full text-center block"
                            >
                                Accéder à webmail.orange.fr
                            </a>
                        </div>

                        {/* FAQ Collapsible */}
                        <div className="border-t border-gray-200 pt-6">
                            <h3 className="font-semibold text-dark mb-4">Questions fréquentes</h3>
                            <details className="mb-3 group">
                                <summary className="cursor-pointer text-orange font-medium flex items-center justify-between">
                                    Je n'arrive pas à me connecter
                                    <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="text-sm text-gray-600 mt-2">Vérifiez vos identifiants, videz le cache de votre navigateur, ou utilisez la fonction "Mot de passe oublié" sur webmail.orange.fr.</p>
                            </details>
                            <details className="mb-3 group">
                                <summary className="cursor-pointer text-orange font-medium flex items-center justify-between">
                                    Mon compte est bloqué
                                    <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="text-sm text-gray-600 mt-2">Patientez 30 minutes ou utilisez "Mot de passe oublié" pour définir un nouveau mot de passe et débloquer votre compte.</p>
                            </details>
                            <details className="group">
                                <summary className="cursor-pointer text-orange font-medium flex items-center justify-between">
                                    Où trouver mon identifiant Orange ?
                                    <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="text-sm text-gray-600 mt-2">Votre identifiant est votre adresse email Orange complète, par exemple prenom.nom@orange.fr.</p>
                            </details>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                            <h3 className="font-semibold text-dark mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Problème de connexion ?
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Si vous ne parvenez pas à vous connecter, consultez notre section FAQ dédiée aux problèmes de connexion.
                            </p>
                            <Link href="/faq#connexion" className="text-orange text-sm font-medium hover:underline">
                                Résoudre mes problèmes de connexion →
                            </Link>
                        </div>

                        <div className="bg-orange/5 rounded-lg p-4">
                            <h3 className="font-semibold text-dark mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                </svg>
                                Mot de passe oublié ?
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Cliquez sur "Mot de passe oublié" sur la page de connexion pour le réinitialiser.
                            </p>
                            <Link href="/faq#mot-de-passe" className="text-orange text-sm font-medium hover:underline">
                                Récupérer mon mot de passe →
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <Link href="/" className="text-gray-500 hover:text-orange transition-colors text-sm">
                        ← Retour à l'accueil
                    </Link>
                </div>
            </div>
        </main>
    );
}
