"use client";

import Link from "next/link";
import { useState } from "react";

const navigationItems = [
    {
        label: "Accueil",
        href: "/",
    },
    {
        label: "Stratégies par âge",
        href: "/strategies",
        hasDropdown: true,
        dropdownItems: [
            { label: "20-30 ans", href: "/strategies#20-30-ans" },
            { label: "30-40 ans", href: "/strategies#30-40-ans" },
            { label: "40 ans et plus", href: "/strategies#40-plus" },
        ],
    },
    {
        label: "Classes d'actifs",
        href: "/classes-actifs",
        hasDropdown: true,
        dropdownItems: [
            { label: "Bourse", href: "/classes-actifs#bourse" },
            { label: "Crypto", href: "/classes-actifs#crypto" },
            { label: "Immobilier", href: "/classes-actifs#immobilier" },
            { label: "Métaux précieux", href: "/classes-actifs#metaux-precieux" },
            { label: "Montres de collection", href: "/classes-actifs#montres" },
        ],
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "À propos",
        href: "/a-propos",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <header className="bg-navy sticky top-0 z-50 shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-gold font-display text-xl font-bold">Peichert</span>
                        <span className="text-white font-display text-xl">Investissement</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navigationItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`nav-link px-4 py-2 rounded-lg ${
                                        item.hasDropdown ? "flex items-center gap-1" : ""
                                    }`}
                                >
                                    {item.label}
                                    {item.hasDropdown && (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>
                                {item.hasDropdown && activeDropdown === item.label && (
                                    <div className="nav-dropdown">
                                        {item.dropdownItems?.map((dropdownItem) => (
                                            <Link
                                                key={dropdownItem.href}
                                                href={dropdownItem.href}
                                                className="nav-dropdown-item"
                                            >
                                                {dropdownItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="lg:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-white/10">
                        {navigationItems.map((item) => (
                            <div key={item.label}>
                                <Link
                                    href={item.href}
                                    className="block px-4 py-3 text-white/90 hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                                {item.hasDropdown && (
                                    <div className="pl-4">
                                        {item.dropdownItems?.map((dropdownItem) => (
                                            <Link
                                                key={dropdownItem.href}
                                                href={dropdownItem.href}
                                                className="block px-4 py-2 text-white/70 hover:text-gold transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {dropdownItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}
