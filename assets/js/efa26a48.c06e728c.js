"use strict";(self.webpackChunk_1j1s_etl_docs=self.webpackChunk_1j1s_etl_docs||[]).push([[707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},s="Exception dans le linter",l={unversionedId:"adr/2023-02-08.exception-dans-le-linter",id:"adr/2023-02-08.exception-dans-le-linter",title:"Exception dans le linter",description:"8 f\xe9vrier 2023",source:"@site/docs/adr/2023-02-08.exception-dans-le-linter.md",sourceDirName:"adr",slug:"/adr/2023-02-08.exception-dans-le-linter",permalink:"/1j1s-etl/docs/adr/2023-02-08.exception-dans-le-linter",draft:!1,editUrl:"https://github.com/DNUM-SocialGouv/1j1s-etl/tree/main/docs/docs/docs/adr/2023-02-08.exception-dans-le-linter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Les contextes d'un commit",permalink:"/1j1s-etl/docs/adr/2023-01-30.contexte-commit"},next:{title:"Migration vers NestJS",permalink:"/1j1s-etl/docs/adr/2023-02-15.migration-nestjs"}},a={},c=[{value:"Contributeurs",id:"contributeurs",level:2},{value:"Statut",id:"statut",level:2},{value:"Contexte",id:"contexte",level:2},{value:"D\xe9cision",id:"d\xe9cision",level:2},{value:"Cons\xe9quences",id:"cons\xe9quences",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exception-dans-le-linter"},"Exception dans le linter"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"8 f\xe9vrier 2023")),(0,o.kt)("h2",{id:"contributeurs"},"Contributeurs"),(0,o.kt)("p",null,"S. Fran\xe7ois, H. Dumont"),(0,o.kt)("h2",{id:"statut"},"Statut"),(0,o.kt)("p",null,"Accept\xe9"),(0,o.kt)("h2",{id:"contexte"},"Contexte"),(0,o.kt)("p",null,"Lorsque nous lan\xe7ons le linter sur notre code, ESLint nous remonte des warnings li\xe9s \xe0 une variable non-utilis\xe9e ou\n\xe0 des ",(0,o.kt)("inlineCode",{parentName:"p"},"non-null assertions")," tandis que le code au-dessus nous prot\xe8ge de ces erreurs."),(0,o.kt)("h2",{id:"d\xe9cision"},"D\xe9cision"),(0,o.kt)("p",null,"Nous avons donc d\xe9cid\xe9 d'ignorer ces deux erreurs ",(0,o.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/no-unused-vars")," et\n",(0,o.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/no-non-null-assertion")," dans les fichiers concern\xe9s."),(0,o.kt)("h2",{id:"cons\xe9quences"},"Cons\xe9quences"),(0,o.kt)("p",null,"D'autres erreurs pourraient \xeatre occult\xe9es dans ces m\xeames fichiers s'ils \xe9voluent au fil du temps."))}d.isMDXComponent=!0}}]);