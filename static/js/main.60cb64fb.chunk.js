(this["webpackJsonpdata-stor"]=this["webpackJsonpdata-stor"]||[]).push([[0],{124:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(40),a=n.n(r),i=(n(38),n(2)),s=n(1),o=function(){return Object(s.jsx)("h1",{children:"Home"})},u=n(11),j=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(u.b,{to:"/",children:"Home "}),Object(s.jsx)(u.b,{to:"/stories",children:"Stories"})]})},b=n(13),d=n(17),l=function(t){var e=t.xScale,n=t.innerHeight;return e.ticks().map((function(t){return Object(s.jsxs)("g",{className:"tick",transform:"translate(".concat(e(t),",0)"),children:[Object(s.jsx)("line",{y2:n,stroke:"black"}),Object(s.jsx)("text",{dy:"0.71em",style:{textAnchor:"middle"},y:n+4,children:t})]},t)}))},h=function(t){var e=t.yScale;return e.domain().map((function(t){return Object(s.jsx)("g",{className:"tick",children:Object(s.jsx)("text",{dy:"0.32em",x:-4,y:e(t)+e.bandwidth()/2,style:{textAnchor:"end"},children:t},t)})}))},x=function(t){var e=t.data,n=t.xScale,c=t.yScale,r=t.xValue,a=t.yValue;return e.map((function(t){return Object(s.jsx)("rect",{className:"mark",x:0,y:c(a(t)),width:n(r(t)),height:c.bandwidth()},a(t))}))},f=20,O=20,m=20,g=200,p=function(t){return t.Country},y=function(t){return t.Population},v=function(){var t=function(){var t=Object(c.useState)(null),e=Object(d.a)(t,2),n=e[0],r=e[1];return Object(c.useEffect)((function(){Object(b.a)("https://gist.githubusercontent.com/performautodev/ab00b6300b1a235cde9c57600992b86d/raw/9c2f36181b2f090e91dac0b072405b6fe033e60d/UN_Population_2019.csv",(function(t){return t.Population=+t[2020],t})).then((function(t){r(t.slice(0,10))}))}),[]),n}();if(!t)return Object(s.jsx)("pre",{children:"Loading..."});console.log(t[0]);var e=500-f-m,n=960-g-O,r=Object(b.c)().paddingInner(.1).domain(t.map(p)).range([0,e]),a=Object(b.d)().domain([0,Object(b.b)(t,y)]).range([0,n]);return Object(s.jsx)("svg",{width:960,height:500,children:Object(s.jsxs)("g",{transform:"translate(".concat(g,",").concat(f," )"),children:[Object(s.jsx)(l,{xScale:a,innerHeight:e}),Object(s.jsx)(h,{yScale:r}),Object(s.jsx)(x,{data:t,yScale:r,xScale:a,xValue:y,yValue:p})]})})},S=function(){return Object(s.jsxs)("main",{children:[Object(s.jsx)(j,{}),Object(s.jsxs)(i.c,{children:[Object(s.jsx)(i.a,{path:"/",component:o,exact:!0}),Object(s.jsx)(i.a,{path:"/stories",component:v})]})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,125)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};a.a.render(Object(s.jsx)(u.a,{basename:"/data-stories",children:Object(s.jsx)(S,{})}),document.getElementById("root")),k()},38:function(t,e,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.60cb64fb.chunk.js.map