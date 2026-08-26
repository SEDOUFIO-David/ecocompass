export type GoalPath = {
  slug: string;
  label: string;
  description: string;
  skills: string[];
  courseSlugs: string[];
  projectSlugs: string[];
  careerKeywords: string[];
  opportunityKinds: string[];
  steps: { label: string; href: string; note: string }[];
};

export const goalPaths: GoalPath[] = [
  {
    slug: "analyse-economique", label: "Devenir analyste économique", description: "Un itinéraire possible pour développer les fondamentaux, lire des données et produire des analyses structurées.", skills: ["Macroéconomie", "Statistiques", "Analyse de données", "Rédaction"], courseSlugs: ["introduction-a-l-economie", "inflation", "pib"], projectSlugs: ["analyse-indicateur", "tableau-de-bord"], careerKeywords: ["Analyste économique", "Économètre", "Data Analyst"], opportunityKinds: ["Stage", "Programme", "Consultance"], steps: [{ label: "Fondamentaux", href: "/apprendre", note: "cours" }, { label: "Données", href: "/ecolab", note: "lire" }, { label: "Projet", href: "/projets", note: "pratiquer" }, { label: "Portfolio", href: "/portfolio", note: "tracer" }, { label: "Portails", href: "/opportunites", note: "vérifier" }]
  },
  {
    slug: "developpement", label: "Travailler en économie du développement", description: "Une piste pour comprendre les politiques publiques, les territoires et l’analyse de situations de développement.", skills: ["Économie du développement", "Recherche", "Politiques publiques", "Communication"], courseSlugs: ["introduction-a-l-economie", "inflation"], projectSlugs: ["analyse-indicateur", "etude-secteur"], careerKeywords: ["Économiste du développement", "Analyste politiques publiques", "Chargé d’études"], opportunityKinds: ["Stage", "Volontariat", "Programme"], steps: [{ label: "Repères", href: "/afrique", note: "contextes" }, { label: "Économie", href: "/apprendre", note: "cours" }, { label: "Terrain", href: "/cas", note: "raisonner" }, { label: "Projet", href: "/projets", note: "documenter" }, { label: "Portails", href: "/opportunites", note: "vérifier" }]
  },
  {
    slug: "donnees", label: "Analyser des données économiques", description: "Une piste pour passer de tableaux simples à une analyse reproductible et expliquée.", skills: ["Statistiques", "Excel", "SQL", "Visualisation", "Python"], courseSlugs: ["introduction-a-l-economie", "pib"], projectSlugs: ["tableau-de-bord", "analyse-indicateur"], careerKeywords: ["Data Analyst", "Statisticien", "Économètre"], opportunityKinds: ["Stage", "Programme", "Emploi"], steps: [{ label: "Statistiques", href: "/apprendre", note: "apprendre" }, { label: "EcoLab", href: "/ecolab", note: "explorer" }, { label: "Tableau", href: "/projets", note: "construire" }, { label: "Compétences", href: "/competences", note: "relier" }, { label: "Portails", href: "/opportunites", note: "consulter" }]
  },
  {
    slug: "finance", label: "Explorer la finance", description: "Une piste pour analyser des choix financiers, des organisations et des informations chiffrées.", skills: ["Finance", "Analyse", "Excel", "Gestion de projet"], courseSlugs: ["introduction-a-l-economie", "inflation"], projectSlugs: ["tableau-de-bord"], careerKeywords: ["Analyste financier", "Contrôleur de gestion", "Chargé d’études"], opportunityKinds: ["Stage", "Programme", "Emploi"], steps: [{ label: "Bases", href: "/apprendre", note: "cours" }, { label: "Décisions", href: "/professionnels", note: "simuler" }, { label: "Projet", href: "/projets", note: "pratiquer" }, { label: "Métiers", href: "/metiers", note: "comparer" }, { label: "Portails", href: "/opportunites", note: "vérifier" }]
  }
];

export const achievementRules = [
  { id: "premier-cours", label: "Fondamentaux de l’économie", description: "Terminer un premier cours", when: "course" },
  { id: "premier-projet", label: "Premier projet", description: "Consigner une première réalisation", when: "project" },
  { id: "portfolio", label: "Premier portfolio", description: "Ajouter une présentation de portfolio", when: "portfolio" },
  { id: "analyste", label: "Lecteur de données", description: "Réaliser un quiz et explorer EcoLab", when: "practice" }
];

export const projectEnrichments: Record<string, { level: "Débutant" | "Intermédiaire" | "Avancé"; tools: string[]; deliverable: string; context: string }> = {
  "inflation-togo": { level: "Débutant", tools: ["Tableau", "Graphique", "Note courte"], deliverable: "Une note d’observation avec tendance, hypothèse et limite.", context: "Apprendre à interpréter une évolution de prix sans la transformer en conclusion automatique." },
  "population": { level: "Débutant", tools: ["Tableau", "Question de recherche", "Carte d’analyse"], deliverable: "Une carte d’analyse reliant la série à un besoin de services.", context: "Mettre une évolution démographique en relation avec une question économique concrète." },
  "comparer-croissance": { level: "Intermédiaire", tools: ["Comparaison", "Graphique", "Sources"], deliverable: "Une comparaison descriptive accompagnée d’une question à approfondir.", context: "Comparer deux trajectoires de manière prudente, sans réduire les pays à un classement." },
  "exportations": { level: "Avancé", tools: ["Série temporelle", "Recherche", "Argumentation"], deliverable: "Une analyse courte distinguant observations, hypothèses et sources à consulter.", context: "Étudier les échanges en conservant plusieurs explications possibles." }
};
