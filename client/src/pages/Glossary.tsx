/**
 * Design: Atlas académique vivant — le glossaire relie une définition simple à des idées, cours et repères associés.
 */
import { useMemo, useState } from "react";
import { ArrowRight, BookOpenText, Link2, Search } from "lucide-react";
import { Link } from "wouter";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import FavoriteButton from "@/components/FavoriteButton";
import { glossaryTerms } from "@/data/v2";
import { courses } from "@/data/ecocompass";

export default function Glossary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Toutes");
  const [selectedSlug, setSelectedSlug] = useState(glossaryTerms[0].slug);
  const categories = ["Toutes", ...Array.from(new Set(glossaryTerms.map((term) => term.category)))];
  const terms = useMemo(() => glossaryTerms.filter((term) => (category === "Toutes" || term.category === category) && [term.term, term.definition, term.detail, ...term.related].join(" ").toLowerCase().includes(query.toLowerCase().trim())), [category, query]);
  const selected = terms.find((term) => term.slug === selectedSlug) || terms[0] || glossaryTerms[0];
  const course = courses.find((item) => item.slug === selected.courseSlug);
  return <SiteShell>
    <PageHero variant="page-hero-glossary" eyebrow="Repères rapides" title={<>Un glossaire pour<br /><em>mettre les mots en lien.</em></>} description="Cherchez une notion, lisez une définition simple, puis poursuivez vers une explication, un exemple et les cours associés. Les termes sont des repères d’apprentissage, pas des raccourcis sans contexte." aside={<div className="glossary-hero-note"><Link2 size={21} /><b>23 notions reliées</b><span>Définition → exemple → notions associées → cours</span></div>} />
    <section className="bg-white py-7"><div className="container glossary-tools"><label className="glossary-search"><Search size={18} /><span className="sr-only">Rechercher une notion économique</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher : inflation, PIB, marché…" /></label><div className="flex gap-2 overflow-x-auto pb-1">{categories.map((item) => <button type="button" className={`filter-pill ${category === item ? "filter-pill-active" : ""}`} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div></div></section>
    <section className="bg-[#F8F5ED] py-10 lg:py-14"><div className="container grid gap-6 lg:grid-cols-[minmax(0,.8fr)_minmax(390px,1.2fr)]"><div className="glossary-index"><p className="eyebrow">{terms.length} notions disponibles</p><div className="mt-4 grid gap-2">{terms.map((term) => <button type="button" onClick={() => setSelectedSlug(term.slug)} className={`glossary-index-item ${selected.slug === term.slug ? "glossary-index-item-active" : ""}`} key={term.slug}><span>{term.term}</span><small>{term.category}</small></button>)}</div>{terms.length === 0 && <div className="empty-state min-h-[220px]"><Search size={24} /><h2>Pas encore de repère ici.</h2><p>Essayez un autre mot-clé ou filtre.</p></div>}</div><article className="glossary-detail"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="eyebrow">{selected.category}</p><h2>{selected.term}</h2></div><FavoriteButton item={{ id: `glossary:${selected.slug}`, type: "glossary", title: selected.term, href: "/glossaire" }} /></div><section><h3>Définition simple</h3><p className="glossary-definition">{selected.definition}</p></section><section><h3>Pour comprendre davantage</h3><p>{selected.detail}</p></section><section className="glossary-example"><span>Exemple</span><p>{selected.example}</p></section><section><h3>Notions liées</h3><div className="mt-3 flex flex-wrap gap-2">{selected.related.map((item) => <button type="button" className="notion-chip" onClick={() => { const linked = glossaryTerms.find((term) => term.term.toLowerCase() === item.toLowerCase()); if (linked) setSelectedSlug(linked.slug); }} key={item}>{item}</button>)}</div></section>{course && <Link className="glossary-course-link" href={`/apprendre/${course.slug}`}><BookOpenText size={19} /><span><small>Cours associé</small><b>{course.title}</b></span><ArrowRight size={18} /></Link>}</article></div></section>
  </SiteShell>;
}
