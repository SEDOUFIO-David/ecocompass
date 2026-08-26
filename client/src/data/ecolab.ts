/** Données locales fictives pour EcoLab. Elles sont exclusivement pédagogiques et remplaçables par une source vérifiée. */
export type DemoIndicator = "Activité (indice)" | "Inflation (indice)" | "Population (indice)" | "Commerce (indice)" | "Investissement (indice)";
export type DemoCountry = "Togo" | "Ghana";
export type DemoPoint = { year: number; value: number };
type Series = { label: DemoIndicator; unit: string; source: string; note: string; values: Record<DemoCountry, DemoPoint[]> };

const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
const points = (values: number[]) => years.map((year, index) => ({ year, value: values[index] }));

export const demoSeries: Series[] = [
  { label: "Activité (indice)", unit: "Indice base 100", source: "Jeu EcoLab — démonstration", note: "Représentation illustrative d’une activité agrégée.", values: { Togo: points([92, 96, 94, 101, 105, 108, 112]), Ghana: points([89, 94, 91, 98, 102, 106, 109]) } },
  { label: "Inflation (indice)", unit: "Indice de variation", source: "Jeu EcoLab — démonstration", note: "Ne correspond pas à un indice officiel de prix.", values: { Togo: points([98, 100, 103, 109, 116, 119, 121]), Ghana: points([97, 99, 104, 113, 125, 131, 134]) } },
  { label: "Population (indice)", unit: "Indice base 100", source: "Jeu EcoLab — démonstration", note: "Série simplifiée destinée à la lecture de tendance.", values: { Togo: points([92, 94, 96, 98, 101, 103, 106]), Ghana: points([91, 94, 96, 99, 102, 105, 108]) } },
  { label: "Commerce (indice)", unit: "Indice de flux", source: "Jeu EcoLab — démonstration", note: "La série ne mesure aucun flux commercial officiel.", values: { Togo: points([88, 94, 85, 97, 105, 108, 114]), Ghana: points([90, 96, 87, 101, 110, 116, 120]) } },
  { label: "Investissement (indice)", unit: "Indice base 100", source: "Jeu EcoLab — démonstration", note: "Valeurs fictives pour pratiquer la comparaison de séries.", values: { Togo: points([93, 97, 91, 101, 104, 110, 116]), Ghana: points([92, 98, 93, 103, 108, 113, 118]) } },
];

export const labQuestions = [
  "La tendance semble-t-elle à la hausse, à la baisse ou irrégulière ?",
  "Quelle période mérite une question complémentaire ?",
  "Quelle information faudrait-il vérifier avant d’avancer une explication ?",
];
