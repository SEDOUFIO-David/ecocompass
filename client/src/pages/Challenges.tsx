/**
 * Design: Atlas académique vivant — les défis entraînent l’observation, l’argumentation et la formulation de limites plutôt que la recherche d’une réponse magique.
 */
import { useState } from "react";
import { ArrowRight, CheckCircle2, CircleAlert, Compass, Lightbulb, Scale, Target } from "lucide-react";
import { Link } from "wouter";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import AtlasTrail from "@/components/AtlasTrail";

const challenges = [
  { title: "Chômage des jeunes", field: "Emploi", prompt: "Avant de proposer une action, quelle information est la plus utile à rechercher ?", choices: ["Un seul taux national, sans précision", "La situation selon âge, territoire, formation et type d’emploi", "Le dernier chiffre trouvé en ligne"], good: 1, explanation: "Une approche utile distingue les groupes concernés, les définitions, le territoire et la période. Elle évite de traiter un phénomène hétérogène comme un seul chiffre." },
  { title: "Productivité agricole", field: "Agriculture", prompt: "Quelle démarche permet de passer d’un constat à une analyse prudente ?", choices: ["Attribuer immédiatement la variation à une seule cause", "Comparer plusieurs saisons, variables et contraintes locales", "Ignorer les différences entre productions"], good: 1, explanation: "La productivité dépend de conditions multiples : climat, intrants, accès, stockage, financement, marchés et pratiques. Une analyse doit conserver ces hypothèses ouvertes." },
  { title: "Inclusion financière", field: "Finance", prompt: "Quel repère rend l’analyse plus solide ?", choices: ["Distinguer accès, usage, coût et qualité des services", "Supposer que tout compte ouvert est utilisé", "Comparer uniquement deux graphiques"], good: 0, explanation: "Accès et usage ne se confondent pas. Une lecture utile précise ce qui est mesuré et les publics concernés avant de discuter des effets." },
  { title: "Développement des PME", field: "Entreprise", prompt: "Quelle question aide à formuler une piste de recherche ?", choices: ["Quelle solution fonctionne partout ?", "Quels freins varient selon secteur, taille et territoire ?", "Quel acteur est responsable de tout ?"], good: 1, explanation: "Les contraintes peuvent porter sur financement, énergie, compétences, marchés, formalisation ou délais. Une piste de recherche commence par les différencier." }
];

export default function Challenges() {
  const [selected, setSelected] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const challenge = challenges[selected];
  return <SiteShell>
    <PageHero variant="page-hero-cases" eyebrow="Raisonnement et résolution de problèmes" title={<>Défis économiques,<br /><em>raisonner avant d’agir.</em></>} description="Ces défis sont des situations pédagogiques. Ils entraînent l’observation, la formulation de questions et l’argumentation ; ils ne prétendent pas résoudre automatiquement des problèmes réels." aside={<div className="cases-hero-note"><Target size={22} /><b>{challenges.length} situations à explorer</b><span>Choisissez une situation, formulez une démarche et observez pourquoi un seul chiffre ou une seule cause ne suffit pas.</span></div>} />
    <AtlasTrail label="Situation → données → hypothèse → limite" steps={[{ label: "Défi", href: "/defis", note: "choisir" }, { label: "Données", href: "/ecolab", note: "observer" }, { label: "Cas", href: "/cas", note: "raisonner" }, { label: "Projet", href: "/projets", note: "documenter" }, { label: "Portfolio", href: "/portfolio", note: "tracer" }]} />
    <section className="bg-[#F8F5ED] py-12"><div className="container challenge-layout"><aside><p className="eyebrow">Situations</p>{challenges.map((item, index) => <button type="button" className={selected === index ? "challenge-active" : ""} onClick={() => { setSelected(index); setAnswer(null); }} key={item.title}><span>0{index + 1}</span><b>{item.title}</b><small>{item.field}</small></button>)}</aside><main><p className="eyebrow">{challenge.field}</p><h1>{challenge.title}</h1><p className="challenge-lead">{challenge.prompt}</p><div className="challenge-choices">{challenge.choices.map((choice, index) => <button type="button" className={answer === index ? (index === challenge.good ? "challenge-good" : "challenge-picked") : ""} onClick={() => setAnswer(index)} key={choice}><span>{String.fromCharCode(65 + index)}</span>{choice}</button>)}</div>{answer !== null && <div className="challenge-feedback"><Lightbulb size={18} /><p><b>{answer === challenge.good ? "Une piste méthodique." : "Gardez la question ouverte."}</b> {challenge.explanation}</p></div>}<div className="challenge-links"><Link href="/ecolab"><Compass size={17} /> Utiliser EcoLab comme support de lecture <ArrowRight size={16} /></Link><Link href="/projets"><Scale size={17} /> Transformer ce défi en projet guidé <ArrowRight size={16} /></Link></div></main></div></section>
    <section className="bg-white py-10"><div className="container challenge-method"><CircleAlert size={20} /><p><b>Règle de méthode :</b> une réponse à un défi économique doit préciser les données utiles, les hypothèses possibles, les personnes ou territoires concernés, et une limite de l’analyse.</p></div></section>
  </SiteShell>;
}
