(this.webpackJsonppandemania=this.webpackJsonppandemania||[]).push([[3],{26:function(n,e,t){"use strict";t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return s}));var o,r=t(16),i=(t(46),{apiKey:"AIzaSyCGg--7lUP9qUJxPQUHmTyfkzZhW3AHsT8",authDomain:"pandemania-d9690.firebaseapp.com",projectId:"pandemania-d9690",storageBucket:"pandemania-d9690.appspot.com",messagingSenderId:"404379003612",appId:"1:404379003612:web:4a1c9b3218bfdf46d0a219"}),c=function(){var n=r.a.initializeApp(i);r.a.firestore().enablePersistence().then((function(){o=r.a.firestore(n)}))},a=function(n,e){o.collection("users").doc(n).set({country:e}).catch((function(n){console.error("Error writing document: ",n)}))},s=function(n){return o.collection("users").doc(n).get().then((function(n){return n.exists?n.data().country:""})).catch((function(n){console.error("Error getting data for user:",n)}))}},34:function(n,e,t){},42:function(n,e,t){},43:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var o=t(3),r=t(1),i=t.n(r),c=t(23),a=t.n(c),s=t(25),l=t(4),u=t(26),d=(t(34),i.a.lazy((function(){return Promise.all([t.e(1),t.e(0),t.e(8),t.e(12)]).then(t.bind(null,179))}))),f=i.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(6),t.e(7)]).then(t.bind(null,209))})),h=i.a.lazy((function(){return Promise.all([t.e(1),t.e(13)]).then(t.bind(null,198))})),p=i.a.lazy((function(){return t.e(14).then(t.bind(null,199))})),b=i.a.lazy((function(){return Promise.all([t.e(1),t.e(11)]).then(t.bind(null,200))})),j=i.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(9),t.e(10)]).then(t.bind(null,211))}));Object(u.c)();var g=function(){return Object(o.jsx)(r.Suspense,{fallback:Object(o.jsx)(o.Fragment,{}),children:Object(o.jsx)(b,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(s.a,{children:[Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)(l.d,{children:[Object(o.jsx)(l.b,{path:"/login",children:Object(o.jsx)(d,{})}),Object(o.jsx)(p,{path:"/logout",children:Object(o.jsx)(h,{})}),Object(o.jsx)(l.b,{path:"*",children:Object(o.jsx)(f,{})})]})})]})})})})},v=(t(42),t(43),t(19)),m=t.n(v),w=t(24);function y(){return(y=Object(w.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:setTimeout((function(){var n=document.getElementById("loader-wrapper");n.addEventListener("transitionend",(function(){n.style.display="none"}),!0),n.style.opacity=0}),1200);case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var x=function(){return y.apply(this,arguments)},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var P=function(n){n&&n instanceof Function&&t.e(15).then(t.bind(null,206)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),o(n),r(n),i(n),c(n)}))};a.a.render(Object(o.jsxs)(i.a.StrictMode,{children:[Object(o.jsx)("div",{id:"loader-wrapper",children:Object(o.jsx)("div",{id:"loader"})}),Object(o.jsx)(g,{})]}),document.getElementById("root"),x),function(n){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");O?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):k(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):k(e,n)}))}}(),P()}},[[45,4,5]]]);
//# sourceMappingURL=main.6977838d.chunk.js.map