/**
 * Design: Atlas académique vivant — un en-tête éditorial crée un point d’entrée lisible pour chaque parcours.
 */
import type { ReactNode } from "react";

export default function PageHero({ eyebrow, title, description, action, aside, variant = "" }: { eyebrow: string; title: ReactNode; description: string; action?: ReactNode; aside?: ReactNode; variant?: string }) {
  return <section className={`page-hero ${variant}`}><div className="container page-hero-grid"><div><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 max-w-3xl font-display text-4xl leading-[.98] tracking-[-.055em] text-[#123139] sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-[#4C6062] sm:text-lg">{description}</p>{action && <div className="mt-7">{action}</div>}</div>{aside && <div className="page-hero-aside">{aside}</div>}</div></section>;
}
