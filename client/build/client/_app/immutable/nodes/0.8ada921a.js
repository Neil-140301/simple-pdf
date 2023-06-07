var Gt=Object.defineProperty;var Jt=(t,n,e)=>n in t?Gt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var M=(t,n,e)=>(Jt(t,typeof n!="symbol"?n+"":n,e),e);import{S as Kt,i as Wt,s as Xt,C as Yt,D as Zt,E as te,F as ee,g as ne,d as oe}from"../chunks/index.b13adcb1.js";/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 1.0.7
*/const vt=Object.freeze({left:0,top:0,width:16,height:16}),R=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),j=Object.freeze({...vt,...R}),J=Object.freeze({...j,body:"",hidden:!1}),re=Object.freeze({width:null,height:null}),_t=Object.freeze({...re,...R});function ie(t,n=0){const e=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(e===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(e!==t){let o=0;switch(e){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(t.slice(0,t.length-e.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return n}const se=/[\s,]+/;function ce(t,n){n.split(se).forEach(e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}const kt={..._t,preserveAspectRatio:""};function ct(t){const n={...kt},e=(r,o)=>t.getAttribute(r)||o;return n.width=e("width",null),n.height=e("height",null),n.rotate=ie(e("rotate","")),ce(n,e("flip","")),n.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),n}function ue(t,n){for(const e in kt)if(t[e]!==n[e])return!0;return!1}const _=/^[a-z0-9]+(-[a-z0-9]+)*$/,O=(t,n,e,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const u=o.pop(),c=o.pop(),l={provider:o.length>0?o[0]:r,prefix:c,name:u};return n&&!N(l)?null:l}const i=o[0],s=i.split("-");if(s.length>1){const u={provider:r,prefix:s.shift(),name:s.join("-")};return n&&!N(u)?null:u}if(e&&r===""){const u={provider:r,prefix:"",name:i};return n&&!N(u,e)?null:u}return null},N=(t,n)=>t?!!((t.provider===""||t.provider.match(_))&&(n&&t.prefix===""||t.prefix.match(_))&&t.name.match(_)):!1;function le(t,n){const e={};!t.hFlip!=!n.hFlip&&(e.hFlip=!0),!t.vFlip!=!n.vFlip&&(e.vFlip=!0);const r=((t.rotate||0)+(n.rotate||0))%4;return r&&(e.rotate=r),e}function ut(t,n){const e=le(t,n);for(const r in J)r in R?r in t&&!(r in e)&&(e[r]=R[r]):r in n?e[r]=n[r]:r in t&&(e[r]=t[r]);return e}function ae(t,n){const e=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function i(s){if(e[s])return o[s]=[];if(!(s in o)){o[s]=null;const u=r[s]&&r[s].parent,c=u&&i(u);c&&(o[s]=[u].concat(c))}return o[s]}return(n||Object.keys(e).concat(Object.keys(r))).forEach(i),o}function fe(t,n,e){const r=t.icons,o=t.aliases||Object.create(null);let i={};function s(u){i=ut(r[u]||o[u],i)}return s(n),e.forEach(s),ut(t,i)}function At(t,n){const e=[];if(typeof t!="object"||typeof t.icons!="object")return e;t.not_found instanceof Array&&t.not_found.forEach(o=>{n(o,null),e.push(o)});const r=ae(t);for(const o in r){const i=r[o];i&&(n(o,fe(t,o,i)),e.push(o))}return e}const de={provider:"",aliases:{},not_found:{},...vt};function z(t,n){for(const e in n)if(e in t&&typeof t[e]!=typeof n[e])return!1;return!0}function Pt(t){if(typeof t!="object"||t===null)return null;const n=t;if(typeof n.prefix!="string"||!t.icons||typeof t.icons!="object"||!z(t,de))return null;const e=n.icons;for(const o in e){const i=e[o];if(!o.match(_)||typeof i.body!="string"||!z(i,J))return null}const r=n.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(_)||typeof s!="string"||!e[s]&&!r[s]||!z(i,J))return null}return n}const $=Object.create(null);function he(t,n){return{provider:t,prefix:n,icons:Object.create(null),missing:new Set}}function I(t,n){const e=$[t]||($[t]=Object.create(null));return e[n]||(e[n]=he(t,n))}function nt(t,n){return Pt(n)?At(n,(e,r)=>{r?t.icons[e]=r:t.missing.add(e)}):[]}function pe(t,n,e){try{if(typeof e.body=="string")return t.icons[n]={...e},!0}catch{}return!1}function ge(t,n){let e=[];return(typeof t=="string"?[t]:Object.keys($)).forEach(o=>{(typeof o=="string"&&typeof n=="string"?[n]:Object.keys($[o]||{})).forEach(s=>{const u=I(o,s);e=e.concat(Object.keys(u.icons).map(c=>(o!==""?"@"+o+":":"")+s+":"+c))})}),e}let k=!1;function jt(t){return typeof t=="boolean"&&(k=t),k}function A(t){const n=typeof t=="string"?O(t,!0,k):t;if(n){const e=I(n.provider,n.prefix),r=n.name;return e.icons[r]||(e.missing.has(r)?null:void 0)}}function Ot(t,n){const e=O(t,!0,k);if(!e)return!1;const r=I(e.provider,e.prefix);return pe(r,e.name,n)}function lt(t,n){if(typeof t!="object")return!1;if(typeof n!="string"&&(n=t.provider||""),k&&!n&&!t.prefix){let o=!1;return Pt(t)&&(t.prefix="",At(t,(i,s)=>{s&&Ot(i,s)&&(o=!0)})),o}const e=t.prefix;if(!N({provider:n,prefix:e,name:"a"}))return!1;const r=I(n,e);return!!nt(r,t)}function me(t){return!!A(t)}function ye(t){const n=A(t);return n?{...j,...n}:null}function be(t){const n={loaded:[],missing:[],pending:[]},e=Object.create(null);t.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,u=o.name,c=e[i]||(e[i]=Object.create(null)),l=c[s]||(c[s]=I(i,s));let a;u in l.icons?a=n.loaded:s===""||l.missing.has(u)?a=n.missing:a=n.pending;const f={provider:i,prefix:s,name:u};a.push(f)}),n}function Tt(t,n){t.forEach(e=>{const r=e.loaderCallbacks;r&&(e.loaderCallbacks=r.filter(o=>o.id!==n))})}function we(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const n=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!n.length)return;let e=!1;const r=t.provider,o=t.prefix;n.forEach(i=>{const s=i.icons,u=s.pending.length;s.pending=s.pending.filter(c=>{if(c.prefix!==o)return!0;const l=c.name;if(t.icons[l])s.loaded.push({provider:r,prefix:o,name:l});else if(t.missing.has(l))s.missing.push({provider:r,prefix:o,name:l});else return e=!0,!0;return!1}),s.pending.length!==u&&(e||Tt([t],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let Ie=0;function xe(t,n,e){const r=Ie++,o=Tt.bind(null,e,r);if(!n.pending.length)return o;const i={id:r,icons:n,callback:t,abort:o};return e.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}const K=Object.create(null);function at(t,n){K[t]=n}function W(t){return K[t]||K[""]}function Se(t,n=!0,e=!1){const r=[];return t.forEach(o=>{const i=typeof o=="string"?O(o,n,e):o;i&&r.push(i)}),r}var Ce={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ve(t,n,e,r){const o=t.resources.length,i=t.random?Math.floor(Math.random()*o):t.index;let s;if(t.random){let d=t.resources.slice(0);for(s=[];d.length>1;){const w=Math.floor(Math.random()*d.length);s.push(d[w]),d=d.slice(0,w).concat(d.slice(w+1))}s=s.concat(d)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const u=Date.now();let c="pending",l=0,a,f=null,h=[],p=[];typeof r=="function"&&p.push(r);function g(){f&&(clearTimeout(f),f=null)}function m(){c==="pending"&&(c="aborted"),g(),h.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),h=[]}function B(d,w){w&&(p=[]),typeof d=="function"&&p.push(d)}function T(){return{startTime:u,payload:n,status:c,queriesSent:l,queriesPending:h.length,subscribe:B,abort:m}}function y(){c="failed",p.forEach(d=>{d(void 0,a)})}function b(){h.forEach(d=>{d.status==="pending"&&(d.status="aborted")}),h=[]}function Ht(d,w,C){const E=w!=="success";switch(h=h.filter(x=>x!==d),c){case"pending":break;case"failed":if(E||!t.dataAfterTimeout)return;break;default:return}if(w==="abort"){a=C,y();return}if(E){a=C,h.length||(s.length?V():y());return}if(g(),b(),!t.random){const x=t.resources.indexOf(d.resource);x!==-1&&x!==t.index&&(t.index=x)}c="completed",p.forEach(x=>{x(C)})}function V(){if(c!=="pending")return;g();const d=s.shift();if(d===void 0){if(h.length){f=setTimeout(()=>{g(),c==="pending"&&(b(),y())},t.timeout);return}y();return}const w={status:"pending",resource:d,callback:(C,E)=>{Ht(w,C,E)}};h.push(w),l++,f=setTimeout(V,t.rotate),e(d,n,w.callback)}return setTimeout(V),T}function Et(t){const n={...Ce,...t};let e=[];function r(){e=e.filter(u=>u().status==="pending")}function o(u,c,l){const a=ve(n,u,c,(f,h)=>{r(),l&&l(f,h)});return e.push(a),a}function i(u){return e.find(c=>u(c))||null}return{query:o,find:i,setIndex:u=>{n.index=u},getIndex:()=>n.index,cleanup:r}}function ot(t){let n;if(typeof t.resources=="string")n=[t.resources];else if(n=t.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Q=Object.create(null),v=["https://api.simplesvg.com","https://api.unisvg.com"],L=[];for(;v.length>0;)v.length===1||Math.random()>.5?L.push(v.shift()):L.push(v.pop());Q[""]=ot({resources:["https://api.iconify.design"].concat(L)});function ft(t,n){const e=ot(n);return e===null?!1:(Q[t]=e,!0)}function q(t){return Q[t]}function _e(){return Object.keys(Q)}function dt(){}const U=Object.create(null);function ke(t){if(!U[t]){const n=q(t);if(!n)return;const e=Et(n),r={config:n,redundancy:e};U[t]=r}return U[t]}function Mt(t,n,e){let r,o;if(typeof t=="string"){const i=W(t);if(!i)return e(void 0,424),dt;o=i.send;const s=ke(t);s&&(r=s.redundancy)}else{const i=ot(t);if(i){r=Et(i);const s=t.resources?t.resources[0]:"",u=W(s);u&&(o=u.send)}}return!r||!o?(e(void 0,424),dt):r.query(n,o,e)().abort}const ht="iconify2",P="iconify",Ft=P+"-count",pt=P+"-version",Nt=36e5,Ae=168;function X(t,n){try{return t.getItem(n)}catch{}}function rt(t,n,e){try{return t.setItem(n,e),!0}catch{}}function gt(t,n){try{t.removeItem(n)}catch{}}function Y(t,n){return rt(t,Ft,n.toString())}function Z(t){return parseInt(X(t,Ft))||0}const S={local:!0,session:!0},Lt={local:new Set,session:new Set};let it=!1;function Pe(t){it=t}let F=typeof window>"u"?{}:window;function Rt(t){const n=t+"Storage";try{if(F&&F[n]&&typeof F[n].length=="number")return F[n]}catch{}S[t]=!1}function $t(t,n){const e=Rt(t);if(!e)return;const r=X(e,pt);if(r!==ht){if(r){const u=Z(e);for(let c=0;c<u;c++)gt(e,P+c.toString())}rt(e,pt,ht),Y(e,0);return}const o=Math.floor(Date.now()/Nt)-Ae,i=u=>{const c=P+u.toString(),l=X(e,c);if(typeof l=="string"){try{const a=JSON.parse(l);if(typeof a=="object"&&typeof a.cached=="number"&&a.cached>o&&typeof a.provider=="string"&&typeof a.data=="object"&&typeof a.data.prefix=="string"&&n(a,u))return!0}catch{}gt(e,c)}};let s=Z(e);for(let u=s-1;u>=0;u--)i(u)||(u===s-1?(s--,Y(e,s)):Lt[t].add(u))}function Dt(){if(!it){Pe(!0);for(const t in S)$t(t,n=>{const e=n.data,r=n.provider,o=e.prefix,i=I(r,o);if(!nt(i,e).length)return!1;const s=e.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function je(t,n){const e=t.lastModifiedCached;if(e&&e>=n)return e===n;if(t.lastModifiedCached=n,e)for(const r in S)$t(r,o=>{const i=o.data;return o.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===n});return!0}function Oe(t,n){it||Dt();function e(r){let o;if(!S[r]||!(o=Rt(r)))return;const i=Lt[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=Z(o),!Y(o,s+1))return;const u={cached:Math.floor(Date.now()/Nt),provider:t.provider,data:n};return rt(o,P+s.toString(),JSON.stringify(u))}n.lastModified&&!je(t,n.lastModified)||Object.keys(n.icons).length&&(n.not_found&&(n=Object.assign({},n),delete n.not_found),e("local")||e("session"))}function mt(){}function Te(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,we(t)}))}function Ee(t,n){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(n).sort():t.iconsToLoad=n,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let i;if(!o||!(i=W(e)))return;i.prepare(e,r,o).forEach(u=>{Mt(e,u,c=>{if(typeof c!="object")u.icons.forEach(l=>{t.missing.add(l)});else try{const l=nt(t,c);if(!l.length)return;const a=t.pendingIcons;a&&l.forEach(f=>{a.delete(f)}),Oe(t,c)}catch(l){console.error(l)}Te(t)})})}))}const st=(t,n)=>{const e=Se(t,!0,jt()),r=be(e);if(!r.pending.length){let c=!0;return n&&setTimeout(()=>{c&&n(r.loaded,r.missing,r.pending,mt)}),()=>{c=!1}}const o=Object.create(null),i=[];let s,u;return r.pending.forEach(c=>{const{provider:l,prefix:a}=c;if(a===u&&l===s)return;s=l,u=a,i.push(I(l,a));const f=o[l]||(o[l]=Object.create(null));f[a]||(f[a]=[])}),r.pending.forEach(c=>{const{provider:l,prefix:a,name:f}=c,h=I(l,a),p=h.pendingIcons||(h.pendingIcons=new Set);p.has(f)||(p.add(f),o[l][a].push(f))}),i.forEach(c=>{const{provider:l,prefix:a}=c;o[l][a].length&&Ee(c,o[l][a])}),n?xe(n,r,i):mt},Me=t=>new Promise((n,e)=>{const r=typeof t=="string"?O(t,!0):t;if(!r){e(t);return}st([r||t],o=>{if(o.length&&r){const i=A(r);if(i){n({...j,...i});return}}e(t)})});function Fe(t){try{const n=typeof t=="string"?JSON.parse(t):t;if(typeof n.body=="string")return{...n}}catch{}}function Ne(t,n){const e=typeof t=="string"?O(t,!0,!0):null;if(!e){const i=Fe(t);return{value:t,data:i}}const r=A(e);if(r!==void 0||!e.prefix)return{value:t,name:e,data:r};const o=st([e],()=>n(t,e,A(e)));return{value:t,name:e,loading:o}}function H(t){return t.hasAttribute("inline")}let Qt=!1;try{Qt=navigator.vendor.indexOf("Apple")===0}catch{}function Le(t,n){switch(n){case"svg":case"bg":case"mask":return n}return n!=="style"&&(Qt||t.indexOf("<a")===-1)?"svg":t.indexOf("currentColor")===-1?"bg":"mask"}const Re=/(-?[0-9.]*[0-9]+[0-9.]*)/g,$e=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function tt(t,n,e){if(n===1)return t;if(e=e||100,typeof t=="number")return Math.ceil(t*n*e)/e;if(typeof t!="string")return t;const r=t.split(Re);if(r===null||!r.length)return t;const o=[];let i=r.shift(),s=$e.test(i);for(;;){if(s){const u=parseFloat(i);isNaN(u)?o.push(i):o.push(Math.ceil(u*n*e)/e)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}const De=t=>t==="unset"||t==="undefined"||t==="none";function qt(t,n){const e={...j,...t},r={..._t,...n},o={left:e.left,top:e.top,width:e.width,height:e.height};let i=e.body;[e,r].forEach(g=>{const m=[],B=g.hFlip,T=g.vFlip;let y=g.rotate;B?T?y+=2:(m.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),m.push("scale(-1 1)"),o.top=o.left=0):T&&(m.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),m.push("scale(1 -1)"),o.top=o.left=0);let b;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:b=o.height/2+o.top,m.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:m.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,m.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}y%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),m.length&&(i='<g transform="'+m.join(" ")+'">'+i+"</g>")});const s=r.width,u=r.height,c=o.width,l=o.height;let a,f;s===null?(f=u===null?"1em":u==="auto"?l:u,a=tt(f,c/l)):(a=s==="auto"?c:s,f=u===null?tt(a,l/c):u==="auto"?l:u);const h={},p=(g,m)=>{De(m)||(h[g]=m.toString())};return p("width",a),p("height",f),h.viewBox=o.left.toString()+" "+o.top.toString()+" "+c.toString()+" "+l.toString(),{attributes:h,body:i}}const Qe=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let D=Qe();function qe(t){D=t}function Be(){return D}function Ve(t,n){const e=q(t);if(!e)return 0;let r;if(!e.maxURL)r=0;else{let o=0;e.resources.forEach(s=>{o=Math.max(o,s.length)});const i=n+".json?icons=";r=e.maxURL-o-e.path.length-i.length}return r}function ze(t){return t===404}const Ue=(t,n,e)=>{const r=[],o=Ve(t,n),i="icons";let s={type:i,provider:t,prefix:n,icons:[]},u=0;return e.forEach((c,l)=>{u+=c.length+1,u>=o&&l>0&&(r.push(s),s={type:i,provider:t,prefix:n,icons:[]},u=c.length),s.icons.push(c)}),r.push(s),r};function He(t){if(typeof t=="string"){const n=q(t);if(n)return n.path}return"/"}const Ge=(t,n,e)=>{if(!D){e("abort",424);return}let r=He(n.provider);switch(n.type){case"icons":{const i=n.prefix,u=n.icons.join(","),c=new URLSearchParams({icons:u});r+=i+".json?"+c.toString();break}case"custom":{const i=n.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:e("abort",400);return}let o=503;D(t+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{e(ze(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?e("abort",i):e("next",o)});return}setTimeout(()=>{e("success",i)})}).catch(()=>{e("next",o)})},Je={prepare:Ue,send:Ge};function yt(t,n){switch(t){case"local":case"session":S[t]=n;break;case"all":for(const e in S)S[e]=n;break}}const G="data-style";let Bt="";function Ke(t){Bt=t}function bt(t,n){let e=Array.from(t.childNodes).find(r=>r.hasAttribute&&r.hasAttribute(G));e||(e=document.createElement("style"),e.setAttribute(G,G),t.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(n?"-0.125em":"0")+"}span,svg{display:block}"+Bt}function Vt(){at("",Je),jt(!0);let t;try{t=window}catch{}if(t){if(Dt(),t.IconifyPreload!==void 0){const e=t.IconifyPreload,r="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!lt(o))&&console.error(r)}catch{console.error(r)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(const r in e){const o="IconifyProviders["+r+"] is invalid.";try{const i=e[r];if(typeof i!="object"||!i||i.resources===void 0)continue;ft(r,i)||console.error(o)}catch{console.error(o)}}}}return{enableCache:e=>yt(e,!0),disableCache:e=>yt(e,!1),iconExists:me,getIcon:ye,listIcons:ge,addIcon:Ot,addCollection:lt,calculateSize:tt,buildIcon:qt,loadIcons:st,loadIcon:Me,addAPIProvider:ft,appendCustomStyle:Ke,_api:{getAPIConfig:q,setAPIModule:at,sendAPIQuery:Mt,setFetch:qe,getFetch:Be,listAPIProviders:_e}}}function zt(t,n){let e=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in n)e+=" "+r+'="'+n[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+t+"</svg>"}function We(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Xe(t){return'url("data:image/svg+xml,'+We(t)+'")'}const et={"background-color":"currentColor"},Ut={"background-color":"transparent"},wt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},It={"-webkit-mask":et,mask:et,background:Ut};for(const t in It){const n=It[t];for(const e in wt)n[t+"-"+e]=wt[e]}function xt(t){return t?t+(t.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Ye(t,n,e){const r=document.createElement("span");let o=t.body;o.indexOf("<a")!==-1&&(o+="<!-- "+Date.now()+" -->");const i=t.attributes,s=zt(o,{...i,width:n.width+"",height:n.height+""}),u=Xe(s),c=r.style,l={"--svg":u,width:xt(i.width),height:xt(i.height),...e?et:Ut};for(const a in l)c.setProperty(a,l[a]);return r}function Ze(t){const n=document.createElement("span"),e=t.attributes;let r="";return e.width||(r="width: inherit;"),e.height||(r+="height: inherit;"),r&&(e.style=r),n.innerHTML=zt(t.body,e),n.firstChild}function St(t,n){const e=n.icon.data,r=n.customisations,o=qt(e,r);r.preserveAspectRatio&&(o.attributes.preserveAspectRatio=r.preserveAspectRatio);const i=n.renderedMode;let s;switch(i){case"svg":s=Ze(o);break;default:s=Ye(o,{...j,...e},i==="mask")}const u=Array.from(t.childNodes).find(c=>{const l=c.tagName&&c.tagName.toUpperCase();return l==="SPAN"||l==="SVG"});u?s.tagName==="SPAN"&&u.tagName===s.tagName?u.setAttribute("style",s.getAttribute("style")):t.replaceChild(s,u):t.appendChild(s)}function Ct(t,n,e){const r=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:n,icon:t,lastRender:r}}function tn(t="iconify-icon"){let n,e;try{n=window.customElements,e=window.HTMLElement}catch{return}if(!n||!e)return;const r=n.get(t);if(r)return r;const o=["icon","mode","inline","width","height","rotate","flip"],i=class extends e{constructor(){super();M(this,"_shadowRoot");M(this,"_state");M(this,"_checkQueued",!1);const c=this._shadowRoot=this.attachShadow({mode:"open"}),l=H(this);bt(c,l),this._state=Ct({value:""},l),this._queueCheck()}static get observedAttributes(){return o.slice(0)}attributeChangedCallback(c){if(c==="inline"){const l=H(this),a=this._state;l!==a.inline&&(a.inline=l,bt(this._shadowRoot,l))}else this._queueCheck()}get icon(){const c=this.getAttribute("icon");if(c&&c.slice(0,1)==="{")try{return JSON.parse(c)}catch{}return c}set icon(c){typeof c=="object"&&(c=JSON.stringify(c)),this.setAttribute("icon",c)}get inline(){return H(this)}set inline(c){c?this.setAttribute("inline","true"):this.removeAttribute("inline")}restartAnimation(){const c=this._state;if(c.rendered){const l=this._shadowRoot;if(c.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}St(l,c)}}get status(){const c=this._state;return c.rendered?"rendered":c.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const c=this._state,l=this.getAttribute("icon");if(l!==c.icon.value){this._iconChanged(l);return}if(!c.rendered)return;const a=this.getAttribute("mode"),f=ct(this);(c.attrMode!==a||ue(c.customisations,f))&&this._renderIcon(c.icon,f,a)}_iconChanged(c){const l=Ne(c,(a,f,h)=>{const p=this._state;if(p.rendered||this.getAttribute("icon")!==a)return;const g={value:a,name:f,data:h};g.data?this._gotIconData(g):p.icon=g});l.data?this._gotIconData(l):this._state=Ct(l,this._state.inline,this._state)}_gotIconData(c){this._checkQueued=!1,this._renderIcon(c,ct(this),this.getAttribute("mode"))}_renderIcon(c,l,a){const f=Le(c.data.body,a),h=this._state.inline;St(this._shadowRoot,this._state={rendered:!0,icon:c,inline:h,customisations:l,attrMode:a,renderedMode:f})}};o.forEach(u=>{u in i.prototype||Object.defineProperty(i.prototype,u,{get:function(){return this.getAttribute(u)},set:function(c){c!==null?this.setAttribute(u,c):this.removeAttribute(u)}})});const s=Vt();for(const u in s)i[u]=i.prototype[u]=s[u];return n.define(t,i),i}tn()||Vt();function en(t){let n;const e=t[1].default,r=Yt(e,t,t[0],null);return{c(){r&&r.c()},l(o){r&&r.l(o)},m(o,i){r&&r.m(o,i),n=!0},p(o,[i]){r&&r.p&&(!n||i&1)&&Zt(r,e,o,o[0],n?ee(e,o[0],i,null):te(o[0]),null)},i(o){n||(ne(r,o),n=!0)},o(o){oe(r,o),n=!1},d(o){r&&r.d(o)}}}function nn(t,n,e){let{$$slots:r={},$$scope:o}=n;return t.$$set=i=>{"$$scope"in i&&e(0,o=i.$$scope)},[o,r]}class sn extends Kt{constructor(n){super(),Wt(this,n,nn,en,Xt,{})}}export{sn as component};