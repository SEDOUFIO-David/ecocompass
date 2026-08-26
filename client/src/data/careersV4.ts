/**
 * Design: Atlas académique vivant — répertoire enrichissable de pistes professionnelles, sans prétendre être exhaustif ni refléter des offres actives.
 */
import { careers, type Career } from "@/data/ecocompass";

export type CareerProfile = Career & {
  family: string;
  educationLevel: string;
  workTypes: string[];
  dataFocus: boolean;
  fieldFocus: boolean;
  publicPrivate: string[];
  mathLevel: "Fondations" | "Intermédiaire" | "Approfondi";
  recommendedCourses: string[];
  recommendedProjects: string[];
  relatedCareers: string[];
  interestSignals: string[];
};

const slugify = (value: string) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const categoryMeta: Record<string, Pick<CareerProfile, "family" | "educationLevel" | "workTypes" | "dataFocus" | "fieldFocus" | "publicPrivate" | "mathLevel" | "recommendedCourses" | "recommendedProjects" | "interestSignals">> = {
  "Données": { family: "Data, statistiques et économétrie", educationLevel: "Formation initiale puis spécialisation progressive selon le rôle", workTypes: ["Analyse", "Données", "Visualisation"], dataFocus: true, fieldFocus: false, publicPrivate: ["Public", "Privé", "Recherche"], mathLevel: "Approfondi", recommendedCourses: ["introduction-aux-donnees-economiques", "pib-et-croissance"], recommendedProjects: ["inflation-togo", "comparer-croissance"], interestSignals: ["vous aimez transformer des informations en repères", "vous êtes curieux face à une série ou une question", "vous appréciez une démarche rigoureuse"] },
  "Finance": { family: "Finance, gestion des risques et investissement", educationLevel: "Formation économique, financière ou de gestion à adapter au contexte", workTypes: ["Finance", "Analyse", "Décision"], dataFocus: true, fieldFocus: false, publicPrivate: ["Privé", "Institutions financières", "Public"], mathLevel: "Intermédiaire", recommendedCourses: ["monnaie-et-systeme-bancaire", "inflation-et-pouvoir-d-achat"], recommendedProjects: ["inflation-togo", "exportations"], interestSignals: ["vous aimez comparer des options", "vous vous intéressez au financement", "vous appréciez d’évaluer des risques et des limites"] },
  "Banque": { family: "Banque et institutions financières", educationLevel: "Formation économique, bancaire ou de gestion selon l’organisation", workTypes: ["Finance", "Service", "Analyse"], dataFocus: true, fieldFocus: false, publicPrivate: ["Institutions financières", "Privé"], mathLevel: "Intermédiaire", recommendedCourses: ["monnaie-et-systeme-bancaire", "choix-et-cout-d-opportunite"], recommendedProjects: ["inflation-togo", "comparer-croissance"], interestSignals: ["vous vous intéressez aux décisions de financement", "vous aimez lire un dossier avec méthode", "vous appréciez la rigueur et la confidentialité"] },
  "Développement": { family: "Développement, territoires et impact", educationLevel: "Formation économique, sociale ou de projet, complétée par des expériences de terrain", workTypes: ["Projet", "Terrain", "Analyse"], dataFocus: true, fieldFocus: true, publicPrivate: ["ONG", "Public", "Organisations internationales"], mathLevel: "Intermédiaire", recommendedCourses: ["economie-du-developpement", "pauvrete-et-inegalites"], recommendedProjects: ["population", "inflation-togo"], interestSignals: ["vous vous intéressez aux enjeux collectifs", "vous aimez relier données, projets et personnes", "vous êtes à l’aise avec des contextes variés"] },
  "Secteur public": { family: "Politiques publiques et administration", educationLevel: "Formation disciplinaire, administration ou spécialisation en politiques publiques", workTypes: ["Analyse", "Politiques publiques", "Service public"], dataFocus: true, fieldFocus: true, publicPrivate: ["Public", "Organisations internationales"], mathLevel: "Intermédiaire", recommendedCourses: ["etat-et-politiques-economiques", "introduction-aux-donnees-economiques"], recommendedProjects: ["population", "comparer-croissance"], interestSignals: ["vous vous intéressez à l’action publique", "vous aimez synthétiser une question complexe", "vous cherchez à comprendre des effets collectifs"] },
  "Recherche": { family: "Recherche, enseignement et expertise", educationLevel: "Formation universitaire et approfondissement méthodologique progressif", workTypes: ["Recherche", "Rédaction", "Analyse"], dataFocus: true, fieldFocus: false, publicPrivate: ["Recherche", "Universités", "Public"], mathLevel: "Approfondi", recommendedCourses: ["introduction-aux-donnees-economiques", "economie-du-developpement"], recommendedProjects: ["comparer-croissance", "population"], interestSignals: ["vous aimez poser une bonne question", "vous appréciez lire et structurer des preuves", "vous souhaitez expliquer un raisonnement clairement"] },
  "Conseil": { family: "Conseil, stratégie et accompagnement", educationLevel: "Formation disciplinaire complétée par des expériences de projet et de communication", workTypes: ["Conseil", "Analyse", "Projet"], dataFocus: true, fieldFocus: true, publicPrivate: ["Privé", "Conseil", "ONG"], mathLevel: "Intermédiaire", recommendedCourses: ["choix-et-cout-d-opportunite", "etat-et-politiques-economiques"], recommendedProjects: ["investissement", "exportations"], interestSignals: ["vous aimez résoudre des problèmes", "vous appréciez échanger avec des interlocuteurs variés", "vous souhaitez formuler des options plutôt qu’une seule réponse"] },
  "Économie": { family: "Économie et analyse", educationLevel: "Formation économique et méthodologique à adapter à la spécialisation", workTypes: ["Analyse", "Recherche", "Données"], dataFocus: true, fieldFocus: false, publicPrivate: ["Public", "Privé", "Recherche"], mathLevel: "Intermédiaire", recommendedCourses: ["pib-et-croissance", "introduction-aux-donnees-economiques"], recommendedProjects: ["comparer-croissance", "inflation-togo"], interestSignals: ["vous aimez comprendre les mécanismes économiques", "vous appréciez comparer des explications", "vous voulez présenter une analyse nuancée"] },
  "Entreprises": { family: "Entreprise, stratégie et marché", educationLevel: "Formation économique, gestion ou marketing selon le rôle", workTypes: ["Entreprise", "Analyse", "Décision"], dataFocus: true, fieldFocus: true, publicPrivate: ["Privé"], mathLevel: "Intermédiaire", recommendedCourses: ["marche-et-formation-des-prix", "commerce-international"], recommendedProjects: ["exportations", "investissement"], interestSignals: ["vous vous intéressez aux organisations", "vous aimez lire un marché", "vous appréciez passer d’une question à une action"] },
};

const extras: Array<[string, string, string, string[]]> = [
  ["Data scientist", "Données", "Conçoit des analyses et modèles à partir de données, en documentant leurs hypothèses et limites.", ["Préparer des données", "Explorer des relations", "Communiquer des résultats"]],
  ["Analyste quantitatif", "Données", "Utilise des méthodes quantitatives pour éclairer une question économique ou financière.", ["Formuler une question", "Tester des approches", "Documenter des résultats"]],
  ["Ingénieur data", "Données", "Organise des flux de données pour qu’ils soient exploitables et compréhensibles par une équipe.", ["Structurer des données", "Contrôler une qualité", "Faciliter un usage"]],
  ["Spécialiste SIG", "Données", "Analyse des informations géographiques pour éclairer des territoires, services ou projets.", ["Préparer des cartes", "Croiser des informations", "Présenter un territoire"]],
  ["Actuaire", "Finance", "Étudie des risques et scénarios dans des environnements d’assurance ou de financement.", ["Construire des scénarios", "Mesurer des risques", "Expliquer une hypothèse"]],
  ["Gestionnaire de portefeuille", "Finance", "Suit des informations financières et des contraintes de risque pour une organisation.", ["Lire un portefeuille", "Comparer des options", "Suivre des limites"]],
  ["Contrôleur de gestion", "Finance", "Aide une organisation à lire ses activités, budgets et écarts de manière structurée.", ["Suivre un budget", "Analyser un écart", "Préparer une synthèse"]],
  ["Auditeur", "Finance", "Examine des procédures, informations et contrôles avec méthode et indépendance.", ["Préparer une mission", "Tester des éléments", "Restituer des observations"]],
  ["Comptable analyste", "Finance", "Relie des écritures et informations de gestion pour éclairer la situation d’une organisation.", ["Organiser une information", "Lire des comptes", "Expliquer un écart"]],
  ["Chargé de conformité", "Banque", "Participe à la lecture des règles, risques et procédures applicables à une organisation.", ["Lire des procédures", "Signaler un risque", "Documenter une action"]],
  ["Conseiller entreprises", "Banque", "Accompagne des organisations dans l’exploration de besoins financiers et de solutions possibles.", ["Comprendre un besoin", "Préparer un dossier", "Suivre une relation"]],
  ["Spécialiste inclusion financière", "Banque", "Étudie l’accès aux services financiers et les obstacles rencontrés par différents publics.", ["Observer des usages", "Analyser des freins", "Proposer une piste"]],
  ["Économiste du développement", "Développement", "Analyse des transformations économiques et sociales liées aux territoires et aux politiques de développement.", ["Étudier un contexte", "Interpréter des indicateurs", "Formuler des questions"]],
  ["Spécialiste suivi-évaluation", "Développement", "Organise la lecture d’objectifs, indicateurs et résultats d’un programme.", ["Définir un indicateur", "Suivre des données", "Restituer des apprentissages"]],
  ["Chargé de programme", "Développement", "Coordonne des activités, partenaires et résultats attendus dans un programme.", ["Planifier", "Suivre une action", "Animer une coordination"]],
  ["Analyste genre et inclusion", "Développement", "Aide à analyser les inégalités d’accès, de participation et de résultats dans un projet.", ["Poser des questions inclusives", "Lire des écarts", "Adapter une action"]],
  ["Planificateur territorial", "Secteur public", "Contribue à organiser les priorités d’un territoire à partir de besoins, données et scénarios.", ["Cartographier un besoin", "Comparer des priorités", "Suivre un plan"]],
  ["Chargé de budget public", "Secteur public", "Participe à la préparation, au suivi et à l’explication d’éléments budgétaires publics.", ["Lire un budget", "Suivre un engagement", "Expliquer un arbitrage"]],
  ["Analyste de politiques sociales", "Secteur public", "Étudie des politiques et services sociaux avec une attention aux publics et aux résultats.", ["Lire une politique", "Comparer des effets", "Proposer des questions d’évaluation"]],
  ["Spécialiste commerce international", "Économie", "Analyse des échanges, règles, coûts et opportunités au-delà des frontières.", ["Lire un flux", "Comparer des marchés", "Documenter une règle"]],
  ["Analyste logistique", "Entreprises", "Étudie les flux, coûts, délais et organisation d’une chaîne d’approvisionnement.", ["Cartographier un flux", "Repérer un coût", "Proposer une amélioration"]],
  ["Analyste marketing", "Entreprises", "Aide à comprendre des marchés, clients et comportements à partir d’informations disponibles.", ["Préparer une étude", "Lire un segment", "Présenter un insight"]],
  ["Responsable études de marché", "Entreprises", "Pilote des investigations pour éclairer une décision commerciale ou de service.", ["Cadrer une question", "Choisir une méthode", "Restituer un résultat"]],
  ["Analyste ESG", "Développement", "Relie des dimensions environnementales, sociales et de gouvernance à une analyse d’organisation ou de projet.", ["Identifier des enjeux", "Lire des indicateurs", "Documenter une limite"]],
  ["Économiste de l’environnement", "Économie", "Étudie les liens entre activité économique, ressources, externalités et politiques publiques.", ["Analyser une externalité", "Comparer des options", "Lire des impacts"]],
  ["Analyste agricole", "Développement", "Observe les chaînes de valeur agricoles, contraintes de production et accès aux marchés.", ["Lire une chaîne de valeur", "Comparer des contraintes", "Interpréter un contexte"]],
  ["Économiste de la santé", "Économie", "Analyse les ressources, choix et effets liés aux systèmes et services de santé.", ["Poser une question de coût", "Lire un accès", "Comparer une intervention"]],
  ["Analyste emploi et compétences", "Développement", "Étudie les liens entre formation, compétences, activité et besoins d’organisation.", ["Lire des parcours", "Comparer des besoins", "Formuler une piste"]],
  ["Data product analyst", "Données", "Relie des données, des usages et des décisions autour d’un produit ou service numérique.", ["Analyser des usages", "Définir un indicateur", "Travailler avec une équipe"]],
  ["Analyste cybersécurité financière", "Banque", "Contribue à la lecture des risques numériques dans un contexte financier ou de paiement.", ["Identifier un risque", "Suivre un contrôle", "Documenter une alerte"]],
  ["Chargé de recherche", "Recherche", "Contribue à un programme d’étude en organisant des informations et des analyses.", ["Rechercher une source", "Préparer une note", "Participer à une restitution"]],
  ["Assistant d’enseignement", "Recherche", "Soutient la préparation pédagogique, l’accompagnement et l’organisation de contenus.", ["Préparer un support", "Expliquer une notion", "Organiser une activité"]],
  ["Consultant en politiques publiques", "Conseil", "Accompagne la formulation et l’évaluation de réponses à des questions collectives.", ["Diagnostiquer", "Comparer des scénarios", "Produire une note"]],
  ["Consultant transformation numérique", "Conseil", "Aide une organisation à relier processus, données, outils et usages.", ["Comprendre un processus", "Structurer un besoin", "Accompagner un changement"]],
  ["Analyste organisationnel", "Conseil", "Étudie un fonctionnement pour mettre en évidence des options d’amélioration.", ["Observer un processus", "Recueillir des besoins", "Présenter une option"]],
];

function enrich(career: Career): CareerProfile {
  const meta = categoryMeta[career.category] || categoryMeta["Économie"];
  return { ...career, ...meta, relatedCareers: [] };
}

const extraProfiles: Career[] = extras.map(([title, category, role, missions]) => ({ slug: slugify(title), title, category, role, missions, sectors: ["Institutions publiques", "Entreprises", "Organisations de recherche ou de développement", "Cabinets et services spécialisés"], studies: ["Formation initiale liée au domaine", "Spécialisation progressive selon le rôle", "Expériences de projet, stage ou pratique encadrée"], skills: ["Analyse", "Rigueur méthodologique", "Communication", "Travail en équipe"], tools: ["Tableur", "Documentation", "Outils de visualisation", "Outils spécifiques à l’organisation"], environment: "L’environnement varie selon l’organisation, les projets et le territoire : analyse de documents, réunions, données, terrain ou travail d’équipe.", evolution: "Les évolutions dépendent du contexte, des compétences pratiquées, de l’expérience, de la formation et des opportunités disponibles." }));

export const careerDirectory: CareerProfile[] = [...careers, ...extraProfiles].map(enrich).map((career, _index, all) => ({ ...career, relatedCareers: all.filter((other) => other.slug !== career.slug && other.category === career.category).slice(0, 3).map((other) => other.slug) }));
export const careerFamilies = ["Tous", ...Array.from(new Set(careerDirectory.map((career) => career.category))).sort()];
