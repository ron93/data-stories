(this["webpackJsonpdata-stor"]=this["webpackJsonpdata-stor"]||[]).push([[0],{118:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(39),i=n.n(c),r=(n(37),n(2)),l=n(8),s=n(11),o=n(0),u=function(e){var t=e.xScale,n=e.innerHeight,a=e.tickFormat;return t.ticks().map((function(e){return Object(o.jsxs)("g",{className:"tick",transform:"translate(".concat(t(e),",0)"),children:[Object(o.jsx)("line",{y2:n,stroke:"black"}),Object(o.jsx)("text",{dy:"0.71em",style:{textAnchor:"middle"},y:n+4,children:a(e)})]},e)}))},j=function(e){var t=e.yScale;return t.domain().map((function(e){return Object(o.jsx)("g",{className:"tick",children:Object(o.jsx)("text",{dy:"0.32em",x:-4,y:t(e)+t.bandwidth()/2,style:{textAnchor:"end"},children:e},e)})}))},b=function(e){var t=e.data,n=e.xScale,a=e.yScale,c=e.xValue,i=e.yValue,r=e.tooltipFormat;return t.map((function(e){return Object(o.jsx)("rect",{className:"mark",x:0,y:a(i(e)),width:n(c(e)),height:a.bandwidth(),children:Object(o.jsx)("title",{children:r(c(e))})},i(e))}))},d=(n(118),function(e){var t=e.options,n=e.id,a=e.selectedValue,c=e.onSelectedValueChange;return Object(o.jsx)("select",{id:n,onChange:function(e){return c(e.target.value)},children:t.map((function(e){var t=e.value,c=e.label;return Object(o.jsx)("option",{value:t,selected:t===a,children:c},n)}))})}),m=10,h=20,x=150,O=230,f=function(e){return e.Country},p=function(e){return e.Population},v=Object(s.b)(".2s"),g=function(e){return v(e).replace("G","B")},N=[{value:"drop-option",label:"--choose continent--"},{value:"africa",label:"Africa"},{value:"asia",label:"Asia"},{value:"australia",label:"Australia"},{value:"europe",label:"Europe"},{value:"s-america",label:"South America"},{value:"n-america",label:"North America"}],y=function(){var e=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){Object(s.a)("https://gist.githubusercontent.com/performautodev/ab00b6300b1a235cde9c57600992b86d/raw/9c2f36181b2f090e91dac0b072405b6fe033e60d/UN_Population_2019.csv",(function(e){return e.Population=1e3*+e[2010],e})).then((function(e){c(e.slice(0,10))}))}),[]),n}(),t=Object(a.useState)("Africa"),n=Object(l.a)(t,2),c=n[0],i=n[1];if(console.log(c),!e)return Object(o.jsx)("pre",{children:"Loading..."});var r=500-m-x,v=960-O-h,y=Object(s.d)().paddingInner(.1).domain(e.map(f)).range([0,r]),k=Object(s.e)().domain([0,Object(s.c)(e,p)]).range([0,v]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"World Population "}),Object(o.jsx)("div",{className:"dropdown",children:Object(o.jsx)(d,{options:N,id:"continent-select",selectedValue:c,onSelectedValueChange:i})}),Object(o.jsx)("svg",{width:960,height:500,children:Object(o.jsxs)("g",{transform:"translate(".concat(O,",").concat(m," )"),children:[Object(o.jsx)(u,{xScale:k,innerHeight:r,tickFormat:g}),Object(o.jsx)(j,{yScale:y}),Object(o.jsx)("text",{className:"axis-label",x:v/2,y:r+55,textAnchor:"middle",children:"Population"}),Object(o.jsx)(b,{data:e,yScale:y,xScale:k,xValue:p,yValue:f,tooltipFormat:g})]})})]})},k=[{title:"world population",url:"/stories/#1",cName:"story-links"},{title:"food prices",url:"/",cName:"story-links"}],S=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("ul",{children:k.map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))}),Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{exact:!0,path:"#",component:y}),Object(o.jsx)(r.a,{exact:!0,path:"#",component:y})]})]})},w=[{title:"Home",url:"/home",cName:"nav-links"},{title:"Stories",url:"/stories",component:"Home",cName:"nav-links"},{title:"Blog",url:"#",cName:"nav-links"},{title:"sign-up",url:"#",cName:"nav-links-mobile"}],A=(n(124),n(125),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("nav",{className:"NavbarItems",children:[Object(o.jsx)("h1",{className:"navbar-logo",children:Object(o.jsx)("a",{children:"Data  Stories"})}),Object(o.jsx)("div",{className:"menu-icon",onClick:function(e){c(!n)},children:Object(o.jsx)("i",{className:n?"fas fa-times":"fas fa-bars"})}),Object(o.jsx)("ul",{className:n?"nav-menu active":"nav-menu",children:w.map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))})]})}),F=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)(A,{}),Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{exact:!0,path:"/data-stories/home",component:S}),Object(o.jsx)(r.a,{exact:!0,path:"/data-stories/stories",component:y})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,128)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},V=n(16);i.a.render(Object(o.jsx)(V.a,{basename:"/data-stories",children:Object(o.jsx)(F,{})}),document.getElementById("root")),C()},37:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.92bf43ee.chunk.js.map