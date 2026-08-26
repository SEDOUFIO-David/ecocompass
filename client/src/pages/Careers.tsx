/**
 * Design: Atlas académique vivant — les métiers sont présentés comme des pistes à investiguer, jamais comme des promesses d’emploi.
 */
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, BriefcaseBusiness, CircleAlert, Compass, Wrench } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import { careers } from "@/data/ecocompass";

const categories = ["Tous", "Économie", "Finance", "Banque", "Données", "Développement", "Secteur public", "Entreprises", "Recherche", "Conseil"];

export default function Careers() {
  const [category, setCategory] = useState("Tous");
  const displayed = useMemo(() => careers.filter((career) => category === "Tous" || career.category === category), [category]);
  return <SiteShell>
    <PageHero eyebrow="Explorer des pistes professionnelles" title={<>Les métiers de l’économie,<br /><em>au-delà d’un intitulé.</em></>} description="Découvrez ce que font réellement les professionnels, les compétences qu’ils mobilisent et des parcours possibles. Chaque trajectoire dépend de votre formation, de vos expériences et du marché du travail." aside={<div className="career-hero-note"><Compass size={22} /><b>Une exploration, pas un verdict.</b><span>Comparez les rôles, testez vos intérêts et développez progressivement vos compétences.</span></div>} />
    <section className="bg-white py-7"><div className="container"><div className="flex gap-2 overflow-x-auto pb-1">{categories.map((item) => <button type="button" onClick={() => setCategory(item)} className={`filter-pill ${category === item ? "filter-pill-active" : ""}`} key={item}>{item}</button>)}</div></div></section>
    <section className="bg-[#F8F5ED] py-12 lg:py-16"><div className="container"><div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">{category === "Tous" ? "Panorama" : category}</p><h2 className="font-display text-4xl tracking-[-.05em]">{displayed.length} métiers à explorer</h2></div><p className="max-w-md text-sm leading-6 text-[#637470]">Les rôles et appellations varient selon les organisations. Utilisez ces fiches comme des repères pour orienter vos recherches.</p></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{displayed.map((career) => <Link href={`/metiers/${career.slug}`} className="career-card" key={career.slug}><div className="flex items-center justify-between"><span className="career-category"><BriefcaseBusiness size={14} /> {career.category}</span><ArrowRight size={18} className="text-[#0E6356]" /></div><h2>{career.title}</h2><p>{career.role}</p><div className="mt-6 flex flex-wrap gap-2">{career.skills.slice(0, 2).map((skill) => <span className="skill-mini" key={skill}>{skill}</span>)}</div></Link>)}</div></div></section>
    <section className="bg-[#EAF1E9] py-10"><div className="container flex flex-col gap-5 md:flex-row md:items-start"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-[#0E6356]"><CircleAlert size={22} /></span><div><h2 className="font-display text-3xl tracking-[-.045em]">Ce qu’il faut garder en tête</h2><p className="mt-2 max-w-4xl leading-7 text-[#566A67]">Les débouchés ne sont jamais automatiques. Ils dépendent notamment du niveau d’études, de la spécialisation, des compétences, des expériences mobilisables et des réalités du marché du travail. EcoCompass vous aide à explorer et à préparer vos prochaines étapes.</p></div><Link href="/orientation" className="shrink-0 cta-secondary"><Wrench size={17} /> Identifier mes pistes</Link></div></section>
  </SiteShell>;
}
