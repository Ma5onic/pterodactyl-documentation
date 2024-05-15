"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[1007],{1700:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(5893),r=n(1151),o=n(2991);const s={slug:"/tutorials"},c="Tutorials",a={id:"documentation/tutorials/index",title:"Tutorials",description:"",source:"@site/docs/documentation/tutorials/index.md",sourceDirName:"documentation/tutorials",slug:"/tutorials",permalink:"/pterodactyl-documentation/docs/tutorials",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/documentation/tutorials/index.md",tags:[],version:"current",frontMatter:{slug:"/tutorials"},sidebar:"DocsSidebar",previous:{title:"Additional Configuration",permalink:"/pterodactyl-documentation/docs/wings/configuration"},next:{title:"Setting up MySQL",permalink:"/pterodactyl-documentation/docs/project/mysql"}},l={},d=[];function u(t){const e={h1:"h1",...(0,r.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"tutorials",children:"Tutorials"}),"\n","\n","\n",(0,i.jsx)(o.Z,{})]})}function m(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},2991:(t,e,n)=>{n.d(e,{Z:()=>g});n(7294);var i=n(6905),r=n(3438),o=n(3692),s=n(3919),c=n(5999),a=n(2503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function u(t){let{href:e,children:n}=t;return(0,d.jsx)(o.Z,{href:e,className:(0,i.Z)("card padding--lg",l.cardContainer),children:n})}function m(t){let{href:e,icon:n,title:r,description:o}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,i.Z)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),o&&(0,d.jsx)("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:o,children:o})]})}function p(t){let{item:e}=t;const n=(0,r.LM)(e);return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const n=(0,s.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(e.docId??void 0);return(0,d.jsx)(m,{href:e.href,icon:n,title:e.label,description:e.description??i?.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(f,{item:e});case"category":return(0,d.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const n=(0,r.jA)();return(0,d.jsx)(g,{items:n.items,className:e})}function g(t){const{items:e,className:n}=t;if(!e)return(0,d.jsx)(x,{...t});const o=(0,r.MN)(e);return(0,d.jsx)("section",{className:(0,i.Z)("row",n),children:o.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:t})},e)))})}},1151:(t,e,n)=>{n.d(e,{a:()=>s});var i=n(7294);const r={},o=i.createContext(r);function s(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}}}]);