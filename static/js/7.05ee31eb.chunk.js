(this.webpackJsonppandemania=this.webpackJsonppandemania||[]).push([[7],{124:function(e,t,n){},127:function(e,t,n){},132:function(e,t,n){},134:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var r=n(56),a=n(2),c=n(1),o=(n(124),n(59)),u=n.n(o),s=n(60),i=n(75),l=n(126),f=n.n(l),d=n(97),j=n.n(d),b=n(190),h=n(189),p=n(61),O=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat("https://api.covid19api.com/country/").concat(t)).then((function(e){return e.ok?e.json():[]})).then((function(e){return e.map((function(e){return{id:e.ID,country:e.Country,confirmed:e.Confirmed,recovered:e.Recovered,deaths:e.Deaths,active:e.Active,date:Date.parse(e.Date)}}))})).catch((function(e){return console.warn(e),Object(p.a)(),[]})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=(n(127),"area-datetime"),v=Object.freeze({ONE_MONTH:"one_month",SIX_MONTH:"six_months",ONE_YEAR:"one_year",YTD:"ytd",ALL:"all"}),y={series:[{data:[[(new Date).getTime(),0]]}],options:{chart:{id:m,zoom:{autoScaleYaxis:!0}},theme:{mode:"dark"},dataLabels:{enabled:!1},xaxis:{type:"datetime"},tooltip:{x:{format:"dd MMM yyyy"}}},selection:v.ALL},x=function(e){var t=e.countryName,n=Object(c.useState)(y),o=Object(r.a)(n,2),l=o[0],d=o[1];Object(c.useEffect)((function(){t&&p()}),[t]);var p=function(){var e=Object(s.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:n=e.sent,r=[],"undefined"!==typeof n&&(r=[{name:"Confirmed cases",data:n.map((function(e){return[e.date,e.confirmed]}))},{name:"Recovered cases",data:n.map((function(e){return[e.date,e.recovered]}))}],d(Object(i.a)(Object(i.a)({},l),{},{series:r})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=[{value:v.ONE_MONTH,label:"1M"},{value:v.SIX_MONTH,label:"6M"},{value:v.ONE_YEAR,label:"1Y"},{value:v.YTD,label:"YTD"},{value:v.ALL,label:"ALL"}];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h.a,{className:"toolbar",children:x.map((function(e){return Object(a.jsx)(b.a,{variant:"contained",color:l.selection===e.value?"primary":"",onClick:function(){return function(e){var t,n=l.series[0].data,r=n.length-1;if(-1!==r)switch(d(Object(i.a)(Object(i.a)({},l),{},{selection:e})),e){case v.ONE_MONTH:t=31,j.a.exec(m,"zoomX",n[r-t][0],n[r][0]);break;case v.SIX_MONTH:t=186,j.a.exec(m,"zoomX",n[r-t][0],n[n.length-1][0]);break;case v.ONE_YEAR:t=365,j.a.exec(m,"zoomX",n[r-t][0],n[r][0]);break;case v.YTD:var a=new Date((new Date).getFullYear(),0,1);j.a.exec(m,"zoomX",a.getTime(),n[r][0]);break;case v.ALL:j.a.exec(m,"zoomX",n[0][0],n[r][0])}}(e.value)},className:l.selection===e.value?"active":"",children:e.label},e.value)}))}),Object(a.jsxs)("div",{className:"chart-wrapper",children:[0===l.series[0].data.length&&Object(a.jsx)("h2",{className:"chart-wrapper__header",children:"No data"}),Object(a.jsx)(f.a,{options:l.options,series:l.series,type:"area",height:500})]})]})};x.defaultProps={countryName:null};var g=x,w=n(210),N=n(211),k=n(139),S=n(191),C=n(129),I=n.n(C),L=n(130),A=n.n(L),T=function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.covid19api.com/countries").then((function(e){return e.ok?e.json():[]})).then((function(e){return e.map((function(e){return{country:e.Country,slug:e.Slug,ISO2:e.ISO2}}))})).catch((function(e){return console.warn(e),Object(p.a)(),[]})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return n=e.sent,e.abrupt("return",n.find((function(e){return e.ISO2===t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=n(67),D=(n(132),Object(k.a)({palette:{type:"dark"}})),E=function(e){var t=e.setPickedCountry,n=Object(c.useState)([]),o=Object(r.a)(n,2),l=o[0],f=o[1];Object(c.useEffect)((function(){d()}),[]);var d=function(){var e=Object(s.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,n=t.sort((function(e,t){return e.country.localeCompare(t.country)})),f(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(S.a,{theme:D,children:Object(a.jsx)(N.a,{id:"highlights-demo",theme:D,style:{width:300},options:l,getOptionLabel:function(e){return e.country},onChange:function(e,n){return function(e){e&&t(e)}(n)},renderInput:function(e){return Object(a.jsx)(w.a,Object(i.a)(Object(i.a)({},e),{},{label:"Countries",variant:"outlined",margin:"normal"}))},renderOption:function(e,t){var n=t.inputValue,r=A()(e.country,n),c=I()(e.country,r);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(z.a,{code:e.ISO2,name:e.country}),c.map((function(e){return Object(a.jsx)("span",{style:{fontWeight:e.highlight?700:400},children:e.text},e.text)}))]})}})})},Y=n(137),M=n.n(Y),P=n(135),X=n.n(P),H=(n(134),{fontSize:"2rem"}),R=function(e){var t=e.isSet,n=e.onClick;return Object(a.jsx)("div",{className:"wrapper",children:t?Object(a.jsx)(X.a,{onClick:n,className:"icon",style:H}):Object(a.jsx)(M.a,{onClick:n,className:"icon",style:H})})};R.defaultProps={isSet:!1};var F=R,J=n(53),U=n(26),W=n(197),B=n(198),V=n(200),q=n(196),G=n(199),K=n(193),Q=Object(k.a)({palette:{type:"dark"}}),Z=[$("Confirmed",0),$("Deaths",0),$("Recovered",0),$("Active",0)];function $(e,t){return{name:e,number:t}}var ee=function(e){var t=e.countryName,n=Object(c.useState)(Z),o=Object(r.a)(n,2),i=o[0],l=o[1];Object(c.useEffect)((function(){t&&f()}),[t]);var f=function(){var e=Object(s.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:0!==(n=e.sent).length?(r=n[n.length-1],l([$("Confirmed",r.confirmed),$("Deaths",r.deaths),$("Recovered",r.recovered),$("Active",r.active)])):l(Z);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{style:{marginBottom:"1rem"},children:Object(a.jsx)(S.a,{theme:Q,children:Object(a.jsx)(q.a,{component:K.a,children:Object(a.jsx)(W.a,{"aria-label":"country statistic",children:Object(a.jsx)(B.a,{children:i.map((function(e){return Object(a.jsxs)(G.a,{children:[Object(a.jsx)(V.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:e.name}),Object(a.jsx)(V.a,{align:"right",children:e.number})]},e.name)}))})})})})})};ee.defaultProps={countryName:null};var te=ee,ne={slug:null,country:null,ISO2:null};t.default=function(){var e=Object(c.useContext)(J.a),t=e.country,n=e.user,o=e.setUser,u=e.fetched,s=Object(c.useState)(ne),i=Object(r.a)(s,2),l=i[0],f=i[1];Object(c.useEffect)((function(){"undefined"!==typeof t&&""!==t&&_(t).then((function(e){f(e||ne)}))}),[t]);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("main",{children:[Object(a.jsxs)("p",{className:"title",children:["Cases and recoveries for whole country:",l.country?Object(a.jsxs)("span",{className:"bold",children:[" ",l.country]}):Object(a.jsx)("span",{children:"No country set"}),Object(a.jsx)(z.a,{code:l.ISO2,size:24,name:l.country})]}),Object(a.jsxs)("div",{className:"picker",children:[Object(a.jsx)(E,{setPickedCountry:function(e){return f(e)}}),n&&Object(a.jsx)(F,{onClick:function(){var e=n.uid;Object(U.a)(e,l.ISO2),o({user:n,fetched:u,country:l.ISO2}),Object(p.c)(l.country)},isSet:l.ISO2===t})]}),Object(a.jsx)(g,{countryName:l.slug}),Object(a.jsx)(te,{countryName:l.slug})]})})}},53:function(e,t,n){"use strict";var r=n(1),a={user:null,fetched:!1,country:"",setUser:function(){}},c=n.n(r).a.createContext(a);t.a=c},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o}));var r=n(25),a=function(){r.b.error("Covid-19 API is down, please try again later!",{toastId:"api-error"})},c=function(){r.b.success("Successfully logged in!",{toastId:"login"})},o=function(e){r.b.info("Your new default country is ".concat(e,"!"),{toastId:"new-favourite-".concat(e)})}},67:function(e,t,n){"use strict";var r=n(2),a=(n(1),Object.freeze({16:16,24:24,32:32,48:48,64:64})),c=Object.freeze({FLAT:"flat",SHINY:"shiny"}),o=function(e){var t=e.code,n=e.size,a=e.name,c=e.theme,o={width:n,height:n};return t&&n&&a&&c?Object(r.jsx)("img",{src:"https://www.countryflags.io/".concat(t,"/").concat(c,"/24.png"),alt:a,style:o}):null};t.a=o,o.defaultProps={code:"PL",size:a[16],name:"Poland",theme:c.FLAT}}}]);
//# sourceMappingURL=7.05ee31eb.chunk.js.map