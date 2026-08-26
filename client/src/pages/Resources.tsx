/**
 * Design: Atlas académique vivant — les ressources sont présentées comme des portes d’entrée sourcées, jamais comme des preuves isolées.
 */
import { ExternalLink, Landmark, Library, ShieldCheck } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import { resourceLinks } from "@/data/v2";

export default function Resources() {
  return <SiteShell>
    <PageHero variant="page-hero-resources" eyebrow="Pour approfondir" title={<>Des ressources à consulter<br /><em>avec méthode.</em></>} description="Une sélection réduite de points d’entrée institutionnels et documentaires. Avant d’utiliser une donnée ou un rapport, vérifiez son périmètre, sa date, sa méthode et sa source exacte." aside={<div className="resources-hero-note"><ShieldCheck size={21} /><b>La source fait partie de l’analyse.</b><span>Un lien ne remplace ni le contexte ni la lecture de la méthode.</span></div>} />
    <section className="bg-[#F8F5ED] py-12 lg:py-16"><div className="container max-w-5xl"><div className="resources-principle"><Landmark size={20} /><p><b>Réflexe EcoCompass :</b> notez toujours l’indicateur recherché, le pays, l’année, l’unité et l’organisme à l’origine de la publication.</p></div><div className="mt-8 grid gap-4 md:grid-cols-2">{resourceLinks.map((resource) => <a className="resource-card" href={resource.url} key={resource.title} target="_blank" rel="noreferrer"><span className="resource-category"><Library size={15} /> {resource.category}</span><h2>{resource.title}</h2><p>{resource.description}</p><span className="card-arrow">Consulter la ressource <ExternalLink size={15} /></span></a>)}</div></div></section>
  </SiteShell>;
}
