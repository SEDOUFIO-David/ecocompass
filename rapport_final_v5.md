# EcoCompass — Rapport final V5

**Périmètre de la livraison.** EcoCompass V5 transforme la V4 en un espace d’accompagnement personnel. L’utilisateur peut organiser localement son profil, ses objectifs, ses actions, un parcours adaptable, ses projets, son portfolio et des repères de préparation professionnelle. Les fonctionnalités précédentes sont conservées. Le produit reste un frontend pédagogique : aucune donnée personnelle n’est envoyée à un serveur par les fonctions V5, et aucune recommandation ne constitue une promesse de formation, de recrutement ou de certification.

## Fonctionnalités V1 conservées

Les fondations de la plateforme restent accessibles : accueil, découverte progressive de l’économie, cours, fiches de cours, exercices, quiz, exploration de métiers, économie réelle, économie du Togo, orientation et recherche. L’identité visuelle demeure celle de l’**Atlas académique vivant** : vert Atlas, ivoire chaud, bleu nuit, grands titres éditoriaux, métadonnées compactes et repères de méthode.

| Espace V1 | État dans la V5 |
|---|---|
| Découvrir et Apprendre | Conservés comme points d’entrée vers les parcours personnels et les actions. |
| Cours, exercices et quiz | Conservés ; les complétions et quiz alimentent les progrès et badges locaux. |
| Métiers et orientation | Conservés ; ils sont reliés à Mon parcours, aux compétences, formations et portails. |
| Économie réelle, Togo et Afrique | Conservés ; les règles de lecture prudente des données restent visibles. |
| Recherche globale | Conservée et enrichie par les espaces V3/V4 ; les nouvelles pages V5 sont accessibles dans la navigation. |

## Fonctionnalités V2 conservées

Les mécanismes de progression locale, favoris, glossaire, ressources, fiches de révision, études de cas et simulations V2 restent disponibles. Les contenus présentant des valeurs de démonstration conservent leurs avertissements. La V5 réutilise cette base au lieu de la remplacer : elle ajoute une couche d’organisation personnelle par-dessus les contenus existants.

| Fonctionnalité V2 | Continuité dans la V5 |
|---|---|
| Progression de cours | Affichée dans le tableau de bord et connectée aux compétences. |
| Favoris | Conservés pour les cours, métiers, formations, projets, établissements et portails. |
| Études de cas et simulations | Conservées et complétées par les Défis économiques V5. |
| Ressources et glossaire | Restent les entrées de vérification et d’approfondissement des parcours. |

## Fonctionnalités V3 conservées

**Mon EcoCompass**, EcoLab, les projets guidés, le portfolio local initial, les compétences et les parcours V3 continuent d’exister. La V5 les rend plus actionnables : objectifs à échéance, tâches, parcours par direction, projets par niveau, statuts et traces explicites de portfolio.

## Fonctionnalités V4 conservées

Le répertoire des métiers, les formations, les compétences recherchées, les établissements documentés, les portails d’opportunités vérifiables et les simulations professionnelles V4 sont conservés. Les recommandations V5 relient ces espaces sans inventer d’offre, de formation disponible ou de profil professionnel réel.

## Fonctionnalités V5 ajoutées

La V5 apporte un cycle d’accompagnement clair : **profil → objectif → parcours → actions → cours → projets → réalisations → portfolio → portails à consulter**. Ce cycle est rendu visible par des trajectoires, des registres et des dossiers, non par un système de gamification excessif.

| Fonctionnalité V5 | Comportement |
|---|---|
| Tableau de bord personnel | Affiche profil, objectif, progression issue d’actions locales, cours terminés, projets, repères sauvegardés, badges et actions de la semaine. |
| Profil évolutif | Conserve localement un pseudonyme, niveau, intérêt, objectif et spécialisation éventuelle. Les informations demandées restent minimales. |
| Objectifs | Crée, termine et supprime des objectifs quotidiens, hebdomadaires, mensuels ou de long terme. |
| Plan d’action | Crée, modifie, termine ou supprime des actions avec échéance facultative. La progression dépend de tâches réellement cochées. |
| Mon parcours | Propose quatre directions adaptables : analyse économique, développement, données et finance. Chaque itinéraire relie compétences, cours, projets, métiers et portails. |
| Projets par niveau | Ajoute des niveaux débutant, intermédiaire ou avancé, des outils, un livrable attendu, un statut et un passage explicite au portfolio. |
| Portfolio V5 | Présente une introduction locale, des compétences liées aux actions et les réalisations explicitement terminées. Il ne simule pas de partage public. |
| Badges d’action | Attribue des badges après un cours terminé, un quiz complété, un projet achevé ou une présentation de portfolio enregistrée ; jamais après une simple visite. |
| Explique-moi | Bibliothèque d’explications préparées selon trois niveaux, sans prétendre être une conversation automatique ni fournir de données en temps réel. |
| Défis économiques | Quatre situations pédagogiques pour entraîner l’observation, l’argumentation, la formulation d’hypothèses et l’identification de limites. |

## Nouveaux composants et structures

| Élément | Rôle |
|---|---|
| `LearningContext` enrichi | Stocke localement objectifs, actions, badges, présentation de portfolio et statuts des projets. L’écriture reste protégée si le navigateur restreint le stockage. |
| `data/v5.ts` | Définit les itinéraires recommandés, les relations objectifs–compétences–cours–projets–métiers et les métadonnées de projets. |
| `MyPath` | Présente un itinéraire choisi comme une carte de route adaptable. |
| `ActionPlan` | Agit comme registre de travail : création, édition, échéance, complétion et suppression d’actions. |
| `Portfolio` | Agit comme dossier personnel de réalisations et de compétences liées à des actions. |
| `ExplainEconomy` | Offre une bibliothèque éditoriale de notions adaptées à trois niveaux. |
| `Challenges` | Offre un tableau d’étude de situations pédagogiques et de raisonnements méthodiques. |

## Nouvelles interactions

L’utilisateur peut modifier son profil, sélectionner une direction, ajouter des étapes de parcours à son plan, saisir des objectifs et des tâches, modifier ou supprimer une tâche, enregistrer un projet en cours, le terminer, l’ajouter au portfolio, écrire une présentation de portfolio, sélectionner une explication par niveau et répondre à un défi méthodologique. Les liens orientent toujours vers un espace existant : cours, EcoLab, projets, métiers, formations ou portails.

Les badges sont reliés à des traces visibles. Un premier cours terminé attribue le badge « Fondamentaux de l’économie » ; un premier quiz, un projet achevé et une présentation de portfolio peuvent créer leur propre repère. Aucun badge n’est attribué par ouverture de page ou défilement.

## Améliorations pédagogiques et visuelles

La V5 applique le principe d’artefact Atlas à chaque espace majeur. Le tableau de bord adopte une **table de navigation** et un registre d’actions ; Mon parcours une **route cartographiée** ; le plan d’action un **ledger** à lignes de travail ; le portfolio un **dossier de réalisations** ; les défis un **tableau d’étude**. Les marges éditoriales portent désormais un objectif, une méthode, une limite ou une prochaine étape, au lieu d’être de simples cartes latérales.

La sémantique chromatique a été consolidée : le vert Atlas et le bleu nuit portent les actions, trajectoires et complétions ; l’ocre est réservé aux repères de terrain, aux questions méthodologiques et aux avertissements de vérification. Les limitations sont formulées du point de vue de l’apprenant : confidentialité locale, lecture prudente, vérification des sources et autonomie dans les choix.

## Fonctionnalités ajoutées de ma propre initiative

La V5 inclut un registre complet de tâches avec édition locale, un système de badges fondé sur des actions et une page « Explique-moi » conçue comme bibliothèque préparée plutôt que comme assistant artificiel simulé. La page Défis économiques a été ajoutée pour relier pratique, EcoLab et projets sans inventer de situations d’emploi, de témoignages ou de données d’actualité.

Les nouvelles pages sont chargées à la demande. Le découpage manuel de production qui avait causé un rendu blanc lors d’une version précédente reste supprimé : le build V5 produit des modules de route autonomes sans la dépendance circulaire qui empêchait le montage de l’interface.

## Sources, données et limites de vérification

La V5 ne publie pas de nouvelles statistiques réelles ni d’offres actives. EcoLab conserve des séries clairement marquées comme démonstratives. Les établissements et portails d’opportunités V4 restent documentés dans `sources_v4.md` et renvoient vers des pages à consulter directement avant toute démarche.

> Une suggestion de parcours ou une carte de portails ne remplace jamais une vérification de date, de critère, de source et de contexte par l’utilisateur.

## Problèmes rencontrés et corrections

| Sujet | Correction apportée |
|---|---|
| Rendu blanc antérieur | La dépendance circulaire introduite par le découpage manuel des modules a été retirée. Le rendu publié a ensuite été contrôlé avec un nouveau bundle. |
| Stockage local dans un aperçu intégré | L’écriture du contexte local est protégée par un bloc de sécurité afin que l’interface reste rendue lorsque le navigateur empêche le stockage. |
| Extensions de types V5 | Les objectifs, tâches, badges, portfolio et statuts de projets ont été ajoutés au modèle local sans supprimer les données V1–V4 existantes. |
| Revue visuelle V5 | Les pages personnelles ont été différenciées par leurs artefacts d’usage, les lignes Atlas et une voix plus centrée sur l’apprenant. |

## Limitations techniques et fonctionnelles

| Limitation | Conséquence | Orientation future |
|---|---|---|
| Stockage local | Profil, plan et portfolio sont associés au navigateur actuel. | Prévoir une synchronisation seulement après validation des usages, de la confidentialité et des règles de sécurité. |
| Recommandations | Elles suivent des intérêts, objectifs et contenus ; elles ne déterminent ni un métier ni une formation. | Tester les suggestions avec étudiants et conseillers avant toute personnalisation plus poussée. |
| Portfolio | Il est privé et ne propose pas de partage public. | Étudier une exportation ou un partage seulement après consentement et contrôles adaptés. |
| Explications | Les contenus sont préparés et non actualisés en continu. | Créer une politique de sources et de relecture avant d’ajouter des contenus dynamiques. |
| Opportunités | Seuls les portails officiels sont présentés ; aucune offre active n’est recopiée. | Ajouter une offre seulement avec source primaire, date, statut de vérification et date d’expiration. |
| Données | EcoLab conserve des jeux de démonstration. | Brancher des données réelles uniquement avec définition, période, unité, source et validation éditoriale. |

## Contrôles réalisés

La vérification TypeScript et la compilation de production ont abouti. Le build confirme le chargement différé des nouvelles routes, notamment **MyPath**, **ActionPlan**, **Portfolio**, **ExplainEconomy** et **Challenges**. Les pages représentatives V5 ont été contrôlées sur écran large, puis les écrans Mon EcoCompass, Mon parcours, Plan d’action, Portfolio, Défis économiques et Explique-moi ont été contrôlés sur un viewport mobile de 375 pixels de large. Les formulaires, listes, jalons, zones défilables, dossiers et liens d’action restent lisibles sur ce format.

## Fonctionnalités recommandées pour V6

Une V6 devrait d’abord approfondir la qualité des contenus et la gouvernance : validation des données EcoLab, revue humaine des parcours, définition d’une politique de mise à jour des portails et tests utilisateurs avec des étudiants. Une exportation de plan d’action ou de portfolio pourrait être étudiée avant toute synchronisation multi-appareils.

À plus long terme, un assistant économique ne devrait être envisagé qu’avec des sources autorisées, un cadrage clair des questions traitables, des réponses qui citent leurs sources, une protection des données personnelles et une procédure de relecture humaine. EcoCompass doit conserver sa vocation : donner des repères, développer une méthode et aider l’utilisateur à construire progressivement son chemin.
