var ce=Object.defineProperty,ue=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var K=(e,n,t)=>n in e?ce(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,k=(e,n)=>{for(var t in n||(n={}))he.call(n,t)&&K(e,t,n[t]);if(Z)for(var t of Z(n))me.call(n,t)&&K(e,t,n[t]);return e},Q=(e,n)=>ue(e,fe(n));import{r as C,j as r,s as o,a as d}from"./index.5b911934.js";import{L as pe,R as ge,H as c}from"./Routes.86e15dd7.js";import{C as _,R as ee,B as p}from"./Containers.cb1b1dd6.js";function ve(e){return C.exports.createElement("svg",k({viewBox:"0 0 512 512",width:e.width||"1em",length:e.height||"auto"},e),C.exports.createElement("path",{fill:e.color,fillRule:"evenodd",d:"M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z"}))}function ye(e){const{text:n}=e;return r(we,Q(k({},e),{children:r("p",{children:n})}))}const we=o.div`
  width: 100%;
  color: ${e=>e.color||"#c40550"};
  font-weight: bolder;
  font-size: ${e=>e.size||"16px"};
  text-transform: uppercase;
  text-align: ${e=>e.align||"center"};
  padding: ${e=>e.p};
  margin: ${e=>e.m};

  p {
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 2s steps(40, end);
    font-family: ${e=>e.fontfam};
    text-shadow: ${e=>e.shadow?"10px 1px 10px #000000":""};
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;var ne={};function be(e){if(!e||typeof window=="undefined")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n),e}Object.defineProperty(ne,"__esModule",{value:!0});var l=C.exports;function xe(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var u=xe(l);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var m=function(){return m=Object.assign||function(n){for(var t,a=1,i=arguments.length;a<i;a++){t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},m.apply(this,arguments)};be(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: 100%;
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}`);var ke=function(e){var n,t,a,i,s=e.style,te=s===void 0?{}:s,z=e.className,re=z===void 0?"":z,j=e.play,f=j===void 0?!0:j,E=e.pauseOnHover,R=E===void 0?!1:E,S=e.pauseOnClick,q=S===void 0?!1:S,B=e.direction,H=B===void 0?"left":B,W=e.speed,T=W===void 0?20:W,L=e.delay,M=L===void 0?0:L,N=e.loop,h=N===void 0?0:N,O=e.gradient,oe=O===void 0?!0:O,$=e.gradientColor,g=$===void 0?[255,255,255]:$,A=e.gradientWidth,v=A===void 0?200:A,ae=e.onFinish,ie=e.onCycleComplete,F=e.children,G=l.useState(0),J=G[0],le=G[1],P=l.useState(0),I=P[0],de=P[1],D=l.useState(!1),y=D[0],se=D[1],w=l.useRef(null),b=l.useRef(null);l.useEffect(function(){if(!!y){var x=function(){b.current&&w.current&&(le(w.current.getBoundingClientRect().width),de(b.current.getBoundingClientRect().width))};return x(),window.addEventListener("resize",x),function(){window.removeEventListener("resize",x)}}},[y]),l.useEffect(function(){se(!0)},[]);var X="rgba("+g[0]+", "+g[1]+", "+g[2],Y=I<J?J/T:I/T;return u.default.createElement(l.Fragment,null,y?u.default.createElement("div",{ref:w,style:m(m({},te),(n={},n["--pause-on-hover"]=!f||R?"paused":"running",n["--pause-on-click"]=!f||R&&!q||q?"paused":"running",n)),className:re+" marquee-container"},oe&&u.default.createElement("div",{style:(t={},t["--gradient-color"]=X+", 1), "+X+", 0)",t["--gradient-width"]=typeof v=="number"?v+"px":v,t),className:"overlay"}),u.default.createElement("div",{ref:b,style:(a={},a["--play"]=f?"running":"paused",a["--direction"]=H==="left"?"normal":"reverse",a["--duration"]=Y+"s",a["--delay"]=M+"s",a["--iteration-count"]=h?""+h:"infinite",a),className:"marquee",onAnimationIteration:ie,onAnimationEnd:ae},F),u.default.createElement("div",{style:(i={},i["--play"]=f?"running":"paused",i["--direction"]=H==="left"?"normal":"reverse",i["--duration"]=Y+"s",i["--delay"]=M+"s",i["--iteration-count"]=h?""+h:"infinite",i),className:"marquee","aria-hidden":"true"},F)):null)},Ce=ne.default=ke;const _e=`Hello my name is Giovani, i began learning c++ in 2017 and it was my
first experience about this wonderful world. But it was a kind of hobby
until year 2020 that i began studying web programming with a better
purpose in mind than a hobby. So that Node js was my pick, i
have been very interested on back-end frameworks like Express, and
related libraries to afford security and functionality like Bcrypt and
jsonwebtoken besides very useful concepts to reuse logic as for
example middlewares, I enjoy to write code using these technologies`,ze=`React is open-sourced by Facebook just a shy a few years ago, 
it\u2019s already become the number one choice for JavaScript devs around the globe. And i
have picked to work with this wonderful technology that brings so many advantages. However
Technology changes, and it changes quickly. I am open-minded to new technologies in order to
learn them and then also take advantage of them.`;function $e(){return r(pe,{options:ge,children:d(je,{children:[d(He,{children:[r(ye,{text:"hello world",size:"2em",m:"2em 0 1em 0",color:"#ffffff",shadow:!0,fontfam:"orangina"}),r(ve,{color:"#ffffff",fontSize:"60px"})]}),d(We,{children:[d(U,{children:[r(c,{center:!0,bolder:!0,children:"Technical overview"}),r(V,{children:_e}),r("div",{className:"spread"})]}),d(U,{children:[r(c,{center:!0,bolder:!0,children:"Technical overview"}),r(V,{children:ze}),r(c,{m:"1em 0 0 0",bolder:!0,children:"Giovani Fouz Jim\xE9nez."})]})]}),d(Te,{children:[r(c,{upper:!0,size:"1em",center:!0,color:"#ffffff",bolder:!0,spacing:"5px",fontfam:"calibri",children:"Web Developer"}),d(Ee,{children:[r(Re,{children:"Html"}),r(Se,{children:"Css"}),r(qe,{children:"Scss"}),r(Be,{children:"Js Ts"})]}),r(Ce,{children:r(c,{bolder:!0,color:"#ffffff",spacing:"6px",upper:!0,fontfam:"orangina",children:"ReactJS styled-components valtio react-query react-hook-form axios eslint prettier typescript ExpressJS"})})]})]})})}const je=o(_)`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(./images/landscape.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-evenly;

  img {
    max-width: 100%;
    height: auto;
    position: relative;
    right: 0.5em;
  }
`,Ee=o(ee)`
  margin: 0;
  justify-content: center;
  padding: 2em;
`,Re=o(p)`
  color: #afeeee;
  background-color: #0000ff;
`,Se=o(p)`
  color: #0000ff;
  background-color: #afeeee;
`,qe=o(p)`
  color: #ffffff;
  background-color: #000000;
`,Be=o(p)`
  color: #000000;
  background-color: yellow;
`,He=o(_)`
  justify-content: center;
`,We=o(ee)`
  flex-wrap: wrap;
  padding: 2em;
  .sc-pyfCe:hover {
    color: #999999;
    background-color: black;
  }
`,U=o(_)`
  position: relative;
  color: #ffffff50;
  border: none;
  border-radius: 15px;
  box-shadow: 1px 1px 35px #ffffff50;
  margin: 1em 0;
  width: 400px;
  padding: 1em;
  min-width: 320px;
  align-items: flex-start;
  transition: 1s;
`,V=o(c)``,Te=o.div``;export{$e as default};
