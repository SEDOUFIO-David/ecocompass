/**
 * Design: Atlas académique vivant — les quiz guident l’apprentissage, expliquent chaque réponse et évitent toute compétition.
 */
import { useState } from "react";
import { ArrowRight, CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { useLearning } from "@/contexts/LearningContext";

const questions = [
  { prompt: "Quel réflexe aide à interpréter une donnée économique ?", type: "Choix multiple", options: ["Vérifier la source, la période, l’unité et la définition avant de conclure.", "Retenir uniquement le chiffre le plus élevé.", "Appliquer la même conclusion à tous les contextes."], correct: 0, explanation: "Le contexte de production d’un chiffre est indispensable à sa lecture. Une donnée sans définition, période ou source permet rarement une conclusion solide." },
  { prompt: "Vrai ou faux : un exemple concret suffit à prouver une règle économique générale.", type: "Vrai ou faux", options: ["Vrai", "Faux"], correct: 1, explanation: "Un exemple aide à comprendre une notion, mais il ne remplace pas une analyse de données, du contexte et des hypothèses nécessaires pour conclure." },
];

export default function CourseQuiz({ courseSlug }: { courseSlug: string }) {
  const { saveQuizScore, quizScores } = useLearning();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const question = questions[step];
  const selected = answers[step];
  const score = answers.reduce((total, answer, index) => total + (answer === questions[index]?.correct ? 1 : 0), 0);
  const choose = (index: number) => setAnswers((current) => [...current.slice(0, step), index]);
  const advance = () => {
    if (step < questions.length - 1) setStep((current) => current + 1);
    else { saveQuizScore(courseSlug, score, questions.length); setFinished(true); }
  };
  const reset = () => { setStep(0); setAnswers([]); setFinished(false); };
  if (finished) return <section className="quiz-section quiz-summary"><p className="eyebrow text-[#9FD5B9]">Quiz terminé</p><h2>{score} / {questions.length} bonne{score > 1 ? "s" : ""} réponse{score > 1 ? "s" : ""}</h2><p>{score === questions.length ? "Très bon repère : vous avez utilisé les bons réflexes de lecture." : "L’essentiel est d’identifier les repères à vérifier. Relisez les explications, puis essayez à nouveau si vous le souhaitez."}</p><div className="quiz-summary-actions"><button type="button" className="quiz-retry" onClick={reset}><RotateCcw size={16} /> Refaire calmement</button><span><CheckCircle2 size={16} /> Score enregistré localement</span></div></section>;
  return <section className="quiz-section"><div className="flex items-start justify-between gap-4"><div><p className="eyebrow text-[#9FD5B9]">Mini-quiz · {question.type}</p><h2>{question.prompt}</h2></div><span className="quiz-step">{step + 1}/{questions.length}</span></div><div className="mt-6 grid gap-3">{question.options.map((option, index) => <button type="button" className={`quiz-option ${selected === index ? (index === question.correct ? "quiz-correct" : "quiz-wrong") : ""}`} onClick={() => choose(index)} key={option} disabled={selected !== undefined}><span>{String.fromCharCode(65 + index)}</span>{option}{selected === index && (index === question.correct ? <CheckCircle2 size={19} /> : <XCircle size={19} />)}</button>)}</div>{selected !== undefined && <div className="quiz-feedback"><p>{selected === question.correct ? "Bonne réponse." : "À revoir."}</p><span>{question.explanation}</span><button type="button" onClick={advance} className="quiz-next">{step < questions.length - 1 ? "Question suivante" : "Voir mon résultat"} <ArrowRight size={16} /></button></div>}{quizScores[courseSlug] && !finished && <p className="mt-4 text-xs text-[#BFD5C7]">Un précédent score est déjà enregistré sur cet appareil.</p>}</section>;
}
