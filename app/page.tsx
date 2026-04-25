import Link from "next/link";
import ImageFallback from "@/components/ImageFallback";
import { getPublishedBlogPosts } from "@/lib/blog";

export default async function HomePage() {
    const posts = await getPublishedBlogPosts(6, 0);

    return (
        <main>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-dark via-dark to-dark-light py-20 text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                            Messagerie Orange : Guide Complet pour Gérer Votre Email Orange
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Accédez facilement à vos emails Orange, récupérez votre mot de passe oublié, 
                            configurez votre compte sur tous vos appareils et optimisez votre utilisation 
                            quotidienne de la messagerie.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/connexion" className="btn-primary">
                                Accéder à ma messagerie
                            </Link>
                            <Link href="/faq" className="btn-secondary">
                                Consulter la FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos Services Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="section-title text-center mb-12">
                        Nos <span className="text-orange">Services</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <a href="/connexion" className="card hover:shadow-lg transition-shadow group text-center">
                            <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange transition-colors">
                                <svg className="w-8 h-8 text-orange group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-dark mb-2">Connexion</h3>
                            <p className="text-gray-600 text-sm">Accédez à webmail.orange.fr et gérez vos emails en ligne.</p>
                        </a>
                        <a href="/faq#mot-de-passe" className="card hover:shadow-lg transition-shadow group text-center">
                            <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange transition-colors">
                                <svg className="w-8 h-8 text-orange group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-dark mb-2">Mot de passe</h3>
                            <p className="text-gray-600 text-sm">Récupérez ou réinitialisez votre mot de passe Orange.</p>
                        </a>
                        <a href="/faq#configuration" className="card hover:shadow-lg transition-shadow group text-center">
                            <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange transition-colors">
                                <svg className="w-8 h-8 text-orange group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-dark mb-2">Configuration</h3>
                            <p className="text-gray-600 text-sm">Configurez IMAP et SMTP sur mobile et ordinateur.</p>
                        </a>
                        <a href="/faq#securite" className="card hover:shadow-lg transition-shadow group text-center">
                            <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange transition-colors">
                                <svg className="w-8 h-8 text-orange group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-dark mb-2">Sécurité</h3>
                            <p className="text-gray-600 text-sm">Protégez votre compte avec l'authentification à deux facteurs.</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <div className="max-w-6xl mx-auto px-6 -mt-8 mb-12">
                <ImageFallback
                    src="/images/hero.jpeg"
                    alt="Messagerie Orange - Consultation email"
                    width={1200}
                    height={300}
                    className="w-full rounded-xl shadow-lg object-cover h-64 md:h-80"
                />
            </div>

            {/* Section Guides */}
            <section className="py-12 bg-gradient-to-r from-orange/5 to-transparent">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <ImageFallback
                            src="/images/guides.jpeg"
                            alt="Configuration email Orange - Guides passo a passo"
                            width={600}
                            height={250}
                            className="rounded-xl shadow-lg object-cover h-64 md:h-80 w-full"
                        />
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Guides de Configuration</h3>
                            <p className="text-gray-600">Apprenez a configurer votre email Orange sur tous vos appareils avec nos guides detallhes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Problemes */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Problemes Courants Resolus</h3>
                            <p className="text-gray-600">Trouvez rapidement des solutions aux problemes les plus frequents : spam, blocage, stockage.</p>
                        </div>
                        <ImageFallback
                            src="/images/problemes.jpeg"
                            alt="Resolution problemes messagerie Orange"
                            width={600}
                            height={250}
                            className="rounded-xl shadow-lg object-cover h-64 md:h-80 w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Introduction SEO Content */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="section-title text-center mb-12">
                        Tout savoir sur la <span className="text-orange">Messagerie Orange</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="card">
                            <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Connexion à Webmail Orange</h3>
                            <p className="text-gray-600 mb-4">
                                Accédez à vos emails depuis n'importe quel navigateur grâce à webmail.orange.fr. 
                                Votre adresse email Orange vous permet de communiquer avec vos proches et 
                                de gérer vos communications professionnelles en toute simplicité.
                            </p>
                            <Link href="/connexion" className="text-orange font-medium hover:underline">
                                Se connecter →
                            </Link>
                        </div>

                        <div className="card">
                            <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Mot de Passe Oublié</h3>
                            <p className="text-gray-600 mb-4">
                                Vous avez oublié votre mot de passe ? Pas de panique. Orange vous permet 
                                de le réinitialiser facilement via votre numéro de téléphone ou une 
                                adresse email de récupération. Découvrez la procédure étape par étape.
                            </p>
                            <Link href="/faq#mot-de-passe" className="text-orange font-medium hover:underline">
                                Récupérer mon mot de passe →
                            </Link>
                        </div>

                        <div className="card">
                            <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Configuration Mobile</h3>
                            <p className="text-gray-600 mb-4">
                                Configurez votre boîte email Orange sur votre smartphone Android ou iPhone. 
                                Utilisez les protocoles IMAP et SMTP pour synchroniser vos emails sur 
                                tous vos appareils en temps réel.
                            </p>
                            <Link href="/faq#configuration" className="text-orange font-medium hover:underline">
                                Configurer mon téléphone →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed SEO Content */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <h2 className="text-3xl font-bold mb-6">
                            Comment utiliser efficacement votre <span className="text-orange">Messagerie Orange</span>
                        </h2>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            La messagerie Orange représente l'un des services email les plus utilisés en France, 
                            offrant à des millions d'utilisateurs un moyen fiable et sécurisé de communiquer. 
                            Que vous soyez client Orange depuis des années ou que vous veniez de créer votre 
                            adresse email, comprendre les fonctionnalités et les subtilités de ce service 
                            peut considérablement améliorer votre productivité numérique au quotidien.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Créer et gérer votre adresse email Orange</h3>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Pour bénéficier d'une adresse email Orange, vous devez être client internet 
                            chez l'opérateur. L'adresse se présente généralement sous la forme 
                            prenom.nom@orange.fr ou prenom.nom@orange.com. Cette adresse vous donne 
                            accès à webmail.orange.fr, le portail de consultation de vos messages en ligne. 
                            Une fois connecté, vous pouvez envoyer et recevoir des emails, organiser vos 
                            messages dans des dossiers, et utiliser les fonctionnalités de filtrage avancées.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Sécuriser votre compte email Orange</h3>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            La sécurité de votre messagerie Orange est essentielle pour protéger vos 
                            communications personnelles et professionnelles. Orange propose plusieurs 
                            niveaux de sécurité, incluant l'authentification à deux facteurs, qui vous 
                            permet de recevoir un code par SMS lors de chaque connexion depuis un nouvel 
                            appareil. Pensez également à choisir un mot de passe robuste, combinant 
                            majuscules, minuscules, chiffres et caractères spéciaux, et à le changer 
                            régulièrement pour maintenir un niveau de protection optimal.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Résoudre les problèmes courants de connexion</h3>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Les difficultés de connexion à la messagerie Orange sont fréquentes et 
                            peuvent avoir plusieurs origines. Un identifiant ou mot de passe incorrect, 
                            un compte temporairement bloqué après plusieurs tentatives infructueuses, 
                            ou encore des problèmes de cookies et de cache du navigateur peuvent être 
                            à l'origine de ces désagréments. Dans la plupart des cas, vider le cache de 
                            votre navigateur et essayer un autre mode de connexion suffit à résoudre 
                            le problème. Si votre compte est bloqué, la procédure de déblocage via 
                            l'espace client ou le service client Orange vous permettra de regainérer 
                            un nouveau mot de passe.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Configurer IMAP et SMTP sur vos appareils</h3>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Pour consulter vos emails Orange sur une application tierce comme Outlook, 
                            Thunderbird ou l'application Mail de votre smartphone, vous devez configurer 
                            les paramètres serveur. Le serveur IMAP (réception) est imap.orange.fr sur 
                            le port 993 en SSL, tandis que le serveur SMTP (envoi) est smtp.orange.fr 
                            sur le port 465. Assurez-vous d'activer l'authentification pour les deux 
                            serveurs et d'utiliser votre adresse email Orange complète comme identifiant. 
                            Cette configuration vous permettra de synchroniser vos emails sur tous vos 
                            appareils de manière transparente.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Optimiser votre organisation avec les dossiers et filtres</h3>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            La messagerie Orange offre des fonctionnalités avancées pour organiser 
                            efficacement vos emails. Créez des dossiers personnalisés pour classer vos 
                            messages par thème, projet ou priorité. Utilisez les filtres automatiques 
                            pour rediriger automatiquement certains emails entrants vers des dossiers 
                            spécifiques, ou pour marquer automatiquement comme lus les newsletters 
                            que vous ne souhaitez pas consulter immédiatement. Ces outils vous 
                            permettront de maintenir une boîte de réception claire et de gagner 
                            un temps précieux dans la gestion quotidienne de vos communications.
                        </p>

                        <div className="bg-orange/5 border-l-4 border-orange p-6 rounded-r-lg my-8">
                            <p className="text-gray-800 font-medium">
                                <strong>Conseil Orange :</strong> Activez les notifications email pour 
                                rester informé en temps réel de vos nouveaux messages, même lorsque 
                                l'application de messagerie n'est pas ouverte.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="section-title text-center mb-12">
                        Nos guides <span className="text-orange">les plus consultés</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link href="/faq#mot-de-passe" className="card hover:shadow-lg transition-shadow group">
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange transition-colors">
                                        Récupérer mon mot de passe Orange
                                    </h3>
                                    <p className="text-gray-600">
                                        Guide complet pour réinitialiser votre mot de passe via SMS ou email 
                                        de récupération en cas d'oubli.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/faq#configuration" className="card hover:shadow-lg transition-shadow group">
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c-1.543 1.153-3.101.253-3.35-.427a.997.997 0 01-.198-.57c-.037-1.413.925-2.488 2.307-2.488 1.382 0 2.344.975 2.307 2.488-.037 1.413-.974 2.488-2.307 2.488a1.532 1.532 0 01-2.573-1.066 1.724 1.724 0 002.307-2.488c.037-.528.321.085.321.285z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange transition-colors">
                                        Configurer email Orange sur mobile
                                    </h3>
                                    <p className="text-gray-600">
                                        Apprenez à configurer votre compte Orange sur iPhone, Android 
                                        ou toute application IMAP compatible.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/faq#connexion" className="card hover:shadow-lg transition-shadow group">
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange transition-colors">
                                        Résoudre les erreurs de connexion
                                    </h3>
                                    <p className="text-gray-600">
                                        Solutions aux problèmes courants : identifiants incorrects, 
                                        compte bloqué, erreurs techniques et plus encore.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/faq#securite" className="card hover:shadow-lg transition-shadow group">
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange transition-colors">
                                        Sécuriser mon compte email
                                    </h3>
                                    <p className="text-gray-600">
                                        Activez l'authentification à deux facteurs et apprenez les 
                                        bonnes pratiques pour protéger votre compte.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-orange">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Prêt à accéder à votre messagerie ?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Cliquez sur le bouton ci-dessous pour vous connecter directement 
                        à webmail.orange.fr
                    </p>
                    <Link 
                        href="/connexion" 
                        className="inline-block bg-dark text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-dark-light transition-colors"
                    >
                        Se connecter à ma messagerie
                    </Link>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="section-title mb-0">Articles récents</h2>
                        <Link href="/blog" className="text-orange font-medium hover:underline">
                            Voir tous →
                        </Link>
                    </div>

                    {posts.length === 0 ? (
                        <div className="card text-center py-12">
                            <p className="text-gray-600 text-lg">
                                Aucun article publié pour le moment. Revenez bientôt !
                            </p>
                        </div>
                    ) : (
                        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.slice(0, 3).map((post) => (
                                <li key={post.id} className="card hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-bold mb-2">
                                        <Link href={`/blog/${post.slug}`} className="hover:text-orange">
                                            {post.h1 || post.seo_title || post.slug}
                                        </Link>
                                    </h3>
                                    {post.excerpt ? (
                                        <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                                    ) : null}
                                    <p className="text-xs text-gray-500">
                                        {post.published_at
                                            ? new Date(post.published_at).toLocaleDateString("fr-FR")
                                            : ""}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
        </main>
    );
}
