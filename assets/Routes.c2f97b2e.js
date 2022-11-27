var de=Object.defineProperty,he=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var I=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))ge.call(t,n)&&I(e,n,t[n]);if(G)for(var n of G(t))me.call(t,n)&&I(e,n,t[n]);return e},M=(e,t)=>he(e,pe(t));import{u as te,j as u,F as we,a as A,s as R,r as y,R as ye,C as ne,L as z}from"./index.cf61390d.js";function be(e){const t=te(),{pathname:n}=t,s=e.options.filter(i=>i.path!==n);return u(we,{children:u(ve,{children:u("div",{className:"nav",children:s.map((i,o)=>u("ul",{className:"nav__list",children:A("li",{className:"nav__item",children:[u("div",{className:"nav__icon",children:i.icon}),u("div",{className:"nav__link",children:i.link})]})},o))})})})}const ve=R.div`
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  .nav__list {
    margin: 1em 0;
  }
  .nav__item {
    display: flex;
  }
  .nav__icon {
    color: white;
    margin: 1.3em 1em 0 1em;
  }
  .nav__link {
    margin: 1em 1em 0 0;
    color: white;
  }
`,K=Symbol(),Se=Symbol(),U=Symbol();let xe=(e,t)=>new Proxy(e,t);const C=Object.getPrototypeOf,X=new WeakMap,oe=e=>e&&(X.has(e)?X.get(e):C(e)===Object.prototype||C(e)===Array.prototype),J=e=>typeof e=="object"&&e!==null,Q=new WeakMap,re=e=>e[U]||e,se=(e,t,n)=>{if(!oe(e))return e;const s=re(e),i=(c=>Object.isFrozen(c)||Object.values(Object.getOwnPropertyDescriptors(c)).some(l=>!l.writable))(s);let o=n&&n.get(s);return o&&o[1].f===i||(o=((c,l)=>{const p={f:l};let r=!1;const m=(w,h)=>{if(!r){let g=p.a.get(c);g||(g=new Set,p.a.set(c,g)),h&&g.has(K)||g.add(w)}},S={get:(w,h)=>h===U?c:(m(h),se(w[h],p.a,p.c)),has:(w,h)=>h===Se?(r=!0,p.a.delete(c),!0):(m(h),h in w),getOwnPropertyDescriptor:(w,h)=>(m(h,!0),Object.getOwnPropertyDescriptor(w,h)),ownKeys:w=>(m(K),Reflect.ownKeys(w))};return l&&(S.set=S.deleteProperty=()=>!1),[S,p]})(s,i),o[1].p=xe(i?(c=>{let l=Q.get(c);if(!l){if(Array.isArray(c))l=Array.from(c);else{const p=Object.getOwnPropertyDescriptors(c);Object.values(p).forEach(r=>{r.configurable=!0}),l=Object.create(C(c),p)}Q.set(c,l)}return l})(s):s,o[0]),n&&n.set(s,o)),o[1].a=t,o[1].c=n,o[1].p},Ee=(e,t)=>{const n=Reflect.ownKeys(e),s=Reflect.ownKeys(t);return n.length!==s.length||n.some((i,o)=>i!==s[o])},ie=(e,t,n,s)=>{if(Object.is(e,t))return!1;if(!J(e)||!J(t))return!0;const i=n.get(re(e));if(!i)return!0;if(s){const c=s.get(e);if(c&&c.n===t)return c.g;s.set(e,{n:t,g:!1})}let o=null;for(const c of i){const l=c===K?Ee(e,t):ie(e[c],t[c],n,s);if(l!==!0&&l!==!1||(o=l),o)break}return o===null&&(o=!0),s&&s.set(e,{n:t,g:o}),o},ce=e=>oe(e)&&e[U]||null,Z=(e,t=!0)=>{X.set(e,t)};var ae={exports:{}},le={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=y.exports;function Oe(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Oe,Pe=j.useState,_e=j.useEffect,je=j.useLayoutEffect,Le=j.useDebugValue;function ke(e,t){var n=t(),s=Pe({inst:{value:n,getSnapshot:t}}),i=s[0].inst,o=s[1];return je(function(){i.value=n,i.getSnapshot=t,V(i)&&o({inst:i})},[e,n,t]),_e(function(){return V(i)&&o({inst:i}),e(function(){V(i)&&o({inst:i})})},[e]),Le(n),n}function V(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function $e(e,t){return t()}var Ae=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?$e:ke;le.useSyncExternalStore=j.useSyncExternalStore!==void 0?j.useSyncExternalStore:Ae;ae.exports=le;var De=ae.exports;const W=e=>typeof e=="object"&&e!==null,v=Symbol(),F=new WeakSet,Me=(e=Object.is,t=(r,m)=>new Proxy(r,m),n=r=>W(r)&&!F.has(r)&&(Array.isArray(r)||!(Symbol.iterator in r))&&!(r instanceof WeakMap)&&!(r instanceof WeakSet)&&!(r instanceof Error)&&!(r instanceof Number)&&!(r instanceof Date)&&!(r instanceof String)&&!(r instanceof RegExp)&&!(r instanceof ArrayBuffer),s=r=>{switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:throw r}},i=new WeakMap,o=(r,m,S,w=s)=>{const h=i.get(m);if((h==null?void 0:h[0])===S)return h[1];const g=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r));return Z(g,!0),i.set(m,[S,g]),Reflect.ownKeys(r).forEach(O=>{const b=Reflect.get(r,O,m);F.has(b)?(Z(b,!1),g[O]=b):b instanceof Promise?Object.defineProperty(g,O,{get(){return w(b)}}):b!=null&&b[v]?g[O]=T(b,w):g[O]=b}),Object.freeze(g)},c=new WeakMap,l=[1],p=r=>{if(!W(r))throw new Error("object required");const m=c.get(r);if(m)return m;let S=l[0];const w=new Set,h=(d,a=++l[0])=>{S!==a&&(S=a,w.forEach(f=>f(d,a)))},g=new Map,O=d=>{let a=g.get(d);return a||(a=(f,x)=>{const E=[...f];E[1]=[d,...E[1]],h(E,x)},g.set(d,a)),a},b=d=>{const a=g.get(d);return g.delete(d),a},H=Array.isArray(r)?[]:Object.create(Object.getPrototypeOf(r)),N=t(H,{get(d,a,f){return a===v?[d,f,S,o,w]:Reflect.get(d,a,f)},deleteProperty(d,a){var f;const x=Reflect.get(d,a),E=(f=x==null?void 0:x[v])==null?void 0:f[4];E&&E.delete(b(a));const L=Reflect.deleteProperty(d,a);return L&&h(["delete",[a],x]),L},set(d,a,f,x){var E,L;const ue=Reflect.has(d,a),D=Reflect.get(d,a,x);if(ue&&e(D,f))return!0;const Y=(E=D==null?void 0:D[v])==null?void 0:E[4];Y&&Y.delete(b(a)),W(f)&&(f=ce(f)||f);let k=f;return(L=Object.getOwnPropertyDescriptor(d,a))!=null&&L.set||(f instanceof Promise?f.then($=>{f.status="fulfilled",f.value=$,h(["resolve",[a],$])}).catch($=>{f.status="rejected",f.reason=$,h(["reject",[a],$])}):(!(f!=null&&f[v])&&n(f)&&(k=q(f)),k!=null&&k[v]&&k[v][4].add(O(a)))),Reflect.set(d,a,k,x),h(["set",[a],f,D]),!0}});return c.set(r,N),Reflect.ownKeys(r).forEach(d=>{const a=Object.getOwnPropertyDescriptor(r,d);a.get||a.set?Object.defineProperty(H,d,a):N[d]=r[d]}),N})=>[p,v,F,e,t,n,s,i,o,c,l],[ze]=Me();function q(e={}){return ze(e)}function Ne(e,t,n){({BASE_URL:"/gfouz-overview/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!(e!=null&&e[v])&&console.warn("Please use proxy object");let s;const i=[],o=e[v][4],c=l=>{if(i.push(l),n){t(i.splice(0));return}s||(s=Promise.resolve().then(()=>{s=void 0,o.has(c)&&t(i.splice(0))}))};return o.add(c),()=>o.delete(c)}function T(e,t){({BASE_URL:"/gfouz-overview/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!(e!=null&&e[v])&&console.warn("Please use proxy object");const[n,s,i,o]=e[v];return o(n,s,i,t)}const ee=ye.experimental_use,{useSyncExternalStore:Ve}=De,We=(e,t)=>{const n=[],s=new WeakSet,i=(o,c)=>{if(s.has(o))return;let l;typeof o=="object"&&o!==null&&(s.add(o),l=t.get(ce(o)||o)),l?l.forEach(p=>{"value"in(Object.getOwnPropertyDescriptor(o,p)||{})&&i(o[p],c?[...c,p]:[p])}):c&&n.push(c)};return i(e),n},Fe=(e,t)=>{const n=y.exports.useRef();y.exports.useEffect(()=>{n.current=We(e,t)}),y.exports.useDebugValue(n.current)};function fe(e,t){const n=t==null?void 0:t.sync,s=y.exports.useRef(),i=y.exports.useRef();let o=!0;const c=Ve(y.exports.useCallback(r=>{const m=Ne(e,r,n);return r(),m},[e,n]),()=>{const r=T(e,ee);try{if(!o&&s.current&&i.current&&!ie(s.current,r,i.current,new WeakMap))return s.current}catch{}return r},()=>T(e,ee));o=!1;const l=new WeakMap;y.exports.useEffect(()=>{s.current=c,i.current=l}),({BASE_URL:"/gfouz-overview/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&Fe(c,l);const p=y.exports.useMemo(()=>new WeakMap,[]);return se(c,l,p)}const Be=q({opt:"homepage",setOption:e=>Be.opt=e}),_=q({st:!1,setTrue:()=>_.st=!0,setFalse:()=>_.st=!1,reverse:()=>_.st=!_.st});function Ke(e){const t=fe(_),{st:n,setFalse:s}=t;return u(Ce,{children:u("div",{className:n?"opened":"closed",onClick:s,children:u(be,{options:e.options})})})}const Ce=R.nav`
  .opened {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #00000099;
    transition: all 1s;
    transform: translateX(0);
    z-index: 10;
    width: 100%;
    @media (min-width: 600px) {
      width: 20%;
    }
  }
  .closed {
    display: none;
    transform: translateX(-40%);
  }
`,Xe=({st:e,reverse:t})=>u(Ue,{children:A("button",{onClick:()=>t(),children:[u("div",{className:e?"opened":"closed"}),u("div",{className:e?"opened":"closed"}),u("div",{className:e?"opened":"closed"})]})});var Te=Xe;const Ue=R.div`
  button {
    position: absolute;
    right: 0.6em;
    top: 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 200px;
    height: 40px;
    background-color: transparent;
    cursor: pointer;
    z-index: 10;

    &:focus {
      outline: none;
    }
  }
  .opened {
    width: 1.5rem;
    height: 0.2rem;
    background: #00ffff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    left: -15px;
    top: 10px;

    transform-origin: 0;

    :first-child {
      transform: rotate(45deg);
    }

    :nth-child(2) {
      opacity: 0;
      transform: translateX(20px);
    }

    :nth-child(3) {
      transform: rotate(-45deg);
    }
  }

  .closed {
    width: 1.5rem;
    height: 0.2rem;
    background: #fff4a3;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    left: -15px;
    top: 10px;

    transform-origin: 0;

    :first-child {
      transform: rotate(0);
    }

    :nth-child(2) {
      opacity: 1;
      transform: translateX(0);
    }

    :nth-child(3) {
      transform: rotate(0);
    }
  }
`,qe=R.header`
  grid-area: header;
  line-height: 60px;
  text-align: center;
  color: ${e=>e.color||"#fff4a3"};
  background-color: ${e=>e.bg||"#000000"};
  letter-spacing: 5px;
  font-weight: bolder;
  text-transform: uppercase;
`,He=R.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  text-transform: uppercase;
  color: ${e=>e.color||"#fff4a3"};
  background-color: ${e=>e.bg||"#000000"};
`;function tt(e){const t=te(),{pathname:n}=t,[s,i]=y.exports.useState(""),o=fe(_),{st:c,reverse:l,setFalse:p}=o;return y.exports.useEffect(()=>{i(n==="/"?"homepage":n.slice(1))}),A(Ye,M(P({},e),{children:[A(qe,M(P({},e),{children:[u("h2",{className:"header__title",children:"portfolio"}),u(Te,{st:c,reverse:l})]})),u(Ke,{options:e.options}),u("main",{onClick:p,children:e.children}),A(He,M(P({},e),{children:["Gfouz ",s," \xA9 ",new Date().getFullYear()]}))]}))}const Ye=R.div`
  background-color: ${e=>e.lbg};
  width: 100%;
  display: grid;
  grid-template-areas:
    'header header'
    'main  main'
    'footer  footer';
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 1fr;

  main {
    grid-area: main;
    min-height: calc(100vh - 120px);
  }
  .option {
    font-size: 2em;
    font-weight: bolder;
    color: red;
  }
`,Ge=ne`
  position: absolute;
  bottom: 1em;
`,Ie=ne`
  position: static;
`,nt=R.div`
  width: 100%;
  cursor: pointer;
  height: fit-content;
  ${e=>e.bottom?Ge:Ie};
  color: ${e=>e.color};
  margin: ${e=>e.m};
  padding: ${e=>e.p};
  text-align: ${e=>e.center?"center":"left"};
  font-size: ${e=>e.size};
  letter-spacing: ${e=>e.spacing};
  font-family: ${e=>e.fontfam};
  font-weight: ${e=>e.bolder?"bolder":"normal"};
  font-style: ${e=>e.italic?"italic":"normal"};
  text-transform: ${e=>e.upper&&"uppercase"};
  }
`;function Je(e){return y.exports.createElement("svg",P({viewBox:"0 0 576 512",width:e.width||"1em",length:e.height||"auto"},e),y.exports.createElement("path",{fill:e.color||"#666666",fillRule:"evenodd",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}))}function B(e){return y.exports.createElement("svg",P({viewBox:"0 0 20 20",width:e.width||"1em",length:e.height||"auto"},e),y.exports.createElement("path",{fill:e.color,d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))}const ot=[{path:"/",icon:u(Je,{color:"#ffffff"}),link:u(z,{to:"/",children:"Homepage"})},{path:"/about",icon:u(B,{color:"#ffffff"}),link:u(z,{to:"/about",children:"About"})},{path:"/work",icon:u(B,{color:"#ffffff"}),link:u(z,{to:"/work",children:"Work"})},{path:"/blog",icon:u(B,{color:"#ffffff"}),link:u(z,{to:"/blog",children:"Blog"})}];export{nt as H,tt as L,ot as R};
