/**
 * Design: Atlas académique vivant — le tableau de bord assume ses limites et rend la source visible avant la conclusion.
 */
import { useState } from "react";
import { BarChart, Bar, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Area, AreaChart } from "recharts";
import { ArrowUpRight, Database, ExternalLink, Info, Leaf, Landmark, ShoppingBag, Sprout, TrendingUp, type LucideIcon } from "lucide-react";
import { Link } from "wouter";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";

const economicSeries = [
  { year: "2020", pib: 100, inflation: 100 },
  { year: "2021", pib: 106, inflation: 104 },
  { year: "2022", pib: 112, inflation: 111 },
  { year: "2023", pib: 119, inflation: 115 },
  { year: "2024", pib: 126, inflation: 118 },
];
const structureSeries = [
  { name: "Agriculture", value: 28 }, { name: "Industrie", value: 22 }, { name: "Services", value: 50 },
];
const indicators = [
  ["PIB", "Indice 126", "Indice de démonstration · base 100"],
  ["Croissance", "5,1 %", "Scénario de démonstration"],
  ["Inflation", "3,2 %", "Scénario de démonstration"],
  ["Population", "8,7 M", "Valeur de démonstration"],
  ["Commerce", "↗ 14 %", "Variation de démonstration"],
  ["Investissement", "18 %", "Part illustrative"],
  ["Emploi", "Indice 61", "Valeur de démonstration"],
  ["Pauvreté", "Indice 37", "Valeur de démonstration"],
  ["Dette publique", "Indice 48", "Valeur de démonstration"],
];
const sectorItems: Array<[LucideIcon, string, string]> = [
  [Sprout, "Agriculture", "Production, transformation, accès aux intrants et marchés."],
  [Landmark, "Industrie", "Énergie, construction, transformation et chaînes de valeur."],
  [ShoppingBag, "Services", "Commerce, transport, numérique, éducation, santé et finance."],
  [Leaf, "Transition durable", "Productivité, ressources, climat et coûts environnementaux."],
];

export default function Togo() {
  const [chart, setChart] = useState<"activity" | "structure">("activity");
  return <SiteShell>
    <PageHero variant="page-hero-togo" eyebrow="Lecture économique contextualisée" title={<>L’économie du Togo,<br /><em>à lire avec méthode.</em></>} description="Un espace pour apprendre à situer des indicateurs, observer les secteurs et retrouver les sources à consulter. Les chiffres ci-dessous sont uniquement des données de démonstration, à remplacer par des sources officielles vérifiées." aside={<div className="demo-badge"><Info size={21} /><div><b>Données de démonstration</b><span>À remplacer avant publication par des données officielles vérifiées.</span></div></div>} />
    <section className="border-y border-[#DCE5DE] bg-[#FFFDF8] py-6"><div className="container flex flex-col gap-3 md:flex-row md:items-center"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F8E9CB] text-[#A16D10]"><Info size={19} /></span><p className="text-sm leading-6 text-[#5B6A67]"><b className="text-[#123139]">Important :</b> ce prototype affiche des valeurs et tendances fictives uniquement pour démontrer l’interface. Elles ne doivent pas être interprétées comme des statistiques sur le Togo.</p></div></section>
    <section className="bg-[#F8F5ED] py-12"><div className="container"><div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><div><p className="eyebrow">Repères de tableau de bord</p><h2 className="font-display text-4xl tracking-[-.05em]">Indicateurs à documenter</h2></div><div className="indicator-reading-note"><Info size={16} /><p><b>Question de lecture :</b> quelle information complémentaire permettrait d’interpréter ce repère ?</p><span>Unité + année + source requis</span></div></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{indicators.map(([label, value, note]) => <article className="indicator-card" key={label}><p>{label}</p><b>{value}</b><small>{note}</small><span className="data-trace">STATUT: démo · PÉRIODE: 2024 · SOURCE: simulation</span></article>)}</div></div></section>
    <section className="bg-white py-12 lg:py-16"><div className="container grid gap-9 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,.6fr)]"><div className="chart-panel"><div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div><p className="eyebrow">Visualisation illustrative</p><h2>{chart === "activity" ? "Activité et évolution des prix" : "Structure économique"}</h2><p>Indices et parts de démonstration uniquement.</p></div><div className="chart-switch"><button type="button" onClick={() => setChart("activity")} className={chart === "activity" ? "active" : ""}>Évolutions</button><button type="button" onClick={() => setChart("structure")} className={chart === "structure" ? "active" : ""}>Structure</button></div></div><div className="data-ledger"><span><b>STATUT</b> Démonstration</span><span><b>UNITÉ</b> Indice ou part illustrative</span><span><b>PÉRIODE</b> 2020—2024</span><span><b>SOURCE</b> Simulation d’interface</span></div><div className="mt-7 h-[295px]" aria-label="Graphique avec données de démonstration">{chart === "activity" ? <ResponsiveContainer width="100%" height="100%"><AreaChart data={economicSeries} margin={{ top: 12, right: 4, left: -18, bottom: 0 }}><defs><linearGradient id="pibDemo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0E6356" stopOpacity=".32" /><stop offset="100%" stopColor="#0E6356" stopOpacity="0" /></linearGradient></defs><CartesianGrid vertical={false} stroke="#DCE8E0" strokeDasharray="3 3" /><XAxis dataKey="year" tickLine={false} axisLine={false} tick={{ fill: "#60746E", fontSize: 12 }} /><YAxis tickLine={false} axisLine={false} tick={{ fill: "#60746E", fontSize: 12 }} /><Tooltip contentStyle={{ border: "1px solid #DCE8E0", borderRadius: 12, background: "#FFFDF8" }} labelStyle={{ color: "#14333A" }} /><Area type="monotone" dataKey="pib" name="Activité (indice démo)" stroke="#0E6356" strokeWidth={3} fill="url(#pibDemo)" /><Area type="monotone" dataKey="inflation" name="Prix (indice démo)" stroke="#C47A37" strokeWidth={2.5} fill="transparent" /></AreaChart></ResponsiveContainer> : <ResponsiveContainer width="100%" height="100%"><BarChart data={structureSeries} margin={{ top: 12, right: 4, left: -18, bottom: 0 }}><CartesianGrid vertical={false} stroke="#DCE8E0" strokeDasharray="3 3" /><XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: "#60746E", fontSize: 12 }} /><YAxis tickLine={false} axisLine={false} tick={{ fill: "#60746E", fontSize: 12 }} /><Tooltip contentStyle={{ border: "1px solid #DCE8E0", borderRadius: 12, background: "#FFFDF8" }} /><Bar dataKey="value" name="Part illustrative" fill="#0E6356" radius={[8, 8, 0, 0]} /></BarChart></ResponsiveContainer>}</div><div className="demo-chart-caption"><Database size={15} /> Données de démonstration — aucune de ces valeurs ne représente une statistique officielle.</div></div><aside className="source-panel"><p className="eyebrow">Protocole de mise à jour</p><h3>Avant d’afficher une donnée réelle</h3><ol><li>Vérifier l’organisme producteur.</li><li>Noter la période et l’unité.</li><li>Lire la définition et la méthode.</li><li>Afficher la source à proximité.</li></ol><div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#0E6356]"><TrendingUp size={17} /> Donnée ≠ conclusion automatique</div></aside></div></section>
    <section className="bg-[#EDF3ED] py-12"><div className="container"><div className="section-heading"><div><p className="eyebrow">Secteurs à observer</p><h2>Des économies reliées, pas des cases isolées.</h2></div><p>Les secteurs se répondent : une infrastructure, une compétence ou un prix peut transformer plusieurs chaînes de valeur en même temps.</p></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{sectorItems.map(([Icon, title, text]) => <article className="sector-card" key={title}><Icon className="text-[#0E6356]" size={23} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="bg-[#F5E9D5] py-10"><div className="container africa-link-band"><div><p className="eyebrow">Perspective régionale</p><h2>L’économie du Togo se lit aussi dans des dynamiques africaines plus larges.</h2><p>Découvrez des questions de développement, d’emploi, d’agriculture, de commerce et de transformation numérique sans construire de classements simplistes.</p></div><Link href="/afrique" className="cta-secondary">Explorer le contexte africain <ArrowUpRight size={17} /></Link></div></section>
    <section className="bg-[#123139] py-12 text-white"><div className="container grid gap-8 md:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-[#99CFAF]">Sources à consulter</p><h2 className="mt-4 font-display text-4xl leading-[.96] tracking-[-.05em]">Préparer une base fiable.</h2></div><div className="grid gap-3 sm:grid-cols-2"><a className="source-link" href="https://inseed.tg" target="_blank" rel="noreferrer"><span>INSEED</span><ExternalLink size={16} /></a><a className="source-link" href="https://www.bceao.int" target="_blank" rel="noreferrer"><span>BCEAO</span><ExternalLink size={16} /></a><a className="source-link" href="https://data.worldbank.org/country/togo" target="_blank" rel="noreferrer"><span>Banque mondiale</span><ExternalLink size={16} /></a><a className="source-link" href="https://www.imf.org/en/Countries/TGO" target="_blank" rel="noreferrer"><span>FMI</span><ExternalLink size={16} /></a></div></div></section>
  </SiteShell>;
}
