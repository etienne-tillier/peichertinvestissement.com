"use client";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/strategies", label: "Stratégies par âge" },
  { href: "/classes-actifs", label: "Classes d'actifs" },
  { href: "/blog", label: "Blog" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-[#0f1f3d] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-lg tracking-tight">
          Peichert <span className="text-amber-400">Investissement</span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}
              className="text-slate-300 hover:text-amber-400 text-sm font-medium transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        {/* Mobile burger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#162c55] px-6 pb-4 flex flex-col gap-3">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
              className="text-slate-200 hover:text-amber-400 text-sm font-medium py-1 transition-colors">
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
