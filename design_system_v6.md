# EcoCompass V6 — Design system et architecture UX

## Intention produit

EcoCompass est une **plateforme pédagogique d’économie et d’orientation**. Son interface doit permettre de comprendre, comparer, pratiquer et construire un parcours sans faire croire qu’elle remplace un conseil professionnel ou une source statistique. Le système V6 adapte les priorités du référentiel UI/UX partagé : accessibilité et interactions d’abord, style cohérent ensuite, puis visualisation utile et mouvement réduit.[1]

| Fondation | Décision V6 | Usage |
|---|---|---|
| Papier | `#F8F5ED` | Surface de lecture principale, calme et durable |
| Encre Atlas | `#14333A` | Titres, dossiers d’autorité et navigation de premier niveau |
| Vert Atlas | `#0E6356` | Actions, jalons, progression et données clés |
| Ocre terrain | `#B67835` | Prudence méthodologique, contexte local et éléments à vérifier |
| Blanc dossier | `#FFFFFF` | Panneaux, formulaires, listes et détails consultables |
| Bordure | `#D7E3DB` | Séparation d’information, jamais décoration lourde |

Les titres utilisent **Source Serif 4**, les explications et actions **Source Sans 3**, et les métadonnées **IBM Plex Mono**. La taille de base reste à 16 px, avec des corps de texte lisibles et une hiérarchie limitée. Les espacements suivent une échelle de 8 px ; les surfaces ont des angles légèrement adoucis, mais les repères de route et dossiers restent plus nets que des cartes SaaS génériques.

> Chaque élément visuel doit répondre à une question : où suis-je, que puis-je faire, pourquoi cette information est-elle utile et quelle est la suite ?

## Navigation par intentions

| Intention | Espaces accessibles |
|---|---|
| **Découvrir** | Découvrir, apprendre, glossaire, fiches, explications et ressources |
| **Construire mon avenir** | Métiers, compétences, formations, établissements et opportunités |
| **Comprendre le monde** | Économie réelle, Togo, Afrique et lecture de données |
| **Pratiquer** | EcoLab, cas, défis, simulations professionnelles et projets |
| **Mon parcours** | Tableau personnel, parcours, plan d’action, favoris, portfolio et méthode |

La barre supérieure conserve cinq portes d’entrée rapides. Le menu détaillé expose tous les espaces sous leurs intentions, avec un court rôle pour chaque groupe. Cette distinction réduit la charge cognitive sans rendre une fonction invisible.

## Composants et états

| Composant | Règle V6 |
|---|---|
| Bouton d’action | Verbe et résultat nommés ; 44 px de hauteur minimale ; réponse active brève |
| Carte de parcours | Un seul niveau dominant, une action de suite et des informations scannables |
| Filtre | Libellé visible, état sélectionné explicite, compteur de résultat et réinitialisation possible |
| Donnée ou graphique | Question lisible, valeur/période/source/limite visibles et couleur non exclusive pour le sens |
| Avertissement | Ocre et libellé explicite « À vérifier » ou « Point de méthode », sans alarmisme |
| Chargement, erreur, vide | Contenu compréhensible et action de reprise ou de sortie |

Les transitions ne dépassent pas 250 ms pour les actions fréquentes. Elles n’animent que l’opacité, la couleur ou la transformation et sont réduites lorsque l’utilisateur le demande. Les focus restent visibles et les informations importantes ne reposent pas uniquement sur la couleur.[1][2]

## Références

[1] [UI UX Pro Max — Design Intelligence](https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/ui-ux-pro-max/SKILL.md)

[2] [UI Styling Skill — systèmes de composants, thèmes et accessibilité](https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/ui-styling/SKILL.md)
