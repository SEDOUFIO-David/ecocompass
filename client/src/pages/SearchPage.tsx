/**
 * Design: Atlas académique vivant — une recherche ciblée rassemble les contenus reliés au lieu de seulement les lister.
 */
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, BookOpenText, BriefcaseBusiness, Building2, CalendarDays, Compass, ExternalLink, FlaskConical, FolderKanban, GraduationCap, MapPinned, Search as SearchIcon, Shapes } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import AtlasTrail from "@/components/AtlasTrail";
import { courses, realEconomyTopics } from "@/data/ecocompass";
import { careerDirectory } from "@/data/careersV4";
import { formations, marketSkills } from "@/data/formationsV4";
import { institutions, opportunityPortals } from "@/data/ecosystemV4";
import { glossaryTerms, resourceLinks, studyCases } from "@/data/v2";
import { guidedProjects, learningPaths, skillDefinitions } from "@/data/v3";

type ResultType = "Cours" | "Métiers" | "Formations" | "Établissements" | "Opportunités" | "Glossaire" | "Économie réelle" | "Togo" | "Ressources" | "EcoLab" | "Projets" | "Compétences";
type Result = { type: ResultType; title: string; description: string; href: string; keywords: string[]; external?: boolean };
const icons = { "Cours": BookOpenText, "Métiers": BriefcaseBusiness, "Formations": GraduationCap, "Établissements": Building2, "Opportunités": CalendarDays, "Glossaire": Shapes, "Économie réelle": Compass, "Togo": MapPinned, "Ressources": ExternalLink, "EcoLab": FlaskConical, "Projets": FolderKanban, "Compétences": GraduationCap };
const categories = Object.keys(icons) as ResultType[];
const resultsIndex: Result[] = [
  ...courses.map((course) => ({ type: "Cours" as const, title: course.title, description: course.summary, href: `/apprendre/${course.slug}`, keywords: [course.domain, course.level, ...course.notions] })),
  ...careerDirectory.map((career) => ({ type: "Métiers" as const, title: career.title, description: career.role, href: `/metiers/${career.slug}`, keywords: [career.category, career.family, career.mathLevel, ...career.skills, ...career.tools] })),
  ...formations.map((formation) => ({ type: "Formations" as const, title: formation.title, description: formation.description, href: "/formations", keywords: [formation.domain, formation.level, ...formation.subjects, ...formation.skills, ...formation.specializations] })),
  ...institutions.map((institution) => ({ type: "Établissements" as const, title: institution.name, description: `${institution.city}, ${institution.country} · ${institution.description}`, href: "/etablissements", keywords: [institution.scope, ...institution.specialties, ...institution.levels] })),
  ...opportunityPortals.map((portal) => ({ type: "Opportunités" as const, title: portal.title, description: `${portal.organisation} · ${portal.status}`, href: "/opportunites", keywords: [portal.scope, ...portal.audiences, ...portal.themes, "source officielle"] })),
  ...glossaryTerms.map((term) => ({ type: "Glossaire" as const, title: term.term, description: term.definition, href: "/glossaire", keywords: [term.category, ...term.related] })),
  ...studyCases.map((item) => ({ type: "Économie réelle" as const, title: item.title, description: item.problem, href: "/economie-reelle", keywords: [item.theme, ...item.causes] })),
  ...realEconomyTopics.slice(0, 6).map((topic) => ({ type: "Économie réelle" as const, title: topic.title, description: topic.problem, href: "/economie-reelle", keywords: ["problème", "données", "analyse", "décision"] })),
  { type: "Togo", title: "Tableau de bord économique du Togo", description: "Un instantané documenté d’indicateurs publics, avec période, unité, source et limite de lecture.", href: "/togo", keywords: ["Banque mondiale", "WDI", "PIB", "inflation", "Togo", "source"] },
  { type: "Togo", title: "Repères économiques africains", description: "Une entrée pédagogique pour mettre des contextes économiques africains en perspective, sans établir de classement.", href: "/afrique", keywords: ["Afrique", "données", "contexte", "économie", "source"] },
  ...resourceLinks.map((resource) => ({ type: "Ressources" as const, title: resource.title, description: resource.description, href: resource.url, keywords: [resource.category, "source", "données", "statistiques"], external: true })),
  ...guidedProjects.map((project) => ({ type: "Projets" as const, title: project.title, description: project.objective, href: "/projets", keywords: [project.category, ...project.skills, "pratique", "analyse"] })),
  ...learningPaths.map((path) => ({ type: "EcoLab" as const, title: path.title, description: path.objective, href: "/mon-ecocompass", keywords: [path.level, path.interest, ...path.skills, "parcours"] })),
  ...skillDefinitions.map((skill) => ({ type: "Compétences" as const, title: skill.label, description: skill.description, href: "/competences", keywords: ["compétence", "cours", "métier", "projet"] })),
  ...marketSkills.map((skill) => ({ type: "Compétences" as const, title: skill.title, description: skill.description, href: "/marche-competences", keywords: [skill.family, ...skill.careerTerms, ...skill.tools, "compétence", "formation", "projet"] })),
  { type: "EcoLab", title: "EcoLab — Explorateur de données", description: "Données de démonstration, graphiques, comparaison prudente et questions guidées pour apprendre à lire une série.", href: "/ecolab", keywords: ["données", "graphique", "inflation", "population", "commerce", "investissement", "Togo", "Ghana"] },
  { type: "EcoLab", title: "Études de cas en mode apprenant", description: "Des situations économiques à analyser avant de consulter une explication pédagogique.", href: "/cas", keywords: ["prix", "emploi", "taux", "exportations", "pauvreté", "raisonnement"] },
];
const suggestions = ["inflation", "data analyst", "formation", "Togo", "offre et demande"];

export default function SearchPage() {
  const [location] = useLocation();
  const locationQuery = new URLSearchParams(location.split("?")[1] || "").get("q") || "";
  const [query, setQuery] = useState(locationQuery);
  const [active, setActive] = useState<"Tous" | ResultType>("Tous");
  useEffect(() => { setQuery(locationQuery); }, [locationQuery]);
  const cleaned = query.trim().toLowerCase();
  const results = useMemo(() => resultsIndex.filter((item) => { const haystack = [item.title, item.description, ...item.keywords].join(" ").toLowerCase(); return (!cleaned || haystack.includes(cleaned)) && (active === "Tous" || item.type === active); }), [cleaned, active]);
  const shouldShowResults = Boolean(cleaned) || active !== "Tous";
  const grouped = shouldShowResults ? categories.map((category) => [category, results.filter((item) => item.type === category)] as const).filter(([, items]) => items.length > 0) : [];
  const clearSearch = () => { setQuery(""); setActive("Tous"); };
  return <SiteShell>
    <section className="search-hero"><div className="container"><p className="eyebrow">Table d’orientation · recherche globale</p><div className="search-index-ledger" aria-hidden="true"><span>INDEX 01</span><i /><span>QUESTION → CONTENU → PROCHAINE TRACE</span></div><h1>Trouvez une notion,<br />un cours, une pratique ou une piste.</h1><div className="search-box"><SearchIcon size={22} /><label className="sr-only" htmlFor="global-search">Rechercher dans EcoCompass</label><input id="global-search" autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex. inflation, data analyst, formation, opportunité…" /></div><p className="mt-4 text-sm text-[#B9D1C5]">Commencez par une question. La recherche relie les contenus et indique l’espace où poursuivre votre exploration.</p><div className="search-suggestions" aria-label="Suggestions de recherche"><span>Essayer :</span>{suggestions.map((suggestion) => <button type="button" key={suggestion} onClick={() => setQuery(suggestion)}>{suggestion}</button>)}</div></div></section>
    <AtlasTrail label="De la question à la prochaine trace" tone="night" steps={[{ label: "Notion", href: "/glossaire", note: "définir" }, { label: "Cours", href: "/apprendre", note: "comprendre" }, { label: "Métier", href: "/metiers", note: "relier" }, { label: "Projet", href: "/projets", note: "pratiquer" }]} />
    <section className="bg-[#F8F5ED] py-8"><div className="container"><div className="flex gap-2 overflow-x-auto pb-1" aria-label="Filtrer les résultats par type"><button type="button" className={`filter-pill ${active === "Tous" ? "filter-pill-active" : ""}`} aria-pressed={active === "Tous"} onClick={() => setActive("Tous")}>Tout</button>{categories.map((category) => <button type="button" className={`filter-pill ${active === category ? "filter-pill-active" : ""}`} aria-pressed={active === category} onClick={() => setActive(category)} key={category}>{category}</button>)}</div></div></section>
    <section className="bg-white py-12 lg:py-16"><div className="container max-w-5xl">{shouldShowResults ? <><div className="search-result-summary" role="status" aria-live="polite"><span>{results.length} résultat{results.length !== 1 ? "s" : ""}{cleaned ? ` pour « ${query.trim()} »` : ` dans ${active}`}.</span>{(cleaned || active !== "Tous") && <button type="button" onClick={clearSearch}>Effacer la recherche</button>}</div>{grouped.length ? <div className="grid gap-10">{grouped.map(([category, items]) => { const Icon = icons[category]; return <section key={category}><div className="mb-4 flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-xl bg-[#E2EEE7] text-[#0E6356]"><Icon size={16} /></span><h2 className="font-display text-3xl tracking-[-.04em]">{category}</h2></div><div className="grid gap-3">{items.map((item) => item.external ? <a href={item.href} className="search-result" target="_blank" rel="noreferrer" key={`${item.type}-${item.title}`}><div><p className="eyebrow">{item.type}</p><h3>{item.title}</h3><p>{item.description}</p></div><ExternalLink className="shrink-0 text-[#0E6356]" size={19} /></a> : <Link href={item.href} className="search-result" key={`${item.type}-${item.title}`}><div><p className="eyebrow">{item.type}</p><h3>{item.title}</h3><p>{item.description}</p></div><ArrowRight className="shrink-0 text-[#0E6356]" size={19} /></Link>)}</div></section>; })}</div> : <div className="empty-state"><SearchIcon size={28} /><h2>Aucun résultat ne correspond à votre recherche.</h2><p>Essayez un terme plus général, effacez un filtre ou ouvrez un espace de référence.</p><div className="flex flex-wrap gap-3"><button type="button" className="cta-secondary" onClick={clearSearch}>Effacer la recherche</button><Link href="/glossaire" className="cta-primary">Ouvrir le glossaire <ArrowRight size={17} /></Link></div></div>}</> : <div className="search-start-state"><SearchIcon size={28} /><div><p className="eyebrow">Commencer une recherche</p><h2>Partez d’une question ou d’un mot-clé.</h2><p>Vous pouvez chercher une notion, un métier, une formation, un projet ou un indicateur. Les suggestions ci-dessus sont des portes d’entrée ; elles ne limitent pas la recherche.</p></div></div>}</div></section>
  </SiteShell>;
}
