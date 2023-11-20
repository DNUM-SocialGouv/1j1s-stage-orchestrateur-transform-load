"use strict";(self.webpackChunk_1j1s_etl_docs=self.webpackChunk_1j1s_etl_docs||[]).push([[603],{4604:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>i});var a=n(5893),d=n(1151);const r={sidebar_label:"Comment Rollback la base de donn\xe9es ?",sidebar_position:1},o="Rollback de base de donn\xe9es",t={id:"tuto/rollback-database",title:"Rollback de base de donn\xe9es",description:"20 Avril 2023",source:"@site/docs/tuto/rollback-database.md",sourceDirName:"tuto",slug:"/tuto/rollback-database",permalink:"/1j1s-etl/docs/tuto/rollback-database",draft:!1,unlisted:!1,editUrl:"https://github.com/DNUM-SocialGouv/1j1s-etl/tree/main/docs/docs/docs/tuto/rollback-database.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Comment Rollback la base de donn\xe9es ?",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Que faire si tout se passe mal apr\xe8s une mise en production ?",permalink:"/1j1s-etl/docs/tuto/sos"},next:{title:"Comment purger les donn\xe9es ?",permalink:"/1j1s-etl/docs/tuto/purge-des-donnees"}},l={},i=[{value:"Acc\xe9der au dashboard de la base de donn\xe9es",id:"acc\xe9der-au-dashboard-de-la-base-de-donn\xe9es",level:2},{value:"Cr\xe9er une backup de la base de donn\xe9es",id:"cr\xe9er-une-backup-de-la-base-de-donn\xe9es",level:2},{value:"Restaurer la base de donn\xe9es \xe0 une date pr\xe9cise",id:"restaurer-la-base-de-donn\xe9es-\xe0-une-date-pr\xe9cise",level:2},{value:"Restaurer la base de donn\xe9es depuis le dump que vous avez g\xe9n\xe9r\xe9",id:"restaurer-la-base-de-donn\xe9es-depuis-le-dump-que-vous-avez-g\xe9n\xe9r\xe9",level:2}];function c(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"rollback-de-base-de-donn\xe9es",children:"Rollback de base de donn\xe9es"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.em,{children:"20 Avril 2023"})}),"\n",(0,a.jsx)(s.h2,{id:"acc\xe9der-au-dashboard-de-la-base-de-donn\xe9es",children:"Acc\xe9der au dashboard de la base de donn\xe9es"}),"\n",(0,a.jsx)(s.p,{children:"Scalingo propose avec ses offres payantes d'automatiser la cr\xe9ation de backup d'une base de donn\xe9es p\xe9riodiquement (et\nc'est d\xe9j\xe0 fait pour les environnements de production)."}),"\n",(0,a.jsx)(s.p,{children:"Maintenant, vous allez peut-\xeatre vouloir cr\xe9er une back-up manuellement. Pour ce faire, il faut se rendre sur Scalingo,\nl\xe0 o\xf9 les ressources d'une application sont d\xe9taill\xe9es :"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"img",src:n(9651).Z+"",width:"1523",height:"621"})}),"\n",(0,a.jsxs)(s.p,{children:["Ensuite, cliquez sur le bouton ",(0,a.jsx)(s.code,{children:"Go to dashboard"})," \xe0 c\xf4t\xe9 de l'addon correspondant \xe0 votre base de donn\xe9es. Cela va ouvrir\nune fen\xeatre avec le dashboard correspondant \xe0 votre base de donn\xe9es."]}),"\n",(0,a.jsx)(s.h2,{id:"cr\xe9er-une-backup-de-la-base-de-donn\xe9es",children:"Cr\xe9er une backup de la base de donn\xe9es"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.em,{children:"Parce qu'on ne sait jamais !"})}),"\n",(0,a.jsx)(s.p,{children:"Maintenant, vous avez le dashboard ci-dessous devant les yeux :"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"img",src:n(6539).Z+"",width:"1867",height:"933"})}),"\n",(0,a.jsxs)(s.p,{children:["Rendez vous sur l'onglet ",(0,a.jsx)(s.code,{children:"Backups"}),", en haut \xe0 droite :"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"img",src:n(9729).Z+"",width:"1875",height:"948"})}),"\n",(0,a.jsxs)(s.p,{children:["Pour cr\xe9er votre backup, il vous suffit maintenant d'appuyer sur le bouton ",(0,a.jsx)(s.code,{children:"Make manual backup"}),". Vous le verrez\nappara\xeetre dans la liste des backups disponibles sur la droite de l'interface. T\xe9l\xe9chargez cette sauvegarde via le\nbouton ",(0,a.jsx)(s.code,{children:"Download"})," \xe0 l'\xe9cran."]}),"\n",(0,a.jsx)(s.h2,{id:"restaurer-la-base-de-donn\xe9es-\xe0-une-date-pr\xe9cise",children:"Restaurer la base de donn\xe9es \xe0 une date pr\xe9cise"}),"\n",(0,a.jsxs)(s.p,{children:["Il vous est maintenant possible de restaurer la base de donn\xe9es \xe0 un point donn\xe9 dans le temps. Choisissez l'heure \xe0\nlaquelle vous souhaitez restaurer la base de donn\xe9es puis appuyez sur ",(0,a.jsx)(s.code,{children:"Restore database"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"restaurer-la-base-de-donn\xe9es-depuis-le-dump-que-vous-avez-g\xe9n\xe9r\xe9",children:"Restaurer la base de donn\xe9es depuis le dump que vous avez g\xe9n\xe9r\xe9"}),"\n",(0,a.jsx)(s.p,{children:"Dans certains cas, vous pourriez \xeatre amen\xe9s \xe0 restaurer la base de donn\xe9es depuis le dump que vous avez g\xe9n\xe9r\xe9 plus t\xf4t."}),"\n",(0,a.jsxs)(s.p,{children:["Dans ce cas-l\xe0, r\xe9f\xe9rez-vous directement \xe0 la ",(0,a.jsx)(s.a,{href:"https://doc.scalingo.com/databases/postgresql/dump-restore",children:"documentation de Scalingo"}),"\nsur le sujet."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"And voil\xe0 !"})})]})}function u(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9729:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/backups-6298a89dd3122d81672fc45f490765dc.png"},6539:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/dashboard-bdd-568af82117ec0c6881203fbc0b03d70c.png"},9651:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/onglet-scalingo-app-201ffa658f12eb12c44b0d0b88306359.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>t,a:()=>o});var a=n(7294);const d={},r=a.createContext(d);function o(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);