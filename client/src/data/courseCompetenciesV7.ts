/**
 * Compétences V7 : critères observables et traces d’apprentissage, sans valeur de certification.
 */
export type CourseCompetency = { id: string; label: string; criterion: string; evidence: string };

const specificCompetencies: Record<string, CourseCompetency[]> = {
  "Introduction à l’économie": [
    { id: "question-economique", label: "Poser une question économique", criterion: "Repérer dans une situation un choix, une ressource limitée et un acteur.", evidence: "Une phrase qui nomme ces trois éléments dans un exemple concret." },
    { id: "arbitrage-initial", label: "Repérer un arbitrage", criterion: "Comparer deux usages concurrents d’une même ressource.", evidence: "Un court tableau présentant les deux options et la ressource concernée." },
  ],
  "Besoins, ressources et rareté": [
    { id: "identifier-rarete", label: "Identifier une rareté", criterion: "Relier un besoin à une ressource limitée dans une situation donnée.", evidence: "Un exemple comprenant besoin, ressource et limite observée." },
    { id: "reponse-contrainte", label: "Répondre à une contrainte", criterion: "Proposer une option réaliste face à une ressource limitée.", evidence: "Une proposition avec la limite à surveiller explicitement citée." },
  ],
  "Choix et coût d’opportunité": [
    { id: "comparer-options", label: "Comparer des options", criterion: "Décrire deux usages possibles d’un même temps ou budget.", evidence: "Une comparaison fondée sur la même ressource limitée." },
    { id: "cout-opportunite", label: "Formuler un coût d’opportunité", criterion: "Identifier la meilleure option abandonnée après un choix.", evidence: "Une phrase du type « en choisissant X, je renonce à Y » avec justification." },
  ],
  "Agents économiques": [
    { id: "reconnaitre-agents", label: "Reconnaître les agents économiques", criterion: "Identifier correctement au moins trois agents dans un cas.", evidence: "Un schéma où chaque agent est nommé." },
    { id: "relier-echanges", label: "Relier des échanges", criterion: "Tracer au moins deux flux entre des agents économiques.", evidence: "Un schéma indiquant le sens de chaque échange." },
  ],
  "Offre et demande": [
    { id: "distinguer-offre-demande", label: "Distinguer offre et demande", criterion: "Classer les comportements d’acheteurs et de vendeurs sans inverser les notions.", evidence: "Deux situations classées avec une justification." },
    { id: "lire-deplacement", label: "Lire un déplacement de marché", criterion: "Associer une cause à l’offre ou à la demande et formuler un effet attendu.", evidence: "Une cause, la force concernée et un effet en trois étapes." },
  ],
  "Marché et formation des prix": [
    { id: "facteurs-prix", label: "Identifier les facteurs de prix", criterion: "Citer au moins deux facteurs susceptibles de faire évoluer un prix.", evidence: "Un exemple local avec deux facteurs distincts à vérifier." },
    { id: "hypotheses-prix", label: "Formuler des hypothèses prudentes", criterion: "Proposer plusieurs explications possibles à une variation de prix.", evidence: "Deux hypothèses formulées sans les présenter comme des faits établis." },
  ],
  "PIB et croissance": [
    { id: "definir-pib", label: "Définir le PIB dans son périmètre", criterion: "Identifier territoire, période et production dans une définition du PIB.", evidence: "Une définition de deux phrases contenant les trois repères." },
    { id: "limite-pib", label: "Nommer une limite du PIB", criterion: "Citer une dimension du bien-être que le PIB ne résume pas seul.", evidence: "Une limite expliquée par un exemple, sans nier l’utilité de l’indicateur." },
  ],
  "Inflation et pouvoir d’achat": [
    { id: "definir-inflation", label: "Définir l’inflation", criterion: "Distinguer une hausse générale et durable des prix d’un changement isolé.", evidence: "Deux exemples correctement classés et justifiés." },
    { id: "comparer-paniers", label: "Comparer des paniers de consommation", criterion: "Comparer deux paniers datés sans les confondre avec une statistique officielle.", evidence: "Un relevé de deux paniers mentionnant sa limite de lecture." },
  ],
  "Chômage et emploi": [
    { id: "statuts-emploi", label: "Distinguer les statuts sur le marché du travail", criterion: "Différencier emploi, chômage et inactivité à partir de cas.", evidence: "Trois cas classés avec un critère de distinction." },
    { id: "limite-emploi", label: "Mentionner une limite d’indicateur", criterion: "Expliquer ce qu’un taux de chômage ne décrit pas entièrement.", evidence: "Une limite liée à la définition, au sous-emploi ou à l’informalité." },
  ],
  "Pauvreté et inégalités": [
    { id: "distinguer-pauvrete-inegalites", label: "Distinguer pauvreté et inégalités", criterion: "Séparer un seuil de privation d’une question de répartition.", evidence: "Deux définitions courtes accompagnées d’exemples distincts." },
    { id: "indicateur-non-monetaire", label: "Choisir un indicateur non monétaire", criterion: "Proposer un indicateur adapté à une inégalité observée.", evidence: "Un indicateur, une population et une limite de lecture." },
  ],
  "État et politiques économiques": [
    { id: "levier-public", label: "Identifier un levier public", criterion: "Associer une action à une dépense, règle, impôt ou investissement.", evidence: "Un exemple avec le levier et son objectif annoncé." },
    { id: "question-evaluation", label: "Formuler une question d’évaluation", criterion: "Rédiger une question qui permet d’observer un effet d’une action.", evidence: "Une question qui précise public, effet et période." },
  ],
  "Commerce international": [
    { id: "chaine-valeur", label: "Identifier une chaîne de valeur", criterion: "Repérer les étapes et acteurs d’un produit qui franchit une frontière.", evidence: "Un schéma simple de trois étapes ou plus." },
    { id: "risque-commerce", label: "Formuler un risque commercial", criterion: "Identifier une source possible de variation d’un échange.", evidence: "Un risque associé à une donnée ou source nécessaire pour le vérifier." },
  ],
  "Économie du développement": [
    { id: "relier-dimensions-developpement", label: "Relier des dimensions du développement", criterion: "Associer un projet à au moins deux effets économiques ou sociaux possibles.", evidence: "Un tableau « effet attendu / risque / donnée à suivre »." },
    { id: "indicateur-suivi", label: "Choisir un indicateur de suivi", criterion: "Proposer un indicateur lié à l’effet attendu d’un projet.", evidence: "Un indicateur avec unité, période et limite de lecture." },
  ],
  "Monnaie et système bancaire": [
    { id: "fonctions-monnaie", label: "Distinguer les fonctions de la monnaie", criterion: "Relier paiement, unité de compte et réserve de valeur à des cas distincts.", evidence: "Trois exemples, un par fonction, correctement étiquetés." },
    { id: "payer-epargner-emprunter", label: "Distinguer payer, épargner et emprunter", criterion: "Expliquer la différence entre les trois actions financières de base.", evidence: "Trois phrases associées à un même budget ou projet." },
  ],
  "Introduction aux données économiques": [
    { id: "documenter-donnee", label: "Documenter une donnée", criterion: "Relever source, période, unité, définition et limite d’un chiffre.", evidence: "Une fiche de donnée complète avec les cinq éléments." },
    { id: "lecture-prudente", label: "Formuler une lecture prudente", criterion: "Séparer une observation documentée d’une interprétation.", evidence: "Deux phrases : un fait sourcé, puis une hypothèse explicitement qualifiée." },
  ],
};

export function getCourseCompetencies(title: string, domain: string): CourseCompetency[] {
  return specificCompetencies[title] || [
    { id: "analyser-notion", label: "Analyser une notion", criterion: `Relier une notion de ${domain} à une situation concrète.`, evidence: "Une observation, une explication et une limite de lecture." },
    { id: "documenter-raisonnement", label: "Documenter son raisonnement", criterion: "Distinguer une information, une hypothèse et une conclusion prudente.", evidence: "Une note courte qui cite les éléments utilisés." },
  ];
}
