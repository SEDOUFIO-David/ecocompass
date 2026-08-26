/**
 * Design: Atlas académique vivant — la progression reste personnelle, locale et non compétitive.
 */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type FavoriteType = "course" | "career" | "glossary" | "case" | "project" | "formation" | "opportunity" | "institution";
export type FavoriteItem = { id: string; type: FavoriteType; title: string; href: string };
type QuizScore = { score: number; total: number; completedAt: string };
export type PersonalProfile = { name: string; level: string; interests: string[]; goal: string; specialization?: string; certifications?: string[] };
export type PersonalProject = { id: string; templateSlug: string; title: string; completedAt?: string; reflection?: string; status?: "commencé" | "en-cours" | "terminé"; portfolio?: boolean; deliverable?: string };
export type PersonalGoal = { id: string; title: string; timeframe: "quotidien" | "hebdomadaire" | "mensuel" | "long-terme"; completed: boolean };
export type ActionTask = { id: string; title: string; dueDate?: string; completed: boolean; source?: "manual" | "path"; createdAt?: string; completedAt?: string };
export type SuccessMoment = { id: string; kind: "badge" | "challenge"; title: string; detail: string };
export type ActivityRecord = { id: string; kind: "cours" | "quiz" | "projet" | "action" | "objectif"; label: string; occurredAt: string };
type LearningState = { started: string[]; completed: string[]; quizScores: Record<string, QuizScore>; lastCourse?: string; favorites: FavoriteItem[]; profile: PersonalProfile; projects: PersonalProject[]; activePath?: string; goals: PersonalGoal[]; actionTasks: ActionTask[]; badges: string[]; portfolioIntro: string; activityLog: ActivityRecord[]; remindersEnabled: boolean; reminderLeadDays: number };
type LearningContextValue = LearningState & {
  startCourse: (slug: string) => void;
  completeCourse: (slug: string) => void;
  saveQuizScore: (slug: string, score: number, total: number) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
  updateProfile: (profile: Partial<PersonalProfile>) => void;
  saveProject: (project: Omit<PersonalProject, "id"> & { id?: string }) => void;
  setActivePath: (slug?: string) => void;
  addGoal: (goal: Omit<PersonalGoal, "id" | "completed">) => void;
  toggleGoal: (id: string) => void;
  removeGoal: (id: string) => void;
  addTask: (task: Omit<ActionTask, "id" | "completed">) => void;
  updateTask: (id: string, task: Partial<Omit<ActionTask, "id">>) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
  setPortfolioIntro: (value: string) => void;
  awardBadge: (badge: string) => void;
  successMoment: SuccessMoment | null;
  celebrate: (moment: Omit<SuccessMoment, "id">) => void;
  dismissSuccess: () => void;
  setRemindersEnabled: (enabled: boolean) => Promise<boolean>;
  setReminderLeadDays: (days: number) => void;
  resetProgress: () => void;
};

const STORAGE_KEY = "ecocompass-learning-v2";
const fallback: LearningState = { started: [], completed: [], quizScores: {}, favorites: [], profile: { name: "", level: "Je découvre l’économie", interests: [], goal: "", certifications: [] }, projects: [], goals: [], actionTasks: [], badges: [], portfolioIntro: "", activityLog: [], remindersEnabled: false, reminderLeadDays: 2 };
const LearningContext = createContext<LearningContextValue | null>(null);

function loadState(): LearningState {
  if (typeof window === "undefined") return fallback;
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
    if (!parsed || !Array.isArray(parsed.started) || !Array.isArray(parsed.completed) || !Array.isArray(parsed.favorites)) return fallback;
    return { ...fallback, ...parsed, profile: { ...fallback.profile, ...(parsed.profile || {}), certifications: Array.isArray(parsed.profile?.certifications) ? parsed.profile.certifications : [] }, projects: Array.isArray(parsed.projects) ? parsed.projects : [], goals: Array.isArray(parsed.goals) ? parsed.goals : [], actionTasks: Array.isArray(parsed.actionTasks) ? parsed.actionTasks : [], badges: Array.isArray(parsed.badges) ? parsed.badges : [], activityLog: Array.isArray(parsed.activityLog) ? parsed.activityLog : [], remindersEnabled: Boolean(parsed.remindersEnabled), reminderLeadDays: [1, 2, 3, 7].includes(parsed.reminderLeadDays) ? parsed.reminderLeadDays : 2 };
  } catch { return fallback; }
}

export function LearningProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LearningState>(loadState);
  const [successMoment, setSuccessMoment] = useState<SuccessMoment | null>(null);
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // L’aperçu intégré reste fonctionnel lorsque le navigateur interdit le stockage local.
    }
  }, [state]);

  const value = useMemo<LearningContextValue>(() => ({
    ...state,
    startCourse: (slug) => setState((current) => ({ ...current, started: current.started.includes(slug) ? current.started : [...current.started, slug], lastCourse: slug })),
    completeCourse: (slug) => { const isNew = !state.completed.includes(slug); if (isNew && !state.badges.includes("Fondamentaux de l’économie")) setSuccessMoment({ id: `success-${Date.now()}`, kind: "badge", title: "Badge débloqué : Fondamentaux", detail: "Vous avez terminé un premier cours et créé une trace d’apprentissage." }); setState((current) => { const completed = current.completed.includes(slug) ? current.completed : [...current.completed, slug]; const badges = completed.length ? (current.badges.includes("Fondamentaux de l’économie") ? current.badges : [...current.badges, "Fondamentaux de l’économie"]) : current.badges; const activityLog: ActivityRecord[] = isNew ? [...current.activityLog, { id: `activity-${Date.now()}`, kind: "cours", label: "Cours terminé", occurredAt: new Date().toISOString() }] : current.activityLog; return { ...current, started: current.started.includes(slug) ? current.started : [...current.started, slug], completed, badges, activityLog, lastCourse: slug }; }); },
    saveQuizScore: (slug, score, total) => { const isNew = !state.quizScores[slug]; if (isNew && !state.badges.includes("Premier quiz")) setSuccessMoment({ id: `success-${Date.now()}`, kind: "badge", title: "Badge débloqué : Premier quiz", detail: "Votre réponse est enregistrée ; relisez aussi l’explication proposée." }); setState((current) => ({ ...current, quizScores: { ...current.quizScores, [slug]: { score, total, completedAt: new Date().toISOString() } }, badges: current.badges.includes("Premier quiz") ? current.badges : [...current.badges, "Premier quiz"], activityLog: isNew ? [...current.activityLog, { id: `activity-${Date.now()}`, kind: "quiz", label: "Quiz complété", occurredAt: new Date().toISOString() }] : current.activityLog })); },
    toggleFavorite: (item) => setState((current) => ({ ...current, favorites: current.favorites.some((favorite) => favorite.id === item.id) ? current.favorites.filter((favorite) => favorite.id !== item.id) : [...current.favorites, item] })),
    isFavorite: (id) => state.favorites.some((favorite) => favorite.id === id),
    updateProfile: (profile) => setState((current) => ({ ...current, profile: { ...current.profile, ...profile } })),
    saveProject: (project) => setState((current) => { const existing = current.projects.find((item) => item.id === project.id); const isNewCompletion = project.status === "terminé" && existing?.status !== "terminé"; return { ...current, projects: current.projects.some((item) => item.id === project.id) ? current.projects.map((item) => item.id === project.id ? { ...item, ...project } : item) : [...current.projects, { ...project, id: project.id || `${project.templateSlug}-${Date.now()}` }], activityLog: isNewCompletion ? [...current.activityLog, { id: `activity-${Date.now()}`, kind: "projet", label: project.title, occurredAt: new Date().toISOString() }] : current.activityLog }; }),
    setActivePath: (slug) => setState((current) => ({ ...current, activePath: slug })),
    addGoal: (goal) => setState((current) => ({ ...current, goals: [...current.goals, { ...goal, id: `goal-${Date.now()}`, completed: false }] })),
    toggleGoal: (id) => setState((current) => { const goal = current.goals.find((item) => item.id === id); const becomingComplete = Boolean(goal && !goal.completed); return { ...current, goals: current.goals.map((item) => item.id === id ? { ...item, completed: !item.completed } : item), activityLog: becomingComplete ? [...current.activityLog, { id: `activity-${Date.now()}`, kind: "objectif", label: goal?.title || "Objectif atteint", occurredAt: new Date().toISOString() }] : current.activityLog }; }),
    removeGoal: (id) => setState((current) => ({ ...current, goals: current.goals.filter((goal) => goal.id !== id) })),
    addTask: (task) => setState((current) => ({ ...current, actionTasks: [...current.actionTasks, { ...task, id: `task-${Date.now()}`, completed: false, createdAt: new Date().toISOString() }] })),
    updateTask: (id, task) => setState((current) => ({ ...current, actionTasks: current.actionTasks.map((item) => item.id === id ? { ...item, ...task } : item) })),
    toggleTask: (id) => setState((current) => { const task = current.actionTasks.find((item) => item.id === id); const becomingComplete = Boolean(task && !task.completed); return { ...current, actionTasks: current.actionTasks.map((item) => item.id === id ? { ...item, completed: !item.completed, completedAt: !item.completed ? new Date().toISOString() : undefined } : item), activityLog: becomingComplete ? [...current.activityLog, { id: `activity-${Date.now()}`, kind: "action", label: task?.title || "Action terminée", occurredAt: new Date().toISOString() }] : current.activityLog }; }),
    removeTask: (id) => setState((current) => ({ ...current, actionTasks: current.actionTasks.filter((task) => task.id !== id) })),
    setPortfolioIntro: (value) => setState((current) => ({ ...current, portfolioIntro: value })),
    awardBadge: (badge) => { if (!state.badges.includes(badge)) setSuccessMoment({ id: `success-${Date.now()}`, kind: "badge", title: `Badge débloqué : ${badge}`, detail: "Ce badge correspond à une action enregistrée dans votre parcours." }); setState((current) => ({ ...current, badges: current.badges.includes(badge) ? current.badges : [...current.badges, badge] })); },
    successMoment,
    celebrate: (moment) => setSuccessMoment({ ...moment, id: `success-${Date.now()}` }),
    dismissSuccess: () => setSuccessMoment(null),
    setRemindersEnabled: async (enabled) => { if (!enabled) { setState((current) => ({ ...current, remindersEnabled: false })); return false; } if (typeof window === "undefined" || !("Notification" in window)) { setState((current) => ({ ...current, remindersEnabled: true })); return true; } const permission = Notification.permission === "granted" ? "granted" : await Notification.requestPermission(); const accepted = permission === "granted"; setState((current) => ({ ...current, remindersEnabled: accepted })); return accepted; },
    setReminderLeadDays: (days) => setState((current) => ({ ...current, reminderLeadDays: [1, 2, 3, 7].includes(days) ? days : current.reminderLeadDays })),
    resetProgress: () => setState(fallback),
  }), [state, successMoment]);

  return <LearningContext.Provider value={value}>{children}</LearningContext.Provider>;
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) throw new Error("useLearning doit être utilisé dans LearningProvider");
  return context;
}
