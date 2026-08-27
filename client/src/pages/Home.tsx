/**
 * Design: dossier éditorial professionnel — hiérarchie claire, langage direct et repères de méthode immédiatement lisibles.
 */
import { Link } from "wouter";
import { ArrowRight, BarChart3, BookOpenText, BriefcaseBusiness, CircleHelp, Compass, Database, GraduationCap, MapPinned, Play } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import AtlasPanel from "@/components/AtlasPanel";
import BrandMark from "@/components/BrandMark";
import { useLearning } from "@/contexts/LearningContext";
import { courses } from "@/data/ecocompass";

const orientationRoutes = [
  { icon: Compass, number: "01", title: "Je découvre l’économie", text: "Une première question, des repères et des exemples.", href: "/decouvrir", action: "Commencer ici" },
  { icon: BookOpenText, number: "02", title: "Je veux apprendre", text: "Une notion, un exercice et une trace de lecture.", href: "/apprendre", action: "Choisir un cours" },
  { icon: BriefcaseBusiness, number: "03", title: "Je cherche un métier", text: "Des rôles, des compétences et des formations à vérifier.", href: "/metiers", action: "Explorer les métiers" },
  { icon: GraduationCap, number: "04", title: "Je veux m’orienter", text: "Des préférences actuelles, puis des pistes à approfondir.", href: "/orientation", action: "Voir mes pistes" },
  { icon: MapPinned, number: "05", title: "Je lis l’économie du Togo", text: "Des indicateurs publics, leur contexte et leurs limites.", href: "/togo", action: "Lire les données" },
];

export default function Home() {
  const { completed, lastCourse } = useLearning();
  const resumeCourse = courses.find((course) => course.slug === lastCourse) || courses[0];
  const progress = Math.round((completed.length / courses.length) * 100);
  return <SiteShell>
    <section className="orientation-board">
      <div className="container orientation-board-grid">
        <div className="orientation-board-intro">
          <p className="eyebrow">Plateforme dédiée à l’économie</p>
          <p className="orientation-board-index">Point de départ <span>01</span></p>
          <h1>Comprendre l’économie.<br /><em>Découvrir où elle peut vous mener.</em></h1>
          <p>Une plateforme pour comprendre les concepts économiques, découvrir les métiers, explorer les opportunités et construire progressivement votre parcours.</p>
          <div className="orientation-board-actions"><Link href="/decouvrir" className="cta-primary">Commencer la découverte <ArrowRight size={18} /></Link><Link href="/metiers" className="cta-secondary">Explorer les métiers</Link></div>
          <div className="orientation-board-local"><span>Local</span><p><b>Votre progression reste ici.</b> Aucun compte factice ni score public.</p></div>
        </div>
        <div className="orientation-board-map">
          <div className="orientation-board-map-head"><span>Carte de lecture</span><span>01—03</span></div>
          <AtlasPanel variant="overview" />
          <div className="orientation-board-map-note"><Compass size={17} /><span><b>Une route avant une réponse.</b><br />Commencez par un sujet, puis poursuivez vers le cours, la donnée ou la piste associée.</span></div>
        </div>
        <nav className="orientation-route-list" aria-label="Parcours essentiels">
          <div className="orientation-route-list-head"><div><BrandMark className="orientation-route-brand" /><p className="eyebrow">Que voulez-vous faire ?</p></div><span>5 intentions</span></div>
          {orientationRoutes.map(({ icon: Icon, number, title, text, href, action }) => <Link href={href} className="orientation-route" key={href}><span className="orientation-route-number">{number}</span><span className="orientation-route-icon"><Icon size={18} /></span><span className="orientation-route-copy"><b>{title}</b><small>{text}</small></span><span className="orientation-route-action">{action} <ArrowRight size={15} /></span></Link>)}
        </nav>
      </div>
    </section>

    <section className="border-y border-[#D7E3DB] bg-[#FFFDF8] py-4"><div className="container learning-pulse"><div className="learning-pulse-title"><span className="pulse-compass"><Compass size={16} /></span><div><p className="eyebrow">Votre boussole d’apprentissage</p><b>{completed.length} / {courses.length} cours terminés</b></div></div><div className="pulse-progress"><div><span>Progression locale</span><b>{progress} %</b></div><div className="pulse-track"><i style={{ width: `${progress}%` }} /></div></div><Link href={`/apprendre/${resumeCourse.slug}`} className="pulse-link"><Play size={15} /> {completed.length ? "Continuer" : "Commencer"} : {resumeCourse.title}<ArrowRight size={15} /></Link></div></section>

    <section className="route-workbench-section">
      <div className="container route-workbench">
        <div className="route-workbench-brief"><p className="eyebrow">Un geste, une suite</p><h2>Ne cherchez pas un parcours idéal.<br /><em>Construisez une prochaine étape crédible.</em></h2><p>Chaque route donne un point d’entrée et garde visibles les liens vers les ressources qui permettent de poursuivre avec méthode.</p></div>
        <div className="route-workbench-methods"><article><span>01</span><CircleHelp size={22} /><h3>Poser une question</h3><p>Isoler le fait, la contrainte ou le choix que vous cherchez à comprendre.</p></article><article><span>02</span><Database size={22} /><h3>Lire un repère</h3><p>Identifier une notion, une source ou un graphique avec son contexte de lecture.</p></article><article><span>03</span><BarChart3 size={22} /><h3>Choisir la suite</h3><p>Continuer vers un cours, un cas pratique ou une piste de métier à comparer.</p></article></div>
      </div>
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
