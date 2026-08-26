/** Design: Atlas académique vivant — même une erreur reste un repère clair dans le parcours. */
import { Link } from "wouter";
import { ArrowRight, Compass } from "lucide-react";
import SiteShell from "@/components/SiteShell";

export default function NotFound() {
  return <SiteShell><section className="section-space"><div className="container empty-state"><Compass size={34} className="text-[#0E6356]" /><p className="eyebrow">Repère introuvable</p><h1>Cette page n’est pas sur notre carte.</h1><p>Revenez à l’accueil ou utilisez la recherche pour retrouver une notion.</p><div className="mt-3 flex flex-wrap justify-center gap-3"><Link href="/" className="cta-primary">Retour à l’accueil <ArrowRight size={17} /></Link><Link href="/recherche" className="cta-secondary">Rechercher</Link></div></div></section></SiteShell>;
}
