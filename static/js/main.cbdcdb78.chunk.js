(this.webpackJsonppandemania=this.webpackJsonppandemania||[]).push([[3],{26:function(e,n,t){"use strict";t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return s}));var o,i=t(18),r=(t(46),{apiKey:"AIzaSyCGg--7lUP9qUJxPQUHmTyfkzZhW3AHsT8",authDomain:"pandemania-d9690.firebaseapp.com",projectId:"pandemania-d9690",storageBucket:"pandemania-d9690.appspot.com",messagingSenderId:"404379003612",appId:"1:404379003612:web:4a1c9b3218bfdf46d0a219"}),c=function(){var e=i.a.initializeApp(r);i.a.firestore().enablePersistence().then((function(){o=i.a.firestore(e)}))},a=function(e,n){o.collection("users").doc(e).set({country:n}).catch((function(e){console.error("Error writing document: ",e)}))},s=function(e){return o.collection("users").doc(e).get().then((function(e){return e.exists?e.data().country:""})).catch((function(e){console.error("Error getting data for user:",e)}))}},34:function(e,n,t){},35:function(e,n,t){},44:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var o=t(2),i=t(1),r=t.n(i),c=t(17),a=t.n(c),s=t(24),l=t(4),d=t(25),u=t(26),f=(t(34),t(35),function(){return Object(o.jsx)("div",{className:"loader-wrapper",children:Object(o.jsx)("div",{className:"loader",children:"Loading..."})})}),h=(t(36),r.a.lazy((function(){return Promise.all([t.e(1),t.e(0),t.e(8),t.e(12)]).then(t.bind(null,182))}))),b=r.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(6),t.e(7)]).then(t.bind(null,212))})),j=r.a.lazy((function(){return Promise.all([t.e(1),t.e(13)]).then(t.bind(null,201))})),p=r.a.lazy((function(){return t.e(14).then(t.bind(null,202))})),g=r.a.lazy((function(){return Promise.all([t.e(1),t.e(10)]).then(t.bind(null,203))})),v=r.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(9),t.e(11)]).then(t.bind(null,214))}));Object(u.c)();var m=function(){return Object(o.jsx)(i.Suspense,{fallback:Object(o.jsx)(f,{}),children:Object(o.jsx)(g,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)(s.a,{children:[Object(o.jsx)(v,{}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)(l.d,{children:[Object(o.jsx)(l.b,{path:"/login",children:Object(o.jsx)(h,{})}),Object(o.jsx)(p,{path:"/logout",children:Object(o.jsx)(j,{})}),Object(o.jsx)(l.b,{path:"*",children:Object(o.jsx)(b,{})})]})})]}),Object(o.jsx)(d.a,{position:"bottom-center"})]})})})},w=(t(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function x(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var O=function(e){e&&e instanceof Function&&t.e(15).then(t.bind(null,209)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),o(e),i(e),r(e),c(e)}))};a.a.render(Object(o.jsxs)(r.a.StrictMode,{children:[Object(o.jsx)("div",{id:"loader-wrapper",children:Object(o.jsx)("div",{id:"loader"})}),Object(o.jsx)(m,{})]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):x(n,e)}))}}(),O()}},[[45,4,5]]]);
//# sourceMappingURL=main.cbdcdb78.chunk.js.map