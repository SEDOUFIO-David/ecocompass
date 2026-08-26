/**
 * Design: Atlas académique vivant — une recherche ciblée classe les résultats au lieu de seulement les lister.
 */
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, BookOpenText, BriefcaseBusiness, Compass, MapPinned, Search as SearchIcon, Shapes } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import { searchItems, type SearchItem } from "@/data/ecocompass";

const icons = { "Cours": BookOpenText, "Métiers": BriefcaseBusiness, "Économie réelle": Compass, "Togo": MapPinned, "Notions associées": Shapes };
const categories = Object.keys(icons) as SearchItem["type"][];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<"Tous" | SearchItem["type"]>("Tous");
  const cleaned = query.trim().toLowerCase();
  const results = useMemo(() => searchItems.filter((item) => {
    const haystack = [item.title, item.description, ...item.keywords].join(" ").toLowerCase();
    return (!cleaned || haystack.includes(cleaned)) && (active === "Tous" || item.type === active);
  }), [cleaned, active]);
  const grouped = categories.map((category) => [category, results.filter((item) => item.type === category)] as const).filter(([, items]) => items.length > 0);
  return <SiteShell>
    <section className="search-hero"><div className="container"><p className="eyebrow">Recherche globale</p><h1>Trouvez une notion,<br />un cours, un métier ou un repère sur le Togo.</h1><div className="search-box"><SearchIcon size={22} /><label className="sr-only" htmlFor="global-search">Rechercher dans EcoCompass</label><input id="global-search" autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex. inflation, data analyst, PIB, marché…" /><kbd>⌘ K</kbd></div><p className="mt-4 text-sm text-[#657875]">La recherche fonctionne sur les cours, métiers, thèmes réels, notions et contenus Togo du prototype.</p></div></section>
    <section className="bg-[#F8F5ED] py-8"><div className="container"><div className="flex gap-2 overflow-x-auto pb-1"><button type="button" className={`filter-pill ${active === "Tous" ? "filter-pill-active" : ""}`} onClick={() => setActive("Tous")}>Tout</button>{categories.map((category) => <button type="button" className={`filter-pill ${active === category ? "filter-pill-active" : ""}`} onClick={() => setActive(category)} key={category}>{category}</button>)}</div></div></section>
    <section className="bg-white py-12 lg:py-16"><div className="container max-w-5xl">{cleaned && <p className="mb-9 font-mono text-xs text-[#71827D]">{results.length} résultat{results.length !== 1 ? "s" : ""} pour « {query.trim()} »</p>}{grouped.length ? <div className="grid gap-10">{grouped.map(([category, items]) => { const Icon = icons[category]; return <section key={category}><div className="mb-4 flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-xl bg-[#E2EEE7] text-[#0E6356]"><Icon size={16} /></span><h2 className="font-display text-3xl tracking-[-.04em]">{category}</h2></div><div className="grid gap-3">{items.map((item) => <Link href={item.href} className="search-result" key={`${item.type}-${item.title}`}><div><p className="eyebrow">{item.type}</p><h3>{item.title}</h3><p>{item.description}</p></div><ArrowRight className="shrink-0 text-[#0E6356]" size={19} /></Link>)}</div></section>; })}</div> : <div className="empty-state"><SearchIcon size={28} /><h2>Aucun résultat pour cette recherche.</h2><p>Essayez un autre mot-clé ou explorez directement une grande section du site.</p><Link href="/decouvrir" className="cta-primary">Découvrir l’économie <ArrowRight size={17} /></Link></div>}</div></section>
  </SiteShell>;
}
