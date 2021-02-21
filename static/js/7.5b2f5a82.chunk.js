(this.webpackJsonppandemania=this.webpackJsonppandemania||[]).push([[7],{122:function(e,t,n){},124:function(e,t,n){},129:function(e,t,n){},131:function(e,t,n){},209:function(e,t,n){"use strict";n.r(t);var r=n(57),a=n(3),c=n(1),o=(n(122),n(19)),s=n.n(o),i=n(24),u=n(73),l=n(123),f=n.n(l),d=n(95),j=n.n(d),p=n(187),h=n(186),b=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",fetch("".concat("https://api.covid19api.com/country/").concat(t)).then((function(e){return e.ok?e.json():[]})).then((function(e){return e.map((function(e){return{id:e.ID,country:e.Country,confirmed:e.Confirmed,recovered:e.Recovered,deaths:e.Deaths,active:e.Active,date:Date.parse(e.Date)}}))})));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",console.warn(e.t0));case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}(),O=(n(124),"area-datetime"),m=Object.freeze({ONE_MONTH:"one_month",SIX_MONTH:"six_months",ONE_YEAR:"one_year",YTD:"ytd",ALL:"all"}),v={series:[{data:[[(new Date).getTime(),0]]}],options:{chart:{id:O,zoom:{autoScaleYaxis:!0}},theme:{mode:"dark"},dataLabels:{enabled:!1},xaxis:{type:"datetime"},tooltip:{x:{format:"dd MMM yyyy"}}},selection:m.ALL},x=function(e){var t=e.countryName,n=Object(c.useState)(v),o=Object(r.a)(n,2),l=o[0],d=o[1];Object(c.useEffect)((function(){x()}),[t]);var x=function(){var e=Object(i.a)(s.a.mark((function e(){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:n=e.sent,r=[],"undefined"!==typeof n&&(r=[{name:"Confirmed cases",data:n.map((function(e){return[e.date,e.confirmed]}))},{name:"Recovered cases",data:n.map((function(e){return[e.date,e.recovered]}))}],d(Object(u.a)(Object(u.a)({},l),{},{series:r})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=[{value:m.ONE_MONTH,label:"1M"},{value:m.SIX_MONTH,label:"6M"},{value:m.ONE_YEAR,label:"1Y"},{value:m.YTD,label:"YTD"},{value:m.ALL,label:"ALL"}];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h.a,{className:"toolbar",children:y.map((function(e){return Object(a.jsx)(p.a,{variant:"contained",color:l.selection===e.value?"primary":"",onClick:function(){return function(e){var t,n=l.series[0].data,r=n.length-1;if(-1!==r)switch(d(Object(u.a)(Object(u.a)({},l),{},{selection:e})),e){case m.ONE_MONTH:t=31,j.a.exec(O,"zoomX",n[r-t][0],n[r][0]);break;case m.SIX_MONTH:t=186,j.a.exec(O,"zoomX",n[r-t][0],n[n.length-1][0]);break;case m.ONE_YEAR:t=365,j.a.exec(O,"zoomX",n[r-t][0],n[r][0]);break;case m.YTD:var a=new Date((new Date).getFullYear(),0,1);j.a.exec(O,"zoomX",a.getTime(),n[r][0]);break;case m.ALL:j.a.exec(O,"zoomX",n[0][0],n[r][0])}}(e.value)},className:l.selection===e.value?"active":"",children:e.label},e.value)}))}),Object(a.jsxs)("div",{className:"chart-wrapper",children:[0===l.series[0].data.length&&Object(a.jsx)("h2",{className:"chart-wrapper__header",children:"No data"}),Object(a.jsx)(f.a,{options:l.options,series:l.series,type:"area",height:500})]})]})},y=n(207),g=n(208),w=n(136),N=n(188),k=n(126),S=n.n(k),C=n(127),L=n.n(C),I=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",fetch("https://api.covid19api.com/countries").then((function(e){return e.ok?e.json():[]})).then((function(e){return e.map((function(e){return{country:e.Country,slug:e.Slug,ISO2:e.ISO2}}))})));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",console.log(e.t0));case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return n=e.sent,e.abrupt("return",n.find((function(e){return e.ISO2===t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=n(65),z=(n(129),Object(w.a)({palette:{type:"dark"}})),A=function(e){var t=e.setPickedCountry,n=Object(c.useState)([]),o=Object(r.a)(n,2),l=o[0],f=o[1];Object(c.useEffect)((function(){d()}),[]);var d=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,n=t.sort((function(e,t){return e.country.localeCompare(t.country)})),f(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(N.a,{theme:z,children:Object(a.jsx)(g.a,{id:"highlights-demo",theme:z,style:{width:300},options:l,getOptionLabel:function(e){return e.country},onChange:function(e,n){return function(e){e&&t(e)}(n)},renderInput:function(e){return Object(a.jsx)(y.a,Object(u.a)(Object(u.a)({},e),{},{label:"Countries",variant:"outlined",margin:"normal"}))},renderOption:function(e,t){var n=t.inputValue,r=L()(e.country,n),c=S()(e.country,r);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_.a,{code:e.ISO2,name:e.country}),c.map((function(e){return Object(a.jsx)("span",{style:{fontWeight:e.highlight?700:400},children:e.text},e.text)}))]})}})})},D=n(134),E=n.n(D),M=n(132),Y=n.n(M),P=(n(131),{fontSize:"2rem"}),X=function(e){var t=e.isSet,n=e.onClick;return Object(a.jsx)("div",{className:"wrapper",children:t?Object(a.jsx)(Y.a,{onClick:n,className:"icon",style:P}):Object(a.jsx)(E.a,{onClick:n,className:"icon",style:P})})};X.defaultProps={isSet:!1};var H=X,R=n(54),F=n(26),J=n(194),U=n(195),W=n(197),B=n(193),V=n(196),q=n(190),G=Object(w.a)({palette:{type:"dark"}}),K=[Q("Confirmed",0),Q("Deaths",0),Q("Recovered",0),Q("Active",0)];function Q(e,t){return{name:e,number:t}}var Z=function(e){var t=e.countryName,n=Object(c.useState)(K),o=Object(r.a)(n,2),u=o[0],l=o[1];Object(c.useEffect)((function(){f()}),[t]);var f=function(){var e=Object(i.a)(s.a.mark((function e(){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:0!==(n=e.sent).length?(r=n[n.length-1],l([Q("Confirmed",r.confirmed),Q("Deaths",r.deaths),Q("Recovered",r.recovered),Q("Active",r.active)])):l(K);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{style:{marginBottom:"1rem"},children:Object(a.jsx)(N.a,{theme:G,children:Object(a.jsx)(B.a,{component:q.a,children:Object(a.jsx)(J.a,{"aria-label":"country statistic",children:Object(a.jsx)(U.a,{children:u.map((function(e){return Object(a.jsxs)(V.a,{children:[Object(a.jsx)(W.a,{component:"th",scope:"row",style:{fontWeight:"bold"},children:e.name}),Object(a.jsx)(W.a,{align:"right",children:e.number})]},e.name)}))})})})})})};t.default=function(){var e=Object(c.useContext)(R.a),t=e.country,n=e.user,o=e.setUser,s=e.fetched,i=Object(c.useState)({slug:"poland",country:"Poland",ISO2:"PL"}),u=Object(r.a)(i,2),l=u[0],f=u[1];Object(c.useEffect)((function(){"undefined"!==typeof t&&""!==t&&T(t).then((function(e){return f(e)}))}),[t]);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("main",{children:[Object(a.jsxs)("p",{className:"title",children:["Cases and recoveries for whole country:",l&&Object(a.jsxs)("span",{className:"bold",children:[" ",l.country]}),Object(a.jsx)(_.a,{code:l.ISO2,size:24,name:l.country})]}),Object(a.jsxs)("div",{className:"picker",children:[Object(a.jsx)(A,{setPickedCountry:function(e){return f(e)}}),n&&Object(a.jsx)(H,{onClick:function(){var e=n.uid;Object(F.a)(e,l.ISO2),o({user:n,fetched:s,country:l.ISO2})},isSet:l.ISO2===t})]}),Object(a.jsx)(x,{countryName:l.slug}),Object(a.jsx)(Z,{countryName:l.slug})]})})}},54:function(e,t,n){"use strict";var r=n(1),a={user:null,fetched:!1,country:"",setUser:function(){}},c=n.n(r).a.createContext(a);t.a=c},65:function(e,t,n){"use strict";var r=n(3),a=(n(1),Object.freeze({16:16,24:24,32:32,48:48,64:64})),c=Object.freeze({FLAT:"flat",SHINY:"shiny"}),o=function(e){var t=e.code,n=e.size,a=e.name,c=e.theme,o={width:n,height:n};return Object(r.jsx)("img",{src:"https://www.countryflags.io/".concat(t,"/").concat(c,"/").concat(n,".png"),alt:a,style:o})};t.a=o,o.defaultProps={code:"PL",size:a[16],name:"Poland",theme:c.FLAT}}}]);
//# sourceMappingURL=7.5b2f5a82.chunk.js.map