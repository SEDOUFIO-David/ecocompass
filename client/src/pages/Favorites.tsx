/**
 * Design: Atlas académique vivant — les favoris sont une bibliothèque personnelle locale, sans compte ni métrique sociale.
 */
import { Link } from "wouter";
import { ArrowRight, BookmarkCheck, BookOpenText, BriefcaseBusiness, Building2, CalendarDays, Compass, FolderKanban, GraduationCap, Shapes } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import FavoriteButton from "@/components/FavoriteButton";
import { useLearning } from "@/contexts/LearningContext";

const icons = { course: BookOpenText, career: BriefcaseBusiness, glossary: Shapes, case: Compass, project: FolderKanban, formation: GraduationCap, opportunity: CalendarDays, institution: Building2 };
const labels = { course: "Cours", career: "Métier", glossary: "Notion", case: "Étude de cas", project: "Projet", formation: "Formation", opportunity: "Portail d’opportunités", institution: "Établissement" };

export default function Favorites() {
  const { favorites } = useLearning();
  return <SiteShell>
    <PageHero variant="page-hero-favorites" eyebrow="Bibliothèque personnelle" title={<>Vos repères,<br /><em>gardés sous la main.</em></>} description="Enregistrez des cours, métiers, notions, projets, formations et portails à retrouver. Vos favoris sont conservés localement sur cet appareil." aside={<div className="favorites-hero-note"><BookmarkCheck size={21} /><b>{favorites.length} favori{favorites.length !== 1 ? "s" : ""}</b><span>Une mémoire locale, sans compte utilisateur.</span></div>} />
    <section className="bg-[#F8F5ED] py-12 lg:py-16"><div className="container max-w-5xl">{favorites.length ? <div className="grid gap-3">{favorites.map((item) => { const Icon = icons[item.type]; return <article className="favorite-row" key={item.id}><span className="favorite-type"><Icon size={17} /> {labels[item.type]}</span><Link href={item.href}><h2>{item.title}</h2><span>Ouvrir le contenu</span></Link><FavoriteButton item={item} compact /></article>; })}</div> : <div className="empty-state"><BookmarkCheck size={30} className="text-[#0E6356]" /><p className="eyebrow mt-4">Votre bibliothèque est vide</p><h1>Gardez les contenus qui comptent pour vous.</h1><p>Utilisez le bouton « Enregistrer » dans un cours, une fiche métier, une notion ou une étude de cas.</p><Link href="/apprendre" className="cta-primary mt-5">Explorer les cours <ArrowRight size={17} /></Link></div>}</div></section>
  </SiteShell>;
}
