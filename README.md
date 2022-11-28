# 1j1s-orchestrateur-transform-load

Dépôt qui regroupe les opérations de transformation et de chargement des données issues de flux pour les stages du site 1j1s

## Installer

Pour construire l'application il faut lancer les commandes pour synchroniser votre poste

```bash
npm ci
```

Puis il faut contruire le programme cible

```bash
npm run build
```

## Lancer un job

Pour lancer un job il faut mettre les bons arguments dans la commande de lancement

```bash
npm run cli -- -d {domain} -a {action} -f {nom du flux}
```

## Quand on a besoin de créer un bucket
#### En dev
```
npm run start
```
#### Sur scalingo
```
Démarrer le contener (dans l'onglet Resources mettre Qty: 1) web puis l'éteindre (dans l'onglet Resources mettre Qty: 0)
```

Liste des jobs disponibles : 

| nom du flux\action | Extract | transform | load |
| :----------------- | :----:  | :-------: | :--: |
| tous-mobilises     |    X    |     X     |      |
| jobteaser          |    X    |     X     |  X   |
| stagefr-compresse  |    X    |     X     |  X   |
| stagefr-decompresse|    X    |     X     |  X   |
