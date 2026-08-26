/**
 * Design: Atlas académique vivant — navigation stable, repères de progression et identité éditoriale.
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, BookmarkCheck, Compass, FlaskConical, Menu, Search, UserRound, X } from "lucide-react";
import BrandMark from "@/components/BrandMark";

const nav = [
  ["Découvrir", "/decouvrir"],
  ["Apprendre", "/apprendre"],
  ["Métiers", "/metiers"],
  ["Formations", "/formations"],
  ["EcoLab", "/ecolab"],
  ["Opportunités", "/opportunites"],
  ["Orientation", "/orientation"],
] as const;
const secondaryNav = [["Économie réelle", "/economie-reelle"], ["Togo", "/togo"], ["Afrique", "/afrique"], ["Glossaire", "/glossaire"], ["Expliquer une notion", "/expliquer"], ["Défis économiques", "/defis"], ["Fiches de révision", "/fiches"], ["Ressources", "/ressources"], ["Compétences recherchées", "/marche-competences"], ["Établissements", "/etablissements"], ["Professionnels et simulations", "/professionnels"]] as const;

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="EcoCompass — Accueil">
      <BrandMark className={compact ? "h-8 w-8" : "h-9 w-9"} />
      <span className="brand-wordmark">Eco<span>Compass</span></span>
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
            <Link href="/mon-ecocompass" className="header-space-link hidden items-center gap-2 lg:flex">Mon espace <UserRound size={16} /></Link>
            <button type="button" className="grid h-10 w-10 place-items-center rounded-full bg-[#E8F0EA] xl:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-[#14333A]/10 bg-[#F8F5ED] px-4 py-4 xl:hidden" aria-label="Navigation mobile">
          <div className="mx-auto flex max-w-2xl flex-col gap-1">
            {nav.map(([label, href]) => <Link key={href} href={href} className={`rounded-xl px-4 py-3 text-base font-medium ${isActive(href) ? "bg-[#E1EEE7] text-[#0E6356]" : "hover:bg-[#F0ECE1]"}`}>{label}</Link>)}
            <p className="mt-3 px-4 text-[.62rem] font-mono uppercase tracking-[.12em] text-[#71827A]">Approfondir</p>{secondaryNav.map(([label, href]) => <Link key={href} href={href} className={`rounded-xl px-4 py-2 text-sm font-medium ${isActive(href) ? "bg-[#E1EEE7] text-[#0E6356]" : "hover:bg-[#F0ECE1]"}`}>{label}</Link>)}
            <div className="mt-2 grid gap-2 sm:grid-cols-2"><Link href="/mon-ecocompass" className="flex items-center gap-2 border border-[#14333A]/12 px-4 py-3 font-medium"><UserRound size={17} /> Mon espace</Link><Link href="/mon-parcours" className="flex items-center gap-2 border border-[#14333A]/12 px-4 py-3 font-medium"><Compass size={17} /> Mon parcours</Link><Link href="/plan-action" className="flex items-center gap-2 border border-[#14333A]/12 px-4 py-3 font-medium"><FlaskConical size={17} /> Mon plan d’action</Link><Link href="/portfolio" className="flex items-center gap-2 border border-[#14333A]/12 px-4 py-3 font-medium"><BookmarkCheck size={17} /> Mon portfolio</Link><Link href="/favoris" className="flex items-center gap-2 border border-[#14333A]/12 px-4 py-3 font-medium"><BookmarkCheck size={17} /> Mes favoris</Link></div>
          </div>
        </nav>}
      </header>
      <main id="main-content">{children}</main>
      <footer className="border-t border-white/10 bg-[#112E36] text-[#EAF0E7]">
        <div className="container grid gap-10 py-14 md:grid-cols-[1.25fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3"><BrandMark className="h-10 w-10" /><span className="brand-wordmark brand-wordmark-inverse">Eco<span>Compass</span></span></div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#C8D5CF]">Une plateforme pédagogique pour comprendre l’économie et examiner des pistes concrètes au Togo et en Afrique.</p>
          </div>
          <div><p className="eyebrow text-[#95CDB6]">Explorer</p><div className="mt-4 grid gap-2 text-sm text-[#DCE6DF]"><Link href="/metiers" className="footer-link">Métiers</Link><Link href="/formations" className="footer-link">Formations</Link><Link href="/etablissements" className="footer-link">Établissements</Link><Link href="/opportunites" className="footer-link">Opportunités</Link><Link href="/ressources" className="footer-link">Bibliothèque et ressources</Link></div></div>
          <div><p className="eyebrow text-[#95CDB6]">Pratiquer</p><div className="mt-4 grid gap-2 text-sm text-[#DCE6DF]"><Link href="/ecolab" className="footer-link">EcoLab</Link><Link href="/cas" className="footer-link">Études de cas</Link><Link href="/defis" className="footer-link">Défis économiques</Link><Link href="/expliquer" className="footer-link">Expliquer une notion</Link><Link href="/professionnels" className="footer-link">Professionnels et simulations</Link><Link href="/projets" className="footer-link">Mes projets</Link><Link href="/portfolio" className="footer-link">Mon portfolio</Link><Link href="/plan-action" className="footer-link">Mon plan d’action</Link><Link href="/competences" className="footer-link">Mes compétences</Link><Link href="/mon-ecocompass" className="footer-link">Mon EcoCompass</Link></div></div>
        </div>
        <div className="container flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-[#B8C5BD] sm:flex-row sm:items-center sm:justify-between"><span>EcoCompass — Prototype pédagogique V5</span><span className="flex items-center gap-2"><Compass size={14} /> Les informations économiques et professionnelles sont à vérifier avant toute décision.</span></div>
      </footer>
    </div>
  );
}
