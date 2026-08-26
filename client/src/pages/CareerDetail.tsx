/**
 * Design: Atlas académique vivant — une fiche claire répartit les repères essentiels sans donner de fausse certitude.
 */
import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, GraduationCap, Laptop, MapPin, Route, Sparkles, Wrench } from "lucide-react";
import SiteShell from "@/components/SiteShell";
import { careers } from "@/data/ecocompass";

function DetailList({ icon: Icon, title, items }: { icon: typeof BriefcaseBusiness; title: string; items: string[] }) {
  return <section className="career-detail-section"><div className="section-icon"><Icon size={20} /></div><div><p className="eyebrow">{title}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div></section>;
}

export default function CareerDetail() {
  const [, params] = useRoute("/metiers/:slug");
  const career = careers.find((item) => item.slug === params?.slug);
  if (!career) return <SiteShell><section className="section-space"><div className="container empty-state"><h1>Métier introuvable</h1><p>Cette fiche n’est pas encore disponible.</p><Link href="/metiers" className="cta-primary">Retour aux métiers <ArrowRight size={17} /></Link></div></section></SiteShell>;
  return <SiteShell>
    <section className="career-detail-hero"><div className="container"><Link href="/metiers" className="back-link"><ArrowLeft size={17} /> Retour aux métiers</Link><div className="mt-10 grid gap-8 lg:grid-cols-[1fr_290px]"><div><p className="eyebrow">{career.category}</p><h1>{career.title}</h1><p>{career.role}</p></div><div className="career-quick-card"><Sparkles size={21} /><p>À explorer</p><b>Rôle, compétences, environnements et parcours possibles.</b></div></div></div></section>
    <section className="bg-[#F8F5ED] py-12 lg:py-16"><div className="container grid gap-8 lg:grid-cols-[minmax(0,1fr)_310px]"><article className="career-reading"><section className="career-role-block"><p className="eyebrow">Le rôle</p><h2>Contribuer à une décision mieux informée.</h2><p>{career.role}</p></section><div className="mt-8 grid gap-4 md:grid-cols-2"><DetailList icon={BriefcaseBusiness} title="Missions possibles" items={career.missions} /><DetailList icon={MapPin} title="Secteurs possibles" items={career.sectors} /><DetailList icon={GraduationCap} title="Études possibles" items={career.studies} /><DetailList icon={Wrench} title="Compétences à développer" items={career.skills} /><DetailList icon={Laptop} title="Outils courants" items={career.tools} /><DetailList icon={Route} title="Parcours possible" items={["Commencer par une base disciplinaire solide", "Développer un premier projet, stage ou travail appliqué", "Choisir progressivement une spécialisation"]} /></div><section className="career-context"><p className="eyebrow">Environnement de travail</p><p>{career.environment}</p><p className="mt-5 text-sm font-semibold text-[#0E6356]">Évolution possible</p><p>{career.evolution}</p></section></article><aside className="career-sidebar"><p className="eyebrow">Questions à vous poser</p><ol><li>Est-ce que le type de problème m’intéresse ?</li><li>Quelles compétences ai-je envie de pratiquer ?</li><li>Quel environnement de travail me conviendrait ?</li></ol><Link href="/orientation" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#0E6356]">Explorer mes pistes <ArrowRight size={16} /></Link></aside></div></section>
  </SiteShell>;
}
