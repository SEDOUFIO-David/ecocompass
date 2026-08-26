/**
 * Design: Atlas académique vivant — le graphique rend lisible une progression basée sur des actions, sans transformer le parcours en compétition.
 */
import { CheckCircle2, ClipboardList, FolderKanban, Target } from "lucide-react";
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import type { ActionTask, PersonalGoal } from "@/contexts/LearningContext";

export default function ActionProgressChart({ actionTasks, goals, completedCourses, totalCourses, projectCount }: { actionTasks: ActionTask[]; goals: PersonalGoal[]; completedCourses: number; totalCourses: number; projectCount: number }) {
  const actions = actionTasks.length ? Math.round((actionTasks.filter((task) => task.completed).length / actionTasks.length) * 100) : 0;
  const goalsProgress = goals.length ? Math.round((goals.filter((goal) => goal.completed).length / goals.length) * 100) : 0;
  const courses = totalCourses ? Math.round((completedCourses / totalCourses) * 100) : 0;
  const projects = Math.min(100, projectCount * 25);
  const overall = Math.round((actions * .45) + (goalsProgress * .2) + (courses * .2) + (projects * .15));
  const axes = [
    { label: "Actions", value: actions, icon: ClipboardList },
    { label: "Objectifs", value: goalsProgress, icon: Target },
    { label: "Cours", value: courses, icon: CheckCircle2 },
    { label: "Projets", value: projects, icon: FolderKanban },
  ];
  return <section className="bg-white py-12"><div className="container action-chart-layout"><div className="action-chart-intro"><p className="eyebrow">Vue d’ensemble du plan</p><h2>Voir ce qui avance,<br /><em>sans se comparer.</em></h2><p>Ce graphique assemble vos actions terminées, objectifs atteints, cours et projets enregistrés. Il reflète uniquement ce qui est enregistré dans EcoCompass.</p></div><div className="action-chart-card"><div className="action-chart-cartouche"><span>Parcours personnel</span><span>Données locales</span><span>Mis à jour à chaque action</span></div><div className="action-radial-wrap"><ResponsiveContainer width="100%" height="100%"><RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" startAngle={90} endAngle={-270} barSize={14} data={[{ value: overall, fill: "#0E6356" }]}><PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} /><RadialBar background={{ fill: "#E2ECE4" }} dataKey="value" cornerRadius={10} /></RadialBarChart></ResponsiveContainer><div><b>{overall} %</b><span>progression globale</span></div></div><div className="action-chart-axes">{axes.map(({ label, value, icon: Icon }, index) => <article key={label}><div><span><Icon size={14} /></span><b>Jalon 0{index + 1} · {label}</b><small>{value} %</small></div><i><em style={{ width: `${value}%` }} /></i></article>)}</div><p className="action-chart-note">Les axes sont des repères de lecture. Leur progression dépend d’actions concrètes et reste modifiable à mesure que votre parcours évolue.</p></div></div></section>;
}
