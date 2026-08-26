/**
 * Design: Atlas académique vivant — navigation stable, repères de progression et identité éditoriale.
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, BookmarkCheck, Compass, Menu, Search, X } from "lucide-react";

const logoUrl = "/manus-storage/ecocompass-compass-mark_1305eea3.png";

const nav = [
  ["Découvrir", "/decouvrir"],
  ["Apprendre", "/apprendre"],
  ["Métiers", "/metiers"],
  ["Économie réelle", "/economie-reelle"],
  ["Togo", "/togo"],
  ["Glossaire", "/glossaire"],
  ["Orientation", "/orientation"],
] as const;

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="EcoCompass — Accueil">
      <img src={logoUrl} alt="Symbole EcoCompass : une boussole-feuille" className={compact ? "h-9 w-9" : "h-10 w-10"} />
      <span className="font-display text-[1.45rem] leading-none tracking-[-0.06em] text-[#123139]">Eco<span className="text-[#0E6356]">Compass</span></span>
    </Link>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  const isActive = (path: string) => (path === "/" ? location === path : location.startsWith(path));

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F5ED] text-[#14333A]">
      <a className="skip-link" href="#main-content">Aller au contenu principal</a>
      <header className="sticky top-0 z-50 border-b border-[#14333A]/10 bg-[#F8F5ED]/92 backdrop-blur-xl">
        <div className="container flex h-[74px] items-center justify-between gap-5">
          <Brand />
          <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigation principale">
            {nav.map(([label, href]) => <Link key={href} href={href} className={`nav-link ${isActive(href) ? "nav-link-active" : ""}`}>{label}</Link>)}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/recherche" className="grid h-10 w-10 place-items-center rounded-full text-[#14333A] transition hover:bg-[#E8F0EA]" aria-label="Ouvrir la recherche"><Search size={19} strokeWidth={2.2} /></Link>
            <Link href="/favoris" className="hidden h-10 w-10 place-items-center rounded-full text-[#14333A] transition hover:bg-[#E8F0EA] md:grid" aria-label="Ouvrir mes favoris"><BookmarkCheck size={19} strokeWidth={2.1} /></Link>
            <Link href="/decouvrir" className="hidden items-center gap-2 rounded-full bg-[#0E6356] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_9px_24px_rgba(14,99,86,.2)] transition hover:-translate-y-0.5 hover:bg-[#0A5147] lg:flex">Commencer <ArrowUpRight size={16} /></Link>
            <button type="button" className="grid h-10 w-10 place-items-center rounded-full bg-[#E8F0EA] xl:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-[#14333A]/10 bg-[#F8F5ED] px-4 py-4 xl:hidden" aria-label="Navigation mobile">
          <div className="mx-auto flex max-w-2xl flex-col gap-1">
            {nav.map(([label, href]) => <Link key={href} href={href} className={`rounded-xl px-4 py-3 text-base font-medium ${isActive(href) ? "bg-[#E1EEE7] text-[#0E6356]" : "hover:bg-[#F0ECE1]"}`}>{label}</Link>)}
            <div className="mt-2 grid gap-2 sm:grid-cols-2"><Link href="/recherche" className="flex items-center gap-2 rounded-xl border border-[#14333A]/12 px-4 py-3 font-medium"><Search size={17} /> Rechercher une notion</Link><Link href="/favoris" className="flex items-center gap-2 rounded-xl border border-[#14333A]/12 px-4 py-3 font-medium"><BookmarkCheck size={17} /> Mes favoris</Link></div>
          </div>
        </nav>}
      </header>
      <main id="main-content">{children}</main>
      <footer className="border-t border-white/10 bg-[#112E36] text-[#EAF0E7]">
        <div className="container grid gap-10 py-14 md:grid-cols-[1.25fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3"><img src={logoUrl} alt="" className="h-11 w-11" /><span className="font-display text-2xl tracking-[-.06em]">EcoCompass</span></div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#C8D5CF]">Comprendre l’économie, découvrir ses opportunités et construire progressivement son avenir, avec une attention particulière au Togo et à l’Afrique.</p>
          </div>
          <div><p className="eyebrow text-[#95CDB6]">Explorer</p><div className="mt-4 grid gap-2 text-sm text-[#DCE6DF]">{nav.slice(0, 4).map(([label, href]) => <Link key={href} href={href} className="footer-link">{label}</Link>)}<Link href="/fiches" className="footer-link">Fiches de révision</Link><Link href="/ressources" className="footer-link">Ressources</Link></div></div>
          <div><p className="eyebrow text-[#95CDB6]">Repères</p><div className="mt-4 grid gap-2 text-sm text-[#DCE6DF]"><Link href="/togo" className="footer-link">Économie du Togo</Link><Link href="/afrique" className="footer-link">Contexte africain</Link><Link href="/glossaire" className="footer-link">Glossaire</Link><Link href="/favoris" className="footer-link">Mes favoris</Link><Link href="/recherche" className="footer-link">Recherche globale</Link></div></div>
        </div>
        <div className="container flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-[#B8C5BD] sm:flex-row sm:items-center sm:justify-between"><span>EcoCompass — Prototype pédagogique V1</span><span className="flex items-center gap-2"><Compass size={14} /> Les données économiques sont à vérifier avant publication.</span></div>
      </footer>
    </div>
  );
}
