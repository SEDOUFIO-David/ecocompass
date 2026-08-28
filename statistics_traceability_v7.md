# Traçabilité des statistiques réelles — EcoCompass V7

Cette note distingue les statistiques publiques réellement affichées des chiffres pédagogiques générés localement. Elle couvre les routes inspectées dans le code au 28 août 2026.

## Statistiques publiques affichées

| Route / composant | Statistiques affichées | Source | Année / période | Unité | Limite de lecture |
|---|---|---|---|---|---|
| `/togo` — indicateurs | Croissance réelle du PIB : 6,31 ; inflation : 0,43 ; population : 8 591 626 ; chômage total : 2,00 ; valeur ajoutée agricole : 20,33 ; valeur ajoutée des services : 61,71 | Banque mondiale, World Development Indicators, indicateurs `NY.GDP.MKTP.KD.ZG`, `FP.CPI.TOTL.ZG`, `SP.POP.TOTL`, `SL.UEM.TOTL.ZS`, `NV.AGR.TOTL.ZS`, `NV.SRV.TOTL.ZS` [1] | 2025 ; réponse API consultée le 26 août 2026 et indiquée comme mise à jour le 13 juillet 2026 | Pourcentages annuels, % du PIB ou nombre d’habitants selon l’indicateur | Le chômage est une estimation modélisée OIT ; la valeur ajoutée n’est pas une part de l’emploi ; aucun indicateur ne suffit à mesurer le bien-être. |
| `/togo` — série activité | Croissance réelle du PIB : 2,16 ; 5,14 ; 6,29 ; 6,20 ; 6,53 ; 6,31 ; inflation : 1,70 ; 4,19 ; 7,97 ; 5,49 ; 2,86 ; 0,43 | Banque mondiale, WDI, mêmes indicateurs [1] | 2020–2025 | Variation annuelle en % | Une série descriptive ne prouve pas une causalité ; les définitions et révisions de source doivent être relues. |
| `/togo` — structure | Agriculture : 20,33 ; industrie : 21,02 ; services : 61,71 | Banque mondiale, WDI, `NV.AGR.TOTL.ZS`, `NV.IND.TOTL.ZS`, `NV.SRV.TOTL.ZS` [1] | 2025 | Part de la valeur ajoutée dans le PIB, en % | L’industrie inclut la construction selon la définition de la source ; ces parts ne décrivent pas directement l’emploi. |
| `/togo` — comparaison régionale | Togo, Bénin, Burkina Faso et Ghana : croissance, inflation et population | Banque mondiale, WDI, mêmes définitions pour chaque pays [1] | 2025 | Pourcentages annuels et population totale | Comparaison descriptive sans classement ; les contextes, méthodes et révisions nationales doivent être pris en compte. |

## Chiffres qui ne sont pas des statistiques réelles

Les graphiques du composant de progression personnelle calculent des pourcentages à partir des actions, objectifs, cours et projets enregistrés localement par l’utilisateur. Ils sont étiquetés **Données locales** et ne décrivent pas une population ou une économie.

Les simulations d’offre et de demande, d’inflation et de budget utilisent des valeurs fictives et des relations simplifiées. Elles portent explicitement la mention « Simulation pédagogique » et ne constituent ni prévision ni mesure économique réelle.

Les séries de l’EcoLab sont des données de démonstration destinées à apprendre à lire un graphique. Elles sont présentées comme telles et ne doivent pas être confondues avec l’instantané WDI de `/togo`.

## Références

[1]: https://api.worldbank.org/v2/country/TGO;BEN;BFA;GHA/indicator/NY.GDP.MKTP.KD.ZG?format=json "Banque mondiale — API WDI, séries comparables"
[2]: https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation "Banque mondiale — documentation de l’API Indicators"
