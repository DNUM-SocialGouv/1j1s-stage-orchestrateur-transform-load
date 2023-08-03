"use strict";(self.webpackChunk_1j1s_etl_docs=self.webpackChunk_1j1s_etl_docs||[]).push([[278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Comment resynchroniser les donn\xe9es Meilisearch avec celles de Strapi ?",sidebar_position:6},s="Resynchroniser les donn\xe9es Meilisearch avec celles de Strapi",a={unversionedId:"tuto/resynchronisation-meilisearch-strapi",id:"tuto/resynchronisation-meilisearch-strapi",title:"Resynchroniser les donn\xe9es Meilisearch avec celles de Strapi",description:"20 Avril 2023",source:"@site/docs/tuto/resynchronisation-meilisearch-strapi.md",sourceDirName:"tuto",slug:"/tuto/resynchronisation-meilisearch-strapi",permalink:"/1j1s-etl/docs/tuto/resynchronisation-meilisearch-strapi",draft:!1,editUrl:"https://github.com/DNUM-SocialGouv/1j1s-etl/tree/main/docs/docs/docs/tuto/resynchronisation-meilisearch-strapi.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Comment resynchroniser les donn\xe9es Meilisearch avec celles de Strapi ?",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Que faire Lorsque le flux ne se mets plus \xe0 jour ?",permalink:"/1j1s-etl/docs/tuto/le_flux_ne_met_plus_a_jour"},next:{title:"Comment cr\xe9er un nouveau bucket sur Minio",permalink:"/1j1s-etl/docs/tuto/creer-nouveau-bucket-minio"}},l={},c=[{value:"Contexte",id:"contexte",level:2},{value:"Qu&#39;est-ce qui nous met la puce \xe0 l&#39;oreille ?",id:"quest-ce-qui-nous-met-la-puce-\xe0-loreille-",level:2},{value:"Que faire ?",id:"que-faire-",level:2},{value:"Si \xe7a ne r\xe9sout pas le probl\xe8me ?",id:"si-\xe7a-ne-r\xe9sout-pas-le-probl\xe8me-",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"resynchroniser-les-donn\xe9es-meilisearch-avec-celles-de-strapi"},"Resynchroniser les donn\xe9es Meilisearch avec celles de Strapi"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"20 Avril 2023")),(0,i.kt)("h2",{id:"contexte"},"Contexte"),(0,i.kt)("p",null,"Du fait de l'indexation document par document impos\xe9e par la strat\xe9gie d'insertion, modification et suppression d'une\nentr\xe9e dans une collection par Strapi, il peut arriver qu'une d\xe9synchronisation se produise entre Meilisearch et Strapi. "),(0,i.kt)("h2",{id:"quest-ce-qui-nous-met-la-puce-\xe0-loreille-"},"Qu'est-ce qui nous met la puce \xe0 l'oreille ?"),(0,i.kt)("p",null,"En r\xe8gle g\xe9n\xe9rale, nous nous apercevons de cette d\xe9synchronisation lorsque nous tentons d'acc\xe9der au d\xe9tail d'une offre\nde stage ou d'une annonce de logement et que l'interface utilisateur nous dit que nous n'avons pas trouv\xe9 l'offre ou\nl'annonce."),(0,i.kt)("h2",{id:"que-faire-"},"Que faire ?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Connectez-vous \xe0 l'application ",(0,i.kt)("inlineCode",{parentName:"li"},"Main CMS")," de production, si vous ne savez pas o\xf9 trouver les identifiants, demandez ;"),(0,i.kt)("li",{parentName:"ol"},"Arriv\xe9 sur l'interface administrateur, vous trouverez un onglet ",(0,i.kt)("inlineCode",{parentName:"li"},"Meilisearch")," sur le panneau de gauche, cliquez\ndessus ;"),(0,i.kt)("li",{parentName:"ol"},"Cherchez ensuite dans la liste des collections celle qui pose soucis ;"),(0,i.kt)("li",{parentName:"ol"},"Si une d\xe9synchronisation est en effet d'actualit\xe9, vous devriez voir un diff\xe9rentiel entre le nombre de documents\npr\xe9sents en base de donn\xe9es et le nombre d'entr\xe9es de la collection dans la base de donn\xe9es de Strapi :")),(0,i.kt)("p",null,"Exemple sans d\xe9synchronisation :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ex sans d\xe9synchronisation",src:n(3438).Z,width:"1522",height:"66"})),(0,i.kt)("p",null,"Exemple avec d\xe9synchronisation :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ex avec d\xe9synchronisation",src:n(9570).Z,width:"1541",height:"67"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Vous voyez un bouton ",(0,i.kt)("inlineCode",{parentName:"li"},"Update"),"tout \xe0 droite de la ligne qui vous permet de purger les documents de ladite collection\nsur Meilisearch et de les r\xe9indexer par batch, cliquez dessus une fois et soyez patient ;"),(0,i.kt)("li",{parentName:"ol"},"Attendez un moment puis v\xe9rifiez si la d\xe9synchronisation a disparu.")),(0,i.kt)("h2",{id:"si-\xe7a-ne-r\xe9sout-pas-le-probl\xe8me-"},"Si \xe7a ne r\xe9sout pas le probl\xe8me ?"),(0,i.kt)("p",null,"Vous pouvez investiguer davantage en manipulant directement l'\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.meilisearch.com/reference/api/overview.html"},"API de Meilisearch")," pour voir si l'indexation est toujours\nen cours ou non, voir si des documents ont bel et bien \xe9t\xe9 envoy\xe9s \xe0 Meilisearch etc..."),(0,i.kt)("p",null,"Essayez de durcir les m\xe9thodes li\xe9es \xe0 la transformation de vos donn\xe9es dans l'application ",(0,i.kt)("inlineCode",{parentName:"p"},"Main CMS")," pour voir si cela\nr\xe9sout votre probl\xe8me."))}d.isMDXComponent=!0},9570:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/synchronisation-nok-730cb8d81a9c01048f8240b104e88eed.png"},3438:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/synchronisation-ok-728e2ed3e17f6263600c002a0f6befb6.png"}}]);