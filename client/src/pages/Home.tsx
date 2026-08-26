/**
 * Design: dossier éditorial professionnel — hiérarchie claire, langage direct et repères de méthode immédiatement lisibles.
 */
import { Link } from "wouter";
import { ArrowRight, BarChart3, BookOpenText, BriefcaseBusiness, CircleHelp, Compass, Database, GraduationCap, MapPinned, Play } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import AtlasPanel from "@/components/AtlasPanel";
import { useLearning } from "@/contexts/LearningContext";
import { courses } from "@/data/ecocompass";

const actionCards = [
  { icon: Compass, label: "01 · Point de départ", title: "Comprendre les bases", text: "Des repères simples pour lire une situation économique avec méthode.", href: "/decouvrir", tone: "route-lead" },
  { icon: BookOpenText, label: "02 · Lecture guidée", title: "Suivre un cours", text: "Des notions structurées, des exemples et des exercices à votre rythme.", href: "/apprendre", tone: "route-study" },
  { icon: BriefcaseBusiness, label: "03 · Mise en perspective", title: "Explorer des pistes", text: "Métiers, compétences et formations à comparer avec discernement.", href: "/metiers", tone: "route-orient" },
];

export default function Home() {
  const { completed, lastCourse } = useLearning();
  const resumeCourse = courses.find((course) => course.slug === lastCourse) || courses[0];
  const progress = Math.round((completed.length / courses.length) * 100);
  return <SiteShell>
    <section className="hero-home overflow-hidden">
      <div className="container grid items-center gap-12 py-14 lg:grid-cols-[.92fr_1.08fr] lg:py-20">
        <div className="relative z-10 max-w-xl">
          <p className="eyebrow">Économie · Togo et Afrique</p>
          <h1 className="home-title">Comprendre l’économie.<br /><em>Construire des repères utiles.</em></h1>
          <p className="home-lede">EcoCompass rassemble les notions, les données et les pistes d’orientation nécessaires pour apprendre avec méthode et relier les idées au réel.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/decouvrir" className="cta-primary">Explorer les bases <ArrowRight size={18} /></Link><Link href="/apprendre" className="cta-secondary">Voir les cours</Link></div>
          <div className="home-proof"><span>01</span><p><b>Apprentissage local.</b> Votre progression reste dans ce navigateur.</p></div>
        </div>
        <div className="hero-image-frame"><AtlasPanel variant="overview" /><div className="hero-image-note"><Compass size={18} /><span><b>Un cadre de travail clair.</b><br />Commencez par une question, puis avancez étape par étape.</span></div></div>
      </div>
      <div className="hero-rule" />
    </section>

    <section className="border-y border-[#D7E3DB] bg-[#FFFDF8] py-4"><div className="container learning-pulse"><div className="learning-pulse-title"><span className="pulse-compass"><Compass size={16} /></span><div><p className="eyebrow">Votre boussole d’apprentissage</p><b>{completed.length} / {courses.length} cours terminés</b></div></div><div className="pulse-progress"><div><span>Progression locale</span><b>{progress} %</b></div><div className="pulse-track"><i style={{ width: `${progress}%` }} /></div></div><Link href={`/apprendre/${resumeCourse.slug}`} className="pulse-link"><Play size={15} /> {completed.length ? "Continuer" : "Commencer"} : {resumeCourse.title}<ArrowRight size={15} /></Link></div></section>

    <section className="section-space bg-white">
      <div className="container"><div className="section-heading"><div><p className="eyebrow">Trois entrées, un même parcours</p><h2>Choisissez votre point de départ.</h2></div><p>Chaque étape mène vers des cours, des cas pratiques ou des pistes à examiner.</p></div>
      <div className="home-route-map mt-9">{actionCards.map(({ icon: Icon, label, title, text, href, tone }, index) => <Link href={href} className={`home-route-card ${tone}`} key={title}><div className="home-route-marker"><Icon size={20} /></div><div><p className="eyebrow">{label}</p><h3>{title}</h3><p>{text}</p></div><span className="card-arrow">{index === 0 ? "Commencer les bases" : index === 1 ? "Suivre le parcours" : "Comparer les pistes"} <ArrowRight size={16} /></span></Link>)}</div></div>
    </section>

    <section className="section-space bg-[#EDF2EC]">
      <div className="container"><div className="section-heading"><div><p className="eyebrow">Méthode de lecture</p><h2>À quoi sert l’économie ?</h2></div><p>Elle aide à observer, comparer les options et expliciter les conséquences d’un choix.</p></div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <article className="insight-card"><span className="insight-index">01</span><CircleHelp className="text-[#0E6356]" size={26} /><h3>Poser de meilleures questions</h3><p>Avant une décision, elle aide à distinguer un fait, une hypothèse, une contrainte et un choix possible.</p></article>
        <article className="insight-card translate-y-0 md:translate-y-8"><span className="insight-index">02</span><Database className="text-[#0E6356]" size={26} /><h3>Lire les données avec rigueur</h3><p>Une valeur n’a de sens qu’avec son unité, sa période, sa source et une compréhension de ses limites.</p></article>
        <article className="insight-card"><span className="insight-index">03</span><BarChart3 className="text-[#0E6356]" size={26} /><h3>Relier théorie et réalité</h3><p>Les notions deviennent utiles lorsqu’elles éclairent l’emploi, les prix, l’agriculture, le commerce ou l’investissement.</p></article>
      </div></div>
    </section>

    <section className="section-space bg-[#123139] text-[#EFF5ED]">
      <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow text-[#B8D9C7]">Une progression structurée</p><h2 className="section-night-title">Des notions aux situations concrètes.</h2><p className="mt-6 max-w-md leading-7 text-[#D1DED7]">Vous pouvez passer d’une question de cours à une donnée, à un projet ou à une piste de métier, sans perdre le fil.</p><Link href="/economie-reelle" className="section-night-link">Voir des cas concrets <ArrowRight size={16} /></Link></div>
      <div className="learning-thread"><div><span>01</span><h3>Comprendre</h3><p>Une notion expliquée avec des exemples simples.</p></div><div><span>02</span><h3>Appliquer</h3><p>Un problème, des données, un raisonnement.</p></div><div><span>03</span><h3>Explorer</h3><p>Des compétences et des directions possibles.</p></div></div></div>
    </section>

    <section className="section-space bg-white"><div className="container grid items-center gap-10 lg:grid-cols-[1fr_.9fr]"><div className="order-2 lg:order-1"><p className="eyebrow">Repère de terrain · Togo</p><h2 className="section-title">Observer l’économie du Togo avec méthode.</h2><p className="section-copy">Repères sectoriels, graphiques et sources : un espace pour lire une situation économique sans transformer une donnée isolée en conclusion.</p><div className="mt-7 grid max-w-lg grid-cols-2 gap-3"><div className="source-chip"><MapPinned size={16} /> Secteurs et territoires</div><div className="source-chip"><Database size={16} /> Sources identifiées</div></div><Link href="/togo" className="text-link">Explorer le tableau de bord <ArrowRight size={16} /></Link></div><AtlasPanel variant="territory" className="order-1 lg:order-2" /></div></section>

    <section className="px-4 pb-16 sm:px-6 lg:pb-24"><div className="cta-band mx-auto max-w-[1216px]"><div><p className="eyebrow text-[#B7DDC8]">Étape suivante</p><h2>Identifier une piste à approfondir.</h2></div><Link href="/orientation" className="cta-light">Ouvrir l’orientation <ArrowRight size={18} /></Link></div></section>
  </SiteShell>;
}
