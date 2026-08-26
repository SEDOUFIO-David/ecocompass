/**
 * Design: Atlas académique vivant — le plan d’action réduit un parcours en gestes courts, lisibles et modifiables localement.
 */
import { useMemo, useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, Circle, ClipboardList, PencilLine, Plus, Trash2 } from "lucide-react";
import { Link } from "wouter";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import AtlasTrail from "@/components/AtlasTrail";
import { useLearning, type ActionTask } from "@/contexts/LearningContext";

export default function ActionPlan() {
  const { actionTasks, addTask, toggleTask, updateTask, removeTask, goals } = useLearning();
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [editing, setEditing] = useState<string | null>(null);
  const completed = actionTasks.filter((task) => task.completed).length;
  const progress = actionTasks.length ? Math.round((completed / actionTasks.length) * 100) : 0;
  const nextGoals = useMemo(() => goals.filter((goal) => !goal.completed).slice(0, 3), [goals]);
  const createTask = (event: React.FormEvent) => { event.preventDefault(); if (!title.trim()) return; addTask({ title: title.trim(), dueDate: dueDate || undefined, source: "manual" }); setTitle(""); setDueDate(""); };
  const formatDate = (value?: string) => value ? new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long" }).format(new Date(`${value}T12:00:00`)) : "Sans échéance";
  return <SiteShell>
    <PageHero variant="page-hero-projects" eyebrow="Organisation personnelle locale" title={<>Mon plan d’action,<br /><em>une étape après l’autre.</em></>} description="Ajoutez, modifiez, terminez ou retirez les actions qui vous aident réellement. Ce plan ne vous note pas : il rend simplement vos prochaines étapes visibles." aside={<div className="projects-hero-note"><ClipboardList size={22} /><b>{completed} action{completed !== 1 ? "s" : ""} terminée{completed !== 1 ? "s" : ""}</b><span>{actionTasks.length ? `${progress} % des actions actuellement enregistrées sont réalisées.` : "Commencez avec une action courte, claire et vérifiable."}</span></div>} />
    <AtlasTrail label="Objectif → action → réalisation" steps={[{ label: "Objectif", href: "/mon-parcours", note: "choisir" }, { label: "Plan", href: "/plan-action", note: "organiser" }, { label: "Cours", href: "/apprendre", note: "apprendre" }, { label: "Projet", href: "/projets", note: "pratiquer" }, { label: "Portfolio", href: "/portfolio", note: "tracer" }]} />
    <section className="bg-[#F8F5ED] py-12"><div className="container action-plan-layout"><aside><p className="eyebrow">Progression du plan</p><b>{progress} %</b><i><span style={{ width: `${progress}%` }} /></i><p>{completed} sur {actionTasks.length} action{actionTasks.length > 1 ? "s" : ""} terminée{actionTasks.length > 1 ? "s" : ""}.</p><div className="action-goals"><p className="eyebrow">Objectifs en cours</p>{nextGoals.length ? nextGoals.map((goal) => <span key={goal.id}>{goal.timeframe} · {goal.title}</span>) : <Link href="/mon-ecocompass">Ajouter un objectif <ArrowRight size={15} /></Link>}</div></aside><main><div className="action-plan-heading"><div><p className="eyebrow">Mes prochaines actions</p><h2>Faire avancer mon parcours.</h2></div><Link href="/mon-parcours">Voir le parcours <ArrowRight size={16} /></Link></div><form className="plan-create" onSubmit={createTask}><input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Ex. terminer le cours sur l’inflation" /><input value={dueDate} onChange={(event) => setDueDate(event.target.value)} type="date" /><button className="cta-primary" type="submit"><Plus size={16} /> Ajouter</button></form><div className="plan-task-list">{actionTasks.length ? actionTasks.map((task) => <TaskRow task={task} editing={editing === task.id} onEdit={() => setEditing(editing === task.id ? null : task.id)} onSave={(title, date) => { updateTask(task.id, { title, dueDate: date || undefined }); setEditing(null); }} onToggle={() => toggleTask(task.id)} onRemove={() => removeTask(task.id)} formatDate={formatDate} key={task.id} />) : <div className="plan-empty"><ClipboardList size={23} /><h3>Votre plan est prêt à recevoir sa première action.</h3><p>Choisissez une étape d’apprentissage, de projet ou de préparation professionnelle qui compte vraiment pour vous.</p></div>}</div></main></div></section>
  </SiteShell>;
}

function TaskRow({ task, editing, onEdit, onSave, onToggle, onRemove, formatDate }: { task: ActionTask; editing: boolean; onEdit: () => void; onSave: (title: string, date: string) => void; onToggle: () => void; onRemove: () => void; formatDate: (date?: string) => string }) {
  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.dueDate || "");
  return <article className={task.completed ? "plan-task-done" : ""}><button type="button" onClick={onToggle} aria-label={task.completed ? "Marquer comme à faire" : "Marquer comme terminé"}>{task.completed ? <CheckCircle2 size={19} /> : <Circle size={19} />}</button>{editing ? <div className="plan-task-edit"><input value={title} onChange={(event) => setTitle(event.target.value)} /><input value={date} onChange={(event) => setDate(event.target.value)} type="date" /><button type="button" onClick={() => onSave(title, date)}>Enregistrer</button></div> : <div><b>{task.title}</b><span><CalendarDays size={12} /> {formatDate(task.dueDate)}{task.source === "path" && " · issu du parcours"}</span></div>}<div className="plan-task-actions"><button type="button" onClick={onEdit} aria-label="Modifier l’action"><PencilLine size={15} /></button><button type="button" onClick={onRemove} aria-label="Supprimer l’action"><Trash2 size={15} /></button></div></article>;
}
