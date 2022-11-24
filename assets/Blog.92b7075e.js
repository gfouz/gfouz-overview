import{s as r,j as e,F as s,a,L as d}from"./index.5b911934.js";import{p as i}from"./posts.a338f3bb.js";import{H as n,L as c,R as m}from"./Routes.86e15dd7.js";import{R as l,C as o}from"./Containers.cb1b1dd6.js";function h(){return e(s,{children:e(p,{children:i.length&&i.map(t=>a(g,{className:"card",children:[e(x,{children:e("img",{src:`./images/${t.img}`,alt:"react"})}),a(f,{children:[e(n,{upper:!0,size:"0.6em",color:"#000000",bolder:!0,spacing:"3px",p:"1em",children:t.title}),e(u,{}),a(b,{children:["Published on: ",t.date," by ",t.author]}),e(w,{children:e(d,{className:"post__link",to:`/post/${t.id}`,children:"Read more"})})]})]},t.id))})})}const p=r.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  justify-content: center;
  .card:hover {
    animation: jello-horizontal 0.9s both;
  }

  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.05, 0.9, 1);
    }
    40% {
      transform: scale3d(0.85, 1.05, 1);
    }
    50% {
      transform: scale3d(1.05, 0.9, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`,g=r(l)`
  box-shadow: 1px 1px 10px #000000;
  border-radius: 10px;
  width: 320px;
  height: 120px;
  margin: 0.5em;
`,x=r.div`
  width: 100px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`,f=r(o)`
  position: relative;
  width: 70%;
  text-align: left;
  padding: 0.2em;
  align-items: flex-start;
`,u=r.div`
  height: 1px;
  width: 95%;
  background-color: #222222;
`,b=r.span`
  color: #db173f;
  font-size: 0.6em;
  letter-spacing: 2px;
  font-weight: bolder;
`,w=r.div`
  position: absolute;
  right: 20px;
  bottom: 10px;
  a {
    color: blue;
  }
`;function P(){return e(s,{children:e(c,{options:m,children:a(C,{children:[a(j,{children:[e("img",{src:"./images/corner.jpg",alt:"student"}),e(n,{bolder:!0,center:!0,color:"#000000",p:"0.5em",upper:!0,size:"0.9em",children:"En ciertos momentos, la \xFAnica forma de tener raz\xF3n es perdi\xE9ndola. J.Bergam\xEDn"})]}),e(v,{children:e(h,{})}),e(y,{center:!0,p:"2em",bolder:!0,children:"En ciertos momentos, la \xFAnica forma de tener raz\xF3n es perdi\xE9ndola. J.Bergam\xEDn"})]})})})}const C=r(o)`
  --blue-grey: #121a3e;
  --vscode: #19202e;
  height: 100%;
`,j=r(o)`
  img {
    width: 700px;
    height: auto;
    margin: 2em 0;
  }
`,v=r(l)``,y=r(n)``;export{P as default};
