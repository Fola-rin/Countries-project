(this["webpackJsonpcountries-project"]=this["webpackJsonpcountries-project"]||[]).push([[0],{64:function(e,t,c){},65:function(e,t,c){},67:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(20),s=c.n(r),A=(c(64),c(7)),l=c(3),i=(c(65),c(0)),o=function(){var e=(new Date).getFullYear();return Object(i.jsx)("div",{className:"footer",children:Object(i.jsxs)("p",{children:["\xa9 ",e," Made by"," ",Object(i.jsx)("a",{href:"https://folarin.netlify.app",children:"Oyeleke Afolarin"})]})})},j=c(16),g=c(48),d=c.n(g),C=c(52),b=c.n(C),u=(c(67),function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){if(localStorage.theme){var e=JSON.parse(localStorage.getItem("theme"));a(e),e?document.body.classList.remove("dark-mode"):document.body.classList.add("dark-mode")}}),[]),Object(n.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(c))}),[c]),Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("h3",{children:Object(i.jsx)(A.b,{to:"/",children:"Where in the world?"})}),Object(i.jsxs)("div",{onClick:function(){return c?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),void a(!c)},className:"theme-toggler",children:[c?Object(i.jsx)(d.a,{className:"icon"}):Object(i.jsx)(b.a,{className:"icon"}),Object(i.jsx)("span",{children:c?"Dark Mode":"Light Mode"})]})]})}),O=c(9),h=c(15),x=c.n(h),p="FETCH_ALL_COUNTRIES_REQUEST",Q="FETCH_ALL_COUNTRIES_SUCCESS",m="FETCH_ALL_COUNTRIES_FAILURE",N=function(){return function(e){e({type:p}),x.a.get("https://restcountries.eu/rest/v2/all").then((function(t){var c;e((c=t.data,{type:Q,payload:c}))})).catch((function(t){var c=t.message;e(function(e){return{type:m,payload:e}}(c))}))}},I="FETCH_COUNTRIES_REQUEST",E="FETCH_COUNTRIES_SUCCESS",f="FETCH_COUNTRIES_FAILURE",v=function(e){return function(t){t({type:I}),x.a.get("https://restcountries.eu/rest/v2/name/".concat(e)).then((function(e){var c;t((c=e.data,{type:E,payload:c}))})).catch((function(e){var c=e.message;t(function(e){return{type:f,payload:e}}(c))}))}},D="FETCH_COUNTRY_REQUEST",J="FETCH_COUNTRY_SUCCESS",U="FETCH_COUNTRY_FAILURE",T=function(e){return function(t){t({type:D}),x.a.get("https://restcountries.eu/rest/v2/name/".concat(e,"?fullText=true")).then((function(e){var c;t((c=e.data,{type:J,payload:c}))})).catch((function(e){console.log(e.message);var c=e.message;t(function(e){return{type:U,payload:e}}(c))}))}},B="FETCH_REGION_REQUEST",k="FETCH_REGION_SUCCESS",P="FETCH_REGION_FAILURE",y=function(e){return function(t){t({type:B}),x.a.get("https://restcountries.eu/rest/v2/region/".concat(e)).then((function(e){var c;t((c=e.data,{type:k,payload:c}))})).catch((function(e){console.log(e.message);var c=e.message;t(function(e){return{type:P,payload:e}}(c))}))}},z="FETCH_BORDER_REQUEST",M="FETCH_BORDER_SUCCESS",W="FETCH_BORDER_FAILURE",w=function(e){return function(t){t({type:z}),x.a.all(e&&e.map((function(e){return x.a.get("https://restcountries.eu/rest/v2/alpha/".concat(e))}))).then((function(e){var c=[];e.forEach((function(e){c.push(e.data)})),t({type:M,payload:c})})).catch((function(e){console.log(e.message);var c=e.message;t(function(e){return{type:W,payload:e}}(c))}))}},S=c(113),Y=c(35),R=c.n(Y),F=(c(91),function(e){var t,c=e.match,a=e.history;console.log(c.params.country),console.log(a);var r=Object(n.useState)({}),s=Object(j.a)(r,2),l=s[0],o=s[1],g=Object(n.useState)([]),d=Object(j.a)(g,2),C=(d[0],d[1],Object(O.b)()),b=Object(O.c)((function(e){return e.country})),u=Object(O.c)((function(e){return e.borders}));Object(n.useEffect)((function(){C(T(c.params.country)),window.scrollTo({top:0,left:0,behavior:"smooth"})}),[null===c||void 0===c||null===(t=c.params)||void 0===t?void 0:t.country]),Object(n.useEffect)((function(){o(b.data[0])}),[null===b||void 0===b?void 0:b.data[0]]),Object(n.useEffect)((function(){l.borders&&C(w(l.borders))}),[null===l||void 0===l?void 0:l.borders]);var h=new Intl.NumberFormat("en-US");return Object(n.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),Object(n.useEffect)((function(){b.error&&!b.loading&&a.replace("/404")}),[b]),console.log("lol",u),Object(i.jsx)(i.Fragment,{children:b.loading?Object(i.jsxs)("div",{className:"detail-container",children:[Object(i.jsx)("div",{className:"back-btn-div",children:Object(i.jsxs)("button",{onClick:function(){return a.goBack()},children:[Object(i.jsx)(R.a,{}),Object(i.jsx)("span",{children:"Back"})]})}),Object(i.jsxs)("div",{className:"detail-wrapper",children:[Object(i.jsx)("div",{className:"img-wrapper",children:Object(i.jsx)(S.a,{})}),Object(i.jsxs)("div",{className:"text-wrapper",children:[Object(i.jsx)("h1",{children:Object(i.jsx)(S.a,{})}),Object(i.jsxs)("div",{className:"details",children:[Object(i.jsxs)("div",{className:"left-tab",children:[Object(i.jsx)("p",{children:Object(i.jsx)(S.a,{})}),Object(i.jsx)("p",{children:Object(i.jsx)(S.a,{})}),Object(i.jsx)("p",{children:Object(i.jsx)(S.a,{})}),Object(i.jsx)("p",{children:Object(i.jsx)(S.a,{})}),Object(i.jsx)("p",{children:Object(i.jsx)(S.a,{})})]}),Object(i.jsxs)("div",{className:"right-tab",children:[Object(i.jsx)("p",{children:Object(i.jsx)(S.a,{})}),Object(i.jsx)("p",{children:Object(i.jsx)(S.a,{})}),Object(i.jsx)("p",{children:Object(i.jsx)(S.a,{})}),Object(i.jsx)("p",{children:Object(i.jsx)(S.a,{})})]})]}),Object(i.jsxs)("div",{className:"border",children:[Object(i.jsx)("p",{children:Object(i.jsx)(S.a,{})}),Object(i.jsx)("p",{children:Object(i.jsx)(S.a,{})})]})]})]})]}):l&&Object(i.jsxs)("div",{className:"detail-container",children:[Object(i.jsx)("div",{className:"back-btn-div",children:Object(i.jsxs)("button",{onClick:function(){return a.goBack()},children:[Object(i.jsx)(R.a,{}),Object(i.jsx)("span",{children:"Back"})]})}),Object(i.jsxs)("div",{className:"detail-wrapper",children:[Object(i.jsx)("div",{className:"img-wrapper",children:Object(i.jsx)("img",{src:l.flag,alt:"The Flag of ".concat(l.name)})}),Object(i.jsxs)("div",{className:"text-wrapper",children:[Object(i.jsx)("h1",{children:l.name}),Object(i.jsxs)("div",{className:"details",children:[Object(i.jsxs)("div",{className:"left-tab",children:[Object(i.jsxs)("p",{children:["Native Name: ",Object(i.jsx)("span",{children:l.nativeName})]}),Object(i.jsxs)("p",{children:["Population:"," ",Object(i.jsx)("span",{children:h.format(l.population)})]}),Object(i.jsxs)("p",{children:["Region: ",Object(i.jsx)("span",{children:l.region})]}),Object(i.jsxs)("p",{children:["Sub Region: ",Object(i.jsx)("span",{children:l.subregion})]}),Object(i.jsxs)("p",{children:["Capital: ",Object(i.jsx)("span",{children:l.capital})]})]}),Object(i.jsxs)("div",{className:"right-tab",children:[Object(i.jsxs)("p",{children:["Top Level Domain:"," ",l.topLevelDomain&&l.topLevelDomain.map((function(e,t,c){return Object(i.jsxs)("span",{children:[e," ",1===c.length||c.length===t+1?null:" , "]},t)}))]}),Object(i.jsxs)("p",{children:["Population:"," ",Object(i.jsx)("span",{children:h.format(l.population)})]}),Object(i.jsxs)("p",{children:["Currency:"," ",l.currencies&&l.currencies.map((function(e,t,c){return Object(i.jsxs)("span",{children:[e.name," (",e.symbol,")",1===c.length||c.length===t+1?null:" , "]},t)}))]}),Object(i.jsxs)("p",{children:["Languages:"," ",l.languages&&l.languages.map((function(e,t,c){return Object(i.jsxs)("span",{children:[e.name,1===c.length||c.length===t+1?null:" , "]},t)}))]})]})]}),Object(i.jsx)("div",{className:"border",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"sub-title",children:"Border Countries:"})," ",u.data.length&&u.data.map((function(e,t){return Object(i.jsxs)(A.b,{to:"/countries/".concat(e.name),children:[Object(i.jsx)("span",{children:e.name})," "]},t)}))]})})]})]})]})})}),L=(c(92),function(){return Object(i.jsx)("div",{className:"four-zero-four",children:Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)("h1",{children:"404"}),Object(i.jsx)("h3",{children:"This page doesn't exist"}),Object(i.jsxs)("h4",{children:["Try going back to the ",Object(i.jsx)("a",{href:"/",children:"homepage"}),", if you can't find what you're looking for."]}),Object(i.jsxs)("p",{children:[" ",Object(i.jsx)("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank",children:"DON'T CLICK ME"})," "]})]})})}),H=(c(93),function(e){var t=e.imgSrc,c=e.countryName,n=e.population,a=e.region,r=e.capital;return Object(i.jsxs)("div",{className:"country-card",children:[Object(i.jsxs)("div",{className:"img-wrapper",children:[Object(i.jsx)("img",{src:t,alt:c}),Object(i.jsx)(A.b,{to:"/countries/".concat(c)})]}),Object(i.jsxs)("div",{className:"text-wrapper",children:[Object(i.jsx)("h4",{children:Object(i.jsx)(A.b,{to:"/countries/".concat(c),children:c})}),Object(i.jsxs)("p",{className:"small-text",children:["Population: ",Object(i.jsx)("span",{children:n})]}),Object(i.jsxs)("p",{className:"small-text",children:["Region: ",Object(i.jsx)("span",{children:a})]}),Object(i.jsxs)("p",{className:"small-text",children:["Capital: ",Object(i.jsx)("span",{children:r})]})]})]})}),G=function(){return Object(i.jsxs)("div",{className:"country-card",children:[Object(i.jsx)("div",{className:"img-wrapper",children:Object(i.jsx)(S.a,{animation:"wave"})}),Object(i.jsxs)("div",{className:"text-wrapper",children:[Object(i.jsx)("h4",{children:Object(i.jsx)(S.a,{animation:"wave"})}),Object(i.jsx)("p",{className:"small-text",children:Object(i.jsx)(S.a,{animation:"wave"})}),Object(i.jsx)("p",{className:"small-text",children:Object(i.jsx)(S.a,{animation:"wave"})}),Object(i.jsx)("p",{className:"small-text",children:Object(i.jsx)(S.a,{animation:"wave"})})]})]})},K=(c(94),c(99),c(31)),Z=c.n(K),X=c(55),q=c.n(X),V=(c(95),function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.countries})),c=Object(n.useRef)(null),a=t.data,r=t.error;console.log("fire",r);var s=Object(n.useState)(!1),l=Object(j.a)(s,2),o=l[0],g=l[1],d=Object(n.useState)(""),C=Object(j.a)(d,2),b=C[0],u=C[1],h=Object(n.useState)(!0),x=Object(j.a)(h,2),p=x[0],Q=x[1];return Object(n.useEffect)((function(){Q(t.loading)}),[null===t||void 0===t?void 0:t.loading]),Object(i.jsxs)("div",{className:"search-filter-container",children:[Object(i.jsxs)("div",{className:"search-box-wrapper",ref:c,children:[Object(i.jsxs)("div",{className:"search-box",children:[Object(i.jsx)("input",{type:"text",onChange:function(t){u(t.target.value),""!==t.target.value&&e(v(t.target.value))},value:b,placeholder:"Search for a country..."}),Object(i.jsx)("div",{className:"search-icon",children:Object(i.jsx)(q.a,{})})]}),Object(i.jsx)("div",{className:"search-box-list",children:p&&""!==b?Object(i.jsxs)("div",{className:"country-search",children:[Object(i.jsx)("div",{className:"img-wrapper",children:Object(i.jsx)(S.a,{animation:"wave"})}),Object(i.jsx)("p",{animation:"wave",children:Object(i.jsx)(S.a,{})})]}):""!==r&&""!==b?Object(i.jsxs)("div",{className:"country-search",children:[Object(i.jsx)("div",{className:"img-wrapper",children:Object(i.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(i.jsx)("p",{children:"Country not found"})," "]}):a.length&&""!==b&&a.map((function(e){return Object(i.jsxs)("div",{className:"country-search",children:[Object(i.jsx)("div",{className:"img-wrapper",children:Object(i.jsx)("img",{src:e.flag,alt:"flag of "+e.name})}),Object(i.jsxs)("p",{children:[e.name," "]})," ",Object(i.jsx)(A.b,{to:"/countries/".concat(e.name)})]})}))})]}),Object(i.jsxs)("div",{className:"filter-region-wrapper",children:[Object(i.jsxs)("div",{className:"filter-header",onClick:function(){return g(!o)},children:[Object(i.jsx)("h4",{children:"Filter by region"}),Object(i.jsx)(Z.a,{})]}),o&&Object(i.jsxs)("div",{className:"filter-list",children:[Object(i.jsxs)("h4",{children:[" ",Object(i.jsx)(A.b,{to:"/regions/Africa",children:"Africa "})]}),Object(i.jsxs)("h4",{children:[" ",Object(i.jsx)(A.b,{to:"/regions/Americas",children:"Americas"})]}),Object(i.jsxs)("h4",{children:[" ",Object(i.jsx)(A.b,{to:"/regions/Asia",children:"Asia "})]}),Object(i.jsxs)("h4",{children:[" ",Object(i.jsx)(A.b,{to:"/regions/Europe",children:"Europe "})]}),Object(i.jsxs)("h4",{children:[" ",Object(i.jsx)(A.b,{to:"/regions/Oceania",children:"Oceania "})]})]})]})]})}),_=function(){var e=Object(O.c)((function(e){return e.allCountries})),t=e.data;console.log(t.length);var c=Object(O.b)();Object(n.useEffect)((function(){c(N())}),[]),Object(n.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]);var a=new Intl.NumberFormat("en-US");return Object(i.jsxs)("div",{children:[Object(i.jsx)(V,{}),Object(i.jsx)("div",{className:"countries-grid",children:e.loading?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(G,{}),Object(i.jsx)(G,{}),Object(i.jsx)(G,{}),Object(i.jsx)(G,{}),Object(i.jsx)(G,{}),Object(i.jsx)(G,{})]}):t.length&&t.map((function(e,t){return Object(i.jsxs)(H,{imgSrc:e.flag,countryName:e.name,population:a.format(e.population),region:e.region,capital:e.capital,children:[" ",e.name]},t)}))})]})},$=(c(96),function(e){var t,c=e.match,a=e.history;Object(n.useEffect)((function(){o(y(c.params.region))}),[null===c||void 0===c||null===(t=c.params)||void 0===t?void 0:t.region]);var r=Object(n.useState)(!0),s=Object(j.a)(r,2),A=(s[0],s[1],Object(O.c)((function(e){return e.region}))),l=A.data;console.log("see me",l.loading);var o=Object(O.b)();Object(n.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]),Object(n.useEffect)((function(){A.error&&!A.loading&&a.replace("/404")}),[A]);var g=new Intl.NumberFormat("en-US");return Object(i.jsxs)("div",{children:[Object(i.jsx)(V,{}),Object(i.jsx)("div",{className:"countries-grid",children:A.loading?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(G,{}),Object(i.jsx)(G,{}),Object(i.jsx)(G,{}),Object(i.jsx)(G,{}),Object(i.jsx)(G,{}),Object(i.jsx)(G,{})]}):l.length&&l.map((function(e,t){return Object(i.jsxs)(H,{imgSrc:e.flag,countryName:e.name,population:g.format(e.population),region:e.region,capital:e.capital,children:[" ",e.name]},t)}))})]})}),ee=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(A.a,{children:[Object(i.jsx)(u,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{exact:!0,path:"/",component:_}),Object(i.jsx)(l.a,{exact:!0,path:"/countries/:country",component:F}),Object(i.jsx)(l.a,{exact:!0,path:"/regions/:region",component:$}),Object(i.jsx)(l.a,{exact:!0,component:L}),Object(i.jsx)(l.a,{exact:!0,path:"/404",component:L})]}),Object(i.jsx)(o,{})]})})},te=c(21),ce=c(56),ne=c(57),ae=c.n(ne),re=c(58),se=c(10),Ae={loading:!1,data:{},error:""},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case I:return Object(se.a)(Object(se.a)({},e),{},{loading:!0});case E:return{loading:!1,data:n,error:""};case f:return{loading:!1,data:{},error:n};default:return e}},ie={loading:!1,data:{},error:""},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case D:return Object(se.a)(Object(se.a)({},e),{},{loading:!0});case J:return{loading:!1,data:n,error:""};case U:return{loading:!1,data:{},error:n};default:return e}},je={loading:!1,data:{},error:""},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case B:return Object(se.a)(Object(se.a)({},e),{},{loading:!0});case k:return{loading:!1,data:n,error:""};case P:return{loading:!1,data:{},error:n};default:return e}},de={loading:!1,data:{},error:""},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case p:return Object(se.a)(Object(se.a)({},e),{},{loading:!0});case Q:return{loading:!1,data:n,error:""};case m:return{loading:!1,data:{},error:n};default:return e}},be={loading:!1,data:{},error:""},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case z:return Object(se.a)(Object(se.a)({},e),{},{loading:!0});case M:return{loading:!1,data:n,error:""};case W:return{loading:!1,data:{},error:n};default:return e}},Oe=Object(te.combineReducers)({allCountries:Ce,countries:le,country:oe,region:ge,borders:ue}),he=Object(te.createStore)(Oe,Object(ce.composeWithDevTools)(Object(te.applyMiddleware)(ae.a,re.a)));s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(O.a,{store:he,children:Object(i.jsx)(ee,{})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.4314e0dd.chunk.js.map