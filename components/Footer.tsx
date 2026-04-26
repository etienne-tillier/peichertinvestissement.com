import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0f1f3d] text-slate-400 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-bold text-base mb-2">
            Peichert <span className="text-amber-400">Investissement</span>
          </p>
          <p className="text-xs leading-relaxed">
            Conseils et stratégies d&apos;investissement personnalisés selon votre âge et votre situation.
          </p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Navigation</p>
          <ul className="space-y-2">
            {[
              { href: "/strategies", label: "Stratégies par âge" },
              { href: "/classes-actifs", label: "Classes d'actifs" },
              { href: "/blog", label: "Blog" },
              { href: "/a-propos", label: "À propos" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-amber-400 transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Légal</p>
          <ul className="space-y-2">
            <li><Link href="/mentions-legales" className="hover:text-amber-400 transition-colors">Mentions légales</Link></li>
            <li><Link href="/politique-confidentialite" className="hover:text-amber-400 transition-colors">Politique de confidentialité</Link></li>
          </ul>
          <p className="mt-4 text-xs">contact@peichertinvestissement.com</p>
        </div>
      </div>
      <div className="border-t border-slate-700 max-w-7xl mx-auto px-6 py-4 text-xs text-slate-500">
        © {new Date().getFullYear()} Peichert Investissement — Tous droits réservés
      </div>
    </footer>
  );
}
