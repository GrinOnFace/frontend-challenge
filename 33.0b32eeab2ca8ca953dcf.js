"use strict";(self.webpackChunkcats_pinterest=self.webpackChunkcats_pinterest||[]).push([[33],{38:(t,e,n)=>{n.d(e,{r:()=>i});var r=n(540),a=function(t,e,n){if(n||2===arguments.length)for(var r,a=0,c=e.length;a<c;a++)!r&&a in e||(r||(r=Array.prototype.slice.call(e,0,a)),r[a]=e[a]);return t.concat(r||Array.prototype.slice.call(e))},c="favoriteCats",i=function(){var t=(0,r.useState)((function(){var t=localStorage.getItem(c);return t?JSON.parse(t):[]})),e=t[0],n=t[1];(0,r.useEffect)((function(){localStorage.setItem(c,JSON.stringify(e))}),[e]);var i=(0,r.useCallback)((function(t){return e.some((function(e){return e.id===t}))}),[e]),o=(0,r.useCallback)((function(t){n((function(e){return e.some((function(e){return e.id===t.id}))?e.filter((function(e){return e.id!==t.id})):a(a([],e,!0),[t],!1)}))}),[]);return{favorites:e,isLiked:i,toggleFavorite:o}}},558:(t,e,n)=>{n.d(e,{B:()=>f});var r=n(848),a=n(540),c=n(355),i=n(857),o="Ou9T6Eyh",s=function(t){var e=t.isLiked,n=t.onClick,s=t.className,u=(0,a.useState)(!1),l=u[0],f=u[1];return(0,r.jsx)("button",{className:"".concat("A0S1RtfW"," ").concat(s||""),onClick:function(t){t.stopPropagation(),n()},onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)},"data-like":e,children:e||l?(0,r.jsx)(i.A,{className:o}):(0,r.jsx)(c.A,{className:o})})},u=function(t){var e=t.cat,n=t.isLiked,a=t.onLike;return(0,r.jsxs)("li",{className:"uLaWd345",children:[(0,r.jsx)("img",{src:e.url,alt:"Cat",className:"lnEz3BSb",loading:"lazy"}),(0,r.jsx)(s,{isLiked:n,onClick:function(){a(e)},className:"ZWi2iOdK"})]})},l=n(38),f=function(t){var e=t.cats,n=t.className,c=t.status,i=(0,l.r)(),o=i.isLiked,s=i.toggleFavorite,f=(0,a.useState)(e),d=f[0],p=f[1],h=(0,a.useCallback)((function(t){s(t),p((function(e){return e.filter((function(e){return e.id!==t.id}))}))}),[s]);return(0,r.jsx)("ul",{className:"".concat("Uts068ve"," ").concat(n||""),children:c?e.map((function(t){return(0,r.jsx)(u,{cat:t,isLiked:o(t.id),onLike:function(){return h(t)}},t.id)})):d.length>0?d.map((function(t){return(0,r.jsx)(u,{cat:t,isLiked:o(t.id),onLike:function(){return h(t)}},t.id)})):null})}},33:(t,e,n)=>{n.r(e),n.d(e,{default:()=>p});var r=n(848),a=n(540),c=n(356),i=n(83).A.create({baseURL:"https://api.thecatapi.com/v1/images/",headers:{"Content-Type":"application/json","x-api-key":"live_0EqFHUl2lsWee6gEzcZRVaqdH9I4e7DH9XldIcwKChfYVnZe976jK9PowB9C5lDC"}}),o=n(948),s={page:o.Ic.page,limit:o.Ic.limit,order:o.Ic.order},u={getCatList:function(t){return e=this,n=arguments,a=function(t){var e=t.page,n=void 0===e?s.page:e,r=t.limit,a=void 0===r?s.limit:r,c=t.order,o=void 0===c?s.order:c;return function(t,e){var n,r,a,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=o(0),i.throw=o(1),i.return=o(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(c=0)),c;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,r=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!((a=(a=c.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){c.label=o[1];break}if(6===o[0]&&c.label<a[1]){c.label=a[1],a=o;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(o);break}a[2]&&c.ops.pop(),c.trys.pop();continue}o=e.call(t,c)}catch(t){o=[6,t],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(t){switch(t.label){case 0:return[4,i.get("search",{params:{limit:a,page:n,order:o}})];case 1:return[2,t.sent().data]}}))},new((r=void 0)||(r=Promise))((function(t,c){function i(t){try{s(a.next(t))}catch(t){c(t)}}function o(t){try{s(a.throw(t))}catch(t){c(t)}}function s(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(i,o)}s((a=a.apply(e,n||[])).next())}));var e,n,r,a}},l=n(558),f=n(777),d=function(t,e,n){if(n||2===arguments.length)for(var r,a=0,c=e.length;a<c;a++)!r&&a in e||(r||(r=Array.prototype.slice.call(e,0,a)),r[a]=e[a]);return t.concat(r||Array.prototype.slice.call(e))};const p=function(){var t=(0,a.useState)([]),e=t[0],n=t[1],i=(0,a.useState)(o.Ic.page),s=i[0],p=i[1],h=(0,a.useState)(!1),v=h[0],m=h[1],g=(0,a.useCallback)((function(){v||(m(!0),u.getCatList({page:s+1}).then((function(t){n((function(e){return d(d([],e,!0),t,!0)})),p((function(t){return t+1}))})).catch((function(t){console.error(t)})).finally((function(){m(!1)})))}),[s,v]);return(0,a.useEffect)((function(){u.getCatList({page:o.Ic.page}).then((function(t){n(t)})).catch((function(t){console.error(t)}))}),[]),function(t){var e=t.callback,n=t.isLoading;(0,a.useEffect)((function(){var t=function(){var t=document.documentElement.scrollHeight,r=document.documentElement.scrollTop,a=document.documentElement.clientHeight;!n&&t-r<=a+o.CZ&&e()};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[e,n])}({callback:g,isLoading:v}),(0,r.jsxs)(f.g,{children:[(0,r.jsx)(l.B,{cats:e,status:!0}),v&&(0,r.jsx)(c.a,{})]})}},777:(t,e,n)=>{n.d(e,{g:()=>s});var r=n(848),a=n(753),c=function(t){var e=t.to,n=t.children;return(0,r.jsx)(a.k2,{to:e,className:function(t){var e=t.isActive;return"".concat("EoJugVt4"," ").concat(e?"ck6UsV3m":"")},children:n})},i=function(){return(0,r.jsxs)("nav",{className:"Yq2gB_mH",children:[(0,r.jsx)(c,{to:"/",children:"Все котики"}),(0,r.jsx)(c,{to:"/likes",children:"Любимые котики"})]})},o=function(){return(0,r.jsx)("header",{className:"ti_pppXr",children:(0,r.jsx)(i,{})})},s=function(t){var e=t.children;return(0,r.jsxs)("div",{className:"QIzqS0yJ",children:[(0,r.jsx)(o,{}),(0,r.jsx)("main",{className:"dOFpbbo2",children:e})]})}}}]);