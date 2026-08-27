/**
 * Recherche sémantique locale : des rapprochements éditoriaux transparents, sans inférence automatique ni source externe.
 */
export type EconomicSynonymGroup = { canonical: string; aliases: string[]; label: string };

export const economicSynonymGroups: EconomicSynonymGroup[] = [
  { canonical: "inflation", aliases: ["hausse des prix", "coût de la vie", "cout de la vie", "prix qui augmentent", "vie chère", "vie chere"], label: "inflation et évolution générale des prix" },
  { canonical: "chômage", aliases: ["chomage", "sans emploi", "recherche d emploi", "recherche d’emploi", "marché du travail", "marche du travail"], label: "emploi, chômage et marché du travail" },
  { canonical: "PIB", aliases: ["produit intérieur brut", "produit interieur brut", "activité économique", "activite economique", "richesse produite", "croissance économique", "croissance economique"], label: "PIB, croissance et activité économique" },
  { canonical: "pauvreté", aliases: ["pauvrete", "niveau de vie", "privation", "inégalités", "inegalites", "écarts de revenus", "ecarts de revenus"], label: "pauvreté, niveau de vie et inégalités" },
  { canonical: "commerce international", aliases: ["exportation", "exportations", "importation", "importations", "échanges internationaux", "echanges internationaux", "commerce extérieur", "commerce exterieur"], label: "commerce international et échanges" },
  { canonical: "données économiques", aliases: ["donnees economiques", "statistiques", "chiffres", "indicateurs", "tableau de bord", "graphique", "graphiques"], label: "données, statistiques et indicateurs" },
  { canonical: "finance", aliases: ["budget", "crédit", "credit", "emprunt", "épargne", "epargne", "banque", "financement"], label: "finance, monnaie et financement" },
  { canonical: "développement", aliases: ["developpement", "projet local", "territoire", "agriculture", "politiques publiques", "politique publique"], label: "développement, territoires et politiques" },
  { canonical: "offre et demande", aliases: ["prix de marché", "prix de marche", "vendeurs", "acheteurs", "quantités échangées", "quantites echangees", "marché", "marche"], label: "offre, demande et fonctionnement des marchés" },
  { canonical: "coût d’opportunité", aliases: ["cout d opportunite", "arbitrage", "renoncer", "alternative", "choix"], label: "choix, arbitrage et coût d’opportunité" },
];

const normalize = (value: string) => value.toLocaleLowerCase("fr").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, " ").replace(/\s+/g, " ").trim();

export function getEconomicSynonymMatches(query: string): EconomicSynonymGroup[] {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return [];
  return economicSynonymGroups.filter((group) => [group.canonical, ...group.aliases].some((term) => {
    const normalizedTerm = normalize(term);
    return normalizedQuery.includes(normalizedTerm) || normalizedTerm.includes(normalizedQuery);
  }));
}

export function getEconomicSearchTerms(query: string): string[] {
  const groups = getEconomicSynonymMatches(query);
  return Array.from(new Set([normalize(query), ...groups.flatMap((group) => [group.canonical, ...group.aliases].map(normalize))])).filter(Boolean);
}
