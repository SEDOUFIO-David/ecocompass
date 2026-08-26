/**
 * Design: Atlas académique vivant — la progression reste personnelle, locale et non compétitive.
 */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type FavoriteType = "course" | "career" | "glossary" | "case";
export type FavoriteItem = { id: string; type: FavoriteType; title: string; href: string };
type QuizScore = { score: number; total: number; completedAt: string };
type LearningState = { started: string[]; completed: string[]; quizScores: Record<string, QuizScore>; lastCourse?: string; favorites: FavoriteItem[] };
type LearningContextValue = LearningState & {
  startCourse: (slug: string) => void;
  completeCourse: (slug: string) => void;
  saveQuizScore: (slug: string, score: number, total: number) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
  resetProgress: () => void;
};

const STORAGE_KEY = "ecocompass-learning-v2";
const fallback: LearningState = { started: [], completed: [], quizScores: {}, favorites: [] };
const LearningContext = createContext<LearningContextValue | null>(null);

function loadState(): LearningState {
  if (typeof window === "undefined") return fallback;
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
    if (!parsed || !Array.isArray(parsed.started) || !Array.isArray(parsed.completed) || !Array.isArray(parsed.favorites)) return fallback;
    return { ...fallback, ...parsed };
  } catch { return fallback; }
}

export function LearningProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LearningState>(loadState);
  useEffect(() => { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }, [state]);

  const value = useMemo<LearningContextValue>(() => ({
    ...state,
    startCourse: (slug) => setState((current) => ({ ...current, started: current.started.includes(slug) ? current.started : [...current.started, slug], lastCourse: slug })),
    completeCourse: (slug) => setState((current) => ({ ...current, started: current.started.includes(slug) ? current.started : [...current.started, slug], completed: current.completed.includes(slug) ? current.completed : [...current.completed, slug], lastCourse: slug })),
    saveQuizScore: (slug, score, total) => setState((current) => ({ ...current, quizScores: { ...current.quizScores, [slug]: { score, total, completedAt: new Date().toISOString() } } })),
    toggleFavorite: (item) => setState((current) => ({ ...current, favorites: current.favorites.some((favorite) => favorite.id === item.id) ? current.favorites.filter((favorite) => favorite.id !== item.id) : [...current.favorites, item] })),
    isFavorite: (id) => state.favorites.some((favorite) => favorite.id === id),
    resetProgress: () => setState(fallback),
  }), [state]);

  return <LearningContext.Provider value={value}>{children}</LearningContext.Provider>;
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) throw new Error("useLearning doit être utilisé dans LearningProvider");
  return context;
}
