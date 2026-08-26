/**
 * Design: Atlas académique vivant — un retour de réussite bref, lié à une action réelle et respectueux de la réduction de mouvement.
 */
import { useEffect } from "react";
import { Award, CheckCircle2, X } from "lucide-react";
import { useLearning } from "@/contexts/LearningContext";

export default function SuccessMoment() {
  const { successMoment, dismissSuccess } = useLearning();
  useEffect(() => {
    if (!successMoment) return;
    const timer = window.setTimeout(dismissSuccess, 5200);
    return () => window.clearTimeout(timer);
  }, [successMoment, dismissSuccess]);
  if (!successMoment) return null;
  const Icon = successMoment.kind === "badge" ? Award : CheckCircle2;
  return <div className="success-moment" role="status" aria-live="polite"><span className="success-orbit success-orbit-one" /><span className="success-orbit success-orbit-two" /><div className="success-icon"><Icon size={24} /></div><div><p>{successMoment.kind === "badge" ? "Repère obtenu" : "Défi réussi"}</p><b>{successMoment.title}</b><span>{successMoment.detail}</span></div><button type="button" onClick={dismissSuccess} aria-label="Fermer la notification de réussite"><X size={16} /></button></div>;
}
