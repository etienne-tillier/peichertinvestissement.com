import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Peichert Investissement | Conseils et stratégies d'investissement",
    template: "%s | Peichert Investissement",
  },
  description: "Guides d'investissement personnalisés : bourse, crypto, immobilier. Stratégies adaptées à 20, 30, 40 ans. Conseils experts pour optimiser votre portefeuille.",
  metadataBase: new URL("https://peichertinvestissement.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
