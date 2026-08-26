# EcoCompass — Rapport final V4

**Périmètre de la livraison.** EcoCompass V4 fait évoluer la V3 en un écosystème pédagogique et professionnel : il relie des cours, métiers, compétences, formations, établissements, portails d’opportunités, projets et simulations, sans supprimer les fonctionnalités antérieures. Le produit demeure un prototype frontend. Les profils, favoris, parcours et projets restent enregistrés localement dans le navigateur ; aucun compte, échange de données personnelles, classement automatique ou promesse de recrutement n’a été introduit.

## Fonctionnalités V1 conservées

Les entrées fondamentales d’EcoCompass sont préservées : accueil, découverte de l’économie, bibliothèque de cours, fiches de cours, exercices, quiz, métiers, économie réelle, économie du Togo, orientation et recherche. La ligne éditoriale française et l’identité **Atlas académique vivant** restent la base de l’interface : vert atlas, ivoire, titres Fraunces, métadonnées monospace, repères de progression et avertissements méthodologiques.

| Espace V1 | Continuité dans la V4 |
|---|---|
| Accueil, Découvrir et Apprendre | Conservés ; ils restent les portes d’entrée aux nouveaux parcours. |
| Cours, exercices et quiz | Conservés ; ils alimentent les repères de compétences et les parcours personnels. |
| Métiers et comparateur | Conservés et étendus en répertoire de 54 rôles avec filtres et chapitres professionnels. |
| Économie réelle, Togo et Afrique | Conservés ; les exigences de source, période, unité et prudence demeurent visibles. |
| Orientation et recherche | Conservées et reliées aux formations, compétences, établissements et opportunités. |

## Fonctionnalités V2 conservées

La progression locale, les scores de quiz, les favoris, le glossaire, les fiches de révision, les ressources institutionnelles, la page Afrique, les études de cas et les simulations V2 restent disponibles. Les données togolaises de démonstration restent clairement distinguées de données réelles, et les ressources externes demeurent présentées comme des pistes à consulter.

| Fonctionnalité V2 | État V4 |
|---|---|
| Progression et favoris locaux | Maintenus ; les types de favoris ont été étendus aux formations, établissements et portails. |
| Glossaire, fiches et ressources | Maintenus comme socle d’explication et de vérification. |
| Études de cas et simulations | Maintenues ; complétées par des simulations professionnelles V4. |
| Contexte Togo/Afrique | Maintenu ; il est mobilisé dans les repères ocre de terrain et de vérification. |

## Fonctionnalités V3 conservées

**Mon EcoCompass**, EcoLab, les projets guidés, le portfolio local, la carte de compétences, les parcours personnalisables et les études de cas en mode apprenant sont intégralement conservés. La V4 complète ces outils par un réseau de parcours visible reliant profil, compétences, formations, métiers, sources et opportunités.

| Fonctionnalité V3 | Continuité V4 |
|---|---|
| Mon EcoCompass | Reste le point d’entrée du profil, des intérêts, objectifs, parcours et progrès locaux. |
| EcoLab | Reste un explorateur de séries **fictives** avec contexte et questions de lecture. |
| Projets et portfolio | Restent des supports de pratique locale, sans prétention de certification. |
| Compétences | Sont désormais reliées aux formations et aux métiers dans la navigation et la recherche. |
| AtlasTrail | Étendu comme grammaire de navigation entre les espaces V4. |

## Fonctionnalités V4 ajoutées

La V4 apporte six nouveaux territoires de navigation et de pratique. Ils ont été conçus pour donner des repères et des liens vérifiables, non pour orienter automatiquement une personne ou diffuser des offres incertaines.

| Fonctionnalité | Contenu et comportement |
|---|---|
| Répertoire des métiers V4 | 54 rôles liés à l’économie, filtrables par famille, recherche, niveau de mathématiques, exposition aux données et travail de terrain. Les rôles sont organisés en chapitres professionnels accompagnés d’une marge de lecture. |
| Fiches et comparateur enrichis | Les fiches métier et le comparateur réutilisent le répertoire étendu, ses repères de formations, d’outils et d’environnements. |
| Formations | Neuf parcours ou spécialisations présentés comme repères à explorer, reliés à des matières, compétences et métiers ; les admissions et disponibilités restent à vérifier. |
| Parcours études-vers-métiers | Des itinéraires visuels illustrent des séquences possibles, sans les présenter comme obligatoires ni comme une garantie d’emploi. |
| Compétences recherchées | Une cartographie de compétences techniques et transversales, avec liens vers contenus et métiers associés. |
| Établissements | Quatre établissements togolais décrits à partir de leurs pages officielles, avec ville, domaines, date de consultation et lien de vérification. |
| Opportunités | Trois portails institutionnels officiels, affichés comme **portails à consulter**, pas comme offres actives. Chaque carte conserve source, statut et date de vérification. |
| Professionnels et simulations | Profils composites sans personnes réelles, puis trois simulations de décisions guidées sur l’inflation, le budget et le suivi-évaluation. |

## Nouvelles pages et nouveaux composants

Les pages **Formations**, **Compétences recherchées**, **Établissements**, **Opportunités** et **Professionnels et simulations** s’ajoutent au réseau existant. Les données V4 sont séparées de l’interface dans `careersV4.ts`, `formationsV4.ts` et `ecosystemV4.ts`. Le composant `AtlasTrail` est réemployé pour rendre les liens réels entre contenus visibles : formation → compétences → cours → projet → métier, ou profil → compétences → métier → portail → source.

Le répertoire des métiers a été réorganisé après revue visuelle : au lieu d’une longue grille uniforme, il présente des **chapitres par familles professionnelles**, une marge éditoriale active, un repère de terrain Togo/Afrique et un accès vers l’orientation. Chaque nouvelle page V4 reçoit également un artefact propre : itinéraire de formation, dossier-source d’établissement, point de contrôle des portails officiels ou carnet de simulation.

## Nouvelles interactions

Les interactions ajoutées incluent la recherche et le filtrage du répertoire métiers, les filtres de formations, de compétences, d’établissements et de portails, les bascules de scénarios professionnels et les réponses guidées aux simulations. L’orientation propose maintenant des liens de suite vers cours, métiers, formations, compétences, établissements et portails officiels. La recherche globale indexe les nouveaux contenus V4 afin de relier un mot-clé à plusieurs types de ressources.

Les favoris locaux savent désormais conserver des formations, établissements et portails. Leur utilisation dans toutes les cartes V4 pourra être activée progressivement sans changer le modèle de données local.

## Sources et méthode de vérification

Le fichier `sources_v4.md` documente les sources institutionnelles utilisées pour les établissements et portails. Les pages Établissements et Opportunités gardent explicitement la date de consultation, le nom de la source officielle et un lien externe. Les détails d’admission, de calendrier ou d’appel ne sont pas recopiés durablement : l’utilisateur est renvoyé à la source avant d’agir.

| Ressource référencée | Usage dans EcoCompass | Statut |
|---|---|---|
| Université de Lomé — FASEG | Répertoire d’établissement et domaines affichés. | Page officielle consultée le 26 août 2026. [1] |
| Université de Kara — offres de formation | Répertoire d’établissement et orientations de formation. | Page officielle consultée le 26 août 2026. [2] |
| UCAO-UUT — ISEG | Répertoire d’établissement et orientations de formation. | Page officielle consultée le 26 août 2026. [3] |
| Banque africaine de développement | Portail officiel à consulter ; aucune vacance n’est recopiée comme active. | Page consultée le 26 août 2026. [4] |
| Nations Unies | Portail d’emplois, stages, consultances et volontariat à consulter. | Page consultée le 26 août 2026. [5] |
| Groupe de la Banque mondiale | Portail vers carrières, offres et programmes de talents à consulter. | Page consultée le 26 août 2026. [6] |

> « EcoCompass présente ici des portails institutionnels officiels, pas des offres recopiées ni garanties. » — formulation d’interface V4. Cette règle protège l’utilisateur contre les annonces périmées, non officielles ou incomplètes.

## Fonctionnalités ajoutées de ma propre initiative

Après revue indépendante du design, une marge éditoriale active a été ajoutée au répertoire de métiers afin de renforcer la logique d’atlas et de réduire l’effet de catalogue. Les conventions de style suivantes sont documentées dans `ideas.md` : chaque répertoire majeur porte un repère de terrain, source ou prochaine étape ; chaque top-level route possède un artefact fonctionnel distinct ; l’ocre est réservé au terrain, à la méthode et à la vérification.

Le build conserve aussi le chargement différé par page et le découpage des bibliothèques de graphiques, d’icônes et de rendu. Les simulations professionnelles ajoutent des pratiques de lecture et de décision sans présenter de personne réelle, de témoignage inventé, de recommandation de carrière automatique ou de résultat prédictif.

## Problèmes rencontrés et résolutions

Des erreurs de résolution transitoires ont été observées dans les journaux de développement pendant la création rapide de pages chargées à la demande. Les fichiers concernés existaient et la vérification TypeScript était saine ; un redémarrage propre du service a rétabli la prévisualisation. La compilation TypeScript et la compilation de production ont ensuite abouti avec succès.

Les nouveaux types de favoris ont d’abord nécessité l’extension de la page de bibliothèque personnelle. Les icônes et libellés des formations, établissements et portails ont été ajoutés afin de conserver un typage complet et une expérience cohérente.

## Limitations techniques et fonctionnelles

| Limitation | Conséquence actuelle | Recommandation |
|---|---|---|
| Données EcoLab et Togo | Les séries de démonstration ne sont pas des statistiques utilisables pour une décision. | Prévoir une chaîne de validation, métadonnées, date de collecte et revue humaine avant tout branchement de données réelles. |
| Opportunités | Seuls les portails officiels sont affichés ; aucune offre active n’est dupliquée. | Ajouter une opportunité seulement avec titre, organisme, pays, date, source officielle et vérification datée. |
| Établissements | Quatre établissements togolais sont documentés. | Étendre pays et établissements selon une méthode de source identique, jamais par simple agrégation non vérifiée. |
| Orientation | Les résultats sont des pistes de lecture ; ils ne déterminent pas un métier, une formation ou une employabilité. | Tester le questionnaire avec étudiants et conseillers, puis documenter ses limites pédagogiques. |
| Profils professionnels | Les profils sont des composites d’apprentissage. | Ne pas les présenter comme témoignages ni les attribuer à des personnes réelles sans consentement et validation. |
| Assistant économique | Aucun assistant connecté n’est activé dans cette V4. | Définir séparément sources, limites, confidentialité, prompts et relecture humaine avant toute intégration. |
| Données locales | Profil, favoris et projets sont liés au navigateur. | N’ajouter une synchronisation que si les usages, la sécurité et la confidentialité sont validés. |

## Contrôles réalisés

La vérification TypeScript (`pnpm check`) et la compilation de production (`pnpm build`) ont réussi. Le build confirme le découpage des pages et modules V4. Les espaces Métiers, Formations, Établissements, Opportunités et Professionnels/simulations ont été contrôlés sur écran large, avec une revue de style indépendante. Les pages Métiers, Formations, Opportunités et Professionnels/simulations ont été contrôlées sur un viewport mobile de 375 pixels de large ; les cartes passent en colonne et les zones de filtres ou étapes restent défilables horizontalement lorsque nécessaire.

## Fonctionnalités recommandées pour V5

Une V5 devrait d’abord mettre en place une gouvernance de données et d’opportunités : schéma de validation, date d’expiration, auteur de la vérification, source primaire, méthode de revue et archivage des mises à jour. Ensuite, l’élargissement du répertoire d’établissements devrait suivre une grille éditoriale commune par pays et domaine.

Sur le plan pédagogique, EcoCompass pourrait bénéficier de carnets d’analyse exportables, de retours d’enseignants encadrés sur les projets et d’un suivi de révision espacé. Un assistant économique ne devrait être ajouté qu’après définition de ses sources autorisées, de ses limites, de la confidentialité attendue et de la façon dont il indique l’incertitude ou invite à vérifier une information.

## Références

[1] [Université de Lomé — Faculté des sciences économiques et de gestion](https://univ-lome.tg/faculte-des-sciences-economiques-et-de-gestion-faseg/)

[2] [Université de Kara — Offres de formation](https://univkara.tg/offres-de-formation/)

[3] [UCAO-UUT — Institut supérieur d’économie et de gestion](https://ucao-uut.tg/formation-recherche/formations/institut-ecole/iseg/)

[4] [Banque africaine de développement — Current vacancies](https://www.afdb.org/en/about-careers/current-vacancies)

[5] [Nations Unies — UN Careers](https://careers.un.org/)

[6] [Groupe de la Banque mondiale — Work With Us](https://www.worldbank.org/ext/en/work-with-us)
