"use strict";(self.webpackChunk_1j1s_etl_docs=self.webpackChunk_1j1s_etl_docs||[]).push([[931],{3905:(e,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>m});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),u=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},i=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),c=u(a),b=r,m=c["".concat(l,".").concat(b)]||c[b]||p[b]||s;return a?t.createElement(m,o(o({ref:n},i),{},{components:a})):t.createElement(m,o({ref:n},i))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=b;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[c]="string"==typeof e?e:r,o[1]=d;for(var u=2;u<s;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}b.displayName="MDXCreateElement"},5685:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var t=a(7462),r=(a(7294),a(3905));const s={},o="Rollback de base de donn\xe9es",d={unversionedId:"maintenance/rollback-database",id:"maintenance/rollback-database",title:"Rollback de base de donn\xe9es",description:"Acc\xe9der au dashboard de la base de donn\xe9es",source:"@site/docs/maintenance/rollback-database.md",sourceDirName:"maintenance",slug:"/maintenance/rollback-database",permalink:"/1j1s-etl/docs/maintenance/rollback-database",draft:!1,editUrl:"https://github.com/DNUM-SocialGouv/1j1s-etl/tree/main/docs/docs/docs/maintenance/rollback-database.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Purge des donn\xe9es",permalink:"/1j1s-etl/docs/maintenance/purge-des-donnees"},next:{title:"Que faire si tout se passe mal apr\xe8s une mise en production ?",permalink:"/1j1s-etl/docs/maintenance/sos"}},l={},u=[{value:"Acc\xe9der au dashboard de la base de donn\xe9es",id:"acc\xe9der-au-dashboard-de-la-base-de-donn\xe9es",level:2},{value:"Cr\xe9er une backup de la base de donn\xe9es",id:"cr\xe9er-une-backup-de-la-base-de-donn\xe9es",level:2},{value:"Restaurer la base de donn\xe9es \xe0 une date pr\xe9cise",id:"restaurer-la-base-de-donn\xe9es-\xe0-une-date-pr\xe9cise",level:2},{value:"Restaurer la base de donn\xe9es depuis le dump que vous avez g\xe9n\xe9r\xe9",id:"restaurer-la-base-de-donn\xe9es-depuis-le-dump-que-vous-avez-g\xe9n\xe9r\xe9",level:2}],i={toc:u},c="wrapper";function p(e){let{components:n,...s}=e;return(0,r.kt)(c,(0,t.Z)({},i,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rollback-de-base-de-donn\xe9es"},"Rollback de base de donn\xe9es"),(0,r.kt)("h2",{id:"acc\xe9der-au-dashboard-de-la-base-de-donn\xe9es"},"Acc\xe9der au dashboard de la base de donn\xe9es"),(0,r.kt)("p",null,"Scalingo propose avec ses offres payantes d'automatiser la cr\xe9ation de backup d'une base de donn\xe9es p\xe9riodiquement (et\nc'est d\xe9j\xe0 fait pour les environnements de production)."),(0,r.kt)("p",null,"Maintenant, vous allez peut-\xeatre vouloir cr\xe9er une back-up manuellement. Pour ce faire, il faut se rendre sur Scalingo,\nl\xe0 o\xf9 les ressources d'une application sont d\xe9taill\xe9es :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(9651).Z,width:"1523",height:"621"})),(0,r.kt)("p",null,"Ensuite, cliquez sur le bouton ",(0,r.kt)("inlineCode",{parentName:"p"},"Go to dashboard")," \xe0 c\xf4t\xe9 de l'addon correspondant \xe0 votre base de donn\xe9es. Cela va ouvrir\nune fen\xeatre avec le dashboard correspondant \xe0 votre base de donn\xe9es."),(0,r.kt)("h2",{id:"cr\xe9er-une-backup-de-la-base-de-donn\xe9es"},"Cr\xe9er une backup de la base de donn\xe9es"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Parce qu'on ne sait jamais !")),(0,r.kt)("p",null,"Maintenant, vous avez le dashboard ci-dessous devant les yeux :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(6539).Z,width:"1867",height:"933"})),(0,r.kt)("p",null,"Rendez vous sur l'onglet ",(0,r.kt)("inlineCode",{parentName:"p"},"Backups"),", en haut \xe0 droite :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(9729).Z,width:"1875",height:"948"})),(0,r.kt)("p",null,"Pour cr\xe9er votre backup, il vous suffit maintenant d'appuyer sur le bouton ",(0,r.kt)("inlineCode",{parentName:"p"},"Make manual backup"),". Vous le verrez\nappara\xeetre dans la liste des backups disponibles sur la droite de l'interface. T\xe9l\xe9chargez cette sauvegarde via le\nbouton ",(0,r.kt)("inlineCode",{parentName:"p"},"Download")," \xe0 l'\xe9cran."),(0,r.kt)("h2",{id:"restaurer-la-base-de-donn\xe9es-\xe0-une-date-pr\xe9cise"},"Restaurer la base de donn\xe9es \xe0 une date pr\xe9cise"),(0,r.kt)("p",null,"Il vous est maintenant possible de restaurer la base de donn\xe9es \xe0 un point donn\xe9 dans le temps. Choisissez l'heure \xe0\nlaquelle vous souhaitez restaurer la base de donn\xe9es puis appuyez sur ",(0,r.kt)("inlineCode",{parentName:"p"},"Restore database"),"."),(0,r.kt)("h2",{id:"restaurer-la-base-de-donn\xe9es-depuis-le-dump-que-vous-avez-g\xe9n\xe9r\xe9"},"Restaurer la base de donn\xe9es depuis le dump que vous avez g\xe9n\xe9r\xe9"),(0,r.kt)("p",null,"Dans certains cas, vous pourriez \xeatre amen\xe9s \xe0 restaurer la base de donn\xe9es depuis le dump que vous avez g\xe9n\xe9r\xe9 plus t\xf4t."),(0,r.kt)("p",null,"Dans ce cas-l\xe0, r\xe9f\xe9rez-vous directement \xe0 la ",(0,r.kt)("a",{parentName:"p",href:"https://doc.scalingo.com/databases/postgresql/dump-restore"},"documentation de Scalingo"),"\nsur le sujet."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"And voil\xe0 !")))}p.isMDXComponent=!0},9729:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/backups-6298a89dd3122d81672fc45f490765dc.png"},6539:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/dashboard-bdd-568af82117ec0c6881203fbc0b03d70c.png"},9651:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/onglet-scalingo-app-201ffa658f12eb12c44b0d0b88306359.png"}}]);