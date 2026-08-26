/**
 * Design: Atlas académique vivant — le cours avance par séquences digestes et donne un retour explicatif.
 */
import { useState } from "react";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2, CircleDot, Lightbulb, ListChecks, NotebookPen, XCircle } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import { courses } from "@/data/ecocompass";

export default function CourseDetail() {
  const [, params] = useRoute("/apprendre/:slug");
  const course = courses.find((item) => item.slug === params?.slug);
  const [answerVisible, setAnswerVisible] = useState(false);
  const [choice, setChoice] = useState<string | null>(null);
  if (!course) return <SiteShell><section className="section-space"><div className="container empty-state"><h1>Cours introuvable</h1><p>Ce cours n’est pas disponible dans la bibliothèque actuelle.</p><Link href="/apprendre" className="cta-primary">Retour aux cours <ArrowRight size={17} /></Link></div></section></SiteShell>;
  const currentIndex = courses.indexOf(course);
  const next = courses[currentIndex + 1];
  const quizOptions = ["Vérifier la source, la période, l’unité et la définition avant de conclure.", "Retenir uniquement le chiffre le plus élevé.", "Appliquer la même conclusion à tous les contextes."];
  return <SiteShell>
    <section className="course-detail-hero"><div className="container"><Link href="/apprendre" className="back-link"><ArrowLeft size={17} /> Retour à la bibliothèque</Link><div className="mt-9 grid gap-8 lg:grid-cols-[1fr_270px]"><div><p className="eyebrow">Cours {String(course.id).padStart(2, "0")} · {course.domain}</p><h1>{course.title}</h1><p>{course.summary}</p></div><div className="course-detail-meta"><span>{course.level}</span><b>{course.duration}</b><small>Une séquence à votre rythme</small></div></div></div></section>
    <section className="bg-[#F8F5ED] py-12 lg:py-16"><div className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_275px]"><article className="course-reading">
      <section><p className="eyebrow">Objectifs</p><h2>À la fin de ce cours, vous pourrez…</h2><div className="mt-5 grid gap-3">{course.objectives.map((objective) => <div className="objective-line" key={objective}><CheckCircle2 size={18} /> {objective}</div>)}</div></section>
      <section><p className="eyebrow">L’idée essentielle</p><h2>Partir d’une question simple.</h2><p>{course.explanation}</p></section>
      <section className="example-section"><div><Lightbulb className="text-[#0E6356]" size={22} /><p className="eyebrow mt-4">Exemple</p><h2>Observer avant de généraliser.</h2><p>{course.example}</p></div><span className="example-index">Ex.</span></section>
      <section><p className="eyebrow">Notions à retenir</p><div className="mt-5 flex flex-wrap gap-2">{course.notions.map((notion) => <span className="notion-chip" key={notion}>{notion}</span>)}</div></section>
      <section><p className="eyebrow">Application</p><h2>Faire le lien avec votre environnement.</h2><p>{course.application}</p></section>
      <section className="exercise-section"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#DBEDE4] text-[#0E6356]"><NotebookPen size={19} /></span><div><p className="eyebrow">Exercice de réflexion</p><h2 className="mt-0">À vous de jouer</h2></div></div><p className="mt-5">{course.exercise}</p><button type="button" className="cta-secondary mt-5" onClick={() => setAnswerVisible((visible) => !visible)}>{answerVisible ? "Masquer la correction" : "Voir un repère de correction"}</button>{answerVisible && <div className="correction"><CheckCircle2 size={18} /><p>{course.answer}</p></div>}</section>
      <section className="quiz-section"><p className="eyebrow text-[#9FD5B9]">Mini-quiz · 1 question</p><h2>Quel réflexe aide à interpréter une donnée économique ?</h2><div className="mt-6 grid gap-3">{quizOptions.map((option, index) => <button type="button" className={`quiz-option ${choice === option ? (index === 0 ? "quiz-correct" : "quiz-wrong") : ""}`} onClick={() => setChoice(option)} key={option}><span>{String.fromCharCode(65 + index)}</span>{option}{choice === option && (index === 0 ? <CheckCircle2 size={19} /> : <XCircle size={19} />)}</button>)}</div>{choice && <p className="mt-4 text-sm leading-6 text-[#CFE1D6]">{choice === quizOptions[0] ? "Exact. Le contexte de production d’un chiffre est indispensable à sa lecture." : "Pas tout à fait. Une donnée isolée ne suffit pas : reprenez les repères de source, période, unité et définition."}</p>}</section>
      <section><p className="eyebrow">Résumé</p><p>{course.explanation} Retenez surtout que l’analyse commence par une question précise, des informations situées et une interprétation prudente.</p></section>
      {next && <Link href={`/apprendre/${next.slug}`} className="next-course"><span><small>Cours suivant</small><b>{next.title}</b></span><ArrowRight size={20} /></Link>}
    </article><aside className="course-sidebar"><div className="course-sidebar-sticky"><p className="eyebrow">Dans ce cours</p><ol>{["Objectifs", "L’idée essentielle", "Exemple", "Application", "Exercice", "Mini-quiz", "Résumé"].map((item, index) => <li key={item}><CircleDot size={14} /><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol><div className="mt-7 rounded-2xl bg-[#E5EEE7] p-4"><ListChecks size={19} className="text-[#0E6356]" /><p className="mt-3 text-sm font-semibold">Conseil de progression</p><p className="mt-1 text-xs leading-5 text-[#557067]">Prenez une note avec vos propres mots avant de passer à la suite.</p></div></div></aside></div></section>
  </SiteShell>;
}
