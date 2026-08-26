/**
 * Design: Atlas académique vivant — repère de trajectoire fonctionnel reliant des étapes réelles du parcours.
 */
import { ArrowRight, Compass } from "lucide-react";
import { Link } from "wouter";

type TrailStep = { label: string; href?: string; note?: string };

export default function AtlasTrail({ label = "Trajectoire du parcours", steps, tone = "green" }: { label?: string; steps: TrailStep[]; tone?: "green" | "ochre" | "night" }) {
  return <div className={`atlas-trail atlas-trail-${tone}`} aria-label={label}><div className="atlas-trail-heading"><Compass size={15} /><span>{label}</span></div><ol>{steps.map((step, index) => <li key={`${step.label}-${index}`}><span className="atlas-trail-index">0{index + 1}</span>{step.href ? <Link href={step.href}>{step.label}<ArrowRight size={13} /></Link> : <span className="atlas-trail-static">{step.label}</span>}{step.note && <small>{step.note}</small>}</li>)}</ol></div>;
}
