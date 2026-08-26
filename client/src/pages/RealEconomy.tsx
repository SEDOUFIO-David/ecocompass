/**
 * Design: Atlas académique vivant — l’analyse économique est présentée comme une chaîne lisible : problème, données, analyse, décision, résultat.
 */
import { useState } from "react";
import { ArrowRight, BarChart3, CheckCircle2, Database, Lightbulb, Scale } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import { realEconomyTopics } from "@/data/ecocompass";
import { studyCases } from "@/data/v2";
import FavoriteButton from "@/components/FavoriteButton";
import EconomicSimulators from "@/components/EconomicSimulators";

const stages = [
  ["Problème", "problem", Lightbulb],
  ["Données", "data", Database],
  ["Analyse", "analysis", BarChart3],
  ["Décision", "decision", Scale],
  ["Résultat", "result", CheckCircle2],
] as const;

export default function RealEconomy() {
  const [active, setActive] = useState(0);
  const studyCase = studyCases[active % studyCases.length];
  return <SiteShell>
    <PageHero variant="page-hero-cases" eyebrow="Théorie → terrain" title={<>Étudier un problème,<br /><em>raisonner sans raccourci.</em></>} description="Explorez des situations concrètes et la manière dont une démarche économique peut aider à les comprendre. Les cas et simulations sont simplifiés pour apprendre à raisonner, non pour dicter une décision." aside={<div className="real-hero-aside"><span>01</span><b>Problème</b><i>→</i><span>02</span><b>Données</b><i>→</i><span>03</span><b>Décision</b></div>} />
    <section className="bg-white py-7"><div className="container"><div className="flex gap-2 overflow-x-auto pb-1">{studyCases.map((item, index) => <button type="button" onClick={() => setActive(index)} className={`filter-pill ${active === index ? "filter-pill-active" : ""}`} key={item.slug}>{item.theme}</button>)}</div></div></section>
    <section className="bg-[#F8F5ED] py-12 lg:py-16"><div className="container"><div className="analysis-topline"><div><p className="eyebrow">Étude de cas</p><h2>{studyCase.title}</h2></div><div className="flex items-center gap-3"><p>Un exemple de démarche : il faut toujours adapter la question, les données et les choix au contexte réel.</p><FavoriteButton compact item={{ id: `case:${studyCase.slug}`, type: "case", title: studyCase.title, href: "/economie-reelle" }} /></div></div><div className="analysis-flow">{stages.map(([label, key, Icon], index) => { const value = key === "problem" ? studyCase.problem : key === "data" ? studyCase.data : key === "analysis" ? studyCase.analysis : key === "decision" ? studyCase.policies : studyCase.consequences; return <div className="analysis-stage" key={label}><div className="stage-number">0{index + 1}</div><div className="stage-icon"><Icon size={21} /></div><p className="eyebrow">{label}</p><h3>{label === "Problème" ? "Formuler une situation précise" : label === "Données" ? "Définir l’information utile" : label === "Analyse" ? "Comparer les explications" : label === "Décision" ? "Explorer des réponses possibles" : "Observer les conséquences"}</h3><p>{value}</p>{index < stages.length - 1 && <ArrowRight className="stage-arrow" size={20} />}</div>; })}</div><div className="case-causes"><p className="eyebrow">Causes possibles à explorer</p><div>{studyCase.causes.map((cause) => <span key={cause}>{cause}</span>)}</div></div><div className="mt-10 rounded-2xl border border-[#D4E1D9] bg-[#EDF4EF] p-5 text-sm leading-6 text-[#557167]"><b className="text-[#0E6356]">Le rôle de l’analyse économique :</b> rendre les hypothèses, les données et les arbitrages visibles. Une analyse sérieuse indique aussi ce qu’elle ne permet pas de conclure.</div></div></section>
    <section className="bg-white py-12 lg:py-16"><div className="container"><EconomicSimulators /></div></section>
    <section className="bg-[#EDF3ED] py-12"><div className="container"><p className="eyebrow">Autres questions à explorer</p><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{realEconomyTopics.slice(0, 9).map((topic) => <article className="topic-glance" key={topic.title}><h3>{topic.title}</h3><p>{topic.problem}</p></article>)}</div></div></section>
  </SiteShell>;
}
