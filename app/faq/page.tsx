import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "FAQ - Questions Fréquentes sur la Messagerie Orange",
    description: "Trouvez les réponses à toutes vos questions sur la messagerie Orange : connexion, mot de passe oublié, configuration email, problèmes techniques et sécurité.",
    keywords: ["FAQ orange", "questions fréquentes messagerie orange", "aide orange email", "support orange"],
};

const faqCategories = [
    {
        id: "connexion",
        title: "Problèmes de connexion",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
        ),
        questions: [
            {
                q: "Je n'arrive pas à me connecter à ma messagerie Orange, que faire ?",
                a: "Plusieurs raisons peuvent expliquer un échec de connexion. Vérifiez d'abord que vous utilisez les bons identifiants (adresse email complète). Si vous avez oublié votre mot de passe, cliquez sur 'Mot de passe oublié' sur la page de connexion. Essayez également de vider le cache de votre navigateur ou d'utiliser un autre navigateur. Si votre compte est bloqué après plusieurs tentatives, patientez 30 minutes ou contactez le service client Orange."
            },
            {
                q: "Mon compte Orange est bloqué, comment le débloquer ?",
                a: "Après 5 tentatives de connexion échouées, votre compte est temporairement bloqué pour des raisons de sécurité. Attendez 30 minutes puis réessayez. Si vous avez oublié votre mot de passe, utilisez la fonction 'Mot de passe oublié' pour en définir un nouveau. Pour un déblocage immédiat, contactez le service client Orange ou rendez-vous dans une boutique Orange avec une pièce d'identité."
            },
            {
                q: "Je reçois le message 'Identifiants incorrects', que vérifier ?",
                a: "Assurez-vous d'utiliser votre adresse email Orange complète (ex: prenom.nom@orange.fr) comme identifiant. Vérifiez que le verrouillage majuscule n'est pas activé par erreur. Si vous avez récemment changé votre mot de passe, utilisez le nouveau. Si le problème persiste, cliquez sur 'Mot de passe oublié' pour réinitialiser vos identifiants."
            },
        ],
    },
    {
        id: "mot-de-passe",
        title: "Récupération du mot de passe",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
        ),
        questions: [
            {
                q: "Comment réinitialiser mon mot de passe Orange oublié ?",
                a: "Sur la page de connexion de webmail.orange.fr, cliquez sur 'Mot de passe oublié'. Saisissez votre adresse email Orange, puis choisissez la méthode de récupération : SMS ou email alternatif. Vous recevrez un code de vérification qui vous permettra de créer un nouveau mot de passe. Choisissez un mot de passe robuste : minimum 8 caractères, mélange de majuscules, minuscules, chiffres et caractères spéciaux."
            },
            {
                q: "Je n'ai plus accès à mon numéro de téléphone ni à mon email de récupération, que faire ?",
                a: "Si vous n'avez plus accès à votre numéro de téléphone ni à votre email de récupération, vous devrez prouver votre identité autrement. Rendez-vous dans une boutique Orange avec une pièce d'identité et un justificatif de domicile. Le conseiller pourra vérifier votre identité et vous aider à récupérer l'accès à votre compte. Vous pouvez également contacter le service client Orange par téléphone."
            },
            {
                q: "Comment changer mon mot de passe Orange ?",
                a: "Pour changer votre mot de passe, connectez-vous d'abord à votre espace client Orange sur orange.fr. Allez dans la section 'Mon compte' puis 'Paramètres de sécurité'. Cliquez sur 'Modifier le mot de passe' et suivez les instructions. Choisissez un mot de passe sécurisé et unique, puis confirmez le changement. N'oubliez pas de mettre à jour vos autres appareils si vous utilisez votre email sur plusieurs applications."
            },
        ],
    },
    {
        id: "configuration",
        title: "Configuration email sur mobile",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        questions: [
            {
                q: "Comment configurer mon email Orange sur un iPhone ?",
                a: "Ouvrez Réglages > Mail > Comptes > Ajouter un compte > IMAP. Entrez les informations suivantes : Nom (votre nom), Adresse (votre@orange.fr), Description (Orange). Pour le serveur entrant IMAP : Hôte imap.orange.fr, Nom (votre@orange.fr), Mot de passe (votre mot de passe), Utiliser SSL (Oui), Port (993). Pour le serveur sortant SMTP : Hôte smtp.orange.fr, Nom (votre@orange.fr), Mot de passe (votre mot de passe), Utiliser SSL (Oui), Port (465). Validez et attendez la synchronisation."
            },
            {
                q: "Comment configurer mon email Orange sur un Android ?",
                a: "Ouvrez l'application Email (ou Gmail) > Ajouter un compte > IMAP. Saisissez votre adresse email Orange complète et votre mot de passe. Les paramètres devraient se configurer automatiquement. Si ce n'est pas le cas, choisissez 'Configuration manuelle' et entrez manuellement : Serveur IMAP imap.orange.fr (port 993, SSL), Serveur SMTP smtp.orange.fr (port 465, SSL). Cochez 'Connexion requise' pour les deux serveurs et utilisez votre adresse email comme identifiant."
            },
            {
                q: "Quels sont les paramètres serveur pour configurer mon email Orange ?",
                a: "Serveur IMAP (réception) : hôte imap.orange.fr, port 993, encryption SSL/TLS, authentification normale. Serveur SMTP (envoi) : hôte smtp.orange.fr, port 465, encryption SSL/TLS, authentification normale. Utilisez votre adresse email Orange complète comme identifiant et votre mot de passe comme mot de passe. Pour une sécurité optimale, activez toujours SSL/TLS sur les deux serveurs."
            },
        ],
    },
    {
        id: "securite",
        title: "Sécurité du compte",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        questions: [
            {
                q: "Comment activer l'authentification à deux facteurs sur mon compte Orange ?",
                a: "Connectez-vous à votre espace client sur orange.fr, puis accédez à 'Mon compte' > 'Sécurité' > 'Authentification à deux facteurs'. Choisissez la méthode préférée : SMS (recommandé) ou application d'authentification. Si vous choisissez SMS, saissez votre numéro de téléphone. À chaque connexion, vous recevrez un code à 6 chiffres par SMS qu'il faudra saisir en plus de votre mot de passe."
            },
            {
                q: "Je soupçonne que quelqu'un accède à mon compte Orange, que faire ?",
                a: "Changez immédiatement votre mot de passe depuis un appareil sûr. Consultez vos dernières connexions dans l'historique de sécurité de votre espace client. Si vous voyez des connexions suspectes, cliquez sur 'Déconnecter tous les autres appareils'. Activez l'authentification à deux facteurs pour une protection renforcée. Signalez toute activité suspecte au service client Orange et surveillez vos relevés bancaires si vous avez des services payants."
            },
            {
                q: "Comment créer un mot de passe Orange sécurisé ?",
                a: "Un bon mot de passe Orange doit contenir au moins 12 caractères, mélangeant majuscules, minuscules, chiffres et caractères spéciaux (!@#$%). Évitez les mots courants, les dates de naissance ou les informations personnelles évidentes. Ne réutilisez pas un mot de passe déjà utilisé ailleurs. Utilisez un gestionnaire de mots de passe pour générer et stocker vos mots de passe en toute sécurité."
            },
        ],
    },
    {
        id: "general",
        title: "Questions générales",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        questions: [
            {
                q: "Quelle est l'adresse du webmail Orange ?",
                a: "L'adresse du webmail Orange est : webmail.orange.fr. Vous pouvez également y accéder depuis orange.fr en cliquant sur 'Mail' ou 'Messagerie' dans le menu. Le webmail vous permet de consulter et gérer vos emails directement depuis votre navigateur, sans logiciel supplémentaire."
            },
            {
                q: "Quelle est la capacité de stockage de ma messagerie Orange ?",
                a: "Votre boîte email Orange dispose de 5 Go d'espace de stockage par défaut. Vous pouvez gérer votre quota depuis les paramètres du webmail. Si vous atteignez la limite de stockage, vous ne pourrez plus recevoir de nouveaux emails. Supprimez les messages volumineux ou les pièces jointes pour libérer de l'espace."
            },
            {
                q: "Comment contacter le service client Orange ?",
                a: "Pour toute assistance, vous pouvez contacter le service client Orange par téléphone (3970 ou depuis votre mobile le 700 depuis un poste Orange), via le chat sur orange.fr, sur les réseaux sociaux, ou en vous rendant dans une boutique Orange. Notre équipe est disponible pour répondre à toutes vos questions sur votre messagerie."
            },
        ],
    },
];

export default function FAQPage() {
    return (
        <main className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-dark mb-4">
                        Questions Fréquentes sur la <span className="text-orange">Messagerie Orange</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Trouvez rapidement des réponses à vos questions sur la messagerie Orange, 
                        la connexion, la récupération de mot de passe et la configuration.
                    </p>
                </header>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigation */}
                    <aside className="lg:col-span-1">
                        <nav className="sticky top-24 space-y-2">
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                Catégories
                            </p>
                            {faqCategories.map((category) => (
                                <a
                                    key={category.id}
                                    href={`#${category.id}`}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <span className="text-orange">{category.icon}</span>
                                    <span className="font-medium text-dark">{category.title}</span>
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* FAQ Content */}
                    <div className="lg:col-span-3 space-y-12">
                        {faqCategories.map((category) => (
                            <section key={category.id} id={category.id} className="scroll-mt-24">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-orange">{category.icon}</span>
                                    <h2 className="text-2xl font-bold text-dark">{category.title}</h2>
                                </div>
                                <div className="space-y-4">
                                    {category.questions.map((item, index) => (
                                        <div key={index} className="card">
                                            <h3 className="text-lg font-semibold text-dark mb-3 flex items-start gap-2">
                                                <span className="text-orange mt-1">Q.</span>
                                                {item.q}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed pl-5">
                                                {item.a}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}

                        {/* Contact CTA */}
                        <div className="card bg-orange/5 border-orange/20">
                            <h3 className="text-xl font-bold text-dark mb-3">
                                Vous n'avez pas trouvé votre réponse ?
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Notre équipe est disponible pour vous aider. Contactez-nous par email 
                                et nous vous répondrons dans les plus brefs délais.
                            </p>
                            <Link href="/contact" className="btn-primary">
                                Nous contacter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
