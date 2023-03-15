"use strict";(self.webpackChunk_1j1s_etl_docs=self.webpackChunk_1j1s_etl_docs||[]).push([[807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},s="Purge des donn\xe9es",i={unversionedId:"maintenance/purge-des-donnees",id:"maintenance/purge-des-donnees",title:"Purge des donn\xe9es",description:"Respectez les pr\xe9requis avant de commencer",source:"@site/docs/maintenance/purge-des-donnees.md",sourceDirName:"maintenance",slug:"/maintenance/purge-des-donnees",permalink:"/1j1s-etl/docs/maintenance/purge-des-donnees",draft:!1,editUrl:"https://github.com/DNUM-SocialGouv/1j1s-etl/tree/main/docs/docs/docs/maintenance/purge-des-donnees.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pr\xe9requis et conseils",permalink:"/1j1s-etl/docs/maintenance/prerequis"},next:{title:"Que faire si tout se passe mal apr\xe8s une mise en production ?",permalink:"/1j1s-etl/docs/maintenance/sos"}},l={},c=[{value:"Contexte d&#39;utilisation",id:"contexte-dutilisation",level:2},{value:"Commande \xe0 lancer",id:"commande-\xe0-lancer",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"purge-des-donn\xe9es"},"Purge des donn\xe9es"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Respectez les pr\xe9requis avant de commencer")),(0,a.kt)("h2",{id:"contexte-dutilisation"},"Contexte d'utilisation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lorsque des donn\xe9es sont corrompues et que l'origine est introuvable. ")),(0,a.kt)("h2",{id:"commande-\xe0-lancer"},"Commande \xe0 lancer"),(0,a.kt)("p",null,"Vous avez la possibilit\xe9 de supprimer l'ensemble des donn\xe9es des contextes suivants :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Contexte"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subcommand"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Actif"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Ev\xe8nements"),(0,a.kt)("td",{parentName:"tr",align:"left"},"purge-events"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Logements"),(0,a.kt)("td",{parentName:"tr",align:"left"},"purge-housing-ads"),(0,a.kt)("td",{parentName:"tr",align:"center"},"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Stage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"purge-internships"),(0,a.kt)("td",{parentName:"tr",align:"center"},"X")))),(0,a.kt)("p",null,"Pour ce faire vous devez lancer la commande suivante : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ scalingo -a ${SCALINGO_APP} run "npm run cli -- maintain ${SUBCOMMAND}"\n')),(0,a.kt)("p",null,"Apr\xe8s avoir purg\xe9 les donn\xe9es, relancer les crons du contexte en utilisant les commandes de chargement associ\xe9es \xe0 ce dernier."))}d.isMDXComponent=!0}}]);