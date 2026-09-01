/**
 * Design: dossier institutionnel EcoCompass — une page de méthode claire, factuelle et orientée vers la vérification.
 */
import { useRef, useState } from "react";
import { ArrowRight, BookOpenCheck, CheckCircle2, Compass, Database, ExternalLink, Mail, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AtlasPanel from "@/components/AtlasPanel";
import SiteShell from "@/components/SiteShell";

const principles = [
  { number: "01", title: "Expliquer avant de conseiller", text: "Les contenus présentent des notions, des méthodes et des pistes. Ils n’imposent pas une orientation ni une décision professionnelle." },
  { number: "02", title: "Situer chaque information", text: "Une donnée utile doit être accompagnée de son périmètre, de sa période, de son unité et, lorsque nécessaire, de ses limites de lecture." },
  { number: "03", title: "Rendre les sources vérifiables", text: "Les liens vers des établissements, opportunités ou ressources invitent à consulter la source officielle avant toute démarche." },
  { number: "04", title: "Conserver la maîtrise de son parcours", text: "Le profil, les objectifs et les actions personnelles sont conservés localement dans le navigateur, sans promesse de certification." },
];

export default function About() {
  const contactTriggerRef = useRef<HTMLButtonElement>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState<"idle" | "success">("idle");
  const [contactError, setContactError] = useState<string | null>(null);

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const invalidField = Array.from(form.elements).find((element) => {
      return "validity" in element && !(element as HTMLInputElement).validity.valid;
    });

    if (invalidField && "focus" in invalidField) {
      setContactStatus("idle");
      setContactError("Vérifiez les champs signalés avant de préparer votre message.");
      (invalidField as HTMLElement).focus();
      return;
    }

    setContactError(null);
    setContactStatus("success");
  };

  const handleContactOpenChange = (open: boolean) => {
    setContactOpen(open);
    if (!open) {
      setContactStatus("idle");
      window.setTimeout(() => contactTriggerRef.current?.focus(), 0);
    }
  };

  return <SiteShell>
    <section className="about-hero"><div className="container about-hero-grid"><div><p className="eyebrow">À propos d’EcoCompass</p><h1>Un cadre pour<br /><em>apprendre avec méthode.</em></h1><p>EcoCompass est une plateforme pédagogique francophone pour comprendre les mécanismes économiques, relier les notions au réel et examiner des pistes d’études ou de métiers avec prudence.</p><div className="about-hero-meta"><span><Compass size={16} /> Pédagogie progressive</span><span><ShieldCheck size={16} /> Informations à vérifier</span></div></div><AtlasPanel variant="overview" /></div></section>

    <section className="about-intent"><div className="container about-intent-grid"><div><p className="eyebrow">Notre intention</p><h2>Faire de l’économie un outil de compréhension.</h2></div><div><p>Les premières questions sur l’économie sont souvent liées à une situation concrète : les prix, l’emploi, un projet, une formation ou l’activité d’un territoire. EcoCompass aide à organiser ces questions, sans réduire les réalités locales à une réponse unique.</p><p>La plateforme porte une attention particulière au Togo et à l’Afrique. Cette orientation ne remplace pas la recherche de sources locales : elle encourage au contraire à expliciter le contexte, le territoire et les limites de chaque lecture.</p></div></div></section>

    <section className="about-method"><div className="container"><div className="about-section-heading"><div><p className="eyebrow">Méthodologie éditoriale</p><h2>Quatre exigences pour chaque parcours.</h2></div><p>Une méthode de travail visible : comprendre, documenter, vérifier et relier les éléments utiles.</p></div><div className="about-principles">{principles.map((principle) => <article key={principle.number}><span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div></div></section>

    <section className="about-evidence"><div className="container about-evidence-grid"><aside><p className="eyebrow">Ce que vous trouverez</p><h2>Des repères, pas des verdicts.</h2><p>Les contenus sont conçus pour accompagner une démarche personnelle. Ils ne remplacent ni l’avis d’un établissement, ni une source officielle, ni l’accompagnement d’un professionnel.</p></aside><div className="about-evidence-list"><article><BookOpenCheck size={21} /><div><b>Des parcours d’apprentissage</b><p>Notions, quiz, études de cas et projets pour passer d’une idée à une application.</p></div></article><article><Database size={21} /><div><b>Des données contextualisées</b><p>Des repères de lecture qui distinguent une valeur, une source, une période et une limite.</p></div></article><article><ExternalLink size={21} /><div><b>Des liens à confirmer</b><p>Des ressources et portails à consulter directement lorsque l’information doit être actualisée.</p></div></article></div></div></section>

    <section className="about-creator"><div className="container about-creator-inner"><div><p className="eyebrow">Créateur du projet</p><h2>SEDOUFIO Kossi David</h2><p><em>Économiste du développement — Créateur d'EcoCompass</em></p><button ref={contactTriggerRef} type="button" className="creator-contact" onClick={() => setContactOpen(true)}><Mail size={16} aria-hidden="true" /> Contact professionnel <ArrowRight size={15} aria-hidden="true" /></button></div></div></section>

    <Dialog open={contactOpen} onOpenChange={handleContactOpenChange}>
      <DialogContent className="creator-contact-dialog">
        <DialogHeader>
          <p className="eyebrow">Échange professionnel</p>
          <DialogTitle>Envoyer un message</DialogTitle>
          <DialogDescription>Présentez votre demande en quelques lignes. Le formulaire vérifie les champs localement avant toute configuration d’un canal d’envoi officiel.</DialogDescription>
        </DialogHeader>
        <form className="creator-contact-form" onSubmit={handleContactSubmit} noValidate>
          {contactError && <p id="contact-form-error" className="creator-form-error" role="alert">{contactError}</p>}
          <div className="creator-form-field">
            <label htmlFor="contact-name">Nom</label>
            <input id="contact-name" name="name" autoComplete="name" required placeholder="Votre nom" aria-describedby={contactError ? "contact-form-error" : undefined} />
          </div>
          <div className="creator-form-field">
            <label htmlFor="contact-email">Adresse e-mail</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="vous@exemple.com" aria-describedby={contactError ? "contact-form-error" : undefined} />
          </div>
          <div className="creator-form-field">
            <label htmlFor="contact-subject">Objet</label>
            <input id="contact-subject" name="subject" required placeholder="Objet de votre message" aria-describedby={contactError ? "contact-form-error" : undefined} />
          </div>
          <div className="creator-form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" required rows={5} placeholder="Votre message" aria-describedby={contactError ? "contact-form-error" : undefined} />
          </div>
          {contactStatus === "success" && <p className="creator-form-status" role="status">Votre message est validé localement. Aucun canal d’envoi n’est encore configuré : aucune donnée n’a été transmise.</p>}
          <DialogFooter>
            <Button type="submit" className="creator-form-submit"><Mail size={16} aria-hidden="true" /> Préparer l’envoi</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>

    <section className="about-commitment"><div className="container"><p className="eyebrow">Engagement de transparence</p><h2>Ce que la plateforme fait.<br />Ce qu’elle ne prétend pas faire.</h2><div className="about-commitment-grid"><div><CheckCircle2 size={19} /><p><b>Elle aide à structurer une démarche.</b> Les suggestions de cours, de projets ou de parcours peuvent être adaptées à vos intérêts et à votre contexte.</p></div><div><CheckCircle2 size={19} /><p><b>Elle ne garantit pas une admission ou un emploi.</b> Toute candidature, disponibilité ou condition doit être vérifiée auprès de la source concernée.</p></div></div><Link href="/decouvrir" className="cta-light">Commencer par les bases <ArrowRight size={17} /></Link></div></section>
  </SiteShell>;
}
