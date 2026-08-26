# EcoCompass — Rapport final du prototype V1

**Périmètre :** plateforme pédagogique francophone consacrée à l’économie, destinée d’abord aux nouveaux bacheliers et étudiants débutants, avec une attention particulière au Togo et à l’Afrique.

## Fonctionnalités terminées

Le prototype V1 comprend une page d’accueil complète et reliée aux principales entrées du produit. La navigation globale est commune à toutes les pages, inclut une version mobile, une recherche et un lien d’évitement vers le contenu principal.

| Espace | Contenu livré | Interaction fonctionnelle |
|---|---|---|
| Accueil | Positionnement, parcours d’entrée, économie réelle, focus Togo et orientation | Toutes les actions conduisent vers des pages existantes |
| Découvrir | Parcours pédagogique en 7 étapes, exemples concrets et prochaine direction | Progression, navigation précédent/suivant et accès direct aux étapes |
| Apprendre | Bibliothèque de 15 cours organisée par chapitres de niveau | Filtres par niveau et domaine, ouverture des cours |
| Cours | Objectifs, explication, exemple, notions, application, exercice, correction et résumé | Correction dépliable, mini-quiz avec retour explicatif, cours suivant |
| Métiers | Exploration de 19 métiers regroupés par catégories | Filtre de catégorie et fiches détaillées |
| Fiches métier | Rôle, missions, secteurs, études, compétences, outils, environnement et évolution | Liens de retour et de poursuite vers l’orientation |
| Économie réelle | 12 thèmes montrant une chaîne d’analyse économique | Sélection de thème et lecture problème → données → analyse → décision → résultat |
| Économie du Togo | Indicateurs, visualisations, secteurs et protocole de lecture | Changement de graphique, sources externes et métadonnées de démonstration visibles |
| Orientation | Questionnaire en quatre étapes | Recommandations de pistes, liens vers un cours et une fiche métier, réinitialisation |
| Recherche | Index global de cours, métiers, thèmes, Togo et notions | Recherche par mot-clé, filtre de catégories et état sans résultat |

## Fonctionnalités ajoutées de ma propre initiative

Un système de **progression éditoriale** a été ajouté afin que les cours ne se présentent pas comme un simple catalogue. La bibliothèque est organisée en jalons de niveau, liés par une trajectoire visuelle et une rose de direction. Cette structure rend plus visible le passage entre découverte, mécanismes fondamentaux et approfondissement.

Le prototype inclut aussi des **cartouches méthodologiques de données** sur la page Togo. Chaque indicateur de démonstration signale explicitement son statut, sa période, son unité et sa source simulée. Cette addition limite le risque qu’une maquette soit interprétée comme une source statistique officielle.

Enfin, l’ensemble des pages utilise un système d’identité cohérent : logo boussole-feuille, vert atlas, typographie éditoriale, balises monospace, ocre réservé aux exemples et avertissements, et transitions réduites qui respectent les préférences d’accessibilité liées au mouvement.

## Problèmes corrigés

La construction est repartie d’un projet vierge à la demande. Les différences entre les parties du cahier des charges relatives à un site préexistant ont donc été résolues en appliquant l’instruction la plus récente : créer le produit complet depuis zéro.

Les éléments suivants ont également été contrôlés pendant l’implémentation : la cohérence de toutes les routes, la compilation TypeScript, le rendu des pages principales sur ordinateur, la lisibilité de l’orientation et du tableau de bord Togo sur mobile, ainsi que la séparation entre données fictives et données vérifiées.

## Problèmes restant à corriger ou à valider

| Sujet | État | Action recommandée |
|---|---|---|
| Données économiques du Togo | Volontairement fictives dans ce prototype | Remplacer chaque valeur par une donnée officielle, datée, sourcée et vérifiée avant publication publique |
| Sources | Liens de départ fournis vers INSEED, BCEAO, Banque mondiale et FMI | Vérifier les URL et la disponibilité des séries recherchées au moment de l’intégration éditoriale |
| Contenus pédagogiques | Première couche fonctionnelle réalisée | Soumettre les cours à une relecture par des enseignants ou spécialistes de l’économie |
| Expérience mobile | Mise en page contrôlée visuellement | Réaliser ensuite des tests manuels sur plusieurs appareils, en particulier pour le menu et les graphiques |
| Persistance utilisateur | Non incluse dans une V1 statique | Les résultats d’orientation et les parcours ne sont pas enregistrés au-delà de la session de navigation |

## Fonctionnalités recommandées pour une V2

Une V2 pourrait ajouter une sauvegarde locale ou un espace utilisateur afin de mémoriser les cours commencés, les réponses d’orientation et les favoris. Un glossaire transversal relié aux cours, une fiche de révision exportable et un comparateur de notions compléteraient naturellement l’expérience pédagogique.

Pour la page Togo, la priorité serait une chaîne de mise à jour contrôlée : import de séries depuis des sources officielles, date de récupération, méthode de calcul visible et revue éditoriale avant mise en ligne. Cette évolution ne doit être engagée qu’avec une validation claire de la source, du périmètre et de la fréquence de mise à jour.

## Contrôle technique réalisé

La vérification TypeScript a été exécutée avec succès après la construction et après les ajustements visuels. Les pages principales ont été examinées sur écran large et les pages Orientation, Apprendre et Togo ont été contrôlées sur un format mobile de 375 pixels de large.
