/**
 * Design: Atlas académique vivant — le favori agit comme un repère personnel discret, pas comme une métrique sociale.
 */
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useLearning, type FavoriteItem } from "@/contexts/LearningContext";

export default function FavoriteButton({ item, compact = false }: { item: FavoriteItem; compact?: boolean }) {
  const { isFavorite, toggleFavorite } = useLearning();
  const saved = isFavorite(item.id);
  return <button type="button" className={`favorite-button ${compact ? "favorite-button-compact" : ""} ${saved ? "favorite-button-saved" : ""}`} onClick={() => toggleFavorite(item)} aria-pressed={saved} aria-label={saved ? `Retirer ${item.title} des favoris` : `Ajouter ${item.title} aux favoris`}>{saved ? <BookmarkCheck size={compact ? 16 : 18} /> : <Bookmark size={compact ? 16 : 18} />}{compact ? null : <span>{saved ? "Enregistré" : "Enregistrer"}</span>}</button>;
}
