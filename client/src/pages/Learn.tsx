/**
 * Design: Atlas académique vivant — une bibliothèque de cours qui laisse les filtres visibles sans enfermer l’utilisateur.
 */
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Compass, Filter, Search, Sparkles } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import FavoriteButton from "@/components/FavoriteButton";
import { courses, learningDomains, levels } from "@/data/ecocompass";

export default function Learn() {
  const [level, setLevel] = useState("Tous les niveaux");
  const [domain, setDomain] = useState("Tous les domaines");
  const [query, setQuery] = useState("");
  const displayed = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("fr");
    return courses.filter((course) => {
      const matchesLevel = level === "Tous les niveaux" || course.level === level;
      const matchesDomain = domain === "Tous les domaines" || course.domain === domain;
      const searchableText = `${course.title} ${course.summary} ${course.domain} ${course.level}`.toLocaleLowerCase("fr");
      return matchesLevel && matchesDomain && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [level, domain, query]);
  const chapters = useMemo(() => levels.map((item) => [item, displayed.filter((course) => course.level === item)] as const).filter(([, items]) => items.length > 0), [displayed]);
  const chapterText: Record<string, [string, string]> = { "Débutant": ["Prendre ses repères", "Les premières notions pour lire une situation économique."], "L1": ["Lire les mécanismes", "Relier les agents, marchés et grands indicateurs."], "Intermédiaire": ["Élargir le regard", "Comparer les politiques, échanges et enjeux de développement."], "Avancé": ["Approfondir", "Mettre les méthodes et hypothèses à l’épreuve."] };
  return <SiteShell>
    <PageHero variant="page-hero-learn" eyebrow="Bibliothèque pédagogique" title={<>Apprendre l’économie,<br /><em>un concept à la fois.</em></>} description="Des cours courts conçus pour passer d’une idée à un exemple, puis à une application. Commencez par les fondamentaux ou approfondissez selon votre niveau." aside={<div className="course-hero-note"><Sparkles size={22} /><div><b>Une méthode simple</b><span>Concept → exemple → application → exercice</span></div></div>} />
    <section className="bg-white py-9"><div className="container flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#E2EEE7] text-[#0E6356]"><Filter size={19} /></span><div><p className="text-sm font-semibold text-[#123139]">Affiner les cours</p><p className="text-xs text-[#6C7D79]">{displayed.length} cours correspondent à votre sélection</p></div></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><label className="filter-field filter-search"><span><Search size={15} /> Rechercher</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Titre, notion ou domaine" aria-label="Rechercher un cours" /></label><label className="filter-field">Niveau<select value={level} onChange={(event) => setLevel(event.target.value)}><option>Tous les niveaux</option>{levels.map((item) => <option key={item}>{item}</option>)}</select></label><label className="filter-field">Domaine<select value={domain} onChange={(event) => setDomain(event.target.value)}><option>Tous les domaines</option>{learningDomains.map((item) => <option key={item}>{item}</option>)}</select></label></div></div></section>
    <section className="bg-[#F8F5ED] py-12 lg:py-16"><div className="container">{displayed.length > 0 ? <div className="learning-atlas">{chapters.map(([chapter, chapterCourses], chapterIndex) => <section className="course-chapter" key={chapter}><div className="chapter-margin"><span className="chapter-number">0{chapterIndex + 1}</span><div><p className="eyebrow">Niveau {chapter}</p><h2>{chapterText[chapter][0]}</h2><p>{chapterText[chapter][1]}</p></div><Link href="/glossaire" className="chapter-source"><Compass size={17} /><span>Notions liées</span></Link></div><div className="course-cluster">{chapterCourses.map((course, courseIndex) => <article className={`course-card course-card-atlas ${courseIndex === 0 ? "course-card-featured course-card-route-anchor" : "course-card-route-stop"}`} key={course.id}><FavoriteButton compact item={{ id: `course:${course.slug}`, type: "course", title: course.title, href: `/apprendre/${course.slug}` }} /><Link href={`/apprendre/${course.slug}`} className="course-card-link"><div className="flex items-start justify-between gap-4"><span className="course-number">{String(course.id).padStart(2, "0")}</span><span className="level-chip">{course.level}</span></div><p className="mt-8 font-mono text-xs text-[#6A7D78]">{course.domain}</p><h2>{course.title}</h2><p>{course.summary}</p><div className="course-card-footer"><span><BookOpen size={16} /> {course.duration}</span><span className="card-arrow">Lire la notion <ArrowRight size={16} /></span></div></Link></article>)}</div></section>)}</div> : <div className="empty-state"><BookOpen size={28} /><h2>Aucun cours pour cette combinaison.</h2><p>Essayez un autre mot-clé ou modifiez les filtres pour retrouver les parcours disponibles.</p><button type="button" className="cta-secondary mt-3" onClick={() => { setQuery(""); setLevel("Tous les niveaux"); setDomain("Tous les domaines"); }}>Réinitialiser la recherche et les filtres</button></div>}</div></section>
  </SiteShell>;
}
