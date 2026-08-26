# Évaluation de `ui-ux-pro-max-skill` pour EcoCompass

Référence examinée : [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), consultation du 26 août 2026. Le dépôt externe a été lu comme **référence de conception** ; aucun script, dépendance, commande d’installation ou configuration tierce n’a été exécuté ni intégré.

| Principe observé | Adaptation retenue pour EcoCompass | État |
|---|---|---|
| Système de conception fondé sur les exigences du produit | Préserver « Atlas académique vivant » comme direction stable, avec une hiérarchie spécifique à l’apprentissage économique. | Déjà appliqué ; à consolider. |
| Résilience du texte | Vérifier le retour à la ligne, le zoom, les libellés longs, les badges et les filtres sur mobile. | À intégrer au contrôle qualité de chaque nouvel écran. |
| Accessibilité des interactions | Conserver les éléments HTML natifs, les libellés explicites, le focus visible et la réduction des mouvements. | Déjà appliqué ; à systématiser. |
| Micro-interactions interrompables | Limiter les animations aux transitions de contexte et aux retours d’action ; ne jamais masquer l’état final. | Déjà appliqué au thème et aux réussites. |
| Cohérence de style et anti-patterns | Éviter les grilles de cartes indifférenciées, les couleurs sans rôle et les CTA génériques. Préférer une étape, une source, une limite et une prochaine action. | Appliqué aux écrans Accueil, Apprendre, Métiers et Togo. |

## Décision d’adaptation

EcoCompass ne copie pas le style du référentiel. Il conserve son système éditorial : bleu nuit pour les dossiers d’autorité, vert Atlas pour les actions et données essentielles, ocre pour les précautions méthodologiques, titres serif et métadonnées monospace. Les prochaines évolutions seront évaluées avec quatre questions : le texte résiste-t-il au mobile et au zoom, l’action est-elle explicite, la donnée est-elle sourcée, et la structure montre-t-elle une trajectoire plutôt qu’une simple grille ?

## Référence

1. [ui-ux-pro-max-skill — GitHub](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
