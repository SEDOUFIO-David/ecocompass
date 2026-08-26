/**
 * Design: Atlas académique vivant — l’orientation rend visibles des pistes à explorer et ne prétend pas choisir à la place de l’étudiant.
 */
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Compass, RotateCcw, Sparkles } from "lucide-react";
import { Link } from "wouter";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";

const questions = [
  { id: "niveau", label: "Où en êtes-vous aujourd’hui ?", help: "Il ne s’agit pas d’un test de niveau, seulement d’un point de départ.", options: ["Je découvre l’économie", "Je suis en L1 ou L2", "J’ai déjà quelques bases", "Je suis en formation avancée"] },
  { id: "interet", label: "Qu’est-ce qui vous attire le plus ?", help: "Choisissez l’idée qui vous ressemble le plus en ce moment.", options: ["Comprendre la vie économique quotidienne", "Lire et organiser des données", "Accompagner des projets de développement", "Observer les entreprises et marchés"] },
  { id: "mode", label: "Quel type de travail vous intéresse ?", help: "Vos préférences peuvent évoluer avec les expériences.", options: ["Analyser et écrire", "Construire des tableaux et visualisations", "Échanger avec des personnes sur le terrain", "Comparer des options pour une décision"] },
  { id: "sujet", label: "Quel sujet voudriez-vous explorer d’abord ?", help: "Ce choix aide à proposer des premières portes d’entrée.", options: ["Les prix, la monnaie et la finance", "Les politiques publiques", "Le développement et les territoires", "Les entreprises et le commerce"] },
];

const suggestionMap = [
  { title: "Données & économétrie", keywords: ["données", "tableaux", "visualisations"], text: "Vous pourriez explorer la lecture de données, les statistiques et les outils de visualisation. Commencez par apprendre à vérifier la source, la période et l’unité d’un indicateur.", course: "/apprendre/introduction-aux-donnees-economiques", career: "/metiers/data-analyst" },
  { title: "Développement & territoires", keywords: ["développement", "terrain", "territoires"], text: "Vous pourriez examiner les projets de développement, le suivi-évaluation ou l’analyse territoriale. Reliez les notions de pauvreté, agriculture, services et politiques publiques.", course: "/apprendre/economie-du-developpement", career: "/metiers/charge-de-suivi-evaluation" },
  { title: "Finance & banque", keywords: ["monnaie", "finance", "prix"], text: "Vous pourriez approfondir le fonctionnement de la monnaie, du crédit et des décisions financières. Cherchez à comprendre les outils et les limites d’une analyse de risque.", course: "/apprendre/monnaie-et-systeme-bancaire", career: "/metiers/analyste-credit" },
  { title: "Entreprises & marchés", keywords: ["entreprises", "commerce", "marchés"], text: "Vous pourriez explorer l’offre, la demande, l’analyse de marché et la manière dont les organisations prennent des décisions. Les exemples concrets sont un bon point de départ.", course: "/apprendre/offre-et-demande", career: "/metiers/analyste-marche" },
  { title: "Analyse économique & secteur public", keywords: ["politiques", "analyser", "décision"], text: "Vous pourriez vous intéresser aux politiques économiques, à la conjoncture et à la façon dont les décisions publiques sont documentées. Cultivez la capacité à comparer des options avec rigueur.", course: "/apprendre/etat-et-politiques-economiques", career: "/metiers/analyste-de-politiques-publiques" },
];

export default function Orientation() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const question = questions[step];
  const select = (option: string) => setAnswers((previous) => [...previous.slice(0, step), option]);
  const selected = answers[step];
  const suggestions = useMemo(() => {
    const lowered = answers.join(" ").toLowerCase();
    const scored = suggestionMap.map((item) => ({ ...item, score: item.keywords.filter((keyword) => lowered.includes(keyword)).length }));
    return scored.sort((a, b) => b.score - a.score).slice(0, 3);
  }, [answers]);
  const reset = () => { setStep(0); setAnswers([]); setFinished(false); };
  return <SiteShell>
    <PageHero variant="page-hero-orientation" eyebrow="Questionnaire d’exploration" title={<>Trouver une direction<br />à <em>explorer.</em></>} description="Répondez à quelques questions simples. Vous obtiendrez des pistes pour commencer à explorer, pas un verdict sur le métier que vous devriez choisir." aside={<div className="orientation-hero-note"><Compass size={22} /><div><b>4 questions</b><span>Moins de 3 minutes · vos réponses restent dans votre navigateur.</span></div></div>} />
    <section className="bg-[#F8F5ED] py-12 lg:py-16"><div className="container max-w-5xl">{!finished ? <div className="orientation-card"><div className="flex flex-col gap-5 border-b border-[#14333A]/10 pb-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="eyebrow">Question {step + 1} / {questions.length}</p><div className="mt-3 h-1.5 w-52 overflow-hidden rounded-full bg-[#E3EAE2]"><div className="h-full bg-[#0E6356] transition-all duration-300" style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div></div><p className="font-mono text-xs text-[#71827D]">Une préférence actuelle suffit.</p></div><div className="py-8 sm:py-12"><p className="eyebrow">{question.help}</p><h2>{question.label}</h2><div className="mt-7 grid gap-3 md:grid-cols-2">{question.options.map((option) => <button type="button" onClick={() => select(option)} key={option} className={`answer-option ${selected === option ? "answer-option-selected" : ""}`}><span className="answer-radio" />{option}</button>)}</div></div><div className="flex items-center justify-between gap-3 border-t border-[#14333A]/10 pt-6"><button type="button" className="nav-back" onClick={() => setStep((value) => Math.max(0, value - 1))} disabled={step === 0}><ArrowLeft size={17} /> Précédent</button>{step < questions.length - 1 ? <button type="button" className="cta-primary" disabled={!selected} onClick={() => setStep((value) => Math.min(questions.length - 1, value + 1))}>Question suivante <ArrowRight size={18} /></button> : <button type="button" className="cta-primary" disabled={!selected} onClick={() => setFinished(true)}>Voir mes pistes <Sparkles size={18} /></button>}</div></div> : <div className="orientation-results"><div className="results-intro"><p className="eyebrow">Vos pistes à explorer</p><h2>Voici des directions qui pourraient vous intéresser.</h2><p>Ces propositions sont des points de départ. Prenez le temps de lire, pratiquer, échanger et ajuster votre parcours avec de nouvelles expériences.</p></div><div className="mt-9 grid gap-4">{suggestions.map((suggestion, index) => <article className="suggestion-card" key={suggestion.title}><span>0{index + 1}</span><div><h3>{suggestion.title}</h3><p>{suggestion.text}</p><div className="mt-5 flex flex-wrap gap-3"><Link href={suggestion.course} className="small-link">Voir un cours <ArrowRight size={15} /></Link><Link href={suggestion.career} className="small-link">Voir un métier <ArrowRight size={15} /></Link></div></div></article>)}</div><div className="mt-9 flex flex-wrap gap-3"><button type="button" onClick={reset} className="cta-secondary"><RotateCcw size={17} /> Recommencer</button><Link href="/apprendre" className="cta-primary">Explorer les cours <ArrowRight size={18} /></Link></div></div>}</div></section>
  </SiteShell>;
}
