"use strict";(self.webpackChunkcats_pinterest=self.webpackChunkcats_pinterest||[]).push([[449],{857:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(3),o=n(848);const i=(0,r.A)((0,o.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"}),"Favorite")},355:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(3),o=n(848);const i=(0,r.A)((0,o.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}),"FavoriteBorder")},3:(e,t,n)=>{n.d(t,{A:()=>S});var r=n(540),o=n(164),i=n(659),s=n(466),a=n(927),c=n(77),l=n(984),u=n(413),d=n(288);function f(e){return(0,d.Ay)("MuiSvgIcon",e)}(0,u.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var m=n(848);const p=(0,a.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,s.A)(n.color)}`],t[`fontSize${(0,s.A)(n.fontSize)}`]]}})((0,c.A)((({theme:e})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:e.transitions?.create?.("fill",{duration:(e.vars??e).transitions?.duration?.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:e.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:e.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:e.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((e.vars??e).palette).filter((([,e])=>e&&e.main)).map((([t])=>({props:{color:t},style:{color:(e.vars??e).palette?.[t]?.main}}))),{props:{color:"action"},style:{color:(e.vars??e).palette?.action?.active}},{props:{color:"disabled"},style:{color:(e.vars??e).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]})))),v=r.forwardRef((function(e,t){const n=(0,l.b)({props:e,name:"MuiSvgIcon"}),{children:a,className:c,color:u="inherit",component:d="svg",fontSize:v="medium",htmlColor:h,inheritViewBox:S=!1,titleAccess:g,viewBox:x="0 0 24 24",...j}=n,y=r.isValidElement(a)&&"svg"===a.type,k={...n,color:u,component:d,fontSize:v,instanceFontSize:e.fontSize,inheritViewBox:S,viewBox:x,hasSvgAsChild:y},A={};S||(A.viewBox=x);const z=(e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root","inherit"!==t&&`color${(0,s.A)(t)}`,`fontSize${(0,s.A)(n)}`]};return(0,i.A)(o,f,r)})(k);return(0,m.jsxs)(p,{as:d,className:(0,o.A)(z.root,c),focusable:"false",color:h,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:t,...A,...j,...y&&a.props,ownerState:k,children:[y?a.props.children:a,g?(0,m.jsx)("title",{children:g}):null]})}));v.muiName="SvgIcon";const h=v;function S(e,t){function n(n,r){return(0,m.jsx)(h,{"data-testid":`${t}Icon`,ref:r,...n,children:e})}return n.muiName=h.muiName,r.memo(r.forwardRef(n))}},38:(e,t,n)=>{n.d(t,{r:()=>s});var r=n(540),o=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},i="favoriteCats",s=function(){var e=(0,r.useState)((function(){var e=localStorage.getItem(i);return e?JSON.parse(e):[]})),t=e[0],n=e[1];(0,r.useEffect)((function(){localStorage.setItem(i,JSON.stringify(t))}),[t]);var s=(0,r.useCallback)((function(e){return t.some((function(t){return t.id===e}))}),[t]),a=(0,r.useCallback)((function(e){n((function(t){return t.some((function(t){return t.id===e.id}))?t.filter((function(t){return t.id!==e.id})):o(o([],t,!0),[e],!1)}))}),[]);return{favorites:t,isLiked:s,toggleFavorite:a}}},558:(e,t,n)=>{n.d(t,{B:()=>d});var r=n(848),o=n(540),i=n(355),s=n(857),a="Ou9T6Eyh",c=function(e){var t=e.isLiked,n=e.onClick,c=e.className,l=(0,o.useState)(!1),u=l[0],d=l[1];return(0,r.jsx)("button",{className:"".concat("A0S1RtfW"," ").concat(c||""),onClick:function(e){e.stopPropagation(),n()},onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},"data-like":t,children:t||u?(0,r.jsx)(s.A,{className:a}):(0,r.jsx)(i.A,{className:a})})},l=function(e){var t=e.cat,n=e.isLiked,o=e.onLike;return(0,r.jsxs)("li",{className:"uLaWd345",children:[(0,r.jsx)("img",{src:t.url,alt:"Cat",className:"lnEz3BSb",loading:"lazy"}),(0,r.jsx)(c,{isLiked:n,onClick:function(){o(t)},className:"ZWi2iOdK"})]})},u=n(38),d=function(e){var t=e.cats,n=e.className,i=e.status,s=(0,u.r)(),a=s.isLiked,c=s.toggleFavorite,d=(0,o.useState)(t),f=d[0],m=d[1],p=(0,o.useCallback)((function(e){c(e),m((function(t){return t.filter((function(t){return t.id!==e.id}))}))}),[c]);return(0,r.jsx)("ul",{className:"".concat("Uts068ve"," ").concat(n||""),children:i?t.map((function(e){return(0,r.jsx)(l,{cat:e,isLiked:a(e.id),onLike:function(){return p(e)}},e.id)})):f.map((function(e){return(0,r.jsx)(l,{cat:e,isLiked:a(e.id),onLike:function(){return p(e)}},e.id)}))})}},449:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(848),o=function(e){var t=e.message,n=e.className;return(0,r.jsx)("div",{className:"".concat("fua8UCGt"," ").concat(n||""),children:(0,r.jsx)("span",{className:"lxg2ah60",children:t})})},i=n(38),s=n(558),a=n(777);const c=function(){var e=(0,i.r)().favorites;return e.length?(0,r.jsx)(a.g,{children:(0,r.jsx)(s.B,{cats:e,status:!1})}):(0,r.jsx)(a.g,{children:(0,r.jsx)(o,{message:"У вас пока нет любимых котиков :("})})}},777:(e,t,n)=>{n.d(t,{g:()=>c});var r=n(848),o=n(753),i=function(e){var t=e.to,n=e.children;return(0,r.jsx)(o.k2,{to:t,className:function(e){var t=e.isActive;return"".concat("EoJugVt4"," ").concat(t?"ck6UsV3m":"")},children:n})},s=function(){return(0,r.jsxs)("nav",{className:"Yq2gB_mH",children:[(0,r.jsx)(i,{to:"/",children:"Все котики"}),(0,r.jsx)(i,{to:"/likes",children:"Любимые котики"})]})},a=function(){return(0,r.jsx)("header",{className:"ti_pppXr",children:(0,r.jsx)(s,{})})},c=function(e){var t=e.children;return(0,r.jsxs)("div",{className:"QIzqS0yJ",children:[(0,r.jsx)(a,{}),(0,r.jsx)("main",{className:"dOFpbbo2",children:t})]})}}}]);