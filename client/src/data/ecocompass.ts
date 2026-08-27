import { getCourseCompetencies, type CourseCompetency } from "./courseCompetenciesV7";

/**
 * Design: Atlas académique vivant — contenus courts, contextuels et progressifs.
 * Les données économiques togolaises sont volontairement des démonstrations identifiées comme telles.
 */
export type Course = {
  id: number;
  slug: string;
  title: string;
  level: "Débutant" | "L1" | "Intermédiaire" | "Avancé";
  domain: string;
  duration: string;
  summary: string;
  objectives: string[];
  explanation: string;
  example: string;
  notions: string[];
  application: string;
  exercise: string;
  answer: string;
  competencies: CourseCompetency[];
};

const courseSeeds = [
  ["Introduction à l’économie", "Débutant", "Fondamentaux", "Comprendre les questions que l’économie aide à éclairer.", "L’économie étudie comment les personnes, organisations et États font des choix lorsque les ressources sont limitées.", "Une commune doit choisir entre rénover un marché ou une route : comparer les options est déjà un raisonnement économique.", "Repérez dans votre journée une décision prise avec du temps ou de l’argent limité."],
  ["Besoins, ressources et rareté", "Débutant", "Fondamentaux", "Identifier ce qui crée la rareté et les arbitrages.", "Les besoins peuvent être nombreux, alors que le temps, la terre, le budget et les compétences ne sont pas illimités.", "Un étudiant veut suivre deux ateliers au même horaire : le temps impose un choix.", "Listez un besoin, la ressource limitée associée et une réponse possible."],
  ["Choix et coût d’opportunité", "Débutant", "Fondamentaux", "Mesurer ce à quoi l’on renonce quand on choisit.", "Choisir une option, c’est renoncer à la meilleure alternative disponible : ce renoncement est le coût d’opportunité.", "Utiliser 5 000 FCFA pour un livre signifie renoncer à une autre utilisation utile de ce même budget.", "Comparez deux usages possibles d’une même heure de votre semaine."],
  ["Agents économiques", "L1", "Fondamentaux", "Situer les ménages, entreprises, banques, administrations et reste du monde.", "Les agents économiques prennent des décisions différentes, mais leurs échanges sont reliés par les marchés, les revenus et les dépenses.", "Un producteur vend à un ménage ; il paie un salarié et des taxes ; une banque facilite un financement.", "Dessinez les échanges entre un ménage, une entreprise et l’État."],
  ["Offre et demande", "L1", "Microéconomie", "Lire les forces qui influencent les quantités échangées.", "La demande traduit ce que les acheteurs souhaitent acquérir ; l’offre traduit ce que les vendeurs souhaitent proposer, à différents prix.", "Après une mauvaise récolte, la quantité de tomates disponible peut diminuer alors que les besoins restent présents.", "Imaginez ce qui pourrait déplacer la demande d’un service de transport."],
  ["Marché et formation des prix", "L1", "Microéconomie", "Comprendre comment des informations et des contraintes influencent les prix.", "Un prix n’est pas seulement un nombre : il transmet une information, coordonne des choix et peut évoluer selon les coûts, la concurrence ou des règles.", "Quand le carburant devient plus coûteux, un transporteur peut revoir le prix d’un trajet.", "Relevez un prix qui a changé autour de vous et proposez deux explications possibles."],
  ["PIB et croissance", "L1", "Macroéconomie", "Distinguer production, variation et bien-être.", "Le PIB mesure une valeur de production sur un territoire et une période. Il renseigne sur l’activité, mais ne résume pas à lui seul le bien-être.", "Une hausse de la production d’un secteur peut faire progresser le PIB sans indiquer comment les revenus sont répartis.", "Citez une information que le PIB ne permet pas de décrire entièrement."],
  ["Inflation et pouvoir d’achat", "L1", "Macroéconomie", "Expliquer la hausse générale des prix et ses effets.", "L’inflation décrit une hausse générale et durable des prix. Son effet dépend aussi de l’évolution des revenus, de l’épargne et des produits consommés.", "Si les prix alimentaires augmentent plus vite que le budget d’un ménage, son pouvoir d’achat peut se réduire.", "Comparez deux paniers simples à des périodes différentes, sans conclure sur une inflation officielle."],
  ["Chômage et emploi", "L1", "Économie du travail", "Analyser les différentes situations sur le marché du travail.", "L’emploi, la recherche d’emploi et l’inactivité sont des situations distinctes. Les définitions statistiques précises sont importantes avant toute comparaison.", "Une jeune diplômée qui cherche activement un emploi n’est pas classée comme une personne inactive dans les enquêtes usuelles.", "Formulez une question qui permettrait de distinguer emploi, chômage et inactivité."],
  ["Pauvreté et inégalités", "Intermédiaire", "Économie du développement", "Différencier niveau de vie, pauvreté et distribution des revenus.", "La pauvreté renvoie à des seuils et privations ; les inégalités décrivent la manière dont revenus, patrimoines ou opportunités sont répartis.", "Deux quartiers peuvent connaître une activité similaire mais un accès très différent à l’eau, à l’école ou à l’emploi.", "Choisissez un indicateur non monétaire utile pour étudier une inégalité."],
  ["État et politiques économiques", "Intermédiaire", "Économie publique", "Comprendre les leviers et leurs arbitrages.", "L’État agit notamment par les dépenses, les impôts, les règles et les investissements publics. Toute politique s’inscrit dans un contexte et comporte des arbitrages.", "Subventionner un service de transport peut améliorer l’accès, mais doit être financé et évalué.", "Proposez une question d’évaluation pour une politique publique locale."],
  ["Commerce international", "Intermédiaire", "Économie internationale", "Lire les échanges au-delà des frontières.", "Le commerce international relie les producteurs et consommateurs de plusieurs pays. Ses effets varient selon les produits, les coûts, les règles et les capacités de production.", "L’exportation d’un produit agricole peut ouvrir des débouchés, mais expose aussi aux variations de prix extérieurs.", "Identifiez un produit local dont la chaîne de valeur dépasse les frontières."],
  ["Économie du développement", "Intermédiaire", "Économie du développement", "Étudier les transformations économiques et sociales de long terme.", "L’économie du développement examine comment l’activité, les institutions, les infrastructures et les capacités humaines se transforment.", "Un programme d’irrigation peut influencer à la fois la production, les revenus, l’emploi et l’usage de l’eau.", "Choisissez un projet et listez un effet attendu, un risque et une donnée à suivre."],
  ["Monnaie et système bancaire", "L1", "Monnaie et finance", "Comprendre les rôles de la monnaie et du financement.", "La monnaie facilite les échanges, sert d’unité de compte et peut permettre de conserver de la valeur. Les banques participent à la circulation des paiements et au financement.", "Une entreprise qui obtient un crédit peut financer un équipement, puis rembourser selon un calendrier convenu.", "Décrivez la différence entre payer, épargner et emprunter."],
  ["Introduction aux données économiques", "Débutant", "Économétrie et données", "Adopter les premiers réflexes de lecture d’une donnée.", "Avant d’interpréter une donnée, il faut connaître sa source, sa période, son unité, sa définition et ses limites.", "Un taux et un nombre absolu peuvent raconter des choses différentes si l’on ignore la population de référence.", "Prenez un chiffre vu en ligne et notez les cinq informations nécessaires pour l’évaluer."],
] as const;

export const courses: Course[] = courseSeeds.map((seed, index) => ({
  id: index + 1,
  slug: seed[0].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  title: seed[0],
  level: seed[1] as Course["level"],
  domain: seed[2],
  duration: `${12 + (index % 4) * 3} min`,
  summary: seed[3],
  objectives: ["Comprendre l’idée centrale", "Relier la notion à une situation concrète", "Formuler une première analyse"],
  explanation: seed[4],
  example: seed[5],
  notions: [seed[0].split(" ")[0], seed[2], "Analyse économique"],
  application: seed[6],
  exercise: `En une ou deux phrases : ${seed[6]}`,
  answer: "Une bonne réponse explique la situation, précise la ressource ou l’information utilisée et justifie l’idée sans chercher une réponse unique.",
  competencies: getCourseCompetencies(seed[0], seed[2]),
}));

export type Career = {
  slug: string;
  title: string;
  category: string;
  role: string;
  missions: string[];
  sectors: string[];
  studies: string[];
  skills: string[];
  tools: string[];
  environment: string;
  evolution: string;
};

const careerSeeds = [
  ["Économiste", "Économie", "Analyse des phénomènes économiques et formulation d’éclairages pour la décision.", ["Produire des notes d’analyse", "Interpréter des indicateurs", "Présenter des scénarios"]],
  ["Analyste économique", "Économie", "Suivi de conjoncture, secteurs ou territoires pour éclairer des choix.", ["Veille économique", "Construire des tableaux de bord", "Rédiger des synthèses"]],
  ["Analyste financier", "Finance", "Évaluation d’informations financières et de perspectives économiques.", ["Analyser des comptes", "Comparer des scénarios", "Préparer des recommandations"]],
  ["Data analyst", "Données", "Transformation de données en informations lisibles pour une équipe.", ["Nettoyer des données", "Créer des visualisations", "Répondre à des questions opérationnelles"]],
  ["Économètre", "Données", "Utilisation de méthodes statistiques pour étudier des relations économiques.", ["Construire un modèle", "Tester des hypothèses", "Documenter des limites"]],
  ["Statisticien", "Données", "Conception, production et interprétation de statistiques fiables.", ["Préparer une enquête", "Contrôler la qualité", "Diffuser des résultats"]],
  ["Chargé d’études", "Recherche", "Étude d’un sujet, d’un public ou d’un marché à partir de données et d’entretiens.", ["Cadrer une étude", "Collecter des informations", "Restituer une analyse"]],
  ["Analyste de politiques publiques", "Secteur public", "Analyse de politiques, programmes et services d’intérêt général.", ["Mesurer des effets", "Comparer des options", "Formuler des notes"]],
  ["Consultant", "Conseil", "Accompagnement d’organisations sur une question stratégique ou opérationnelle.", ["Diagnostiquer une situation", "Structurer une recommandation", "Accompagner une mise en œuvre"]],
  ["Chargé de projet", "Développement", "Coordination d’actions, de partenaires et de résultats attendus.", ["Planifier", "Suivre un budget", "Animer des réunions"]],
  ["Analyste bancaire", "Banque", "Analyse d’activités ou de portefeuilles dans un environnement bancaire.", ["Suivre des indicateurs", "Préparer des dossiers", "Contribuer à l’analyse"]],
  ["Analyste crédit", "Banque", "Évaluation d’informations permettant d’apprécier une demande de financement.", ["Examiner un dossier", "Évaluer des risques", "Documenter une décision"]],
  ["Analyste risques", "Finance", "Identification et suivi des risques susceptibles d’affecter une organisation.", ["Cartographier les risques", "Suivre des seuils", "Proposer des contrôles"]],
  ["Business analyst", "Entreprises", "Clarification des besoins entre métiers, données et solutions.", ["Recueillir les besoins", "Décrire un processus", "Suivre des indicateurs"]],
  ["Analyste marché", "Entreprises", "Lecture des clients, concurrents, tendances et opportunités de marché.", ["Étudier un marché", "Comparer des offres", "Présenter des insights"]],
  ["Chercheur", "Recherche", "Production de connaissances par l’étude, l’enquête et la publication.", ["Définir une question", "Collecter des preuves", "Partager les résultats"]],
  ["Enseignant-chercheur", "Recherche", "Transmission de savoirs et conduite de travaux de recherche.", ["Préparer des cours", "Encadrer", "Publier ou participer à des projets"]],
  ["Spécialiste du développement", "Développement", "Conception ou analyse de projets visant des transformations économiques et sociales.", ["Analyser un contexte", "Concevoir un projet", "Coordonner des partenaires"]],
  ["Chargé de suivi-évaluation", "Développement", "Suivi des résultats d’un programme et aide à l’amélioration continue.", ["Définir des indicateurs", "Collecter des données", "Restituer des apprentissages"]],
] as const;

export const careers: Career[] = careerSeeds.map(([title, category, role, missions]) => ({
  slug: title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  title,
  category,
  role,
  missions: [...missions],
  sectors: ["Institutions publiques", "Entreprises", "Banques et organisations de financement", "Associations, cabinets ou organismes de recherche"],
  studies: ["Licence ou formation initiale pertinente", "Spécialisation progressive selon le domaine", "Expériences de projet, stage ou recherche appliquée"],
  skills: ["Analyse", "Communication écrite", "Rigueur méthodologique", "Travail en équipe"],
  tools: ["Tableur", "Présentation", "Outils de visualisation", "Documentation et sources"],
  environment: "Le cadre varie selon l’organisation : bureau, terrain, réunions d’équipe, analyse de documents ou de données.",
  evolution: "Les évolutions dépendent du niveau d’études, de la spécialisation, des compétences démontrées, de l’expérience et du marché du travail.",
}));

export const realEconomyTopics = [
  ["Inflation", "Les prix de produits essentiels semblent augmenter.", "Panier de prix, période, zone et catégories de produits.", "Distinguer une évolution locale d’une tendance plus large et vérifier la méthode.", "Adapter une mesure, informer ou étudier une cause précise.", "La décision est suivie avec des indicateurs et ses effets sont réévalués."],
  ["Chômage", "Des jeunes ont des difficultés à accéder à une première expérience.", "Âge, formation, recherche active, secteurs et territoire.", "Identifier les obstacles, sans confondre chômage, sous-emploi et inactivité.", "Concevoir une action d’orientation, de formation ou d’accompagnement.", "Les résultats sont mesurés avec une définition explicite."],
  ["Croissance", "L’activité progresse, mais les effets ne sont pas identiques partout.", "Production sectorielle, emplois, investissements et revenus.", "Comparer les secteurs moteurs et les conditions de diffusion de la croissance.", "Cibler une infrastructure, une compétence ou un appui productif.", "Observer la production et d’autres dimensions de la qualité de vie."],
  ["Pauvreté", "Certains ménages cumulent des privations.", "Revenus, dépenses, accès aux services et localisation.", "Observer les profils et les causes possibles, avec prudence.", "Prioriser des services ou un soutien adapté au contexte.", "Suivre les effets sans réduire la situation à un seul chiffre."],
  ["Inégalités", "Les opportunités et revenus sont répartis de façon inégale.", "Répartition, accès, parcours et groupes comparés.", "Analyser les écarts et les mécanismes qui les entretiennent.", "Adapter l’accès à une ressource, un service ou une information.", "Vérifier si l’écart se réduit réellement."],
  ["Dette", "Un financement public doit rester soutenable dans le temps.", "Encours, échéances, taux, recettes et projets financés.", "Examiner les besoins de financement et les risques de remboursement.", "Arbitrer le financement, les dépenses et le calendrier.", "Suivre les engagements et les capacités de paiement."],
  ["Investissement", "Une organisation hésite à financer un nouvel équipement.", "Coût, durée, recettes attendues, risques et alternatives.", "Comparer les scénarios et les hypothèses.", "Choisir, différer ou redimensionner le projet.", "Comparer les résultats observés au scénario de départ."],
  ["Agriculture", "La production varie selon les saisons et les aléas.", "Rendements, climat, intrants, prix et accès au marché.", "Identifier les contraintes sur la chaîne de valeur.", "Tester un service, une infrastructure ou une solution de stockage.", "Mesurer l’effet sur production, revenus et résilience."],
  ["Commerce", "Les entreprises cherchent à atteindre de nouveaux marchés.", "Flux, coûts logistiques, règles, délais et partenaires.", "Repérer les freins et les opportunités de spécialisation.", "Améliorer une procédure ou un maillon logistique.", "Observer les flux, coûts et délais après action."],
  ["Développement", "Un territoire veut renforcer ses capacités économiques.", "Accès, capital humain, services, institutions et activité.", "Relier plusieurs dimensions au lieu d’isoler un symptôme.", "Coordonner des interventions complémentaires.", "Évaluer les progrès et les effets inattendus."],
  ["Productivité", "Une activité mobilise beaucoup de temps pour peu de résultat.", "Temps, volumes, compétences, équipements et organisation.", "Chercher l’origine de l’écart sans confondre effort et efficacité.", "Réorganiser, former ou investir de façon ciblée.", "Vérifier le résultat et les conditions de travail."],
  ["Environnement", "Une activité crée un coût pour l’environnement ou les communautés.", "Émissions, ressources utilisées, santé, zones affectées et coûts.", "Rendre visibles des effets qui ne figurent pas toujours dans un prix.", "Prévenir, inciter ou réglementer selon le cas.", "Suivre les résultats environnementaux et économiques."],
].map(([title, problem, data, analysis, decision, result]) => ({ title, problem, data, analysis, decision, result }));

export const discoverSteps = [
  { title: "Qu’est-ce que l’économie ?", eyebrow: "Point de départ", text: "L’économie commence avec une question familière : comment faire des choix quand le temps, l’argent, les ressources ou les informations sont limités ?", example: "Choisir de consacrer son après-midi à un travail rémunéré ou à une révision est un arbitrage." },
  { title: "Pourquoi en avons-nous besoin ?", eyebrow: "Faire des choix", text: "Elle aide à organiser des ressources limitées, comprendre les conséquences d’une décision et comparer plusieurs options.", example: "Une mairie arbitre entre plusieurs projets utiles avec un budget limité." },
  { title: "Où intervient-elle ?", eyebrow: "Dans la vie réelle", text: "Dans les ménages, les marchés, les entreprises, les banques, les administrations, les associations et les échanges entre pays.", example: "Le prix du transport, le choix d’une formation ou un projet agricole ont une dimension économique." },
  { title: "Quels problèmes analyse-t-elle ?", eyebrow: "Observer et expliquer", text: "Inflation, emploi, pauvreté, commerce, financement, environnement ou investissement : l’économie propose des cadres pour poser de bonnes questions.", example: "Avant d’agir face à une hausse de prix, il faut savoir quels produits, quels lieux et quelles périodes sont concernés." },
  { title: "Quels domaines la mobilisent ?", eyebrow: "Plusieurs portes d’entrée", text: "Microéconomie, macroéconomie, développement, finance, données, économie publique ou économie internationale donnent des angles différents.", example: "Une même question agricole peut mobiliser le développement, le commerce et les données." },
  { title: "Quelles compétences et quels métiers ?", eyebrow: "Passer à l’action", text: "L’économie développe l’analyse, la lecture de données, l’écriture, l’esprit critique et la capacité à expliquer une décision.", example: "Ces compétences peuvent être mobilisées en entreprise, banque, secteur public, conseil, recherche ou développement." },
  { title: "Où peut-on aller avec l’économie ?", eyebrow: "Construire un parcours", text: "Il n’existe pas un seul chemin. On peut commencer par apprendre les fondamentaux, tester son intérêt pour les données ou explorer un domaine professionnel.", example: "Votre prochaine étape peut être un cours, une fiche métier, une question d’orientation ou un sujet lié au Togo." },
];

export const learningDomains = ["Fondamentaux", "Microéconomie", "Macroéconomie", "Économie du développement", "Économie internationale", "Monnaie et finance", "Économie publique", "Économie du travail", "Économétrie et données"];
export const levels = ["Débutant", "L1", "Intermédiaire", "Avancé"];

export type SearchItem = { type: "Cours" | "Métiers" | "Économie réelle" | "Togo" | "Notions associées"; title: string; description: string; href: string; keywords: string[] };
export const searchItems: SearchItem[] = [
  ...courses.map((course) => ({ type: "Cours" as const, title: course.title, description: course.summary, href: `/apprendre/${course.slug}`, keywords: [course.domain, course.level, ...course.notions] })),
  ...careers.map((career) => ({ type: "Métiers" as const, title: career.title, description: career.role, href: `/metiers/${career.slug}`, keywords: [career.category, ...career.skills] })),
  ...realEconomyTopics.map((topic) => ({ type: "Économie réelle" as const, title: topic.title, description: topic.problem, href: "/economie-reelle", keywords: ["problème", "données", "analyse", "décision"] })),
  { type: "Togo", title: "Tableau de bord économique du Togo", description: "Un espace de lecture avec données de démonstration et sources officielles à consulter.", href: "/togo", keywords: ["INSEED", "BCEAO", "PIB", "inflation", "Togo"] },
  { type: "Notions associées", title: "Rareté", description: "La rareté apparaît quand les ressources disponibles ne permettent pas de satisfaire tous les usages possibles.", href: "/apprendre/besoins-ressources-et-rarete", keywords: ["besoins", "ressources", "choix"] },
  { type: "Notions associées", title: "Coût d’opportunité", description: "La valeur de la meilleure option à laquelle on renonce lorsqu’on choisit.", href: "/apprendre/choix-et-cout-d-opportunite", keywords: ["choix", "arbitrage", "rarete"] },
];
