import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-dark text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <span className="text-gold font-display text-xl font-bold">Peichert</span>
                            <span className="text-white font-display text-xl">Investissement</span>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed max-w-md">
                            Conseils et stratégies d&apos;investissement personnalisés pour tous les âges. 
                            Découvrez comment optimiser votre portefeuille et atteindre l&apos;indépendance financière.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gold font-display font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-white/70 hover:text-gold transition-colors text-sm">Accueil</Link></li>
                            <li><Link href="/strategies" className="text-white/70 hover:text-gold transition-colors text-sm">Stratégies par âge</Link></li>
                            <li><Link href="/classes-actifs" className="text-white/70 hover:text-gold transition-colors text-sm">Classes d&apos;actifs</Link></li>
                            <li><Link href="/blog" className="text-white/70 hover:text-gold transition-colors text-sm">Blog</Link></li>
                            <li><Link href="/a-propos" className="text-white/70 hover:text-gold transition-colors text-sm">À propos</Link></li>
                            <li><Link href="/contact" className="text-white/70 hover:text-gold transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Asset Classes */}
                    <div>
                        <h3 className="text-gold font-display font-semibold mb-4">Classes d&apos;actifs</h3>
                        <ul className="space-y-2">
                            <li><Link href="/classes-actifs#bourse" className="text-white/70 hover:text-gold transition-colors text-sm">Bourse</Link></li>
                            <li><Link href="/classes-actifs#crypto" className="text-white/70 hover:text-gold transition-colors text-sm">Cryptomonnaies</Link></li>
                            <li><Link href="/classes-actifs#immobilier" className="text-white/70 hover:text-gold transition-colors text-sm">Immobilier</Link></li>
                            <li><Link href="/classes-actifs#metaux-precieux" className="text-white/70 hover:text-gold transition-colors text-sm">Métaux précieux</Link></li>
                            <li><Link href="/classes-actifs#montres" className="text-white/70 hover:text-gold transition-colors text-sm">Montres de collection</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm">
                        © {currentYear} Peichert Investissement. Tous droits réservés.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/mentions-legales" className="text-white/50 hover:text-gold transition-colors text-sm">
                            Mentions légales
                        </Link>
                        <Link href="/politique-confidentialite" className="text-white/50 hover:text-gold transition-colors text-sm">
                            Politique de confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
