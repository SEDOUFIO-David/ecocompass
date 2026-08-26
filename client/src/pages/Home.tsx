/**
 * Design: Atlas académique vivant — un accueil asymétrique, chaleureux et orienté vers la prochaine question.
 */
import { Link } from "wouter";
import { ArrowRight, BarChart3, BookOpenText, BriefcaseBusiness, CircleHelp, Compass, Database, GraduationCap, MapPinned, Play, Sparkles } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import { useLearning } from "@/contexts/LearningContext";
import { courses } from "@/data/ecocompass";

const actionCards = [
  { icon: Compass, label: "Je débute", title: "Comprendre l’économie", text: "Un parcours guidé, concret et sans jargon inutile.", href: "/decouvrir", accent: "bg-[#DDEDE6]" },
  { icon: BookOpenText, label: "Je veux apprendre", title: "Commencer un cours", text: "Des notions courtes, des applications et des exercices.", href: "/apprendre", accent: "bg-[#E7EDF2]" },
  { icon: BriefcaseBusiness, label: "J’explore mon avenir", title: "Découvrir des pistes", text: "Des métiers, des compétences et des parcours à examiner.", href: "/metiers", accent: "bg-[#F4E9D5]" },
];

export default function Home() {
  const { completed, lastCourse } = useLearning();
  const resumeCourse = courses.find((course) => course.slug === lastCourse) || courses[0];
  const progress = Math.round((completed.length / courses.length) * 100);
  return <SiteShell>
    <section className="hero-home overflow-hidden">
      <div className="container grid items-center gap-12 py-14 lg:grid-cols-[.92fr_1.08fr] lg:py-20">
        <div className="relative z-10 max-w-xl">
          <p className="eyebrow">La boussole des premiers choix</p>
          <h1 className="mt-5 font-display text-[3.25rem] leading-[.92] tracking-[-.065em] text-[#123139] sm:text-7xl">L’économie,<br /><em className="font-normal text-[#0E6356]">à hauteur</em> de votre avenir.</h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#476064]">Comprendre les idées essentielles, voir où elles s’appliquent et explorer des directions possibles, avec un regard connecté au Togo et à l’Afrique.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/decouvrir" className="cta-primary">Commencer le parcours <ArrowRight size={18} /></Link><Link href="/apprendre" className="cta-secondary">Voir les cours</Link></div>
          <div className="mt-10 flex items-center gap-3 text-sm text-[#5F7270]"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#E0EEE7] text-[#0E6356]"><Sparkles size={15} /></span><span>Une plateforme pédagogique, structurée et progressive.</span></div>
        </div>
        <div className="hero-image-frame"><img src="/manus-storage/ecocompass-hero-atlas_94ed6f0b.jpg" alt="Atlas éditorial composé de cartes, données et repères économiques" /><div className="hero-image-note"><Compass size={18} /><span><b>Un repère, pas une promesse.</b><br />Construisez votre compréhension étape par étape.</span></div></div>
      </div>
      <div className="hero-rule" />
    </section>

    <section className="border-y border-[#D7E3DB] bg-[#FFFDF8] py-4"><div className="container learning-pulse"><div className="learning-pulse-title"><span className="pulse-compass"><Compass size={16} /></span><div><p className="eyebrow">Votre boussole d’apprentissage</p><b>{completed.length} / {courses.length} cours terminés</b></div></div><div className="pulse-progress"><div><span>Progression locale</span><b>{progress} %</b></div><div className="pulse-track"><i style={{ width: `${progress}%` }} /></div></div><Link href={`/apprendre/${resumeCourse.slug}`} className="pulse-link"><Play size={15} /> {completed.length ? "Continuer" : "Commencer"} : {resumeCourse.title}<ArrowRight size={15} /></Link></div></section>

    <section className="section-space bg-white">
      <div className="container"><div className="section-heading"><div><p className="eyebrow">Choisir son entrée</p><h2>Que souhaitez-vous faire ?</h2></div><p>Commencez là où vous en êtes. Chaque chemin est relié aux autres.</p></div>
      <div className="mt-9 grid gap-4 lg:grid-cols-3">{actionCards.map(({ icon: Icon, label, title, text, href, accent }) => <Link href={href} className="action-card" key={title}><div className={`grid h-12 w-12 place-items-center rounded-2xl ${accent} text-[#0E6356]`}><Icon size={23} /></div><p className="eyebrow mt-7">{label}</p><h3>{title}</h3><p>{text}</p><span className="card-arrow">Explorer <ArrowRight size={16} /></span></Link>)}</div></div>
    </section>

    <section className="section-space bg-[#EDF2EC]">
      <div className="container"><div className="section-heading"><div><p className="eyebrow">Voir plus loin</p><h2>Pourquoi l’économie est-elle importante ?</h2></div><p>Elle ne se limite pas aux chiffres. Elle propose une manière d’observer, de comparer et de décider.</p></div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <article className="insight-card"><span className="insight-index">01</span><CircleHelp className="text-[#0E6356]" size={26} /><h3>Poser de meilleures questions</h3><p>Avant une décision, elle aide à distinguer un fait, une hypothèse, une contrainte et un choix possible.</p></article>
        <article className="insight-card translate-y-0 md:translate-y-8"><span className="insight-index">02</span><Database className="text-[#0E6356]" size={26} /><h3>Lire les données avec rigueur</h3><p>Une valeur n’a de sens qu’avec son unité, sa période, sa source et une compréhension de ses limites.</p></article>
        <article className="insight-card"><span className="insight-index">03</span><BarChart3 className="text-[#0E6356]" size={26} /><h3>Relier théorie et réalité</h3><p>Les notions deviennent utiles lorsqu’elles éclairent l’emploi, les prix, l’agriculture, le commerce ou l’investissement.</p></article>
      </div></div>
    </section>

    <section className="section-space bg-[#123139] text-[#EFF5ED]">
      <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow text-[#97CFB7]">Une méthode, pas un tunnel</p><h2 className="mt-4 max-w-md font-display text-5xl leading-[.97] tracking-[-.05em]">Un fil clair entre vos questions et le monde réel.</h2><p className="mt-6 max-w-md leading-7 text-[#C4D3CC]">EcoCompass organise les notions, les métiers et les situations concrètes pour vous aider à avancer sans vous perdre dans des sources dispersées.</p><Link href="/economie-reelle" className="mt-7 inline-flex items-center gap-2 border-b border-[#97CFB7] pb-1 text-sm font-semibold text-[#C9E5D6]">Voir l’économie en action <ArrowRight size={16} /></Link></div>
      <div className="learning-thread"><div><span>01</span><h3>Comprendre</h3><p>Une notion expliquée avec des exemples simples.</p></div><div><span>02</span><h3>Appliquer</h3><p>Un problème, des données, un raisonnement.</p></div><div><span>03</span><h3>Explorer</h3><p>Des compétences et des directions possibles.</p></div></div></div>
    </section>

    <section className="section-space bg-white"><div className="container grid items-center gap-10 lg:grid-cols-[1fr_.9fr]"><div className="order-2 lg:order-1"><p className="eyebrow">Focus pays</p><h2 className="mt-4 max-w-xl font-display text-5xl leading-[.96] tracking-[-.055em] text-[#123139]">Observer l’économie du Togo avec méthode.</h2><p className="mt-6 max-w-xl leading-7 text-[#53666A]">Repères sectoriels, graphiques et sources : un espace conçu pour apprendre à lire une situation économique sans transformer une donnée en vérité isolée.</p><div className="mt-7 grid max-w-lg grid-cols-2 gap-3"><div className="source-chip"><MapPinned size={16} /> Secteurs &amp; territoires</div><div className="source-chip"><Database size={16} /> Sources identifiées</div></div><Link href="/togo" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0E6356]">Explorer le tableau de bord <ArrowRight size={16} /></Link></div><div className="order-1 overflow-hidden rounded-[2rem] bg-[#E8EFE8] p-5 shadow-[12px_18px_0_#E7D7BB] lg:order-2"><img className="h-[355px] w-full rounded-[1.3rem] object-cover" src="/manus-storage/ecocompass-togo-economy_b7c6d9f7.jpg" alt="Composition éditoriale abstraite évoquant l’économie togolaise" /></div></div></section>

    <section className="px-4 pb-16 sm:px-6 lg:pb-24"><div className="cta-band mx-auto max-w-[1216px]"><div><p className="eyebrow text-[#B7DDC8]">Vous ne devez pas tout savoir tout de suite</p><h2>Faites de votre curiosité un point de départ.</h2></div><Link href="/orientation" className="cta-light">Explorer mes pistes <ArrowRight size={18} /></Link></div></section>
  </SiteShell>;
}
