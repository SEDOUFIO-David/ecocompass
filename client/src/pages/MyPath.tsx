/**
 * Design: Atlas académique vivant — le parcours personnel expose plusieurs voies adaptables et leurs liens concrets, sans prescrire une trajectoire unique.
 */
import { ArrowRight, BookOpenCheck, BriefcaseBusiness, Compass, FolderKanban, GraduationCap, Lightbulb, Map, Target } from "lucide-react";
import { Link } from "wouter";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import AtlasTrail from "@/components/AtlasTrail";
import { useLearning } from "@/contexts/LearningContext";
import { courses } from "@/data/ecocompass";
import { goalPaths } from "@/data/v5";

export default function MyPath() {
  const { profile, updateProfile, addTask, actionTasks } = useLearning();
  const selected = goalPaths.find((path) => profile.goal && (profile.goal.toLowerCase().includes(path.label.toLowerCase().replace("Devenir ", "").replace("Explorer ", "")) || path.label.toLowerCase().includes(profile.goal.toLowerCase()))) || goalPaths[0];
  const savePath = () => { updateProfile({ goal: selected.label }); selected.steps.slice(0, 3).forEach((step) => { const exists = actionTasks.some((task) => task.title === `${step.label} : ${step.note}`); if (!exists) addTask({ title: `${step.label} : ${step.note}`, source: "path" }); }); };
  return <SiteShell>
    <PageHero variant="page-hero-training" eyebrow="Accompagnement personnel" title={<>Mon parcours,<br /><em>à adapter.</em></>} description="Un objectif peut être précisé, modifié ou laissé ouvert. Les étapes proposées ci-dessous sont des repères généralement utiles ; elles ne sont ni obligatoires ni les seules voies possibles." aside={<div className="training-hero-note"><Map size={22} /><b>{profile.goal || "Choisir une direction"}</b><span>Reliez vos intérêts, compétences, cours, projets et prochaines démarches à votre rythme.</span></div>} />
    <AtlasTrail label="Objectif → compétences → réalisations" steps={selected.steps} />
    <section className="bg-[#F8F5ED] py-12"><div className="container"><div className="path-select-heading"><div><p className="eyebrow">Choisir un point de départ</p><h2>Quelle direction voulez-vous explorer ?</h2></div><p>Choisir une piste n’efface rien : vous pouvez revenir vers Découvrir ou Orientation et la modifier à tout moment.</p></div><div className="goal-path-selector">{goalPaths.map((path) => <button type="button" className={selected.slug === path.slug ? "goal-path-active" : ""} onClick={() => updateProfile({ goal: path.label })} key={path.slug}><Target size={18} /><span>{path.label}</span><small>{path.description}</small></button>)}</div></div></section>
    <section className="bg-white py-12 lg:py-16"><div className="container"><div className="path-main-card"><div><p className="eyebrow">Itinéraire proposé</p><h1>{selected.label}</h1><p>{selected.description}</p><div className="path-skill-chips">{selected.skills.map((skill) => <span key={skill}>{skill}</span>)}</div><button type="button" className="cta-primary" onClick={savePath}>Ajouter les premières étapes à mon plan <ArrowRight size={17} /></button></div><ol>{selected.steps.map((step, index) => <li key={step.label}><b>0{index + 1}</b><div><span>{step.note}</span><Link href={step.href}>{step.label} <ArrowRight size={15} /></Link></div></li>)}</ol><aside><Lightbulb size={19} /><b>Comment lire ce parcours</b><p>Chaque jalon mène vers un contenu existant d’EcoCompass. Il vous appartient de choisir l’ordre, le rythme et les ressources réellement pertinentes pour vous.</p></aside></div></div></section>
    <section className="bg-[#EEF4EC] py-12"><div className="container path-connection-grid"><article><BookOpenCheck size={22} /><p className="eyebrow">Cours recommandés</p><h2>Construire les bases.</h2><div>{selected.courseSlugs.map((slug) => { const course = courses.find((item) => item.slug === slug); return course ? <Link href={`/apprendre/${slug}`} key={slug}>{course.title}<ArrowRight size={15} /></Link> : null; })}</div></article><article><FolderKanban size={22} /><p className="eyebrow">Projets associés</p><h2>Produire des traces.</h2><div>{selected.projectSlugs.map((project) => <Link href="/projets" key={project}>{project.replace(/-/g, " ")}<ArrowRight size={15} /></Link>)}</div></article><article><BriefcaseBusiness size={22} /><p className="eyebrow">Métiers à explorer</p><h2>Comparer des rôles.</h2><div>{selected.careerKeywords.map((career) => <Link href="/metiers" key={career}>{career}<ArrowRight size={15} /></Link>)}</div></article><article><GraduationCap size={22} /><p className="eyebrow">Démarches à vérifier</p><h2>Consulter les portails.</h2><div>{selected.opportunityKinds.map((kind) => <Link href="/opportunites" key={kind}>{kind}<ArrowRight size={15} /></Link>)}</div></article></div></section>
  </SiteShell>;
}
