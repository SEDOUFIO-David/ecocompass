# Plan de données institutionnelles — EcoCompass

## Principe éditorial

EcoCompass doit distinguer strictement les **faits publiés**, les **prévisions** et les **contenus pédagogiques**. Chaque indicateur intégré affichera son unité, sa dernière année disponible, sa date de récupération, sa source primaire et une note de prudence lorsque la donnée est une estimation ou une projection.

## Sources publiques vérifiées

| Domaine | Source | Usage envisagé | Statut |
|---|---|---|---|
| Macroéconomie et développement | [Banque mondiale — API Indicators](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation) | Séries annuelles pour le Togo et comparaisons régionales : croissance réelle, inflation, population, accès à l’électricité, emploi modélisé, commerce et éducation | API publique, sans clé |
| Prévisions et cadre macroéconomique | [FMI — DataMapper Togo](https://www.imf.org/external/datamapper/profile/TGO) | Croissance, inflation, dette et solde budgétaire ; les valeurs doivent être libellées comme **projections FMI** lorsqu’elles portent sur l’avenir | Données et périodes à vérifier par indicateur |
| Emploi et marché du travail | [ILOSTAT — profil Togo](https://ilostat.ilo.org/data/country-profiles/tgo/) | Emploi, chômage, participation, secteurs et caractéristiques du marché du travail | Source primaire OIT, mise à jour variable |
| Éducation | [UNESCO UIS Data Browser](https://databrowser.uis.unesco.org/) | Scolarisation, achèvement et dépenses d’éducation lorsqu’une série Togo est disponible | Source primaire UIS |
| Inclusion financière | [Banque mondiale — Global Findex](https://www.worldbank.org/en/publication/globalfindex) | Accès aux comptes et moyens de paiement, toujours avec année d’enquête | Données d’enquête, non annuelles |

## Premier ensemble d’indicateurs à intégrer

| Indicateur | Unité | Source prévue | Usage pédagogique |
|---|---|---|---|
| Croissance du PIB réel | Variation annuelle en % | Banque mondiale / FMI | Lire l’activité économique, sans confondre croissance et bien-être |
| Inflation des prix à la consommation | Variation annuelle en % | Banque mondiale / FMI | Comprendre l’évolution des prix et du pouvoir d’achat |
| Population totale | Nombre d’habitants | Banque mondiale | Donner l’échelle démographique des comparaisons |
| Emploi par grand secteur | Part de l’emploi en % | OIT / Banque mondiale | Relier économie, secteurs et métiers |
| Achèvement scolaire et scolarisation | % selon le niveau | UNESCO UIS | Contextualiser les parcours de formation |
| Inclusion financière | % d’adultes selon l’indicateur | Global Findex | Éclairer l’accès aux services financiers et numériques |

## Exemple de série confirmée

La série Banque mondiale `NY.GDP.MKTP.KD.ZG` pour le Togo indique une croissance réelle du PIB de **6,31 % en 2025** ; la réponse de l’API consultée a été actualisée le **13 juillet 2026**. Cette valeur devra rester accompagnée de son année, son unité et son lien source dans l’interface.

## Valeurs retenues pour le premier instantané Togo

Toutes les valeurs ci-dessous proviennent de l’API Banque mondiale, source World Development Indicators, réponse consultée le 26 août 2026 et indiquée comme mise à jour le 13 juillet 2026.

| Indicateur | Code Banque mondiale | Dernière valeur | Année | Précaution d’interprétation |
|---|---|---:|---:|---|
| Croissance réelle du PIB | `NY.GDP.MKTP.KD.ZG` | 6,31 % | 2025 | Mesure l’évolution de l’activité, pas le niveau de vie à elle seule |
| Inflation, prix à la consommation | `FP.CPI.TOTL.ZG` | 0,43 % | 2025 | Variation annuelle moyenne des prix ; à lire avec les méthodes de calcul |
| Population totale | `SP.POP.TOTL` | 8 591 626 | 2025 | Estimation démographique annuelle |
| Chômage total | `SL.UEM.TOTL.ZS` | 2,00 % | 2025 | Estimation modélisée par l’OIT, ne décrivant pas à elle seule le sous-emploi ou l’informalité |
| Valeur ajoutée de l’agriculture | `NV.AGR.TOTL.ZS` | 20,33 % du PIB | 2025 | Part de la valeur ajoutée, pas part de l’emploi |
| Valeur ajoutée de l’industrie | `NV.IND.TOTL.ZS` | 21,02 % du PIB | 2025 | Inclut la construction selon la définition de la source |
| Valeur ajoutée des services | `NV.SRV.TOTL.ZS` | 61,71 % du PIB | 2025 | Part publiée par la source ; la cohérence avec les autres composantes est à lire avec la méthodologie WDI |

## Décision d’architecture à confirmer

Deux modalités sont possibles : publier un **instantané documenté** de données sélectionnées, mis à jour lors de versions éditoriales, ou construire un **tableau actualisé périodiquement** par des appels aux API publiques. La seconde option nécessite une couche serveur et une politique explicite de fréquence, de contrôle des anomalies et d’affichage de la date de dernière mise à jour.
