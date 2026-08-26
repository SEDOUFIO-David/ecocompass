# EcoCompass — Rapport final V2

**Périmètre :** évolution de la V1 existante en plateforme pédagogique économique plus progressive et interactive. L’architecture frontale React/Tailwind déjà en place a été conservée et complétée ; aucun backend, compte utilisateur ni donnée statistique réelle non vérifiée n’a été introduit.

## 1. Fonctionnalités V1 conservées

Les pages et parcours de la V1 restent accessibles : accueil, découverte de l’économie, bibliothèque de cours, fiches de cours, métiers, économie réelle, page Togo, orientation et recherche. L’identité « Atlas académique vivant » a été préservée : typographie éditoriale, vert atlas, fonds ivoire, panneaux bleu nuit, repères méthodologiques et ton prudent.

| Espace V1 | Conservation et amélioration V2 |
|---|---|
| Accueil | Conservé avec un module discret de progression locale et de reprise de cours. |
| Découvrir | Parcours en sept étapes conservé, enrichi de questions de vérification, explications et liens contextuels. |
| Apprendre | Bibliothèque conservée, désormais structurée par jalons visibles et reliée au glossaire. |
| Cours et quiz | Fiches conservées, avec ressources, favoris, progression et quiz enrichi. |
| Métiers | Exploration et fiches conservées, enrichies de signaux d’intérêt et d’un comparateur. |
| Économie réelle | Parcours d’analyse préservé, transformé en études de cas et simulations guidées. |
| Togo | Avertissements de démonstration maintenus et métadonnées de lecture renforcées. |

## 2. Fonctionnalités V2 ajoutées

La V2 ajoute une progression d’apprentissage locale, un glossaire de vingt-trois notions reliées, des favoris persistants, des fiches de révision et un espace de ressources. Elle ajoute également un contexte africain pédagogique, quatre études de cas, trois simulations simples, un comparateur de métiers et une recherche couvrant désormais les contenus pédagogiques, les notions, les cas et les ressources.

| Fonctionnalité V2 | Comportement |
|---|---|
| Progression locale | Enregistre les cours commencés et terminés, le dernier cours consulté et les scores de quiz dans `localStorage`. |
| Quiz améliorés | Deux questions guidées, correction immédiate, explication, résultat et score local. |
| Glossaire relié | Définition simple, explication, exemple, notions liées, cours associé, recherche et filtrage. |
| Favoris | Sauvegarde locale de cours, métiers, notions et études de cas, avec page dédiée. |
| Fiches express | Quatre fiches structurées autour de la définition, des facteurs, conséquences, indicateurs et réponses à explorer. |
| Comparateur de métiers | Comparaison de trois rôles sans classement, avec travail, études, compétences, outils et environnements. |
| Études de cas | Analyse par problème, données à rechercher, causes possibles, interprétation, conséquences et pistes d’action. |
| Simulations | Offre/demande, panier de prix et budget. Elles sont signalées comme illustrations pédagogiques non prédictives. |

## 3. Pages modifiées et ajoutées

Les pages existantes Accueil, Découvrir, Apprendre, Cours, Métiers, Fiche métier, Économie réelle, Togo, Orientation et Recherche ont été améliorées. Les pages **Glossaire**, **Favoris**, **Ressources**, **Contexte africain**, **Fiches de révision** et **Comparateur de métiers** ont été ajoutées. La navigation, le pied de page et la recherche globale ont été mis à jour pour relier ces nouveaux espaces.

## 4. Nouvelles fonctionnalités interactives

Les interactions livrées couvrent la progression locale, les favoris, les filtres de cours, la recherche multi-catégories, les questions du parcours Découvrir, les quiz de cours, le questionnaire d’orientation à cinq étapes, le comparateur de métiers, les fiches de révision sélectionnables et les simulations manipulables au clavier ou à la souris.

| Interaction | Finalité pédagogique |
|---|---|
| Barre de progression et reprise | Aider l’étudiant à reprendre un parcours sans créer de compte. |
| Quiz avec explication | Faire de l’erreur un repère d’apprentissage plutôt qu’un score compétitif. |
| Curseurs de simulation | Manipuler une relation simplifiée entre variables et lire ses limites. |
| Comparateur | Mettre des rôles en regard sans décider quel métier serait « meilleur ». |
| Recherche reliée | Passer d’un mot-clé à des cours, notions, études de cas, sources et métiers associés. |

## 5. Améliorations pédagogiques

L’expérience Apprendre privilégie désormais un itinéraire : niveaux, numéros de chapitre, ligne de progression et accès aux notions associées. Les cours suivent une séquence concept → explication → exemple → application → exercice → quiz → synthèse, puis proposent des ressources complémentaires. Les études de cas montrent comment passer d’un problème à des données, des explications possibles et des conséquences, sans donner l’illusion d’une réponse automatique.

La V2 introduit également une distinction visible entre contenu de révision, exemple terrain, simulation et donnée à vérifier. Cette organisation vise à préserver la simplicité pour les débutants tout en habituant progressivement les utilisateurs à expliciter leurs hypothèses et leurs sources.

## 6. Améliorations concernant les données et les sources

La page Togo conserve uniquement des **données de démonstration** et affiche une trace de statut, période et source simulée auprès des indicateurs. Un cartouche méthodologique demande explicitement quelle information supplémentaire serait nécessaire à l’interprétation. Le nouveau contexte africain interdit les classements simplistes et rappelle que toute comparaison suppose de vérifier pays ou périmètre, année, indicateur, unité et source.

Le projet comprend un fichier `sources_v2.md` qui documente les portails institutionnels de référence avant toute intégration de séries réelles. Les ressources externes proposées renvoient à l’INSEED, la BCEAO, la Banque mondiale, le FMI, la Banque africaine de développement et la Commission économique des Nations unies pour l’Afrique. La Banque africaine de développement présente ses ressources statistiques comme orientées vers des données de développement fiables et de qualité ; la CEA décrit son travail de soutien aux statistiques comparables et à la décision fondée sur les données. [1] [2]

## 7. Fonctionnalités ajoutées de ma propre initiative

Un découpage de production à chargement différé a été ajouté pour séparer les pages et les bibliothèques lourdes de graphiques du chargement initial. Après optimisation, les modules graphiques et de rendu sont séparés du cœur applicatif. Une consigne de défilement horizontal a aussi été ajoutée au comparateur sur mobile afin d’éviter qu’un tableau large soit interprété comme une zone coupée.

L’ensemble V2 comprend aussi des cartouches de prudence visuelle, une ligne de progression globalisée, une entrée de ressources et des liens de concepts qui renforcent les connexions entre les espaces du site.

## 8. Problèmes éventuels restant à corriger

| Sujet | État actuel | Suite recommandée |
|---|---|---|
| Données Togo | Démonstration explicite uniquement. | Remplacer par des séries validées, datées et sourcées après revue éditoriale. |
| Connexions de données | Aucune synchronisation externe afin de rester dans une V2 frontale. | Définir un protocole de sélection, de mise à jour et de validation avant toute automatisation. |
| Contenus pédagogiques | Rédaction structurée pour un prototype. | Faire relire les cours, fiches et cas par un enseignant ou spécialiste de l’économie. |
| Persistance locale | Les données sont attachées au navigateur utilisé. | Informer l’utilisateur de la limite ; prévoir une exportation ou un compte seulement si le besoin est validé. |
| Tableau comparatif mobile | Défilement horizontal signalé pour préserver les colonnes. | Tester manuellement sur appareils ciblés avec des étudiants. |

## 9. Fonctionnalités recommandées pour une V3

La V3 pourrait inclure une vraie chaîne éditoriale de données, avec validation humaine, date de récupération, définition, méthodologie et révision de chaque série avant publication. Une exportation de fiches de révision, un mode de révision espacé, un suivi de compétence plus fin et des cas d’étude contextualisés par partenaires académiques seraient aussi pertinents.

Une V3 ne devrait introduire un compte utilisateur, un backend ou une mise à jour automatique que si le besoin de synchroniser durablement la progression ou des contenus vérifiés est confirmé. Ces évolutions nécessiteraient une politique de confidentialité, une gouvernance éditoriale et des tests utilisateurs séparés.

## Contrôles réalisés

La compilation TypeScript et la compilation de production ont été exécutées avec succès. Le chargement différé a été vérifié à la compilation, avec séparation des modules de pages, de graphiques, d’icônes et du moteur de rendu. Les pages représentatives ont été examinées sur écran large, puis les pages Apprendre, Économie réelle, Togo, Orientation, Comparateur de métiers et Glossaire ont été contrôlées sur un format mobile de 375 pixels de large.

## Références

[1] [Banque africaine de développement — Statistics](https://www.afdb.org/en/knowledge/statistics)

[2] [Commission économique des Nations unies pour l’Afrique — Data and statistics](https://www.uneca.org/data-and-statistics)
