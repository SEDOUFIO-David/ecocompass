# EcoCompass V7 — Compétences, formations sourcées et recherche sémantique

Les cours exposent désormais des **compétences observables**. Chaque fiche associe à chaque compétence un critère de progression et une trace attendue ; ces éléments guident une pratique personnelle et ne constituent pas une certification.

Les formations affichent des sources de trois natures : une page d’offre de programme, une source d’accréditation et, lorsqu’utile, un repère régional. Les liens renvoient directement aux sources et rappellent de vérifier programme, session, admission et statut avant toute décision.

La recherche fonctionne localement par regroupements de synonymes explicitement déclarés. Par exemple, la recherche « coût de la vie » fait remonter les contenus liés à l’inflation et affiche un message qui explique l’élargissement ; l’utilisateur conserve une action immédiate pour effacer sa recherche.

## Validation réalisée

Les fiches de cours, le répertoire Formations et la recherche ont été contrôlés sur ordinateur et à **390 px** de large. Les compétences observables restent associées à une action et une trace ; les sources de formation sont visibles et ouvrent dans un nouvel onglet ; la recherche « coût de la vie » retourne les contenus sur l’inflation et annonce le rapprochement sémantique. Le type et le build de production ont réussi après les changements.

## Contrôle publié du bouton de contact

Sur le domaine publié, le bouton « Contact professionnel » est présent sous le créateur. Le survol a été déclenché visuellement ; le contrôle clavier confirme `:focus-visible`, une hauteur minimale de 44 px, un contour ocre de 3 px et une transition de 0,18 s. La règle de réduction de mouvement est également déclarée.

Le contrôle responsive à 390 px confirme que le bouton reste visible, lisible et correctement placé sous le créateur. La page publiée restitue également le libellé du bouton et conserve l’attribution du footer.

La production sert bien le bouton dans `/a-propos`. Le contrôle CSS publié retrouve la règle `.creator-contact:hover` avec assombrissement, contour ocre diffus et translation verticale ; le contrôle DOM confirme `:focus-visible`, contour ocre 3 px et hauteur minimale 44 px. Le rendu mobile à 390 px a été contrôlé sur le build courant correspondant à cette version publiée ; le bouton reste sur une ligne et conserve sa lisibilité.

Une capture Chromium réelle du domaine publié en 390 × 844 confirme la mise en page mobile de `/a-propos` sans débordement. La présence du bouton dans cette même version est confirmée par l’arbre DOM publié et ses dimensions mesurées : 218,7 px de large pour 44 px minimum de haut, avec `noOverflow: true`. La règle hover publiée a été lue directement ; le focus visible restitue un contour ocre de 3 px.

La mesure finale dans la modale confirme `:focus-visible` sur le champ Nom et le bouton « Préparer l’envoi » : contour solide de 3 px, style `solid`, champ avec décalage de 2 px, bouton avec décalage nul. Le focus initial arrive sur `contact-name`, Tab avance vers l’e-mail, Shift+Tab revient au nom et Échap ferme la modale en rendant le focus à `.creator-contact`.
