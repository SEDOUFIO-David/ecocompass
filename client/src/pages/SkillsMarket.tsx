/** Design: Atlas académique vivant — les compétences sont présentées comme des capacités à développer et des connexions à explorer, sans hiérarchie de valeur absolue. */
import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, BriefcaseBusiness, FolderKanban, Search, Sparkles, Wrench } from "lucide-react";
import { Link } from "wouter";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import AtlasTrail from "@/components/AtlasTrail";
import { marketSkills } from "@/data/formationsV4";

const families = ["Toutes", ...Array.from(new Set(marketSkills.map((item) => item.family)))];

export default function SkillsMarket() {
  const [family, setFamily] = useState("Toutes");
  const [query, setQuery] = useState("");
  const items = useMemo(() => { const term = query.trim().toLowerCase(); return marketSkills.filter((item) => (family === "Toutes" || item.family === family) && (!term || [item.title, item.description, ...item.careerTerms, ...item.tools].join(" ").toLowerCase().includes(term))); }, [family, query]);
  return <SiteShell><PageHero variant="page-hero-market" eyebrow="Compétences recherchées · repères V4" title={<>Développer des capacités,<br /><em>relier des possibilités.</em></>} description="Explorez des compétences souvent mobilisées dans des rôles liés à l’économie. Chaque fiche vous aide à relier cours, projets, outils et pistes métiers ; elle ne mesure pas une demande réelle du marché à un instant donné." aside={<div className="market-hero-note"><Sparkles size={22} /><b>Un marché à lire avec prudence</b><span>Les besoins évoluent selon les organisations, les pays, les secteurs et les offres réellement publiées.</span></div>} /><AtlasTrail label="De la compétence à l’expérience" tone="ochre" steps={[{ label: "Compétence", href: "/marche-competences", note: "identifier" }, { label: "Cours", href: "/apprendre", note: "comprendre" }, { label: "Projet", href: "/projets", note: "pratiquer" }, { label: "Métier", href: "/metiers", note: "explorer" }, { label: "Opportunité", href: "/opportunites", note: "vérifier" }]} />
    <section className="bg-[#F8F5ED] py-10 lg:py-14"><div className="container"><div className="market-filter"><label><Search size={18} /><span className="sr-only">Rechercher une compétence</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher SQL, finance, visualisation…" /></label><div>{families.map((item) => <button type="button" className={family === item ? "filter-pill filter-pill-active" : "filter-pill"} onClick={() => setFamily(item)} key={item}>{item}</button>)}</div></div><div className="market-grid">{items.map((skill) => <article key={skill.id}><header><span>{skill.family}</span><Wrench size={18} /></header><h2>{skill.title}</h2><p>{skill.description}</p><div className="market-links"><div><p><BookOpen size={14} /> Cours recommandés</p>{skill.courseSlugs.map((slug) => <Link href={`/apprendre/${slug}`} key={slug}>Ouvrir un cours <ArrowRight size={13} /></Link>)}</div><div><p><FolderKanban size={14} /> Projets guidés</p>{skill.projectSlugs.map((slug) => <Link href="/projets" key={slug}>Pratiquer dans EcoLab <ArrowRight size={13} /></Link>)}</div><div><p><BriefcaseBusiness size={14} /> Métiers associés</p>{skill.careerTerms.map((term) => <Link href={`/recherche?q=${encodeURIComponent(term)}`} key={term}>{term} <ArrowRight size={13} /></Link>)}</div></div><footer>{skill.tools.map((tool) => <span key={tool}>{tool}</span>)}</footer></article>)}</div></div></section>
  </SiteShell>;
}
