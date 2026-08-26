/**
 * Design: Atlas académique vivant — l’analyse économique est présentée comme une chaîne lisible : problème, données, analyse, décision, résultat.
 */
import { useState } from "react";
import { ArrowRight, BarChart3, CheckCircle2, Database, Lightbulb, Scale } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import { realEconomyTopics } from "@/data/ecocompass";

const stages = [
  ["Problème", "problem", Lightbulb],
  ["Données", "data", Database],
  ["Analyse", "analysis", BarChart3],
  ["Décision", "decision", Scale],
  ["Résultat", "result", CheckCircle2],
] as const;

export default function RealEconomy() {
  const [active, setActive] = useState(0);
  const topic = realEconomyTopics[active];
  return <SiteShell>
    <PageHero eyebrow="Théorie → terrain" title={<>L’économie devient utile<br />quand elle <em>éclaire une situation.</em></>} description="Explorez des problèmes concrets et la manière dont une démarche économique peut aider à les comprendre. Les exemples sont volontairement simplifiés pour montrer le raisonnement, non pour dicter une décision." aside={<div className="real-hero-aside"><span>01</span><b>Problème</b><i>→</i><span>02</span><b>Données</b><i>→</i><span>03</span><b>Décision</b></div>} />
    <section className="bg-white py-7"><div className="container"><div className="flex gap-2 overflow-x-auto pb-1">{realEconomyTopics.map((item, index) => <button type="button" onClick={() => setActive(index)} className={`filter-pill ${active === index ? "filter-pill-active" : ""}`} key={item.title}>{item.title}</button>)}</div></div></section>
    <section className="bg-[#F8F5ED] py-12 lg:py-16"><div className="container"><div className="analysis-topline"><div><p className="eyebrow">Cas d’exploration</p><h2>{topic.title}</h2></div><p>Un exemple de démarche : il faut toujours adapter la question, les données et les choix au contexte réel.</p></div><div className="analysis-flow">{stages.map(([label, key, Icon], index) => <div className="analysis-stage" key={label}><div className="stage-number">0{index + 1}</div><div className="stage-icon"><Icon size={21} /></div><p className="eyebrow">{label}</p><h3>{label === "Problème" ? "Commencer par une situation précise" : label === "Données" ? "Chercher les informations utiles" : label === "Analyse" ? "Comparer, questionner, interpréter" : label === "Décision" ? "Choisir un levier adapté" : "Suivre et apprendre"}</h3><p>{topic[key]}</p>{index < stages.length - 1 && <ArrowRight className="stage-arrow" size={20} />}</div>)}</div><div className="mt-10 rounded-2xl border border-[#D4E1D9] bg-[#EDF4EF] p-5 text-sm leading-6 text-[#557167]"><b className="text-[#0E6356]">Le rôle de l’analyse économique :</b> rendre les hypothèses, les données et les arbitrages visibles. Une analyse sérieuse indique aussi ce qu’elle ne permet pas de conclure.</div></div></section>
  </SiteShell>;
}
