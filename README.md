# 1j1s-etl
[![Build](https://github.com/DNUM-SocialGouv/1j1s-etl/actions/workflows/build.yml/badge.svg)](https://github.com/DNUM-SocialGouv/1j1s-etl/actions/workflows/build.yml)
[![Lint](https://github.com/DNUM-SocialGouv/1j1s-etl/actions/workflows/lint.yml/badge.svg)](https://github.com/DNUM-SocialGouv/1j1s-etl/actions/workflows/lint.yml)
[![Test](https://github.com/DNUM-SocialGouv/1j1s-etl/actions/workflows/test.yml/badge.svg)](https://github.com/DNUM-SocialGouv/1j1s-etl/actions/workflows/test.yml)
[![Pages Build Deployment](https://github.com/DNUM-SocialGouv/1j1s-etl/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/DNUM-SocialGouv/1j1s-etl/actions/workflows/pages/pages-build-deployment)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/DNUM-socialGouv/1j1s-etl?color=orange)
![Node engine](https://img.shields.io/badge/dynamic/json?label=node&query=%24%5B%27engines%27%5D%5B%27node%27%5D&url=https%3A%2F%2Fraw.githubusercontent.com%2FDNUM-SocialGouv%2F1j1s-etl%2Fmain%2Fpackage.json)
![NPM engine](https://img.shields.io/badge/dynamic/json?label=npm&query=%24%5B%27engines%27%5D%5B%27npm%27%5D&url=https%3A%2F%2Fraw.githubusercontent.com%2FDNUM-SocialGouv%2F1j1s-etl%2Fmain%2Fpackage.json)

Dépôt qui regroupe les opérations de transformation et de chargement des données issues de flux pour les stages du site 1j1s

## Installer

Pour construire l'application il faut lancer les commandes pour synchroniser votre poste

```bash
$ npm ci
```

Puis il faut contruire le programme cible

```bash
$ npm run build
```

## Lancer un job

Pour lancer un job il faut mettre les bons arguments dans la commande de lancement de la CLI.

### En local

```bash
$ npm run dev:cli -- -d {domain} -a {action} -f {nom du flux}
```

### En production

```bash
$ npm run cli -- -d {domain} -a {action} -f {nom du flux}
```

## Quand on a besoin de créer un bucket

#### En dev

```bash
$ npm run dev:start
```

#### Sur scalingo

```
Démarrer le contener (dans l'onglet Resources mettre Qty: 1) web puis l'éteindre (dans l'onglet Resources mettre Qty: 0)
```

## Liste des jobs disponibles

### Stage

| nom du flux\action | Extract | transform | load  |
| :----------------- | :----:  | :-------: |:-----:|
| jobteaser          |    X    |     X     |   X   |
| stagefr-compresse  |    X    |     X     |   X   |
| stagefr-decompresse|    X    |     X     |   X   |

### Evenement

| nom du flux\action | Extract | transform | load  |
| :----------------- | :----:  | :-------: |:-----:|
| tous-mobilises     |    X    |     X     |   X   |

### Logement

| nom du flux\action | Extract | transform | load  |
|:-------------------|:-------:|:---------:|:-----:|
| immojeune          |   X     |    X      |   X   |
| studapart          |   X     |    X      |   X   |
