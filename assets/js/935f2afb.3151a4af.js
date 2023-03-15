"use strict";(self.webpackChunk_1j1s_etl_docs=self.webpackChunk_1j1s_etl_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Future version \ud83d\udea7","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\ud83d\uddfa\ufe0f Architecture","href":"/1j1s-etl/docs/architecture","docId":"architecture"},{"type":"category","label":"\ud83d\udcd3 ADRs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Historisation des flux extraits","href":"/1j1s-etl/docs/adr/2022-07-08.historisation-des-flux","docId":"adr/2022-07-08.historisation-des-flux"},{"type":"link","label":"Enregistrement des fichiers","href":"/1j1s-etl/docs/adr/2022-08-01.enregistrement-des-fichiers","docId":"adr/2022-08-01.enregistrement-des-fichiers"},{"type":"link","label":"Utilisation des Scheduled Tasks","href":"/1j1s-etl/docs/adr/2022-08-03.scheduled-tasks","docId":"adr/2022-08-03.scheduled-tasks"},{"type":"link","label":"Mise en Production","href":"/1j1s-etl/docs/adr/2022-11-07.mise-en-production","docId":"adr/2022-11-07.mise-en-production"},{"type":"link","label":"Onion Architecture","href":"/1j1s-etl/docs/adr/2023-01-28.onion-architecture","docId":"adr/2023-01-28.onion-architecture"},{"type":"link","label":"Les contextes d\'un commit","href":"/1j1s-etl/docs/adr/2023-01-30.contexte-commit","docId":"adr/2023-01-30.contexte-commit"},{"type":"link","label":"Exception dans le linter","href":"/1j1s-etl/docs/adr/2023-02-08.exception-dans-le-linter","docId":"adr/2023-02-08.exception-dans-le-linter"},{"type":"link","label":"Migration vers NestJS","href":"/1j1s-etl/docs/adr/2023-02-15.migration-nestjs","docId":"adr/2023-02-15.migration-nestjs"}],"href":"/1j1s-etl/docs/category/-adrs"},{"type":"category","label":"\ud83d\uded2 Conventions","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Git","href":"/1j1s-etl/docs/conventions/git","docId":"conventions/git"},{"type":"link","label":"Langages","href":"/1j1s-etl/docs/conventions/langages","docId":"conventions/langages"}],"href":"/1j1s-etl/docs/category/-conventions"},{"type":"category","label":"\ud83c\udf31 Onboarding","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Pr\xe9requis d\'installation","href":"/1j1s-etl/docs/onboarding/prerequis","docId":"onboarding/prerequis"},{"type":"link","label":"Checklist d\'onboarding","href":"/1j1s-etl/docs/onboarding/checklist","docId":"onboarding/checklist"},{"type":"link","label":"Lancer l\'ETL","href":"/1j1s-etl/docs/onboarding/installation","docId":"onboarding/installation"}],"href":"/1j1s-etl/docs/category/-onboarding"},{"type":"link","label":"Comment consulter le contenu du d\xe9p\xf4t MinIO","href":"/1j1s-etl/docs/consulter-contenu-minio","docId":"consulter-contenu-minio"},{"type":"category","label":"Proc\xe9dures de maintenance","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Pr\xe9requis et conseils","href":"/1j1s-etl/docs/maintenance/prerequis","docId":"maintenance/prerequis"},{"type":"link","label":"Purge des donn\xe9es","href":"/1j1s-etl/docs/maintenance/purge-des-donnees","docId":"maintenance/purge-des-donnees"},{"type":"link","label":"Que faire si tout se passe mal apr\xe8s une mise en production ?","href":"/1j1s-etl/docs/maintenance/sos","docId":"maintenance/sos"}],"href":"/1j1s-etl/docs/maintenance/"},{"type":"link","label":"Utiliser les Scheduled Tasks Scalingo","href":"/1j1s-etl/docs/scheduled-tasks","docId":"scheduled-tasks"}]},"docs":{"adr/2022-07-08.historisation-des-flux":{"id":"adr/2022-07-08.historisation-des-flux","title":"Historisation des flux extraits","description":"8 juillet 2022","sidebar":"tutorialSidebar"},"adr/2022-08-01.enregistrement-des-fichiers":{"id":"adr/2022-08-01.enregistrement-des-fichiers","title":"Enregistrement des fichiers","description":"1er ao\xfbt 2022","sidebar":"tutorialSidebar"},"adr/2022-08-03.scheduled-tasks":{"id":"adr/2022-08-03.scheduled-tasks","title":"Utilisation des Scheduled Tasks","description":"3 ao\xfbt 2022","sidebar":"tutorialSidebar"},"adr/2022-11-07.mise-en-production":{"id":"adr/2022-11-07.mise-en-production","title":"Mise en Production","description":"7 novembre 2022","sidebar":"tutorialSidebar"},"adr/2023-01-28.onion-architecture":{"id":"adr/2023-01-28.onion-architecture","title":"Onion Architecture","description":"28 janvier 2023","sidebar":"tutorialSidebar"},"adr/2023-01-30.contexte-commit":{"id":"adr/2023-01-30.contexte-commit","title":"Les contextes d\'un commit","description":"30 janvier 2023","sidebar":"tutorialSidebar"},"adr/2023-02-08.exception-dans-le-linter":{"id":"adr/2023-02-08.exception-dans-le-linter","title":"Exception dans le linter","description":"8 f\xe9vrier 2023","sidebar":"tutorialSidebar"},"adr/2023-02-15.migration-nestjs":{"id":"adr/2023-02-15.migration-nestjs","title":"Migration vers NestJS","description":"15 f\xe9vrier 2023","sidebar":"tutorialSidebar"},"architecture":{"id":"architecture","title":"Architecture de l\'ETL","description":"Introduction","sidebar":"tutorialSidebar"},"consulter-contenu-minio":{"id":"consulter-contenu-minio","title":"Comment consulter le contenu du d\xe9p\xf4t MinIO","description":"Nous utilisons l\'interface Amazon Web Services Command Line Interface (CLI) afin de pouvoir consulter","sidebar":"tutorialSidebar"},"conventions/git":{"id":"conventions/git","title":"Git","description":"Commit","sidebar":"tutorialSidebar"},"conventions/langages":{"id":"conventions/langages","title":"Langages","description":"Choix du langage","sidebar":"tutorialSidebar"},"maintenance/index":{"id":"maintenance/index","title":"Proc\xe9dures de maintenance","description":"Sommaire","sidebar":"tutorialSidebar"},"maintenance/prerequis":{"id":"maintenance/prerequis","title":"Pr\xe9requis et conseils","description":"Pr\xe9requis","sidebar":"tutorialSidebar"},"maintenance/purge-des-donnees":{"id":"maintenance/purge-des-donnees","title":"Purge des donn\xe9es","description":"Respectez les pr\xe9requis avant de commencer","sidebar":"tutorialSidebar"},"maintenance/sos":{"id":"maintenance/sos","title":"Que faire si tout se passe mal apr\xe8s une mise en production ?","description":"Si demain, vous \xeates amen\xe9s \xe0 faire une mise en production et que d\'avance \xe7a devait mal se passer, pas de panique !","sidebar":"tutorialSidebar"},"onboarding/checklist":{"id":"onboarding/checklist","title":"Checklist d\'onboarding","description":"| Action                                                             | Statut |","sidebar":"tutorialSidebar"},"onboarding/installation":{"id":"onboarding/installation","title":"Lancer l\'ETL","description":"Configuration","sidebar":"tutorialSidebar"},"onboarding/prerequis":{"id":"onboarding/prerequis","title":"Pr\xe9requis d\'installation","description":"Introduction","sidebar":"tutorialSidebar"},"scheduled-tasks":{"id":"scheduled-tasks","title":"Utiliser les Scheduled Tasks Scalingo","description":"D\xe9marrage","sidebar":"tutorialSidebar"}}}')}}]);