# EcoCompass — Application structurante du référentiel UI/UX

## Décision de conception

EcoCompass ne doit pas imiter une galerie de styles ni ajouter des ornements pour paraître plus « design ». La refonte adopte plutôt une combinaison assumée de **minimalisme éditorial structuré**, de **composition géométrique** et de **conception accessible**. Cette sélection correspond au caractère d’une plateforme éducative : hiérarchie claire, espace respirant, contraste robuste et interactions compréhensibles. Le référentiel consulté recommande précisément de choisir un style cohérent avec le produit, de conserver des jetons de conception consistants et de prioriser l’accessibilité, les interactions tactiles et la navigation avant les effets visuels.[1][2]

> La ligne directrice retenue est : **un atlas d’orientation, pas une collection de cartes**. Chaque grand écran doit faire voir le point actuel, les options comparables et la prochaine trace d’apprentissage.

| Sujet | Avant | Application visible retenue | Critère de réussite |
|---|---|---|---|
| Accueil | Succession de sections éditoriales avec cartes d’accès | Table d’orientation asymétrique : repère de départ, carte/trajectoire, choix numérotés et continuité d’apprentissage réunis dans un même dispositif | Un visiteur identifie immédiatement où commencer, ce qu’il peut faire ensuite et le lien vers sa progression locale |
| Navigation | Liens utiles mais séparés de la logique des parcours | Navigation fondée sur des verbes de tâche et retour permanent vers la prochaine étape pertinente | Chaque page conserve une sortie claire vers le contenu, la donnée ou la piste associée |
| Métiers | Chapitres avec nombreuses tuiles apparentées | Étapes d’orientation : une piste d’entrée mise en avant, puis une comparaison lisible des alternatives et de leurs suites | Le répertoire ne ressemble plus à un job board ; une famille expose rôle → compétences → formation/projet |
| Surfaces | Cartes homogènes et répétées | Hiérarchie de surfaces limitée : plan de travail ivoire, dossier bleu nuit, note de terrain ocre, repère vert | La couleur et la matière signalent le rôle du contenu, jamais uniquement une décoration |
| Interactions | Contrôles déjà fonctionnels, mais discrètement intégrés | États nommés, tailles tactiles, focus permanent, annonces de résultat et chemin de réinitialisation | Les filtres et préférences sont utilisables au clavier, au tactile, au zoom et dans les deux thèmes |

## Grammaire de composition

La refonte utilise une **ligne de route fonctionnelle** : un repère circulaire numéroté, une ligne de liaison et un libellé d’étape. Cette grammaire apparaît dans l’accueil, les familles de métiers et les appels à l’action. Elle relie toujours une décision à un résultat concret ; elle ne sert jamais d’arrière-plan décoratif. Les principes de « communication visuelle d’abord » et de composition systématique du référentiel sont donc adaptés au contexte pédagogique, sans réduire le contenu nécessaire à l’apprentissage.[3]

Le rythme varie volontairement. L’accueil comporte un grand plan d’orientation et des espaces de respiration. Le répertoire Métiers substitue une entrée prioritaire à la grille uniforme : une carte de départ à forte hiérarchie, puis des options de comparaison plus compactes. Les blocs denses gardent des bordures, des métadonnées et des liens explicites ; aucun contenu ni fonctionnalité existante n’est supprimé.

## Système de composants

| Composant | Rôle | Règles de réalisation |
|---|---|---|
| **Panneau de cap** | Présenter une intention et une prochaine action | Fond bleu nuit, titre court, lien nommé, contraste fort ; jamais une boîte générique |
| **Étape de route** | Situer un contenu dans une progression | Numéro, titre, description brève et lien de continuation ; la ligne est présente seulement si elle exprime un enchaînement réel |
| **Piste d’entrée** | Mettre une première orientation en évidence | Occupe la surface dominante d’une famille de métiers ; annonce rôle, aptitudes et suite de parcours |
| **Piste à comparer** | Montrer des alternatives sans créer une grille uniforme | Format horizontal ou vertical compact ; visibilité de l’action « comparer » et de la prochaine ressource |
| **Note de terrain** | Donner une limite, une précaution ou un contexte Togo/Afrique | Ocre réservé aux limites et vérifications ; texte direct, jamais alarmiste |

## Exigences de qualité

La refonte conserve un corps de texte de 16 px minimum, des cibles tactiles d’au moins 44 px, des focus visibles, des libellés accessibles et des contrastes adaptés aux thèmes clair et sombre. Les mouvements restent brefs, interruptibles et désactivables par la préférence de réduction de mouvement ; ils ne sont jamais utilisés pour signaler seuls un changement d’état.[1][2]

| Vérification | Écrans | Méthode |
|---|---|---|
| Composition | Accueil et Métiers | Contrôle visuel desktop et mobile : une route, une entrée prioritaire, une suite identifiable |
| Lisibilité | Clair, sombre, contraste renforcé | Contrôle de texte, bordures, appels à l’action et notes de terrain |
| Résilience | Filtres, préférences, listes | Vérification clavier, focus, reset, état vide, zoom et reflow à 375 px |
| Intégrité fonctionnelle | Liens, favoris, progression | Tests manuels des routes et des interactions locales existantes |

## Références

[1] [UI UX Pro Max — Design Intelligence](https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/ui-ux-pro-max/SKILL.md)

[2] [UI Styling Skill — composants, thèmes et accessibilité](https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/ui-styling/SKILL.md)

[3] [Canvas Design System — composition, espace et systèmes visuels](https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/main/.claude/skills/ui-styling/references/canvas-design-system.md)
