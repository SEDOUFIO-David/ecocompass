/**
 * Design: système éditorial EcoCompass — artefacts cartographiques vectoriels, sans dépendance à des images externes non exportées.
 */
type Variant = "overview" | "territory" | "path";
const captions: Record<Variant, string> = { overview: "Repères d’apprentissage et de lecture", territory: "Territoires, données et observation", path: "Sept étapes pour découvrir l’économie" };

export default function AtlasPanel({ variant = "overview", className = "" }: { variant?: Variant; className?: string }) {
  return <figure className={`atlas-panel atlas-panel-${variant} ${className}`} aria-label={captions[variant]}><div className="atlas-panel-kicker"><span>EcoCompass</span><span>{variant === "path" ? "Parcours 01—07" : variant === "territory" ? "Lecture territoriale" : "Repères essentiels"}</span></div><div className="atlas-panel-art" aria-hidden="true"><span className="atlas-panel-orbit orbit-a" /><span className="atlas-panel-orbit orbit-b" /><span className="atlas-panel-point point-a" /><span className="atlas-panel-point point-b" /><svg viewBox="0 0 420 255" focusable="false"><path className="atlas-panel-route" d="M31 195 C91 124 117 212 173 145 S262 77 310 123 S367 81 402 46" /><path className="atlas-panel-terrain" d="M124 45c37 4 42 26 71 38 22 9 42 5 61 33 14 20 3 45-21 59-25 15-52 26-75 13-18-10-26-31-47-43-24-13-40-27-30-53 8-21 22-32 41-34Z" /><path className="atlas-panel-slice" d="M273 53 353 95 317 173 244 133Z" /><circle className="atlas-panel-ring" cx="334" cy="82" r="34" /><path className="atlas-panel-axis" d="M334 39v86M291 82h86" /><path className="atlas-panel-chart" d="M55 221 88 179 121 199 151 147 182 167" /><path className="atlas-panel-path" d="M67 50h73M67 77h46M67 104h92" /></svg></div><figcaption>{captions[variant]}</figcaption></figure>;
}
