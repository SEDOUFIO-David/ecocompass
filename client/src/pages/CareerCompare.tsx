/**
 * Design: Atlas académique vivant — comparer des métiers sert à repérer des différences, jamais à classer des trajectoires.
 */
import { useMemo, useState } from "react";
import { ArrowLeft, Scale } from "lucide-react";
import { Link } from "wouter";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import { careers } from "@/data/ecocompass";

const profileNotes: Record<string, { data: string; maths: string; enterprise: string; public: string }> = {
  "Économie": { data: "Régulier", maths: "Variable", enterprise: "Possible", public: "Fréquent" },
  "Finance": { data: "Régulier", maths: "Régulier", enterprise: "Fréquent", public: "Possible" },
  "Banque": { data: "Régulier", maths: "Régulier", enterprise: "Fréquent", public: "Occasionnel" },
  "Données": { data: "Important", maths: "Régulier à important", enterprise: "Possible", public: "Possible" },
  "Développement": { data: "Régulier", maths: "Variable", enterprise: "Possible", public: "Possible" },
  "Secteur public": { data: "Régulier", maths: "Variable", enterprise: "Occasionnel", public: "Fréquent" },
  "Entreprises": { data: "Régulier", maths: "Variable", enterprise: "Fréquent", public: "Occasionnel" },
  "Recherche": { data: "Variable", maths: "Variable à important", enterprise: "Possible", public: "Possible" },
  "Conseil": { data: "Régulier", maths: "Variable", enterprise: "Fréquent", public: "Possible" },
};

export default function CareerCompare() {
  const defaults = ["economiste", "data-analyst", "analyste-financier"];
  const [selected, setSelected] = useState(defaults);
  const selectedCareers = useMemo(() => selected.map((slug) => careers.find((career) => career.slug === slug)).filter(Boolean), [selected]);
  const rows = [
    ["Rôle", (career: typeof careers[number]) => career.role],
    ["Études possibles", (career: typeof careers[number]) => career.studies.slice(0, 2).join(" · ")],
    ["Compétences", (career: typeof careers[number]) => career.skills.join(" · ")],
    ["Outils", (career: typeof careers[number]) => career.tools.slice(0, 3).join(" · ")],
    ["Secteurs", (career: typeof careers[number]) => career.sectors.slice(0, 2).join(" · ")],
    ["Rapport aux données", (career: typeof careers[number]) => profileNotes[career.category].data],
    ["Repères mathématiques", (career: typeof careers[number]) => profileNotes[career.category].maths],
    ["Travail avec entreprises", (career: typeof careers[number]) => profileNotes[career.category].enterprise],
    ["Travail avec politiques publiques", (career: typeof careers[number]) => profileNotes[career.category].public],
  ] as const;
  return <SiteShell>
    <PageHero variant="page-hero-compare" eyebrow="Comparer sans classer" title={<>Mettre des rôles<br /><em>en regard.</em></>} description="Comparez des repères de travail, de formation et de compétences. Ces différences ne rendent aucun métier « meilleur » : elles aident seulement à savoir ce que vous aimeriez explorer." aside={<div className="compare-hero-note"><Scale size={21} /><b>Jusqu’à 3 métiers</b><span>Utilisez cette comparaison pour préparer une recherche, une discussion ou une prochaine lecture.</span></div>} />
    <section className="bg-[#F8F5ED] py-10 lg:py-14"><div className="container"><Link href="/metiers" className="back-link back-link-light"><ArrowLeft size={17} /> Retour aux métiers</Link><div className="compare-selectors">{selected.map((slug, index) => <label key={index}>Métier {index + 1}<select value={slug} onChange={(event) => setSelected((current) => current.map((item, position) => position === index ? event.target.value : item))}>{careers.map((career) => <option key={career.slug} value={career.slug}>{career.title}</option>)}</select></label>)}</div><p className="compare-scroll-hint">Sur mobile, faites glisser le tableau horizontalement pour voir les trois métiers.</p><div className="compare-table-wrap"><table className="compare-table"><thead><tr><th>Repère</th>{selectedCareers.map((career) => career && <th key={career.slug}><span>{career.category}</span>{career.title}</th>)}</tr></thead><tbody>{rows.map(([label, getValue]) => <tr key={label}><th>{label}</th>{selectedCareers.map((career) => career && <td key={career.slug}>{getValue(career)}</td>)}</tr>)}</tbody></table></div><div className="compare-note"><Scale size={18} /><p><b>Lecture prudente :</b> les organisations peuvent donner des noms, missions et outils différents à un même métier. Utilisez les fiches pour approfondir les contextes et les compétences réellement demandées.</p></div></div></section>
  </SiteShell>;
}
